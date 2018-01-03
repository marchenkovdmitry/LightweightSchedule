let lightWeightSchedule = (() => {

"use strict";

let body = document.querySelector("body");
let liSetup = document.querySelector(".li-setup");
let backgroundSetup = document.querySelector(".background-setup");
let daySetup = document.querySelector(".day-setup");
let menuSetup = document.querySelector(".menu-setup");

let setHash = (hash = '') => location.hash = hash;
let hideElem = (elem) => elem.style.display = 'none';
let setItem = (item,key) => localStorage.setItem(item,key);
let getItem = (item) => localStorage.getItem(item);
let darkColor = (elem) => elem.style.background = "#61697c";
let lightColor = (elem) => elem.style.background = "#4f5a6e";

let EvenOrOdd = () =>  {
  if (new Date().getWeek() % 2 !== 0) {
    return true;
  } else {
    return false;
  }
}

function setElemColor(element,color) {
  let oddElements = document.querySelectorAll('.day_week li:nth-child(odd)');
  let evenElements = document.querySelectorAll('.day_week li:nth-child(even)');

  /*
    Warning!!! Backlight hack (Only for 7 semester) !!!
  */
  let allTimeLightColor = document.querySelectorAll('ul.day_week:nth-child(6)>li:nth-child(n+7):nth-child(-n+8),ul.day_week:nth-child(8)>li:nth-child(n+3):nth-child(-n+4)');


  if (element === "oddElements" && color === "lightColor") {
    [].forEach.call(oddElements,lightColor);
    [].forEach.call(allTimeLightColor,lightColor);
  }
  else if (element === "oddElements" && color === "darkColor") {
    [].forEach.call(oddElements,darkColor);
    [].forEach.call(allTimeLightColor,darkColor);
  }
  else if (element === "evenElements" && color === "lightColor") {
    [].forEach.call(evenElements,lightColor);
    [].forEach.call(allTimeLightColor,lightColor);
  }
  else if (element === "evenElements" && color === "darkColor") {
    [].forEach.call(evenElements,darkColor);
    [].forEach.call(allTimeLightColor,darkColor);
  }
  else {
    return;
  }
}

function menuStyle (display, selector = '.menu') {
  let menu = document.querySelector(selector);
  switch (display) {
    case "block":
      menu.style.display = "block";
      break;
    case "none":
      menu.style.display = "none";
      break;
    default:
  }
}

function setBackground (colorScheme, selector = '.footer') {
  let footer = document.querySelector(selector);
  switch (colorScheme) {
    case "light":
      body.style.backgroundImage = "url(img/diagonal_striped_brick.png)";
      footer.style.color = "#000";
      break;
    case "dark":
      body.style.backgroundImage = "url(img/escheresque_ste.png)";
      footer.style.color = "#fff";
      break;
    default:
  }
}

function DetectPressKey(event) {
  let pressKey;
  if (event.which === null) {
    if (event.keyCode < 32) return;
    pressKey = String.fromCharCode(event.keyCode);
  }
  if (event.which !== 0 && event.charCode !== 0) {
    if (event.which < 32) return;
    pressKey = String.fromCharCode(event.which);
  }
  return pressKey;
}

function setDayUrlHash(key) {
  let currentDay = new Date().getDay();
  if (currentDay === 6 || currentDay === 0) {
    daySetup.style.display = "none";
  }
  if (key === "disable") {
    setHash();
  } else {
    switch (currentDay) {
      case 1:
        setHash('monday');
        break;
      case 2:
        setHash('tuesday');
        break;
      case 3:
        setHash('wednesday');
        break;
      case 4:
        setHash('thursday');
        break;
      case 5:
        setHash('friday');
        break;
      default:
        setHash('');
    }
  }
}

function manualSetDayUrlHash(event) {
  let presskey = DetectPressKey(event);
  switch (presskey) {
    case "1":
      setHash('monday');
      break;
    case "2":
      setHash('tuesday');
      break;
    case "3":
      setHash('wednesday');
      break;
    case "4":
      setHash('thursday');
      break;
    case "5":
      setHash('friday');
      break;
    default:
  }
}

function styleSetup(obj) {
   switch (getItem (obj.localItem)) {
   case "type1":
     obj.funcName(obj.funcNameArg1,obj.funcNameArg2);
     break;
   case "type2":
     obj.funcName(obj.funcNameArg3,obj.funcNameArg4);
     break;
   default:
     obj.funcName(obj.funcNameArg5,obj.funcNameArg6);
   }
}

function manualStyleSetup(obj) {
   switch (getItem (obj.localItem)) {
   case "type1":
     setItem (obj.setItemArg1, obj.setItemArg2);
     obj.funcName(obj.funcNameArg1, obj.funcNameArg2);
     break;
   case "type2":
     setItem (obj.setItemArg3, obj.setItemArg4);
     obj.funcName(obj.funcNameArg3, obj.funcNameArg4);
     break;
   default:
     setItem (obj.setItemArg5, obj.setItemArg6);
     obj.funcName(obj.funcNameArg5, obj.funcNameArg6);
   }
}

Date.prototype.getWeek = function () {
  let target = new Date(this.valueOf());
  let dayNr = (this.getDay() + 6) % 7;
  let firstThursday = target.valueOf();
  target.setDate(target.getDate() - dayNr + 3);
  target.setMonth(0, 1);

  if (target.getDay() != 4) {
    target.setMonth(0, 1 + ((4 - target.getDay()) + 7) % 7);
  }

  return 1 + Math.ceil((firstThursday - target) / 604800000);
};


//Local storage support

function storageAvailable(type) {
  try {
    let storage = window[type];
    let x = '__storage_test__';
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  }
  catch(e) {
    return false;
  }
}


if (storageAvailable('localStorage')) {


  if (EvenOrOdd()) {
    styleSetup({
      localItem: "colorStyle",
      funcName: setElemColor,
      funcNameArg1: "oddElements",
      funcNameArg2: "lightColor",
      funcNameArg3: "oddElements",
      funcNameArg4: "darkColor",
      funcNameArg5: "oddElements",
      funcNameArg6: "darkColor"
    });
    liSetup.addEventListener( "click" , () => {manualStyleSetup({
       localItem: "colorStyle",
       funcName: setElemColor,
       setItemArg1: "colorStyle",
       setItemArg2: "type2",
       setItemArg3: "colorStyle",
       setItemArg4: "type1",
       setItemArg5: "colorStyle",
       setItemArg6: "type1",
       funcNameArg1: "oddElements",
       funcNameArg2: "darkColor",
       funcNameArg3: "oddElements",
       funcNameArg4: "lightColor",
       funcNameArg5: "oddElements",
       funcNameArg6: "lightColor"
      });
    });
  }
  else {
    styleSetup({
      localItem: "colorStyle",
      funcName: setElemColor,
      funcNameArg1: "evenElements",
      funcNameArg2: "lightColor",
      funcNameArg3: "evenElements",
      funcNameArg4: "darkColor",
      funcNameArg5: "evenElements",
      funcNameArg6: "darkColor"
    });
    liSetup.addEventListener( "click" , () => {manualStyleSetup({
       localItem: "colorStyle",
       funcName: setElemColor,
       setItemArg1: "colorStyle",
       setItemArg2: "type2",
       setItemArg3: "colorStyle",
       setItemArg4: "type1",
       setItemArg5: "colorStyle",
       setItemArg6: "type1",
       funcNameArg1: "evenElements",
       funcNameArg2: "darkColor",
       funcNameArg3: "evenElements",
       funcNameArg4: "lightColor",
       funcNameArg5: "evenElements",
       funcNameArg6: "lightColor"
      });
    });
  }


//menuSetup

styleSetup({
  localItem: "menuStyle",
  funcName: menuStyle,
  funcNameArg1: "block",
  funcNameArg3: "none",
  funcNameArg5: "none"
});

menuSetup.addEventListener( "click" , () => { 
  manualStyleSetup({
    localItem: "menuStyle",
    funcName: menuStyle,
    setItemArg1: "menuStyle",
    setItemArg2: "type2",
    setItemArg3: "menuStyle",
    setItemArg4: "type1",
    setItemArg5: "menuStyle",
    setItemArg6: "type2",
    funcNameArg1: "none",
    funcNameArg3: "block",
    funcNameArg5: "none"
  });
});


//backgroundStyle

styleSetup({
  localItem: "backgroundStyle",
  funcName: setBackground,
  funcNameArg1: "light",
  funcNameArg3: "dark",
  funcNameArg5: "light"
});

backgroundSetup.addEventListener( "click" , () => { 
  manualStyleSetup({
    localItem: "backgroundStyle",
    funcName: setBackground,
    setItemArg1: "backgroundStyle",
    setItemArg2: "type2",
    setItemArg3: "backgroundStyle",
    setItemArg4: "type1",
    setItemArg5: "backgroundStyle",
    setItemArg6: "type2",
    funcNameArg1: "dark",
    funcNameArg3: "light",
    funcNameArg5: "dark"
  });
});

//dayWeek

styleSetup({
  localItem: "dayWeek",
  funcName: setDayUrlHash,
  funcNameArg1: "",
  funcNameArg3: "disable",
  funcNameArg5: "disable"
});

daySetup.addEventListener( "click" , () => { 
  manualStyleSetup({
    localItem: "dayWeek",
    funcName: setDayUrlHash,
    setItemArg1: "dayWeek",
    setItemArg2: "type2",
    setItemArg3: "dayWeek",
    setItemArg4: "type1",
    setItemArg5: "dayWeek",
    setItemArg6: "type2",
    funcNameArg1: "disable"
  });
});

// keyboardNavigation

body.addEventListener("keypress" , manualSetDayUrlHash);

}
else {
  console.info("Sorry. We can't use localStorage advantages.");
  [].forEach.call([liSetup,backgroundSetup,daySetup,menuSetup], hideElem);
  setBackground('light');
}
return {
  "setItem": setItem,
  "getItem": getItem
}
})();







