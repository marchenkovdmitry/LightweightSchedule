"use strict";var lightWeightSchedule=function(){function e(e){e.style.display="none"}function t(e,t){localStorage.setItem(e,t)}function a(e){return localStorage.getItem(e)}function r(e){e.style.background="#61697c"}function n(e){e.style.background="#4f5a6e"}function c(e,t){var a=document.querySelectorAll(".day_week li:nth-child(odd)"),c=document.querySelectorAll(".day_week li:nth-child(even)"),l=document.querySelectorAll("ul.day_week:nth-child(6)>li:nth-child(n+7):nth-child(-n+8),ul.day_week:nth-child(8)>li:nth-child(n+3):nth-child(-n+4)");if("oddElements"===e&&"lightColor"===t)[].forEach.call(a,n),[].forEach.call(l,n);else if("oddElements"===e&&"darkColor"===t)[].forEach.call(a,r),[].forEach.call(l,r);else if("evenElements"===e&&"lightColor"===t)[].forEach.call(c,n),[].forEach.call(l,n);else{if("evenElements"!==e||"darkColor"!==t)return;[].forEach.call(c,r),[].forEach.call(l,r)}}function l(e){var t=document.querySelector(".menu");switch(e){case"block":t.style.display="block";break;case"none":t.style.display="none"}}function o(e){var t=document.querySelector(".footer");switch(e){case"light":i.style.backgroundImage="url(img/diagonal_striped_brick.png)",t.style.color="#000";break;case"dark":i.style.backgroundImage="url(img/escheresque_ste.png)",t.style.color="#fff"}}function m(e){var t;if(null===e.which){if(e.keyCode<32)return;t=String.fromCharCode(e.keyCode)}if(0!==e.which&&0!==e.charCode){if(e.which<32)return;t=String.fromCharCode(e.which)}return t}function u(e){var t=(new Date).getDay();if(6!==t&&0!==t||(h.style.display="none"),"disable"===e)location.hash="";else switch(t){case 1:location.hash="monday";break;case 2:location.hash="tuesday";break;case 3:location.hash="wednesday";break;case 4:location.hash="thursday";break;case 5:location.hash="friday";break;default:location.hash=""}}function s(e){switch(m(e)){case"1":location.hash="monday";break;case"2":location.hash="tuesday";break;case"3":location.hash="wednesday";break;case"4":location.hash="thursday";break;case"5":location.hash="friday"}}function g(e){switch(a(e.localItem)){case"type1":e.funcName(e.funcNameArg1,e.funcNameArg2);break;case"type2":e.funcName(e.funcNameArg3,e.funcNameArg4);break;default:e.funcName(e.funcNameArg5,e.funcNameArg6)}}function f(e){switch(a(e.localItem)){case"type1":t(e.setItemArg1,e.setItemArg2),e.funcName(e.funcNameArg1,e.funcNameArg2);break;case"type2":t(e.setItemArg3,e.setItemArg4),e.funcName(e.funcNameArg3,e.funcNameArg4);break;default:t(e.setItemArg5,e.setItemArg6),e.funcName(e.funcNameArg5,e.funcNameArg6)}}var i=document.querySelector("body"),d=document.querySelector(".li-setup"),y=document.querySelector(".background-setup"),h=document.querySelector(".day-setup"),A=document.querySelector(".menu-setup");return Date.prototype.getWeek=function(){var e=new Date(this.valueOf()),t=(this.getDay()+6)%7;e.setDate(e.getDate()-t+3);var a=e.valueOf();return e.setMonth(0,1),4!=e.getDay()&&e.setMonth(0,1+(4-e.getDay()+7)%7),1+Math.ceil((a-e)/6048e5)},!function(e){try{var t=window[e],a="__storage_test__";return t.setItem(a,a),t.removeItem(a),!0}catch(e){return!1}}("localStorage")?(console.info("Sorry. We can't use localStorage advantages."),[].forEach.call([d,y,h,A],e),o("light")):(!function(){return(new Date).getWeek()%2!=0}()?(g({localItem:"colorStyle",funcName:c,funcNameArg1:"evenElements",funcNameArg2:"lightColor",funcNameArg3:"evenElements",funcNameArg4:"darkColor",funcNameArg5:"evenElements",funcNameArg6:"darkColor"}),d.addEventListener("click",function(){f({localItem:"colorStyle",funcName:c,setItemArg1:"colorStyle",setItemArg2:"type2",setItemArg3:"colorStyle",setItemArg4:"type1",setItemArg5:"colorStyle",setItemArg6:"type1",funcNameArg1:"evenElements",funcNameArg2:"darkColor",funcNameArg3:"evenElements",funcNameArg4:"lightColor",funcNameArg5:"evenElements",funcNameArg6:"lightColor"})})):(g({localItem:"colorStyle",funcName:c,funcNameArg1:"oddElements",funcNameArg2:"lightColor",funcNameArg3:"oddElements",funcNameArg4:"darkColor",funcNameArg5:"oddElements",funcNameArg6:"darkColor"}),d.addEventListener("click",function(){f({localItem:"colorStyle",funcName:c,setItemArg1:"colorStyle",setItemArg2:"type2",setItemArg3:"colorStyle",setItemArg4:"type1",setItemArg5:"colorStyle",setItemArg6:"type1",funcNameArg1:"oddElements",funcNameArg2:"darkColor",funcNameArg3:"oddElements",funcNameArg4:"lightColor",funcNameArg5:"oddElements",funcNameArg6:"lightColor"})})),g({localItem:"menuStyle",funcName:l,funcNameArg1:"block",funcNameArg3:"none",funcNameArg5:"none"}),A.addEventListener("click",function(){f({localItem:"menuStyle",funcName:l,setItemArg1:"menuStyle",setItemArg2:"type2",setItemArg3:"menuStyle",setItemArg4:"type1",setItemArg5:"menuStyle",setItemArg6:"type2",funcNameArg1:"none",funcNameArg3:"block",funcNameArg5:"none"})}),g({localItem:"backgroundStyle",funcName:o,funcNameArg1:"light",funcNameArg3:"dark",funcNameArg5:"light"}),y.addEventListener("click",function(){f({localItem:"backgroundStyle",funcName:o,setItemArg1:"backgroundStyle",setItemArg2:"type2",setItemArg3:"backgroundStyle",setItemArg4:"type1",setItemArg5:"backgroundStyle",setItemArg6:"type2",funcNameArg1:"dark",funcNameArg3:"light",funcNameArg5:"dark"})}),g({localItem:"dayWeek",funcName:u,funcNameArg1:"",funcNameArg3:"disable",funcNameArg5:"disable"}),h.addEventListener("click",function(){f({localItem:"dayWeek",funcName:u,setItemArg1:"dayWeek",setItemArg2:"type2",setItemArg3:"dayWeek",setItemArg4:"type1",setItemArg5:"dayWeek",setItemArg6:"type2",funcNameArg1:"disable"})}),i.addEventListener("keypress",s)),{setItem:t,getItem:a}}();