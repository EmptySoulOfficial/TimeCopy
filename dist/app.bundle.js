(()=>{"use strict";const e=JSON.parse('{"Re":"0.9.10","rf":"24.08271514-S","Fe":"1.4"}');function t(e,t,i){document.getElementsByTagName("main")[0].insertAdjacentHTML("beforeend",'<div class="notification flex notification--hidden" id="notification">\n                                <p class="text-label text-notification" id="notification-text"></p>\n                                <button class="button-primary" id="button_close-notification">\n                                    <?xml version="1.0" encoding="UTF-8" standalone="no"?>\n                                    <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">\n                                    <svg width="100%" height="100%" viewBox="0 0 1000 1000" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;">\n                                        <g transform="matrix(0.924519,-0.924519,0.924519,0.924519,-424.346,499.846)">\n                                            <path id="addsmooth_path" d="M999.7,500.2C999.7,525 989.6,547.5 973.4,563.7C957.1,580 934.7,590 909.9,590L588.6,590L588.6,909.8C588.6,959.4 548.4,999.7 498.7,999.7C473.9,999.7 451.4,989.6 435.2,973.4C418.9,957.1 408.9,934.7 408.9,909.9L408.9,590.1L89.9,590.1C40.2,590.1 0,549.8 0,500.2C0,475.4 10.1,452.9 26.3,436.7C42.6,420.4 65,410.4 89.8,410.4L408.8,410.4L408.8,89.8C408.8,40.2 449,-0.1 498.7,-0.1C523.5,0 546,10 562.2,26.3C578.5,42.6 588.5,65 588.5,89.8L588.5,410.4L909.8,410.4C959.5,410.4 999.7,450.6 999.7,500.2Z" style="fill-rule:nonzero;"/>\n                                        </g>\n                                    </svg>\n                                </button>\n                            </div>');let o=document.getElementById("notification"),c=document.getElementById("notification-text");!0===e?(c.innerHTML=i,t?(o.classList.add("notification--ok"),function(e){setTimeout((function(){n(e)}),3e3)}(o)):(o.classList.remove("notification--ok"),function(e){setTimeout((function(){n(e)}),4500)}(o)),setTimeout((function(){o.classList.remove("notification--hidden")}),300)):!1!==e&&null!==e||setTimeout((function(){o.classList.add("notification--hidden")}),300),document.getElementById("button_close-notification").addEventListener("click",(function(){n(o)}))}function n(e,t,n){e.classList.add("notification--hidden")}let i="*",o=0;async function c(e,t,n){chrome.windows.getCurrent((function(e){chrome.windows.update(e.id,{focused:!0})}));try{let[i]=await chrome.tabs.query({active:!0,currentWindow:!0});await chrome.scripting.executeScript({target:{tabId:i.id},func:r,args:[e,t,n]})}catch(e){throw console.error("Error in chromeTabScript execution: ",e),e}}async function r(e,t,n){function i(){return new Promise((e=>{setTimeout((()=>{e("Timer done")}),300)}))}try{let e=await function(e){return new Promise((t=>{if(0===e){if(!document.getElementById("timeCopyProTimeClick")){let e=document.createElement("div"),t=document.createElement("div");e.setAttribute("id","timeCopyProTimeClick"),e.setAttribute("class","TimeCopy-ProtTime-clickArea"),e.setAttribute("style","position: fixed; width: 100%; height: 100%; z-index: 9999; background-color: #031a21ee; top: 0; left: 0; display: flex; justify-content: center; align-items: center; cursor: pointer;"),e.setAttribute("onClick",'document.getElementById("timeCopyProTimeClick").remove()'),t.setAttribute("style","width: 30%; height: 12%; border: 2px dashed #5ecac3; font-size: 24px; color: #5ecac3; padding: 20px; border-radius: 20px; display: flex; justify-content: center; align-items: center;"),t.innerHTML="Click here to focus window",e.appendChild(t),document.getElementsByTagName("body")[0].appendChild(e),e.addEventListener("click",n)}}else n();function n(){t("ok")}}))}(n);console.log(e)}catch(e){return alert(e),void console.error("Error in checkFirstBookingLoop: ",e)}const o=new KeyboardEvent("keydown",{key:"Enter",code:"Enter",which:13,keyCode:13}),c=new Event("change"),r=e[0],l=e[1];let a,s,d,m,u,g,f=document.getElementsByClassName("lsField--f4")[0];if(!(f&&f.childNodes&&f.childNodes.length>0))return;{let e=r.item_bookingnumber||l.projectnomber;if(!e)return;f.childNodes[0].value=e,f.childNodes[0].dispatchEvent(o)}try{await i()}catch(e){return alert(e),void console.error("Error in waitTimer: ",e)}if(document.getElementsByClassName("lsField--list")[1].childNodes[0].click(),g=document.querySelector({select_proTime_service_CSITEST:"[data-itemkey='ZCHN0730070']",select_proTime_service_CSITENT:"[data-itemkey='ZCHN0730080']",select_proTime_service_ITDNT:"[data-itemkey='ZCHN0730005']",select_proTime_service_ITD:"[data-itemkey='ZCHN0730001']"}[l.protimeservice]),!g)return;g.click();try{await i()}catch(e){return alert(e),void console.error("Error in waitTimer: ",e)}if(l.protimeactivity.length>1){d=document.getElementsByClassName("lsField--list")[2].childNodes[0],d.click(),m=document.getElementsByClassName("lsListbox__items")[1].childNodes[0];let e=m.childNodes;for(let t=0,n=e.length;t<n;t++)e[t].textContent.includes(l.protimeactivity)&&e[t].click();u=4}else u=3;try{await i()}catch(e){return alert(e),void console.error("Error in waitTimer: ",e)}a=document.getElementsByClassName("lsField--right")[0].childNodes[0],a.focus(),a.click(),a.value=r.item_tickettime,t||a.dispatchEvent(o);try{await i()}catch(e){return alert(e),void console.error("Error in waitTimer: ",e)}try{await i()}catch(e){return alert(e),void console.error("Error in waitTimer: ",e)}try{await i()}catch(e){return alert(e),void console.error("Error in waitTimer: ",e)}let p=r.item_ticketmasternumber?r.item_ticketmasternumber:r.item_ticketnumber;s=document.getElementsByClassName("lsField--list")[u].childNodes[0],s.focus(),s.click(),s.value=p,t||s.dispatchEvent(o);try{await i()}catch(e){return alert(e),void console.error("Error in waitTimer: ",e)}let h=document.getElementsByTagName("textarea")[0],v=new MouseEvent("mouseover",{view:window,bubbles:!0,cancelable:!0}),_="["+r.item_ticketnumber+"] "+r.item_ticketdisc,b=new Event("focus");h.dispatchEvent(v),h.dispatchEvent(b),h.focus(),h.click(),h.value=_,document.getElementsByTagName("textarea")[0].dispatchEvent(c),document.getElementsByTagName("textarea")[1].focus(),document.getElementsByTagName("textarea")[1].setSelectionRange(document.getElementsByTagName("textarea")[1].value.length,document.getElementsByTagName("textarea")[1].value.length);try{await i()}catch(e){return alert(e),void console.error("Error in waitTimer: ",e)}if(console.log("DEV-TestMode: "+t),!t){let e=document.getElementsByClassName("lsToolbar--item-button")[8];e.focus(),e.click()}try{await i()}catch(e){return alert(e),void console.error("Error in waitTimer: ",e)}try{await i()}catch(e){return alert(e),void console.error("Error in waitTimer: ",e)}try{await i()}catch(e){return alert(e),void console.error("Error in waitTimer: ",e)}return n}async function l(e,n,r,l){let a=e.split("_").pop(),s="automatic",d={amagProTime:async function(e,n,r){return await async function(e,n,r){let l=[],a=[];try{e.forEach((e=>{let t=function(e,t){let n=[];return t.forEach((t=>{(t.ticketprefix.length>0&&e.item_ticketnumber.includes(t.ticketprefix)||0===t.ticketprefix.length&&0===e.item_ticketnumber.length)&&n.push(t)})),n||null}(e,n),o=function(e,t){let n=[];return t.forEach((t=>{let i=e.item_ticketdisc+" "+e.item_hiddentag;(t.addprefix.length>0&&i.includes(t.addprefix)||0===t.addprefix.length)&&n.push(t)})),n||null}(e,t),c=function(e,t){let n=[];return t.length>1?t.forEach((t=>{t.addprefix.length>0&&e.item_ticketdisc.includes(t.addprefix)&&e.item_ticketnumber.includes(t.ticketprefix)&&n.push(t)})):n=t,n}(e,o),r=function(e,t){let n=[];return t.length>1?t.forEach((t=>{(e.item_bookingnumber.length&&t.projectnomber===e.item_bookingnumber||e.item_bookingnumber&&t.projectnomber===i||!e.item_bookingnumber&&t.projectnomber.length&&t.projectnomber!==i)&&n.push(t)})):n=t,n}(e,c);if(e.item_ticketdisc.length<2)throw new Error("Ticket hat keine Discription! "+e.item_ticketnumber+" "+e.item_bookingnumber);if(r.length>1)throw new Error("Ticket hat mehrfache Matches | "+e.item_ticketnumber+" "+e.item_ticketdisc);if(1===r.length?l.push([e,r[0]]):0===r.length&&a.push(e),/\p{L}/u.test(e.item_tickettime))throw new Error("Ticket hat ungewöhnliche Zeitangabe! | "+e.item_ticketnumber+" "+e.item_ticketdisc);if(console.log("Infos: ",r),e.item_bookingnumber.length<1&&r.length>0&&r[0].projectnomber.length<1)throw new Error("Buchungsnummer fehlt im Ticket/in der Erkennung | "+e.item_ticketnumber+" "+e.item_ticketdisc);console.log("ticket filter matches ",e,r)}))}catch(e){return void t(!0,!1,e)}if(a.length){t(!0,!1,"⚠️ "+a.length+'<span id="fail-link">Ticket(s)</span> wurden nicht übernommen.'),console.log("failed tickets ",a);var s=[];a.forEach((e=>{let t,n;t=e.item_ticketnumber.length?e.item_ticketnumber:"NO NOMBER",n=e.item_ticketdisc.length?e.item_ticketdisc:"NO DISCRIPTION",s.push(" >> ",t,": ",n," << ")}));let e=JSON.stringify(s);document.getElementById("fail-link").addEventListener("click",(()=>alert("Ignorierte Tickets: "+e.replace(/]|[[",]/g,""))))}console.log("valide ",l);try{if(!l.length)throw new Error("Es konnten keine Daten erfasst werden.");for(let e=0;e<l.length;e++){let t=l[e];try{await c(t,r,o),o++,console.log("--\x3e valid tickets loop")}catch(e){return console.error("Error in chromeTabScript: ",e),Promise.reject(new Error(400))}}}catch(e){return void t(!0,!1,e)}return o=0,"ProTime Buchung abgeschlossen"}(e,n,r)},dzbankProRes:async function(e,t,n){return await async function(){return"ProRes OK"}()}};a===s&&(a=await async function(){let e,n,[i]=await chrome.tabs.query({active:!0,lastFocusedWindow:!0});return e=i.url,e.includes("s4.amag.ch/protime")?n="amagProTime":e.includes("DZBANK-TEST")?n="DZ Bank TEST":(t(!0,!1,"Buchung abgebrochen: Unbekannte URL"),n=null),n}(),e=e.replace(s,a));let m=JSON.parse(r),u=[],g="select_"+e;for(let e=0;e<m.length;e++)m[e].bookingsheet===g&&(u=[...u,m[e]]);return a?d[a](n,u,l):null}function a(e){e?document.getElementById("window_detection").innerHTML=e.map((e=>'<div class="config-item detection-item flex" name="item_detection" id="'+e.id+'">\n     <div class="config-item-main-container">\n       <div class="config-item-title-row flex">\n         <p class="subtext subtext-top">Erkennung</p>\n       </div>\n       <div>\n         <select class="input-size--small" id="select_bookingPlattform_'+e.id+'">\n           <option value="" selected disabled hidden>Keine</option>\n           <option value="select_bookingPlattform_amagProTime" >ProTime</option>\n           <option value="select_bookingPlattform_dzBankProRes">ProRes ⭐️</option>\n         </select>\n         <input type="text" class="input-size--default '+(e.bookingsheet?"":"dNone")+'" name="input_ticketPrefix" id="input_ticketPrefix'+e.id+'" placeholder="Ticket Prefix" value="'+e.ticketprefix+'" />\n       </div>\n       <div>\n         <input type="text" class="input-size--large '+(e.bookingsheet?"":"dNone")+'" name="input_additionalPrefix" id="input_additionalPrefix'+e.id+'" placeholder="String Match (Optional)" value="'+e.addprefix+'"/>\n       </div>\n       <div class="config-item-title-row flex '+("select_bookingPlattform_amagProTime"===e.bookingsheet?null:"dNone")+'">\n         <p class="subtext subtext-top">Buchung</p>\n       </div>\n       <div class="project-detection-item--amagprotime '+("select_bookingPlattform_amagProTime"===e.bookingsheet?null:"dNone")+'">\n          <div>\n            <select class="input-size--default" name="select_proTimeService" id="select_proTimeService_'+e.id+'">\n              <option value="select_proTime_service_ITD" '+("select_proTime_service_ITD"===e.protimeservice?"selected":"")+'>IT Dienstleistungen</option>\n              <option value="select_proTime_service_ITDST" '+("select_proTime_service_ITDST"===e.protimeservice?"selected":"")+'>IT Dienstleistungen ST</option>\n              <option value="select_proTime_service_CSITEST" '+("select_proTime_service_CSITEST"===e.protimeservice?"selected":"")+'>Corporate Service IT Ext ST</option>\n              <option value="select_proTime_service_CSITENT" '+("select_proTime_service_CSITENT"===e.protimeservice?"selected":"")+'>Corporate Service IT Ext NT</option>\n            </select>\n            <input type="text" class="input-size--small" name="input_projectNomber" id="input_projectNomber'+e.id+'" placeholder="Projektnum." value="'+e.projectnomber+'"/>\n          </div>\n  \n          <input type="text" class="input-size--large" name="input_activity" id="input_activity'+e.id+'" list="datalist_activity'+e.id+'" placeholder="Aktivität (Wenn vorhanden)"/>\n          <datalist id="datalist_activity'+e.id+'">\n            <option>- WP2 - AEM Dashboard</option>\n            <option>AP01 - Front-end</option>\n          </datalist>\n        </div>\n        <div class="project-detection-item--dzbankprores">\n          \n        </div>\n     </div>\n     <div class="config-item-action-container">\n       <button class="button-primary button-reset button_deleteDetection">\n         <?xml version="1.0" encoding="utf-8"?>\n         \x3c!-- Designed by Empty Soul  --\x3e\n         <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n            viewBox="0 0 1000 1000" style="enable-background:new 0 0 1000 1000;" xml:space="preserve">\n         <g>\n           <path d="M200.3,269.8v602.4c0,71.7,58.3,130,130,130h333.6c71.7,0,130-58.3,130-130V269.8H200.3z M733.9,872.2\n             c0,38.6-31.4,70-70,70H330.3c-38.6,0-70-31.4-70-70V329.8h473.6V872.2z"/>\n         </g>\n         <g>\n           <rect x="326" y="400.4" width="60" height="480.3"/>\n         </g>\n         <g>\n           <path d="M670,143.8c-4.6-33-16.7-63.6-35.2-88.2c-26-34.4-61.3-53.4-99.4-53.4H459c-38.2,0-73.5,19-99.4,53.4\n             c-18.5,24.6-30.7,55.2-35.2,88.2h-126v60h597.7v-60H670z M385,143.8c3.8-19.7,11.5-37.6,22.4-52.1c14.3-19,32.6-29.5,51.5-29.5\n             h76.4c18.9,0,37.2,10.5,51.5,29.5c10.9,14.5,18.5,32.4,22.4,52.1H385z"/>\n         </g>\n         <g>\n           <rect x="612" y="400.4" width="60" height="480.3"/>\n         </g>\n         <g>\n           <rect x="467.2" y="400.4" width="60" height="480.3"/>\n         </g>\n         </svg>                  \n       </button>\n     </div>\n     </div>')).join(""):console.log("[Project Detection] No Items set")}const s=document.getElementById("button_add_projectDetection");let d=localStorage.getItem("tc_c_projectDetection");d=JSON.parse(d);const m=document.getElementById("window_detection");function u(e){localStorage.setItem("tc_c_projectDetection",JSON.stringify(e))}function g(){let e="deci"+(new Date).getTime().toString(),t={id:e,bookingsheet:""};null===d&&(d=[]),d.push(t),u(d),a(d),f(),document.getElementById(e).classList.add("item--new"),m.parentElement.scroll({top:0,behavior:"smooth"})}function f(){let e=document.getElementsByClassName("button_deleteDetection");for(let t=0,n=e.length;t<n;t++)e[t].addEventListener("click",_);for(let t=0,n=e.length;t<n;t++)e[t].addEventListener("click",_);let t=document.getElementsByName("item_detection");for(let e=0,n=t.length;e<n;e++){let n=document.getElementById("select_bookingPlattform_"+t[e].id),i=d.find((n=>n.id===t[e].id)).bookingsheet;n.value=i,n.addEventListener("change",(()=>{h(t[e].id,n.value)}));let o=document.getElementById("input_ticketPrefix"+t[e].id);o.addEventListener("change",(()=>{v(t[e].id,"ticketprefix",o.value)}));let c=document.getElementById("input_additionalPrefix"+t[e].id);c.addEventListener("change",(()=>{v(t[e].id,"addprefix",c.value)}));let r=document.getElementById("select_proTimeService_"+t[e].id),l=d.find((n=>n.id===t[e].id)).protimeservice;r.value=l,r.addEventListener("change",(()=>{v(t[e].id,"protimeservice",r.value)}));let a=document.getElementById("input_projectNomber"+t[e].id);a.addEventListener("change",(()=>{v(t[e].id,"projectnomber",a.value)}));let s=document.getElementById("input_activity"+t[e].id),m=d.find((n=>n.id===t[e].id)).protimeactivity;s.value=m,s.addEventListener("change",(()=>{v(t[e].id,"protimeactivity",s.value)}))}}function p(e){return d.find((t=>t.id===e))}function h(e,t){let n=p(e),i={};"select_bookingPlattform_amagProTime"===t?i={ticketprefix:"",addprefix:"",protimeservice:"select_proTime_service_CSITEST",projectnomber:"",protimeactivity:""}:"select_bookingPlattform_dzBankProRes"===t&&(i={ticketprefix:"",addprefix:""});let o={...n,bookingsheet:t,...i};console.log(o);let c=d.indexOf(n);d[c]=o,u(d),a(d),f()}function v(e,t,n){!function(e,t,n){let i=p(e),o={...i,[t]:n},c=d.indexOf(i);d[c]=o}(e,t,n),u(d),a(d),f()}function _(e){let t=e.target.closest("div").parentNode.id;console.log(t);let n=document.getElementById(t);n.classList.add("config-item--remove"),setTimeout((function(){n.remove()}),500),e.target.closest("button").removeEventListener("click",_),d=d.filter((e=>e.id!==t)),u(d)}document.addEventListener("DOMContentLoaded",(function(){const n=document.querySelector("link#link-theme"),i=(document.querySelector("main"),document.querySelector("header")),o=document.querySelector("div.configurations"),c=document.querySelector("div.overview"),r=document.getElementById("config-container"),m=document.getElementsByClassName("configuration-window"),u=document.getElementById("config-win-general"),p=document.getElementById("config-win-timesheets"),h=document.getElementById("config-win-bookingsheet"),v=document.getElementById("config-win-projects"),_=document.getElementById("configProfileName"),b=document.getElementsByClassName("button-config-tab"),k=document.querySelector("button#button-tab-general"),y=document.querySelector("button#button-tab-timesheets"),E=document.querySelector("button#button-tab-bookingsheets"),w=document.querySelector("button#button-tab-projects"),T=document.querySelector("button#buttonBackToMain"),x=document.querySelector("button#button_test_pasteTicketData"),I=document.querySelector("button#fillButton"),S=document.querySelector("button#configButton"),L=document.querySelector("select#select-themes"),N=(document.querySelector("select#select-language"),document.getElementById("button_clearConfigs")),B=document.getElementsByName("timesheet-filter"),C=document.getElementById("button_openHelp"),P=(document.getElementById("tobiasFilterInfo"),document.getElementsByName("timesheet-filter")),D=document.getElementsByName("booking-plattform");let j=localStorage.getItem("tc_c_theme"),A=localStorage.getItem("tc_c_language"),M=localStorage.getItem("tc_c_filter"),O=localStorage.getItem("tc_c_projectDetection"),q=localStorage.getItem("tc_c_profileName"),z=localStorage.getItem("tc_c_bookingPlattform"),F=!1,H=!1,R=!1,Z=e.Re,J=e.rf,U=e.Fe;function V(){const e="oceanswave";let t="bookingPlattform_automatic";j?(L.value=j,n.setAttribute("href","./assets/style/themes/"+j+"/"+j+".css")):(L.value=e,n.setAttribute("href","./assets/style/themes/"+e+"/"+e+".css")),M&&(document.querySelector('input[value="'+M+'"]').checked=!0),_.value=q||"Default",z?document.querySelector('input[value="'+z+'"]').checked=!0:(document.querySelector('input[value="'+t+'"]').checked=!0,localStorage.setItem("tc_c_bookingPlattform",t)),console.log("✅ [extension] extension loaded")}function W(){F?(S.classList.remove("button--active"),I.classList.remove("object--hidden"),o.classList.add("dNone"),c.classList.remove("dNone"),i.classList.add("dNone"),F=!1,!0===R&&window.location.reload()):(S.classList.add("button--active"),I.classList.add("object--hidden"),o.classList.remove("dNone"),c.classList.add("dNone"),i.classList.remove("dNone"),F=!0)}function K(){[].forEach.call(b,(function(e){e.classList.remove("button-tab--active")})),[].forEach.call(m,(function(e){e.classList.add("dNone")}))}function $(){K(),k.classList.add("button-tab--active"),u.classList.remove("dNone"),r.classList.add("configuration-container-first-tab-selected")}function G(){K(),w.classList.add("button-tab--active"),v.classList.remove("dNone"),r.classList.remove("configuration-container-first-tab-selected"),R=!0}function Y(){K(),y.classList.add("button-tab--active"),p.classList.remove("dNone"),r.classList.remove("configuration-container-first-tab-selected")}function Q(){K(),E.classList.add("button-tab--active"),h.classList.remove("dNone"),r.classList.remove("configuration-container-first-tab-selected")}function X(){}function ee(e){localStorage.setItem("tc_c_bookingPlattform",e.target.value),R=!0}function te(){localStorage.setItem("tc_c_profileName",_.value),R=!0}function ne(){let e=L.value;n.setAttribute("href","./assets/style/themes/"+e+"/"+e+".css"),localStorage.setItem("tc_c_theme",e),R=!0}function ie(e){localStorage.setItem("tc_c_filter",e.target.value),R=!0}function oe(){window.open("https://github.com/EmptySoulOfficial/TimeCopy/blob/main/accesories/documentation/Help.md")}function ce(){if(!0===R)return sessionStorage.setItem("tc_c_exportFile_afterChange","true"),void window.location.reload();{let e=O;e=JSON.parse(e);const t="-TimeCopy.tcprofile";null===e&&(e=[]);let n={tcprofile:{author:"steve",version:U,extension_version:Z,extension_build:J,profile_name:_.value}};Object.assign(n.tcprofile,{cfg:{theme:j,language:A,filter:M,platform:z,detections:e}});const i=JSON.stringify(n),o=_.value+t,c="text/plain",r=document.createElement("a"),l=new Blob([i],{type:c});r.href=URL.createObjectURL(l),r.download=o,document.body.appendChild(r),r.click(),r.remove()}}function re(){localStorage.removeItem("tc_c_theme"),localStorage.removeItem("tc_c_language"),localStorage.removeItem("tc_c_filter"),localStorage.removeItem("tc_c_projectDetection"),localStorage.removeItem("tc_c_profileName"),localStorage.removeItem("tc_c_bookingPlattform"),sessionStorage.removeItem("tc_c_messageImported"),sessionStorage.removeItem("tc_c_messageProfileRemoved"),sessionStorage.removeItem("tc_c_changeLanguage"),sessionStorage.setItem("tc_c_messageProfileRemoved","true"),window.location.reload()}async function le(){let e=await navigator.clipboard.readText(),n=M,i=z;try{if(""===n||null===n)throw new Error("Bitte wähle einen Filter!");if(""===i||null===i)throw new Error("Bitte wähle eine Buchungsplattform!");if(""===O||null===O)throw new Error("Bitte erstelle mindestens ein Erkennungs-Item !");!async function(e,n,i,o){let c=[];try{c=await async function(e,t){let n=[];return"timesheetfilter-tobiasexcel"===e?n=function(e){let t="";e.includes("\t")&&(t=e.split("\t")[0]),e.includes('""')&&(e=e.replace(/""/g,""));let n=e.split('"')[1]??e.split("\t");const i=/([^\n]+)/g,o=/(?<=\[).*?(?=\])/g,c=/(?<=\]).*(?=\:)/g,r=/.*[\s]*?:[\s]*?(\d{1,2}[\.\,]?[\d]{0,2})/,l=/^[^\s#°]+/,a=/(?<=°)[^\s#°]+/,s=/(?<=#)[^\s#°]+/;let d,m=[],u=[];for(;null!==(d=i.exec(n));)m.push(d[1]);return m.forEach((function(e,n){let i="",d=e.match(o)[0].trim(),m=d.match(l)[0],g=d.match(s)?d.match(s)[0]:"",f=d.match(a)?d.match(a)[0]:"",p=e.match(c)[0].trim(),h=e.match(r)[1].trim();h=h.replaceAll(",","."),g&&(i=g);let v={item_bookingnumber:i,item_ticketmasternumber:f,item_ticketnumber:m,item_ticketdisc:p,item_hiddentag:"",item_tickettime:h,item_date:t.trim()};u.push(v)})),u}(t):"timesheetfilter-stevegoogleexcel"===e&&(n=function(e){let t;const n=/(Mo\.|Di\.|Mi\.|Do\.|Fr\.|Sa\.|So\.)\s*\d{2}\.\d{2}\.\d{4}/,i=/^[a-zA-Z\s]{1,3}\s+/g,o=/^\d{1,2}[:.]\d{2}\s*/g,c=/(\w.*[\s]{1}\d{1,2}[,\.]?\d{0,2})(?=\s|$)/g,r=/(?:^|\n)\s*([A-Z0-9]+(?:-[A-Z0-9]+)?(?:>[A-Z0-9]+)?)/i,l=/>(.+)/,a=/\[([^\]]+)\](?=[^\[]*$)/,s=/\[#([^\]]+)\](?=[^\[]*$)/,d=/(?<=\#).*?(?=\])/,m=/\d+[.,]?\d*$/;let u,g="",f="",p=[],h=[];for(e.match(n)?(g=e.match(n)[0].trim(),t=e.replace(n,"").trim()):t=e.trim(),t=t.replaceAll("\t"," "),t.match(i)&&(t=t.replace(i,"").trim()),t.match(o)&&(f=t.match(o)[0].trim(),t=t.replace(o,"").trim());null!==(u=c.exec(t));)p.push(u[1]);return p.forEach((function(e,t){let n="",i="",o="",c="",u="",f="",p=(e=e.replaceAll("\t"," ")).match(r)[0].trim();p.match(l)?(o=p.replace(l,"").trim(),c=p.replace(o+">","").trim()):o=p.trim(),e.match(a)&&(e.match(s)?(u=e.match(s)[0].trim(),u=u.match(d)[0].trim(),i=u,e=e.replace(s,"")):(f=e.match(a)[1].trim(),e=e.replace(a,"")));let v=e.match(m)[0];v=v.replaceAll(",",".");let _=e.replace(p,"").trim();_=_.replace(u,"").trim(),_=_.replace(m,"").trim(),n=g.replace("\t","").trim();let b={item_bookingnumber:i,item_ticketmasternumber:c,item_ticketnumber:o,item_ticketdisc:_,item_hiddentag:f,item_tickettime:v,item_date:n};h.push(b)})),console.log(h),h}(t)),n}(e,n),console.log("Timesheet Data: ",c)}catch(e){return console.error("Unable to call bookingData: ",e),void t(!0,!1,"Fehler: Buchungsdaten konnten nicht aufgerufen werden")}let r=await l(i,c,O,o);r&&console.log("✅ bookEntries process complete | "+r)}(n,e,i,H)}catch(e){return void t(!0,!1,e)}}async function ae(){H=!0,le()}async function se(){H=!1,le()}document.getElementById("button_importConfigs").addEventListener("change",(function(e){let n;var i=e.target.files,o=new FileReader;o.addEventListener("load",(function(e){n=this.result,n=JSON.parse(n),e=function(e){let t;return t=e.tcprofile.version===U,t}(n),console.log(e),e?(localStorage.setItem("tc_c_theme",n.tcprofile.cfg.theme),localStorage.setItem("tc_c_language",n.tcprofile.cfg.language),localStorage.setItem("tc_c_filter",n.tcprofile.cfg.filter),localStorage.setItem("tc_c_projectDetection",JSON.stringify(n.tcprofile.cfg.detections)),localStorage.setItem("tc_c_profileName",n.tcprofile.profile_name),localStorage.setItem("tc_c_bookingPlattform",n.tcprofile.cfg.platform),V(),sessionStorage.setItem("tc_c_messageImported","true"),window.location.reload(),setTimeout((function(){}),2e3)):t(!0,!1,"Import fehlgeschlagen: Version stimmt nicht überein.")})),o.readAsText(i[0])}),!1),document.getElementById("button_exportConfigs").addEventListener("click",ce),window.addEventListener("load",(e=>{a(d),f(),s.removeEventListener("click",g),s.addEventListener("click",g),label_version.insertAdjacentHTML("beforeend",Z),label_build_version.insertAdjacentHTML("beforeend",J),I.addEventListener("click",se),x.addEventListener("click",ae),S.addEventListener("click",W),T.addEventListener("click",W),k.addEventListener("click",$),w.addEventListener("click",G),y.addEventListener("click",Y),E.addEventListener("click",Q),_.addEventListener("change",te),N.addEventListener("click",re),C.addEventListener("click",oe),L.addEventListener("change",ne);for(var n=0,i=B.length;n<i;n++)B[n].addEventListener("click",ie);for(var o=0,c=P.length;o<c;o++)P[o].addEventListener("click",X);for(o=0,c=D.length;o<c;o++)D[o].addEventListener("click",ee);V(),function(){let e=sessionStorage.getItem("tc_c_messageImported"),n=sessionStorage.getItem("tc_c_messageProfileRemoved"),i=sessionStorage.getItem("tc_c_exportFile_afterChange"),o=sessionStorage.getItem("tc_c_changeLanguage");"true"===e&&(t(!0,!0,"Profil wurde erfolgreich importiert!"),sessionStorage.removeItem("tc_c_messageImported"),S.click()),"true"===n&&(t(!0,!0,"Profil wurde zurückgesetzt."),sessionStorage.removeItem("tc_c_messageProfileRemoved"),S.click()),"true"===i&&(sessionStorage.removeItem("tc_c_exportFile_afterChange"),S.click(),ce()),"true"===o&&(sessionStorage.removeItem("tc_c_changeLanguage"),S.click())}(),function(){const e=document.getElementById("config-win-general--content"),t=document.getElementById("label_version"),n=document.getElementById("button_test_pasteTicketData");t.insertAdjacentHTML("afterbegin","🧪 "),e.insertAdjacentHTML("beforeend",'\n<div class="config-item dFlex">\n<div class="config-item-main-container">\n  <div class="config-item-title-row flex">\n    <div class="config-item-icon-container flex">\n      <p class="text-label label-emoji">👩🏼‍💻</p>\n    </div> \n    <div class="config-item-main flex"> \n      <p class="text-label">Developer Tools</p>\n    </div> \n  </div>\n  <div class="config-item-content-row flex">\n  <p class="text-label padding-right-10">ProTime Test</p>\n    <label class="switch">\n      <input type="checkbox" class="" id="check_showProTimetestButton" />\n      <span class="switch_slider"></span>\n    </label>\n\n  </div> \n</div>\n</div>');const i=document.getElementById("check_showProTimetestButton");function o(){i.checked?(n.classList.remove("dNone"),localStorage.setItem("tc_c_dev_pttest","true")):(n.classList.add("dNone"),localStorage.setItem("tc_c_dev_pttest","false"))}i.addEventListener("change",o),window.addEventListener("load",(()=>{"true"==localStorage.getItem("tc_c_dev_pttest")&&(i.checked=!0,o())}))}()}))}))})();