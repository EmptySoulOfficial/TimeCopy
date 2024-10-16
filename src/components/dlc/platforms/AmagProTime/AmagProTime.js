import { message } from "../../../ui/message/message.js";
import { notification } from "../../../ui/notification/notification.js";

let anyProjectNomber = "*"
let bookingLoopCount = 0

export async function AmagProTime(bookingData, detectionItemsProTime, dev_pttest) {

  let valideTickets = [];
  let failedTickets = [];
  let errorDetailMessage = ''

  try {
    bookingData.forEach((ticket) => {
      let ticketPrefixMatches = filterPrefix(ticket, detectionItemsProTime);
      let ticketAddPrefixMatches = filterAddPrefix(ticket, ticketPrefixMatches);
      let ticketRefinePrefixesMatches = filterAllPrefixes(ticket, ticketAddPrefixMatches);
      let ticketRefineBookingNomber = filterBookingNomber(ticket, ticketRefinePrefixesMatches);

      if (ticket.item_ticketdisc.length < 2) {
        throw ({ errorstatus: 'error', errorheadline: "Ticket hat keine Discription", errortext: ticket.item_ticketnumber + ' ' + ticket.item_bookingnumber })
      }
      if (ticketRefineBookingNomber.length > 1) {
        throw ({ errorstatus: 'error', errorheadline: "Ticket Mehrfachmatches", errortext: "Ticket hat mehrfache Matches | " + ticket.item_ticketnumber + " " + ticket.item_ticketdisc });
      } else if (ticketRefineBookingNomber.length === 1) {
        valideTickets.push([ticket, ticketRefineBookingNomber[0]]);
      } else if (ticketRefineBookingNomber.length === 0) {
        failedTickets.push(ticket);
      }
      if (/\p{L}/u.test(ticket.item_tickettime)) {
        errorDetailMessage = 'Fehler im folgendem Ticket: ' + ticket.item_ticketnumber + ', ' + ticket.item_ticketdisc
        throw ({ errorstatus: 'error', errorheadline: "Ticket hat ungewöhnliche Zeitangabe", errortext: errorDetailMessage })
      }
      if (ticket.item_bookingnumber.length < 1 && ticketRefineBookingNomber.length > 0) {
        if (ticketRefineBookingNomber[0].projectnomber.length < 1) {
          errorDetailMessage = '[' + ticket.item_ticketnumber + ticket.item_ticketdisc + ' -> Die Buchungsnummer fehlt entweder im Ticket oder den Erkennsungs-Filter.'
          throw ({ errorstatus: 'error', errorheadline: "Buchungsnummer fehlt", errortext: errorDetailMessage })
        }
      }
    });
  } catch (error) {
    throw error
  }

  if (failedTickets.length) {
    let notificationTimeOut = 0
    console.log("⛔️ failed tickets ", failedTickets);
    failedTickets.forEach((failedTicketItem) => {
      let ticketnumber;
      let ticketdisc;
      if (!failedTicketItem.item_ticketnumber.length) {
        ticketnumber = "NO NOMBER";
      } else {
        ticketnumber = failedTicketItem.item_ticketnumber;
      }
      if (!failedTicketItem.item_ticketdisc.length) {
        ticketdisc = "NO DISCRIPTION";
      } else {
        ticketdisc = failedTicketItem.item_ticketdisc;
      }
      notificationTimeOut += 150
      setTimeout(function () {
        message(true, 'warning', 'Ticket nicht übernommen', ticketnumber + ': ' + ticketdisc)
      }, notificationTimeOut)
    });
    notificationTimeOut = 0
  }
  console.log("🔄 valid tickets ", valideTickets);
  try {
    if (valideTickets.length) {
      const iChrTab = await injectChromeTab(valideTickets, dev_pttest, bookingLoopCount)
      bookingLoopCount++
      console.log('iChrTab:', iChrTab);
      if (iChrTab.result !== null && iChrTab.result.success === false) {
        throw ({ errorstatus: 'error', errorheadline: iChrTab.result.message.text, errortext: iChrTab.result.message.textdetails })
      }
    } else {
      throw ({ errorstatus: 'error', errorheadline: 'Keine Validen Daten', errortext: 'Die kopierten Informationen konnten nicht validiert bzw. keinen Filter zugeordnet werden. Bitte Prüfe ob: - die richtigen Informationen kopiert wurden  - der richtige Filter ausgewählt wurde  - die Erkennungs-Items stimmen' })
    }
  } catch (error) {
    // message(true, 'error', error, 'Es konnten keine Daten Validiert bzw. den Filtern zugeordnet werden.')
    throw error
  }
  bookingLoopCount = 0
  return "ProTime Buchung beendet";
}

function filterPrefix(ticket, detectionItemsProTime) {
  let filterPrefix_prefixMatches = [];
  detectionItemsProTime.forEach((detectionItemProTime) => {
    if (detectionItemProTime.ticketprefix.length > 0 && ticket.item_ticketnumber.includes(detectionItemProTime.ticketprefix) ||
      detectionItemProTime.ticketprefix.length === 0 && ticket.item_ticketnumber.length === 0) {
      filterPrefix_prefixMatches.push(detectionItemProTime)
    }
  })
  return filterPrefix_prefixMatches ? filterPrefix_prefixMatches : null
}

function filterAddPrefix(ticket, detectionItems_ticketPrefixMatches) {
  let filterAddPrefix_addPrefixMatches = []
  detectionItems_ticketPrefixMatches.forEach((detectionItemPrefixMatch) => {
    let item_ticketdiscWithHiddenTag = ticket.item_ticketdisc + " " + ticket.item_hiddentag
    if (detectionItemPrefixMatch.addprefix.length > 0 && item_ticketdiscWithHiddenTag.includes(detectionItemPrefixMatch.addprefix) || detectionItemPrefixMatch.addprefix.length === 0) {
      filterAddPrefix_addPrefixMatches.push(detectionItemPrefixMatch)
    }
  });
  return filterAddPrefix_addPrefixMatches ? filterAddPrefix_addPrefixMatches : null
}

function filterAllPrefixes(ticket, ticketAddPrefixMatches) {
  let refinePrefix_Matches = []
  if (ticketAddPrefixMatches.length > 1) {
    ticketAddPrefixMatches.forEach((detectionItemRefineMatch) => {
      let item_ticketdiscWithHiddenTag = ticket.item_ticketdisc + " " + ticket.item_hiddentag
      if (detectionItemRefineMatch.addprefix.length > 0 && item_ticketdiscWithHiddenTag.includes(detectionItemRefineMatch.addprefix) && ticket.item_ticketnumber.includes(detectionItemRefineMatch.ticketprefix)) {
        refinePrefix_Matches.push(detectionItemRefineMatch)
      }
    });
  } else {
    refinePrefix_Matches = ticketAddPrefixMatches
  }
  return refinePrefix_Matches
}

function filterBookingNomber(ticket, ticketRefinePrefixesMatches) {
  let refineBookingNomber_Matches = []

  if (ticketRefinePrefixesMatches.length > 1) {
    ticketRefinePrefixesMatches.forEach((detectionItemRefineBookingNomber) => {
      if (ticket.item_bookingnumber.length && detectionItemRefineBookingNomber.projectnomber === ticket.item_bookingnumber || ticket.item_bookingnumber && detectionItemRefineBookingNomber.projectnomber === anyProjectNomber) {
        refineBookingNomber_Matches.push(detectionItemRefineBookingNomber)
      } else if (!ticket.item_bookingnumber && detectionItemRefineBookingNomber.projectnomber.length && detectionItemRefineBookingNomber.projectnomber !== anyProjectNomber) {
        refineBookingNomber_Matches.push(detectionItemRefineBookingNomber)
      }
    })
  } else {
    refineBookingNomber_Matches = ticketRefinePrefixesMatches
  }
  return refineBookingNomber_Matches
}

async function injectChromeTab(valideTickets, dev_pttest, bookingLoopCount) {
  chrome.windows.getCurrent(function (window) {
    chrome.windows.update(window.id, { focused: true });
  });

  try {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    let chromeExecScript = await chrome.scripting.executeScript({
      target: { tabId: tab.id },
      func: bookTickets,
      args: [valideTickets, dev_pttest, bookingLoopCount]
    });

    if (chromeExecScript[0].result && chromeExecScript[0].result.error) {
      console.log('chrome error', chromeExecScript);
      throw new Error(chromeExecScript[0].result.error);
    }
    return chromeExecScript[0]; 
  } catch (errObj) {
    console.log(errObj);
    console.error("Error in chromeTabScript execution: ", errObj);
    throw errObj; 
  }
}


async function bookTickets(valideTickets, dev_pttest, bookingLoopCount) {

  // function for checking if loader exists / disappears
  async function elementObserver(element, boolean, dotValue) {
    const checkInterval = 500; 
    const timeout = 6000;
    console.log('🟡 [Element Observer] Wait Element Started , Element Boolean:' + boolean);
    return new Promise((resolve, reject) => {
      const timeoutId = setTimeout(() => {
        reject({ text: 'ProTime Element Timeout', textdetails: element + " #" + boolean + ": Element wurde nicht gefunden, oder hat nicht die gewünschten Änderungen übernehmen können. Grund dafür können Verbindungsprobleme sein." });
      }, timeout);

      const observer = new MutationObserver(() => {
        if (boolean) {
          if (element.value) {
            clearTimeout(timeoutId);
            observer.disconnect();
            resolve('🟢 [Element Observer] Element found after waiting for mutation');
          }
        } else {
          if (!element.value) {
            clearTimeout(timeoutId);
            observer.disconnect();
            resolve('🟢 [Element Observer] Element gone after waiting for mutation');
          }
        }
      });

      // Start observing the element for changes in its value
      observer.observe(element, {
        attributes: true,
        childList: true,
        subtree: true,
        characterData: true
      });
      // Falls sich der Wert des Elements bereits zu Beginn erfüllt
      const initialCheck = setInterval(() => {
        if (boolean && element.value) {
          clearTimeout(timeoutId);
          clearInterval(initialCheck);
          observer.disconnect();
          resolve('🟢 [Element Observer] Element found initial');
        } else if (!boolean && !element.value) {
          clearTimeout(timeoutId);
          clearInterval(initialCheck);
          observer.disconnect();
          resolve('🟢 [Element Observer] Element gone initial');
        }
      }, checkInterval);
    });
  }
  // timing variables for wait timer
  const bookingWaitingTimerDefault = "250"
  const bookingWaitingTimer500 = "500"
  const bookingWaitingTimer1000 = "1000"
  // wait timer
  async function waitTimer(ms) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Timer done")
      }, ms)
    })
  }

  // Booking Proccess
  try {
    for (const ticket of valideTickets) {
      try {
        console.log(bookingLoopCount)
        function checkFirstBookingLoop(bookingLoopCount) {
          return new Promise((resolve) => {
            if (bookingLoopCount === 0) {
              if (!document.getElementById('timeCopyProTimeClick')) {
                let dom_clickContainer = document.createElement("div")
                let dom_clickContainerInner = document.createElement("div")
                dom_clickContainer.setAttribute('id', 'timeCopyProTimeClick')
                dom_clickContainer.setAttribute('class', 'TimeCopy-ProtTime-clickArea')
                dom_clickContainer.setAttribute('style', 'position: fixed; width: 100%; height: 100%; z-index: 9999; background-color: #031a21ee; top: 0; left: 0; display: flex; justify-content: center; align-items: center; cursor: pointer;')
                dom_clickContainer.setAttribute('onClick', 'document.getElementById("timeCopyProTimeClick").remove()')
                dom_clickContainerInner.setAttribute('style', 'width: 30%; height: 12%; border: 2px dashed #5ecac3; font-size: 24px; color: #5ecac3; padding: 20px; border-radius: 20px; display: flex; justify-content: center; align-items: center;')
                dom_clickContainerInner.innerHTML = "Click here to focus window"
                dom_clickContainer.appendChild(dom_clickContainerInner)
                document.getElementsByTagName('body')[0].appendChild(dom_clickContainer)
                dom_clickContainer.addEventListener("click", resolveFirstBookingLoop);
              }
            } else {
              resolveFirstBookingLoop()
            }
            function resolveFirstBookingLoop(){
              resolve('first booking loop ok')
            }
          })
        }

        try {
          await checkFirstBookingLoop(bookingLoopCount)
          // console.log(firstBookingLoop)
        } catch (error) {
          alert('Time Copy '+error)
          console.error("[Time Copy] Error in checkFirstBookingLoop: ", error);
          return
        }
        const keyEventEnter = new KeyboardEvent('keydown', {
          key: 'Enter',
          code: 'Enter',
          which: 13,
          keyCode: 13,
        })

        const eventChange = new Event("change")
        const ticketObject = ticket[0]
        const detectionObject = ticket[1]
        let protime_hours
        let protime_ticketNumber
        let protime_activityDropdown
        let protime_activityDropdownList
        let protime_ticketElemNom

        let protime_Innenauftrag = document.getElementsByClassName('lsField--f4')[0]
        if (protime_Innenauftrag && protime_Innenauftrag.childNodes && protime_Innenauftrag.childNodes.length > 0) {
          let proTime_projectNomber = ticketObject.item_bookingnumber || detectionObject.projectnomber
          if (proTime_projectNomber) {
            protime_Innenauftrag.childNodes[0].value = proTime_projectNomber
            protime_Innenauftrag.childNodes[0].dispatchEvent(keyEventEnter)
          } else {
            return
          }
        } else {
          return
        }

        try {
          await waitTimer(bookingWaitingTimer500)
        } catch (error) {
          alert('Time Copy '+error)
          console.error("[Time Copy] WaitTimer Error: ", error);
          return
        }
        // try {
        // const result = await waitTillElement(document.getElementsByClassName('lsField--list')[1].childNodes[0],true);
        // console.log(result);
        // } catch (error) {
        // console.log(error.message);
        // return
        // }

        // service dropdown
        let protime_leistung = document.getElementsByClassName('lsField--list')[1].childNodes[0];
        let protime_leistungenOption;
        const protime_leistungenArray = [{
          "select_proTime_service_CSITEST": "[data-itemkey='ZCHN0730070']",
          "select_proTime_service_CSITENT": "[data-itemkey='ZCHN0730080']",
          "select_proTime_service_ITDNT": "[data-itemkey='ZCHN0730005']",
          "select_proTime_service_ITD": "[data-itemkey='ZCHN0730001']"
        }]

        protime_leistung.click()
        protime_leistungenOption = document.querySelector(protime_leistungenArray[0][detectionObject.protimeservice]);

        if (!protime_leistungenOption) {
          return
        }

        protime_leistungenOption.click()

        try {
          await waitTimer(bookingWaitingTimerDefault)
        } catch (error) {
          alert('Time Copy '+error)
          console.error("[Time Copy] WaitTimer Error: ", error);
          return
        }
        // if detection item has activity book it
        if (detectionObject.protimeactivity.length > 1) {
          protime_activityDropdown = document.getElementsByClassName('lsField--list')[2].childNodes[0]
          protime_activityDropdown.click()
          protime_activityDropdownList = document.getElementsByClassName('lsListbox__items')[1].childNodes[0]
          let protime_activityDropdownItems = protime_activityDropdownList.childNodes
          for (let i = 0, ilen = protime_activityDropdownItems.length; i < ilen; i++) {
            if (protime_activityDropdownItems[i].textContent.includes(detectionObject.protimeactivity)) {
              protime_activityDropdownItems[i].click()
            }
          }
          // set Ticket Nomber Child Nom
          protime_ticketElemNom = 4
        } else {
          protime_ticketElemNom = 3
        }

        try {
          await waitTimer(bookingWaitingTimerDefault)
        } catch (error) {
          alert('Time Copy '+error)
          console.error("[Time Copy] WaitTimer Error: ", error);
          return
        }

        // Entry Ticket Data
        protime_hours = document.getElementsByClassName('lsField--right')[0].childNodes[0]
        protime_hours.focus()
        protime_hours.click()
        protime_hours.value = ticketObject.item_tickettime
        if (!dev_pttest) {
          protime_hours.dispatchEvent(keyEventEnter)
        }

        try {
          await waitTimer(bookingWaitingTimer500)
        } catch (error) {
          alert('Time Copy '+error)
          console.error("[Time Copy] WaitTimer Error: ", error);
          return
        }
        // if a "master number" is there, take this as ticket number for protime and let the original ticket number for the discription later
        let bookingItem_TicketNumber = ticketObject.item_ticketmasternumber ? ticketObject.item_ticketmasternumber : ticketObject.item_ticketnumber

        protime_ticketNumber = document.getElementsByClassName('lsField--list')[protime_ticketElemNom].childNodes[0]
        protime_ticketNumber.focus()
        protime_ticketNumber.click()
        protime_ticketNumber.value = bookingItem_TicketNumber
        if (!dev_pttest) {
          protime_ticketNumber.dispatchEvent(keyEventEnter)
        }

        try {
          await waitTimer(bookingWaitingTimerDefault)
        } catch (error) {
          alert('Time Copy '+error)
          console.error("[Time Copy] WaitTimer Error: ", error);
          return
        }


        let mover = new MouseEvent('mouseover', {
          'view': window,
          'bubbles': true,
          'cancelable': true
        });
        // Join tickent number and discription
        let ticketItemDisc = "[" + ticketObject.item_ticketnumber + "] " + ticketObject.item_ticketdisc

        let mdown = new Event('focus');

        let protime_ticketText = document.getElementsByTagName('textarea')[0];
        protime_ticketText.dispatchEvent(mover)
        protime_ticketText.dispatchEvent(mdown)
        protime_ticketText.focus()
        protime_ticketText.click()
        // protime_ticketText.value = ticketItemDisc
        document.getElementsByTagName('textarea')[0].dispatchEvent(eventChange);
        // set focus to other textarea to accept befores area text
        document.getElementsByTagName('textarea')[1].focus();
        // Set the cursor position to the end of the text
        document.getElementsByTagName('textarea')[1].setSelectionRange(document.getElementsByTagName('textarea')[1].value.length, document.getElementsByTagName('textarea')[1].value.length);

        try {
          await waitTimer(bookingWaitingTimerDefault)
        } catch (error) {
          alert('Time Copy '+error)
          console.error("[Time Copy] WaitTimer Error: ", error);
          return
        }

        console.log("DEV-TestMode: " + dev_pttest)
        if (!dev_pttest) {
          let bookingButton = document.getElementsByClassName('lsToolbar--item-button')[8]
          bookingButton.focus()
          bookingButton.click()
        }
        try {
          await waitTimer(bookingWaitingTimer500)
        } catch (error) {
          alert('Time Copy '+error)
          console.error("[Time Copy] WaitTimer Error: ", error);
          return
        }

        try {
          await elementObserver(document.getElementsByTagName('textarea')[0], true);
        } catch (error) {
          console.log("result error: ", error);
          let errorMessage = error
          return result = { success: false, message: errorMessage };
        }
        bookingLoopCount++
      } catch (error) {
        throw error
      }
    }

  } catch (error) {
    throw error
  }
  return bookingLoopCount
}

