(()=>{var e,t,n,i,o={713:(e,t,n)=>{var i={"./AmagProTime/info.json":[490,490],"./Automatic/info.json":[835,835],"./DZBankProRes/info.json":[509,509]};function o(e){if(!n.o(i,e))return Promise.resolve().then((()=>{var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=i[e],o=t[0];return n.e(t[1]).then((()=>n.t(o,19)))}o.keys=()=>Object.keys(i),o.id=713,e.exports=o}},c={};function r(e){var t=c[e];if(void 0!==t)return t.exports;var n=c[e]={exports:{}};return o[e](n,n.exports,r),n.exports}r.m=o,t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,r.t=function(n,i){if(1&i&&(n=this(n)),8&i)return n;if("object"==typeof n&&n){if(4&i&&n.__esModule)return n;if(16&i&&"function"==typeof n.then)return n}var o=Object.create(null);r.r(o);var c={};e=e||[null,t({}),t([]),t(t)];for(var l=2&i&&n;"object"==typeof l&&!~e.indexOf(l);l=t(l))Object.getOwnPropertyNames(l).forEach((e=>c[e]=()=>n[e]));return c.default=()=>n,r.d(o,c),o},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.f={},r.e=e=>Promise.all(Object.keys(r.f).reduce(((t,n)=>(r.f[n](e,t),t)),[])),r.u=e=>e+".bundle.js",r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n={},i="time-copy:",r.l=(e,t,o,c)=>{if(n[e])n[e].push(t);else{var l,a;if(void 0!==o)for(var s=document.getElementsByTagName("script"),d=0;d<s.length;d++){var m=s[d];if(m.getAttribute("src")==e||m.getAttribute("data-webpack")==i+o){l=m;break}}l||(a=!0,(l=document.createElement("script")).charset="utf-8",l.timeout=120,r.nc&&l.setAttribute("nonce",r.nc),l.setAttribute("data-webpack",i+o),l.src=e),n[e]=[t];var u=(t,i)=>{l.onerror=l.onload=null,clearTimeout(g);var o=n[e];if(delete n[e],l.parentNode&&l.parentNode.removeChild(l),o&&o.forEach((e=>e(i))),t)return t(i)},g=setTimeout(u.bind(null,void 0,{type:"timeout",target:l}),12e4);l.onerror=u.bind(null,l.onerror),l.onload=u.bind(null,l.onload),a&&document.head.appendChild(l)}},r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;r.g.importScripts&&(e=r.g.location+"");var t=r.g.document;if(!e&&t&&(t.currentScript&&"SCRIPT"===t.currentScript.tagName.toUpperCase()&&(e=t.currentScript.src),!e)){var n=t.getElementsByTagName("script");if(n.length)for(var i=n.length-1;i>-1&&(!e||!/^http(s?):/.test(e));)e=n[i--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),r.p=e})(),(()=>{var e={524:0};r.f.j=(t,n)=>{var i=r.o(e,t)?e[t]:void 0;if(0!==i)if(i)n.push(i[2]);else{var o=new Promise(((n,o)=>i=e[t]=[n,o]));n.push(i[2]=o);var c=r.p+r.u(t),l=new Error;r.l(c,(n=>{if(r.o(e,t)&&(0!==(i=e[t])&&(e[t]=void 0),i)){var o=n&&("load"===n.type?"missing":n.type),c=n&&n.target&&n.target.src;l.message="Loading chunk "+t+" failed.\n("+o+": "+c+")",l.name="ChunkLoadError",l.type=o,l.request=c,i[1](l)}}),"chunk-"+t,t)}};var t=(t,n)=>{var i,o,[c,l,a]=n,s=0;if(c.some((t=>0!==e[t]))){for(i in l)r.o(l,i)&&(r.m[i]=l[i]);a&&a(r)}for(t&&t(n);s<c.length;s++)o=c[s],r.o(e,o)&&e[o]&&e[o][0](),e[o]=0},n=self.webpackChunktime_copy=self.webpackChunktime_copy||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})(),(()=>{"use strict";const e=JSON.parse('{"Re":"0.9.15","rf":"24.08291559-S","Fe":"1.5"}');function t(e,t,i){document.getElementsByTagName("main")[0].insertAdjacentHTML("beforeend",'<div class="notification flex notification--hidden" id="notification">\n                                <p class="text-label text-notification" id="notification-text"></p>\n                                <button class="button-primary" id="button_close-notification">\n                                    <?xml version="1.0" encoding="UTF-8" standalone="no"?>\n                                    <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">\n                                    <svg width="100%" height="100%" viewBox="0 0 1000 1000" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;">\n                                        <g transform="matrix(0.924519,-0.924519,0.924519,0.924519,-424.346,499.846)">\n                                            <path id="addsmooth_path" d="M999.7,500.2C999.7,525 989.6,547.5 973.4,563.7C957.1,580 934.7,590 909.9,590L588.6,590L588.6,909.8C588.6,959.4 548.4,999.7 498.7,999.7C473.9,999.7 451.4,989.6 435.2,973.4C418.9,957.1 408.9,934.7 408.9,909.9L408.9,590.1L89.9,590.1C40.2,590.1 0,549.8 0,500.2C0,475.4 10.1,452.9 26.3,436.7C42.6,420.4 65,410.4 89.8,410.4L408.8,410.4L408.8,89.8C408.8,40.2 449,-0.1 498.7,-0.1C523.5,0 546,10 562.2,26.3C578.5,42.6 588.5,65 588.5,89.8L588.5,410.4L909.8,410.4C959.5,410.4 999.7,450.6 999.7,500.2Z" style="fill-rule:nonzero;"/>\n                                        </g>\n                                    </svg>\n                                </button>\n                            </div>');let o=document.getElementById("notification"),c=document.getElementById("notification-text");!0===e?(c.innerHTML=i,t?(o.classList.add("notification--ok"),function(e){setTimeout((function(){n(e)}),3e3)}(o)):(o.classList.remove("notification--ok"),function(e){setTimeout((function(){n(e)}),4500)}(o)),setTimeout((function(){o.classList.remove("notification--hidden")}),300)):!1!==e&&null!==e||setTimeout((function(){o.classList.add("notification--hidden")}),300),document.getElementById("button_close-notification").addEventListener("click",(function(){n(o)}))}function n(e,t,n){e.classList.add("notification--hidden")}let i="*",o=0;async function c(e,t,n){chrome.windows.getCurrent((function(e){chrome.windows.update(e.id,{focused:!0})}));try{let[i]=await chrome.tabs.query({active:!0,currentWindow:!0});await chrome.scripting.executeScript({target:{tabId:i.id},func:l,args:[e,t,n]})}catch(e){throw console.error("Error in chromeTabScript execution: ",e),e}}async function l(e,t,n){function i(){return new Promise((e=>{setTimeout((()=>{e("Timer done")}),300)}))}try{let e=await function(e){return new Promise((t=>{if(0===e){if(!document.getElementById("timeCopyProTimeClick")){let e=document.createElement("div"),t=document.createElement("div");e.setAttribute("id","timeCopyProTimeClick"),e.setAttribute("class","TimeCopy-ProtTime-clickArea"),e.setAttribute("style","position: fixed; width: 100%; height: 100%; z-index: 9999; background-color: #031a21ee; top: 0; left: 0; display: flex; justify-content: center; align-items: center; cursor: pointer;"),e.setAttribute("onClick",'document.getElementById("timeCopyProTimeClick").remove()'),t.setAttribute("style","width: 30%; height: 12%; border: 2px dashed #5ecac3; font-size: 24px; color: #5ecac3; padding: 20px; border-radius: 20px; display: flex; justify-content: center; align-items: center;"),t.innerHTML="Click here to focus window",e.appendChild(t),document.getElementsByTagName("body")[0].appendChild(e),e.addEventListener("click",n)}}else n();function n(){t("ok")}}))}(n);console.log(e)}catch(e){return alert(e),void console.error("Error in checkFirstBookingLoop: ",e)}const o=new KeyboardEvent("keydown",{key:"Enter",code:"Enter",which:13,keyCode:13}),c=new Event("change"),r=e[0],l=e[1];let a,s,d,m,u,g,f=document.getElementsByClassName("lsField--f4")[0];if(!(f&&f.childNodes&&f.childNodes.length>0))return;{let e=r.item_bookingnumber||l.projectnomber;if(!e)return;f.childNodes[0].value=e,f.childNodes[0].dispatchEvent(o)}try{await i()}catch(e){return alert(e),void console.error("Error in waitTimer: ",e)}if(document.getElementsByClassName("lsField--list")[1].childNodes[0].click(),g=document.querySelector({select_proTime_service_CSITEST:"[data-itemkey='ZCHN0730070']",select_proTime_service_CSITENT:"[data-itemkey='ZCHN0730080']",select_proTime_service_ITDNT:"[data-itemkey='ZCHN0730005']",select_proTime_service_ITD:"[data-itemkey='ZCHN0730001']"}[l.protimeservice]),!g)return;g.click();try{await i()}catch(e){return alert(e),void console.error("Error in waitTimer: ",e)}if(l.protimeactivity.length>1){d=document.getElementsByClassName("lsField--list")[2].childNodes[0],d.click(),m=document.getElementsByClassName("lsListbox__items")[1].childNodes[0];let e=m.childNodes;for(let t=0,n=e.length;t<n;t++)e[t].textContent.includes(l.protimeactivity)&&e[t].click();u=4}else u=3;try{await i()}catch(e){return alert(e),void console.error("Error in waitTimer: ",e)}a=document.getElementsByClassName("lsField--right")[0].childNodes[0],a.focus(),a.click(),a.value=r.item_tickettime,t||a.dispatchEvent(o);try{await i()}catch(e){return alert(e),void console.error("Error in waitTimer: ",e)}try{await i()}catch(e){return alert(e),void console.error("Error in waitTimer: ",e)}try{await i()}catch(e){return alert(e),void console.error("Error in waitTimer: ",e)}let p=r.item_ticketmasternumber?r.item_ticketmasternumber:r.item_ticketnumber;s=document.getElementsByClassName("lsField--list")[u].childNodes[0],s.focus(),s.click(),s.value=p,t||s.dispatchEvent(o);try{await i()}catch(e){return alert(e),void console.error("Error in waitTimer: ",e)}let h=document.getElementsByTagName("textarea")[0],v=new MouseEvent("mouseover",{view:window,bubbles:!0,cancelable:!0}),_="["+r.item_ticketnumber+"] "+r.item_ticketdisc,b=new Event("focus");h.dispatchEvent(v),h.dispatchEvent(b),h.focus(),h.click(),h.value=_,document.getElementsByTagName("textarea")[0].dispatchEvent(c),document.getElementsByTagName("textarea")[1].focus(),document.getElementsByTagName("textarea")[1].setSelectionRange(document.getElementsByTagName("textarea")[1].value.length,document.getElementsByTagName("textarea")[1].value.length);try{await i()}catch(e){return alert(e),void console.error("Error in waitTimer: ",e)}if(console.log("DEV-TestMode: "+t),!t){let e=document.getElementsByClassName("lsToolbar--item-button")[8];e.focus(),e.click()}try{await i()}catch(e){return alert(e),void console.error("Error in waitTimer: ",e)}try{await i()}catch(e){return alert(e),void console.error("Error in waitTimer: ",e)}try{await i()}catch(e){return alert(e),void console.error("Error in waitTimer: ",e)}return n}const a=["Automatic","AmagProTime","DZBankProRes"];async function s(e,n,r,l){let a=e.split("_").pop(),s="Automatic",d={AmagProTime:async function(e,n,r){return await async function(e,n,r){let l=[],a=[];try{e.forEach((e=>{let t=function(e,t){let n=[];return t.forEach((t=>{(t.ticketprefix.length>0&&e.item_ticketnumber.includes(t.ticketprefix)||0===t.ticketprefix.length&&0===e.item_ticketnumber.length)&&n.push(t)})),n||null}(e,n),o=function(e,t){let n=[];return t.forEach((t=>{let i=e.item_ticketdisc+" "+e.item_hiddentag;(t.addprefix.length>0&&i.includes(t.addprefix)||0===t.addprefix.length)&&n.push(t)})),n||null}(e,t);console.log("--\x3ePM: ",o);let c=function(e,t){console.log("T",e);let n=[];return t.length>1?t.forEach((t=>{let i=e.item_ticketdisc+" "+e.item_hiddentag;t.addprefix.length>0&&i.includes(t.addprefix)&&e.item_ticketnumber.includes(t.ticketprefix)&&n.push(t)})):n=t,n}(e,o);console.log("--\x3eAM: ",c);let r=function(e,t){let n=[];return t.length>1?t.forEach((t=>{(e.item_bookingnumber.length&&t.projectnomber===e.item_bookingnumber||e.item_bookingnumber&&t.projectnomber===i||!e.item_bookingnumber&&t.projectnomber.length&&t.projectnomber!==i)&&n.push(t)})):n=t,n}(e,c);if(e.item_ticketdisc.length<2)throw new Error("Ticket hat keine Discription! "+e.item_ticketnumber+" "+e.item_bookingnumber);if(r.length>1)throw new Error("Ticket hat mehrfache Matches | "+e.item_ticketnumber+" "+e.item_ticketdisc);if(1===r.length?l.push([e,r[0]]):0===r.length&&a.push(e),/\p{L}/u.test(e.item_tickettime))throw new Error("Ticket hat ungewöhnliche Zeitangabe! | "+e.item_ticketnumber+" "+e.item_ticketdisc);if(console.log("Infos: ",r),e.item_bookingnumber.length<1&&r.length>0&&r[0].projectnomber.length<1)throw new Error("Buchungsnummer fehlt im Ticket/in der Erkennung | "+e.item_ticketnumber+" "+e.item_ticketdisc);console.log("ticket filter matches ",e,r)}))}catch(e){return void t(!0,!1,e)}if(a.length){t(!0,!1,"⚠️ "+a.length+'<span id="fail-link">Ticket(s)</span> wurden nicht übernommen.'),console.log("failed tickets ",a);var s=[];a.forEach((e=>{let t,n;t=e.item_ticketnumber.length?e.item_ticketnumber:"NO NOMBER",n=e.item_ticketdisc.length?e.item_ticketdisc:"NO DISCRIPTION",s.push(" >> ",t,": ",n," << ")}));let e=JSON.stringify(s);document.getElementById("fail-link").addEventListener("click",(()=>alert("Ignorierte Tickets: "+e.replace(/]|[[",]/g,""))))}console.log("valide ",l);try{if(!l.length)throw new Error("Es konnten keine Daten erfasst werden.");for(let e=0;e<l.length;e++){let t=l[e];try{await c(t,r,o),o++,console.log("--\x3e valid tickets loop")}catch(e){return console.error("Error in chromeTabScript: ",e),Promise.reject(new Error(400))}}}catch(e){return void t(!0,!1,e)}return o=0,"ProTime Buchung abgeschlossen"}(e,n,r)},DZBankProRes:async function(e,t,n){return await async function(){return"ProRes OK"}()}};a===s&&(a=await async function(){let e,n,[i]=await chrome.tabs.query({active:!0,lastFocusedWindow:!0});return e=i.url,e.includes("s4.amag.ch/protime")?n="AmagProTime":e.includes("DZBANK-TEST")?n="DZ Bank TEST":(t(!0,!1,"Buchung abgebrochen: Unbekannte URL"),n=null),n}(),e=e.replace(s,a));let m=JSON.parse(r),u=[],g="select_"+e;for(let e=0;e<m.length;e++)m[e].bookingsheet===g&&(u=[...u,m[e]]);return a?d[a](n,u,l):null}function d(e){let t=localStorage.getItem("tc_s_dlcplattforminformations");console.log(t),e&&(document.getElementById("window_detection").innerHTML=e.map((e=>'<div class="config-item detection-item flex" name="item_detection" id="'+e.id+'">\n     <div class="config-item-main-container">\n       <div class="config-item-title-row flex">\n         <p class="subtext subtext-top">Erkennung</p>\n       </div>\n       <div>\n         <select class="input-size--small" id="select_bookingPlattform_'+e.id+'">\n           <option value="" selected disabled hidden>Keine</option>\n           <option value="select_bookingPlattform_AmagProTime" >ProTime</option>\n           <option value="select_bookingPlattform_DZBankProRes">ProRes ⭐️</option>\n         </select>\n         <input type="text" class="input-size--default '+(e.bookingsheet?"":"dNone")+'" name="input_ticketPrefix" id="input_ticketPrefix'+e.id+'" placeholder="Ticket Prefix" value="'+e.ticketprefix+'" />\n       </div>\n       <div>\n         <input type="text" class="input-size--large '+(e.bookingsheet?"":"dNone")+'" name="input_additionalPrefix" id="input_additionalPrefix'+e.id+'" placeholder="String Match (Optional)" value="'+e.addprefix+'"/>\n       </div>\n       <div class="config-item-title-row flex '+("AmagProTime"===e.bookingsheet?null:"dNone")+'">\n         <p class="subtext subtext-top">Buchung</p>\n       </div>\n       <div class="project-detection-item--amagprotime '+("AmagProTime"===e.bookingsheet?null:"dNone")+'">\n          <div>\n            <select class="input-size--default" name="select_proTimeService" id="select_proTimeService_'+e.id+'">\n              <option value="select_proTime_service_ITD" '+("select_proTime_service_ITD"===e.protimeservice?"selected":"")+'>IT Dienstleistungen</option>\n              <option value="select_proTime_service_ITDST" '+("select_proTime_service_ITDST"===e.protimeservice?"selected":"")+'>IT Dienstleistungen ST</option>\n              <option value="select_proTime_service_CSITEST" '+("select_proTime_service_CSITEST"===e.protimeservice?"selected":"")+'>Corporate Service IT Ext ST</option>\n              <option value="select_proTime_service_CSITENT" '+("select_proTime_service_CSITENT"===e.protimeservice?"selected":"")+'>Corporate Service IT Ext NT</option>\n            </select>\n            <input type="text" class="input-size--small" name="input_projectNomber" id="input_projectNomber'+e.id+'" placeholder="Projektnum." value="'+e.projectnomber+'"/>\n          </div>\n  \n          <input type="text" class="input-size--large" name="input_activity" id="input_activity'+e.id+'" list="datalist_activity'+e.id+'" placeholder="Aktivität (Wenn vorhanden)"/>\n          <datalist id="datalist_activity'+e.id+'">\n            <option>- WP2 - AEM Dashboard</option>\n            <option>AP01 - Front-end</option>\n          </datalist>\n        </div>\n        <div class="project-detection-item--dzbankprores">\n          \n        </div>\n     </div>\n     <div class="config-item-action-container">\n       <button class="button-primary button-reset button_deleteDetection">\n         <?xml version="1.0" encoding="utf-8"?>\n         \x3c!-- Designed by Empty Soul  --\x3e\n         <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n            viewBox="0 0 1000 1000" style="enable-background:new 0 0 1000 1000;" xml:space="preserve">\n         <g>\n           <path d="M200.3,269.8v602.4c0,71.7,58.3,130,130,130h333.6c71.7,0,130-58.3,130-130V269.8H200.3z M733.9,872.2\n             c0,38.6-31.4,70-70,70H330.3c-38.6,0-70-31.4-70-70V329.8h473.6V872.2z"/>\n         </g>\n         <g>\n           <rect x="326" y="400.4" width="60" height="480.3"/>\n         </g>\n         <g>\n           <path d="M670,143.8c-4.6-33-16.7-63.6-35.2-88.2c-26-34.4-61.3-53.4-99.4-53.4H459c-38.2,0-73.5,19-99.4,53.4\n             c-18.5,24.6-30.7,55.2-35.2,88.2h-126v60h597.7v-60H670z M385,143.8c3.8-19.7,11.5-37.6,22.4-52.1c14.3-19,32.6-29.5,51.5-29.5\n             h76.4c18.9,0,37.2,10.5,51.5,29.5c10.9,14.5,18.5,32.4,22.4,52.1H385z"/>\n         </g>\n         <g>\n           <rect x="612" y="400.4" width="60" height="480.3"/>\n         </g>\n         <g>\n           <rect x="467.2" y="400.4" width="60" height="480.3"/>\n         </g>\n         </svg>                  \n       </button>\n     </div>\n     </div>')).join(""))}const m="select_bookingPlattform_",u=document.getElementById("button_add_projectDetection");let g=localStorage.getItem("tc_c_projectDetection");g=JSON.parse(g);const f=document.getElementById("window_detection"),p="select_proTime_service_CSITEST";function h(e){localStorage.setItem("tc_c_projectDetection",JSON.stringify(e))}function v(){let e="deci"+(new Date).getTime().toString(),t={id:e,bookingsheet:""};null===g&&(g=[]),g.push(t),h(g),d(g),_(),document.getElementById(e).classList.add("item--new"),f.parentElement.scroll({top:0,behavior:"smooth"})}function _(){let e=document.getElementsByClassName("button_deleteDetection");for(let t=0,n=e.length;t<n;t++)e[t].addEventListener("click",w);for(let t=0,n=e.length;t<n;t++)e[t].addEventListener("click",w);let t=document.getElementsByName("item_detection");for(let e=0,n=t.length;e<n;e++){let n=document.getElementById(m+t[e].id),i=g.find((n=>n.id===t[e].id)).bookingsheet;n.value=""!==i&&null!==i?m+i:i,n.addEventListener("change",(()=>{k(t[e].id,n.value)}));let o=document.getElementById("input_ticketPrefix"+t[e].id);o.addEventListener("change",(()=>{y(t[e].id,"ticketprefix",o.value)}));let c=document.getElementById("input_additionalPrefix"+t[e].id);c.addEventListener("change",(()=>{y(t[e].id,"addprefix",c.value)}));let r=document.getElementById("select_proTimeService_"+t[e].id),l=g.find((n=>n.id===t[e].id)).protimeservice;r.value=l,r.addEventListener("change",(()=>{y(t[e].id,"protimeservice",r.value)}));let a=document.getElementById("input_projectNomber"+t[e].id);a.addEventListener("change",(()=>{y(t[e].id,"projectnomber",a.value)}));let s=document.getElementById("input_activity"+t[e].id),d=g.find((n=>n.id===t[e].id)).protimeactivity;s.value=d,s.addEventListener("change",(()=>{y(t[e].id,"protimeactivity",s.value)}))}}function b(e){return g.find((t=>t.id===e))}function k(e,t){let n=b(e),i=t.split(m)[1];console.log("T: ",n);let o={};t===m+"AmagProTime"?o={ticketprefix:"",addprefix:"",protimeservice:p,projectnomber:"",protimeactivity:""}:t===m+"DZBankProRes"&&(o={ticketprefix:"",addprefix:""}),console.log("selbp: "+i);let c={...n,bookingsheet:i,...o},r=g.indexOf(n);g[r]=c,console.log("dItem",g),h(g),d(g),_()}function y(e,t,n){!function(e,t,n){let i=b(e),o={...i,[t]:n},c=g.indexOf(i);g[c]=o}(e,t,n),h(g),d(g),_()}function w(e){let t=e.target.closest("div").parentNode.id,n=document.getElementById(t);n.classList.add("config-item--remove"),setTimeout((function(){n.remove()}),500),e.target.closest("button").removeEventListener("click",w),g=g.filter((e=>e.id!==t)),h(g)}!async function(){let e=[];for(let t of a){let n=Promise.resolve(r(713)(`./${t}/info.json`));await n.then((n=>{let i={[t]:{...n}};e.push(i);let o='<label class="config-item dFlex">\n                <div class="config-item-main-container dFlex">\n                  <div class="config-item-radio-container dFlex">\n                    <label class="radio-custom-container dFlex">\n                      <input type="radio" class="radio-default" name="booking-plattform"\n                        value="bookingPlattform_'+t+'" />\n                      <span class="checkmark"></span>\n                    </label>\n                  </div>\n                  <div class="config-item-logo-container flex config-item-logo-container--'+n.plattform_id+'">\n                    <img src="assets/gfx/dlc/plattforms/logos/'+t+'.png" class="icon-bookingItem" />\n                  </div>\n                  <div class="config-item-main flex">\n                    <p class="text-label">'+n.plattform_name+'</p>\n                  </div>\n                </div>\n                <div class="config-item-action-container flex">\n                  <button class="button-primary" id="bookingPlatform_'+t+'">\n                    <?xml version="1.0" encoding="utf-8"?>\n                    <svg version="1.1" id="DownArrow" xmlns:serif="http://www.serif.com/"\n                    \t xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1200 1200"\n                    \t style="enable-background:new 0 0 1200 1200;" xml:space="preserve">\n                    <path id="downarrow_smooth" class="st0" d="M671.2,910.4l502.1-502.1c35.1-35.1,35.1-92.2,0-127.3c-35.1-35.1-92.2-35.1-127.3,0\n                    \tL599.6,727.3L153.4,281.1c-35.1-35.1-92.2-35.1-127.3,0C-9,316.3-9,373.3,26.2,408.4l510.3,510.3c35.1,35.1,92.2,35.1,127.3,0\n                    \tC666.4,916.1,668.9,913.3,671.2,910.4z"/>\n                    </svg>\n                  </button>\n                </div>\n              </label>';return document.getElementById("window_bookingplattforms").innerHTML+=o,e}))}localStorage.setItem("tc_s_dlcplattforminformations",JSON.stringify(e))}(),document.addEventListener("DOMContentLoaded",(function(){const n=document.querySelector("link#link-theme"),i=(document.querySelector("main"),document.querySelector("header")),o=document.querySelector("div.configurations"),c=document.querySelector("div.overview"),r=document.getElementById("config-container"),l=document.getElementsByClassName("configuration-window"),a=document.getElementById("config-win-general"),m=document.getElementById("config-win-timesheets"),f=document.getElementById("config-win-bookingsheet"),p=document.getElementById("config-win-projects"),h=document.getElementById("configProfileName"),b=document.getElementsByClassName("button-config-tab"),k=document.querySelector("button#button-tab-general"),y=document.querySelector("button#button-tab-timesheets"),w=document.querySelector("button#button-tab-bookingsheets"),E=document.querySelector("button#button-tab-projects"),T=document.querySelector("button#buttonBackToMain"),x=document.querySelector("button#button_test_pasteTicketData"),S=document.querySelector("button#fillButton"),I=document.querySelector("button#configButton"),L=document.querySelector("select#select-themes"),N=(document.querySelector("select#select-language"),document.getElementById("button_clearConfigs")),B=document.getElementsByName("timesheet-filter"),C=document.getElementById("button_openHelp"),P=(document.getElementById("tobiasFilterInfo"),document.getElementsByName("timesheet-filter")),j=document.getElementsByName("booking-plattform");let D=localStorage.getItem("tc_c_theme"),A=localStorage.getItem("tc_c_language"),O=localStorage.getItem("tc_c_filter"),M=localStorage.getItem("tc_c_projectDetection"),F=localStorage.getItem("tc_c_profileName"),q=localStorage.getItem("tc_c_bookingPlattform"),R=!1,H=!1,z=!1,Z=e.Re,J=e.rf,U=e.Fe;function $(){const e="oceanswave";let t="bookingPlattform_Automatic";D&&"null"!==D&&" "!==D?(L.value=D,n.setAttribute("href","./assets/style/themes/"+D+"/"+D+".css")):(L.value=e,n.setAttribute("href","./assets/style/themes/"+e+"/"+e+".css")),O&&(document.querySelector('input[value="'+O+'"]').checked=!0),h.value=F||"Default",q?document.querySelector('input[value="'+q+'"]').checked=!0:(document.querySelector('input[value="'+t+'"]').checked=!0,localStorage.setItem("tc_c_bookingPlattform",t)),console.log("✅ [Time Copy] extension loaded")}function V(){R?(I.classList.remove("button--active"),S.classList.remove("object--hidden"),o.classList.add("dNone"),c.classList.remove("dNone"),i.classList.add("dNone"),R=!1,!0===z&&window.location.reload()):(I.classList.add("button--active"),S.classList.add("object--hidden"),o.classList.remove("dNone"),c.classList.add("dNone"),i.classList.remove("dNone"),R=!0)}function W(){[].forEach.call(b,(function(e){e.classList.remove("button-tab--active")})),[].forEach.call(l,(function(e){e.classList.add("dNone")}))}function K(){W(),k.classList.add("button-tab--active"),a.classList.remove("dNone"),r.classList.add("configuration-container-first-tab-selected")}function G(){W(),E.classList.add("button-tab--active"),p.classList.remove("dNone"),r.classList.remove("configuration-container-first-tab-selected"),z=!0}function Y(){W(),y.classList.add("button-tab--active"),m.classList.remove("dNone"),r.classList.remove("configuration-container-first-tab-selected")}function Q(){W(),w.classList.add("button-tab--active"),f.classList.remove("dNone"),r.classList.remove("configuration-container-first-tab-selected")}function X(){}function ee(e){localStorage.setItem("tc_c_bookingPlattform",e.target.value),z=!0}function te(){localStorage.setItem("tc_c_profileName",h.value),z=!0}function ne(){let e=L.value;n.setAttribute("href","./assets/style/themes/"+e+"/"+e+".css"),localStorage.setItem("tc_c_theme",e),z=!0}function ie(e){localStorage.setItem("tc_c_filter",e.target.value),z=!0}function oe(){window.open("https://github.com/EmptySoulOfficial/TimeCopy/blob/main/accesories/documentation/Help.md")}function ce(){if(!0===z)return sessionStorage.setItem("tc_c_exportFile_afterChange","true"),void window.location.reload();{let e=M;e=JSON.parse(e);const t="-TimeCopy.tcprofile";null===e&&(e=[]);let n={tcprofile:{author:"steve",version:U,extension_version:Z,extension_build:J,profile_name:h.value}};Object.assign(n.tcprofile,{cfg:{theme:D,language:A,filter:O,platform:q,detections:e}});const i=JSON.stringify(n),o=h.value+t,c="text/plain",r=document.createElement("a"),l=new Blob([i],{type:c});r.href=URL.createObjectURL(l),r.download=o,document.body.appendChild(r),r.click(),r.remove()}}function re(){localStorage.removeItem("tc_c_theme"),localStorage.removeItem("tc_c_language"),localStorage.removeItem("tc_c_filter"),localStorage.removeItem("tc_c_projectDetection"),localStorage.removeItem("tc_c_profileName"),localStorage.removeItem("tc_c_bookingPlattform"),localStorage.removeItem("tc_s_dlcplattforminformations"),sessionStorage.removeItem("tc_c_messageImported"),sessionStorage.removeItem("tc_c_messageProfileRemoved"),sessionStorage.removeItem("tc_c_changeLanguage"),sessionStorage.setItem("tc_c_messageProfileRemoved","true"),window.location.reload()}async function le(){let e=await navigator.clipboard.readText(),n=O,i=q;try{if(""===n||null===n)throw new Error("Bitte wähle einen Filter!");if(""===i||null===i)throw new Error("Bitte wähle eine Buchungsplattform!");if(""===M||null===M)throw new Error("Bitte erstelle mindestens ein Erkennungs-Item !");!async function(e,n,i,o){let c=[];try{c=await async function(e,t){let n=[];return"timesheetfilter-tobiasexcel"===e?n=function(e){let t="";e.includes("\t")&&(t=e.split("\t")[0]),e.includes('""')&&(e=e.replace(/""/g,""));let n=e.split('"')[1]??e.split("\t");const i=/([^\n]+)/g,o=/(?<=\[).*?(?=\])/g,c=/(?<=\]).*(?=\:)/g,r=/.*[\s]*?:[\s]*?(\d{1,2}[\.\,]?[\d]{0,2})/,l=/^[^\s#°]+/,a=/(?<=°)[^\s#°]+/,s=/(?<=#)[^\s#°]+/;let d,m=[],u=[];for(;null!==(d=i.exec(n));)m.push(d[1]);return m.forEach((function(e,n){let i="",d=e.match(o)[0].trim(),m=d.match(l)[0],g=d.match(s)?d.match(s)[0]:"",f=d.match(a)?d.match(a)[0]:"",p=e.match(c)[0].trim(),h=e.match(r)[1].trim();h=h.replaceAll(",","."),g&&(i=g);let v={item_bookingnumber:i,item_ticketmasternumber:f,item_ticketnumber:m,item_ticketdisc:p,item_hiddentag:"",item_tickettime:h,item_date:t.trim()};u.push(v)})),u}(t):"timesheetfilter-stevegoogleexcel"===e&&(n=function(e){let t;const n=/(Mo\.|Di\.|Mi\.|Do\.|Fr\.|Sa\.|So\.)\s*\d{2}\.\d{2}\.\d{4}/,i=/^[a-zA-Z\s]{1,3}\s+/g,o=/^\d{1,2}[:.]\d{2}\s*/g,c=/(\w.*[\s]{1}\d{1,2}[,\.]?\d{0,2})(?=\s|$)/g,r=/(?:^|\n)\s*([A-Z0-9]+(?:-[A-Z0-9]+)?(?:>[A-Z0-9]+)?)/i,l=/>(.+)/,a=/\[([^\]]+)\](?=[^\[]*$)/,s=/\[#([^\]]+)\](?=[^\[]*$)/,d=/(?<=\#).*?(?=\])/,m=/\d+[.,]?\d*$/;let u,g="",f="",p=[],h=[];for(e.match(n)?(g=e.match(n)[0].trim(),t=e.replace(n,"").trim()):t=e.trim(),t=t.replaceAll("\t"," "),t.match(i)&&(t=t.replace(i,"").trim()),t.match(o)&&(f=t.match(o)[0].trim(),t=t.replace(o,"").trim());null!==(u=c.exec(t));)p.push(u[1]);return p.forEach((function(e,t){let n="",i="",o="",c="",u="",f="",p=(e=e.replaceAll("\t"," ")).match(r)[0].trim();p.match(l)?(o=p.replace(l,"").trim(),c=p.replace(o+">","").trim()):o=p.trim(),e.match(a)&&(e.match(s)?(u=e.match(s)[0].trim(),u=u.match(d)[0].trim(),i=u,e=e.replace(s,"")):(f=e.match(a)[1].trim(),e=e.replace(a,"")));let v=e.match(m)[0];v=v.replaceAll(",",".");let _=e.replace(p,"").trim();_=_.replace(u,"").trim(),_=_.replace(m,"").trim(),n=g.replace("\t","").trim();let b={item_bookingnumber:i,item_ticketmasternumber:c,item_ticketnumber:o,item_ticketdisc:_,item_hiddentag:f,item_tickettime:v,item_date:n};h.push(b)})),console.log(h),h}(t)),n}(e,n),console.log("Timesheet Data: ",c)}catch(e){return console.error("Unable to call bookingData: ",e),void t(!0,!1,"Fehler: Buchungsdaten konnten nicht aufgerufen werden")}console.log(i);let r=await s(i,c,M,o);r&&console.log("✅ bookEntries process complete | "+r)}(n,e,i,H)}catch(e){return void t(!0,!1,e)}}async function ae(){H=!0,le()}async function se(){H=!1,le()}document.getElementById("button_importConfigs").addEventListener("change",(function(e){let n;var i=e.target.files,o=new FileReader;o.addEventListener("load",(function(e){n=this.result,n=JSON.parse(n),e=function(e){let t;return t=e.tcprofile.version===U,t}(n),console.log(e),e?(localStorage.setItem("tc_c_theme",n.tcprofile.cfg.theme),localStorage.setItem("tc_c_language",n.tcprofile.cfg.language),localStorage.setItem("tc_c_filter",n.tcprofile.cfg.filter),localStorage.setItem("tc_c_projectDetection",JSON.stringify(n.tcprofile.cfg.detections)),localStorage.setItem("tc_c_profileName",n.tcprofile.profile_name),localStorage.setItem("tc_c_bookingPlattform",n.tcprofile.cfg.platform),$(),sessionStorage.setItem("tc_c_messageImported","true"),window.location.reload(),setTimeout((function(){}),2e3)):t(!0,!1,"Import fehlgeschlagen: Version stimmt nicht überein.")})),o.readAsText(i[0])}),!1),document.getElementById("button_exportConfigs").addEventListener("click",ce),d(g),_(),u.removeEventListener("click",v),u.addEventListener("click",v),window.addEventListener("load",(e=>{label_version.insertAdjacentHTML("beforeend",Z),label_build_version.insertAdjacentHTML("beforeend",J),S.addEventListener("click",se),x.addEventListener("click",ae),I.addEventListener("click",V),T.addEventListener("click",V),k.addEventListener("click",K),E.addEventListener("click",G),y.addEventListener("click",Y),w.addEventListener("click",Q),h.addEventListener("change",te),N.addEventListener("click",re),C.addEventListener("click",oe),L.addEventListener("change",ne);for(var n=0,i=B.length;n<i;n++)B[n].addEventListener("click",ie);for(var o=0,c=P.length;o<c;o++)P[o].addEventListener("click",X);for(o=0,c=j.length;o<c;o++)j[o].addEventListener("click",ee);$(),function(){let e=sessionStorage.getItem("tc_c_messageImported"),n=sessionStorage.getItem("tc_c_messageProfileRemoved"),i=sessionStorage.getItem("tc_c_exportFile_afterChange"),o=sessionStorage.getItem("tc_c_changeLanguage");"true"===e&&(t(!0,!0,"Profil wurde erfolgreich importiert!"),sessionStorage.removeItem("tc_c_messageImported"),I.click()),"true"===n&&(t(!0,!0,"Profil wurde zurückgesetzt."),sessionStorage.removeItem("tc_c_messageProfileRemoved"),I.click()),"true"===i&&(sessionStorage.removeItem("tc_c_exportFile_afterChange"),I.click(),ce()),"true"===o&&(sessionStorage.removeItem("tc_c_changeLanguage"),I.click())}(),function(){const e=document.getElementById("config-win-general--content"),t=document.getElementById("label_version"),n=document.getElementById("button_test_pasteTicketData");t.insertAdjacentHTML("afterbegin","⭐️ "),e.insertAdjacentHTML("beforeend",'\n<div class="config-item dFlex">\n<div class="config-item-main-container">\n  <div class="config-item-title-row flex">\n    <div class="config-item-icon-container flex">\n      <p class="text-label label-emoji">👩🏼‍💻</p>\n    </div> \n    <div class="config-item-main flex"> \n      <p class="text-label">Developer Tools</p>\n    </div> \n  </div>\n  <div class="config-item-content-row flex">\n  <p class="text-label padding-right-10">ProTime Test</p>\n    <label class="switch">\n      <input type="checkbox" class="" id="check_showProTimetestButton" />\n      <span class="switch_slider"></span>\n    </label>\n\n  </div> \n</div>\n</div>');const i=document.getElementById("check_showProTimetestButton");function o(){i.checked?(n.classList.remove("dNone"),localStorage.setItem("tc_c_dev_pttest","true")):(n.classList.add("dNone"),localStorage.setItem("tc_c_dev_pttest","false"))}i.addEventListener("change",o),window.addEventListener("load",(()=>{"true"==localStorage.getItem("tc_c_dev_pttest")&&(i.checked=!0,o())}))}()}))}))})()})();