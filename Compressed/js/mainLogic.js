!function(){"use strict";function f(){return(new Date).getWeek()%2!==0}function g(a,b){function e(a){a.style.background="#61697c"}function f(a){a.style.background="#4f5a6e"}var c=document.querySelectorAll(".day_week li:nth-child(odd)"),d=document.querySelectorAll(".day_week li:nth-child(even)");if("oddElements"===a&&"lightColor"===b)[].forEach.call(c,f);else if("oddElements"===a&&"darkColor"===b)[].forEach.call(c,e);else if("evenElements"===a&&"lightColor"===b)[].forEach.call(d,f);else{if("evenElements"!==a||"darkColor"!==b)return;[].forEach.call(d,e)}}function h(a,b){localStorage.setItem(a,b)}function i(a){return localStorage.getItem(a)}function j(a){var b=document.querySelector(".menu");switch(a){case"block":b.style.display="block";break;case"none":b.style.display="none"}}function k(b){var c=document.querySelector(".footer");switch(b){case"light":a.style.backgroundImage="url(img/diagonal_striped_brick.png)",c.style.color="#000";break;case"dark":a.style.backgroundImage="url(img/escheresque_ste.png)",c.style.color="#fff"}}function l(a){var b;if(null===a.which){if(a.keyCode<32)return;b=String.fromCharCode(a.keyCode)}if(0!==a.which&&0!==a.charCode){if(a.which<32)return;b=String.fromCharCode(a.which)}return b}function m(a){var b=(new Date).getDay();if("disable"===a)location.hash="";else switch(b){case 1:location.hash="monday";break;case 2:location.hash="tuesday";break;case 3:location.hash="wednesday";break;case 4:location.hash="thursday";break;case 5:location.hash="friday";break;default:location.hash=""}}function n(a){var b=l(a);switch(b){case"1":location.hash="monday";break;case"2":location.hash="tuesday";break;case"3":location.hash="wednesday";break;case"4":location.hash="thursday";break;case"5":location.hash="friday"}}function o(a){switch(i(a.localItem)){case"type1":a.funcName(a.funcNameArg1,a.funcNameArg2);break;case"type2":a.funcName(a.funcNameArg3,a.funcNameArg4);break;default:a.funcName(a.funcNameArg5,a.funcNameArg6)}}function p(a){switch(i(a.localItem)){case"type1":h(a.setLocalItemArg1,a.setLocalItemArg2),a.funcName(a.funcNameArg1,a.funcNameArg2);break;case"type2":h(a.setLocalItemArg3,a.setLocalItemArg4),a.funcName(a.funcNameArg3,a.funcNameArg4);break;default:h(a.setLocalItemArg5,a.setLocalItemArg6),a.funcName(a.funcNameArg5,a.funcNameArg6)}}function q(a){try{var b=window[a],c="__storage_test__";return b.setItem(c,c),b.removeItem(c),!0}catch(a){return!1}}var a=document.querySelector("body"),b=document.querySelector(".li-setup"),c=document.querySelector(".background-setup"),d=document.querySelector(".day-setup"),e=document.querySelector(".menu-setup");Date.prototype.getWeek=function(){var a=new Date(this.valueOf()),b=(this.getDay()+6)%7;a.setDate(a.getDate()-b+3);var c=a.valueOf();return a.setMonth(0,1),4!=a.getDay()&&a.setMonth(0,1+(4-a.getDay()+7)%7),1+Math.ceil((c-a)/6048e5)},q("localStorage")?(f()?(o({localItem:"colorStyle",funcName:g,funcNameArg1:"oddElements",funcNameArg2:"lightColor",funcNameArg3:"oddElements",funcNameArg4:"darkColor",funcNameArg5:"oddElements",funcNameArg6:"darkColor"}),b.addEventListener("click",function(){p({localItem:"colorStyle",funcName:g,setLocalItemArg1:"colorStyle",setLocalItemArg2:"type2",setLocalItemArg3:"colorStyle",setLocalItemArg4:"type1",setLocalItemArg5:"colorStyle",setLocalItemArg6:"type1",funcNameArg1:"oddElements",funcNameArg2:"darkColor",funcNameArg3:"oddElements",funcNameArg4:"lightColor",funcNameArg5:"oddElements",funcNameArg6:"lightColor"})})):(o({localItem:"colorStyle",funcName:g,funcNameArg1:"evenElements",funcNameArg2:"lightColor",funcNameArg3:"evenElements",funcNameArg4:"darkColor",funcNameArg5:"evenElements",funcNameArg6:"darkColor"}),b.addEventListener("click",function(){p({localItem:"colorStyle",funcName:g,setLocalItemArg1:"colorStyle",setLocalItemArg2:"type2",setLocalItemArg3:"colorStyle",setLocalItemArg4:"type1",setLocalItemArg5:"colorStyle",setLocalItemArg6:"type1",funcNameArg1:"evenElements",funcNameArg2:"darkColor",funcNameArg3:"evenElements",funcNameArg4:"lightColor",funcNameArg5:"evenElements",funcNameArg6:"lightColor"})})),o({localItem:"menuStyle",funcName:j,funcNameArg1:"block",funcNameArg3:"none",funcNameArg5:"none"}),e.addEventListener("click",function(){p({localItem:"menuStyle",funcName:j,setLocalItemArg1:"menuStyle",setLocalItemArg2:"type2",setLocalItemArg3:"menuStyle",setLocalItemArg4:"type1",setLocalItemArg5:"menuStyle",setLocalItemArg6:"type2",funcNameArg1:"none",funcNameArg3:"block",funcNameArg5:"none"})}),o({localItem:"backgroundStyle",funcName:k,funcNameArg1:"light",funcNameArg3:"dark",funcNameArg5:"light"}),c.addEventListener("click",function(){p({localItem:"backgroundStyle",funcName:k,setLocalItemArg1:"backgroundStyle",setLocalItemArg2:"type2",setLocalItemArg3:"backgroundStyle",setLocalItemArg4:"type1",setLocalItemArg5:"backgroundStyle",setLocalItemArg6:"type2",funcNameArg1:"dark",funcNameArg3:"light",funcNameArg5:"dark"})}),o({localItem:"dayWeek",funcName:m,funcNameArg1:"",funcNameArg3:"disable",funcNameArg5:"disable"}),d.addEventListener("click",function(){p({localItem:"dayWeek",funcName:m,setLocalItemArg1:"dayWeek",setLocalItemArg2:"type2",setLocalItemArg3:"dayWeek",setLocalItemArg4:"type1",setLocalItemArg5:"dayWeek",setLocalItemArg6:"type2",funcNameArg1:"disable"})}),a.addEventListener("keypress",n)):console.log("Sorry. We can't use localStorage awesomeness :(")}();