var lightWeightSchedule = (function() {

"use strict";

var body = document.querySelector("body"),
    liSetup = document.querySelector(".li-setup"),
    backgroundSetup = document.querySelector(".background-setup"),
    daySetup = document.querySelector(".day-setup"),
    menuSetup = document.querySelector(".menu-setup");

    function EvenOrOdd() {
      //returns false if the week even, or true if the week odd

      // Warning!!! False/true reversed for spbmpei schedule. !!!

      if (new Date().getWeek() % 2 === 0) {
        return true;
      } else {
        return false;
      }
    }

    function darkColor (elem) {
      elem.style.background = "#61697c";
    }
    function lightColor (elem) {
      elem.style.background = "#4f5a6e";
    }

    function setElemColor(element,color) {
      var oddElements = document.querySelectorAll('.day_week li:nth-child(odd)'),
          evenElements = document.querySelectorAll('.day_week li:nth-child(even)'),
          allTimeLightColor = document.querySelectorAll('ul.day_week:nth-child(4)>li:nth-child(n+5):nth-child(-n+6),ul.day_week:nth-child(6)>li:nth-child(n+3):nth-child(-n+4),ul.day_week:nth-child(8)>li:nth-child(n+3):nth-child(-n+4)');
          // Warning!!! Backlight hack (Only for 6 semester) !!!
          //!!!


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

    function setLocalItem (item,type) {
      localStorage.setItem(item,type);
    }

    function getLocalItem (item) {
      return localStorage.getItem(item);
    }

    function menuStyle (key) {
      var menu = document.querySelector(".menu");
      switch (key) {
        case "block":
          menu.style.display = "block";
          break;
        case "none":
          menu.style.display = "none";
          break;
        default:
      }
    }

    function setBackground (key) {
          var footer = document.querySelector(".footer");
      switch (key) {
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
      var pressKey;
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
      var currentDay = new Date().getDay();
      if (currentDay === 6 || currentDay === 0) {daySetup.style.display = "none";}
      if (key === "disable") {location.hash = "";}
       else {
          switch (currentDay) {
          case 1:
            location.hash = "monday";
            break;
          case 2:
            location.hash = "tuesday";
            break;
          case 3:
            location.hash = "wednesday";
            break;
          case 4:
            location.hash = "thursday";
            break;
          case 5:
            location.hash = "friday";
            break;
          default:
            location.hash = "";
        }
      }
    }

    function manualSetDayUrlHash(event) {
      var presskey = DetectPressKey(event);
      switch (presskey) {
      case "1":
        location.hash = "monday";
        break;
      case "2":
        location.hash = "tuesday";
        break;
      case "3":
        location.hash = "wednesday";
        break;
      case "4":
        location.hash = "thursday";
        break;
      case "5":
        location.hash = "friday";
        break;
      default:
      }
    }

    Date.prototype.getWeek = function () {
        var target = new Date(this.valueOf());
        var dayNr = (this.getDay() + 6) % 7;
        target.setDate(target.getDate() - dayNr + 3);
        var firstThursday = target.valueOf();
        target.setMonth(0, 1);
        if (target.getDay() != 4) {
        target.setMonth(0, 1 + ((4 - target.getDay()) + 7) % 7);
        }
        return 1 + Math.ceil((firstThursday - target) / 604800000);
    };

    function styleSetup(obj) {
       switch (getLocalItem (obj.localItem)) {
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
       switch (getLocalItem (obj.localItem)) {
       case "type1":
         setLocalItem (obj.setLocalItemArg1, obj.setLocalItemArg2);
         obj.funcName(obj.funcNameArg1, obj.funcNameArg2);
         break;
       case "type2":
         setLocalItem (obj.setLocalItemArg3, obj.setLocalItemArg4);
         obj.funcName(obj.funcNameArg3, obj.funcNameArg4);
         break;
       default:
         setLocalItem (obj.setLocalItemArg5, obj.setLocalItemArg6);
         obj.funcName(obj.funcNameArg5, obj.funcNameArg6);
       }
    }

//Local storage support


function storageAvailable(type) {
  try {
    var storage = window[type],
      x = '__storage_test__';
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
    liSetup.addEventListener( "click" , function() {manualStyleSetup({
       localItem: "colorStyle",
       funcName: setElemColor,
       setLocalItemArg1: "colorStyle",
       setLocalItemArg2: "type2",
       setLocalItemArg3: "colorStyle",
       setLocalItemArg4: "type1",
       setLocalItemArg5: "colorStyle",
       setLocalItemArg6: "type1",
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
    liSetup.addEventListener( "click" , function() {manualStyleSetup({
       localItem: "colorStyle",
       funcName: setElemColor,
       setLocalItemArg1: "colorStyle",
       setLocalItemArg2: "type2",
       setLocalItemArg3: "colorStyle",
       setLocalItemArg4: "type1",
       setLocalItemArg5: "colorStyle",
       setLocalItemArg6: "type1",
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

menuSetup.addEventListener( "click" , function() { 
manualStyleSetup({
  localItem: "menuStyle",
  funcName: menuStyle,
  setLocalItemArg1: "menuStyle",
  setLocalItemArg2: "type2",
  setLocalItemArg3: "menuStyle",
  setLocalItemArg4: "type1",
  setLocalItemArg5: "menuStyle",
  setLocalItemArg6: "type2",
  funcNameArg1: "none",
  funcNameArg3: "block",
  funcNameArg5: "none"
  }); });

//backgroundStyle

styleSetup({
  localItem: "backgroundStyle",
  funcName: setBackground,
  funcNameArg1: "light",
  funcNameArg3: "dark",
  funcNameArg5: "light"
});

backgroundSetup.addEventListener( "click" , function() { 
manualStyleSetup({
  localItem: "backgroundStyle",
  funcName: setBackground,
  setLocalItemArg1: "backgroundStyle",
  setLocalItemArg2: "type2",
  setLocalItemArg3: "backgroundStyle",
  setLocalItemArg4: "type1",
  setLocalItemArg5: "backgroundStyle",
  setLocalItemArg6: "type2",
  funcNameArg1: "dark",
  funcNameArg3: "light",
  funcNameArg5: "dark"
  }); });

//dayWeek

styleSetup({
  localItem: "dayWeek",
  funcName: setDayUrlHash,
  funcNameArg1: "",
  funcNameArg3: "disable",
  funcNameArg5: "disable"
});
daySetup.addEventListener( "click" , function() { 
manualStyleSetup({
  localItem: "dayWeek",
  funcName: setDayUrlHash,
  setLocalItemArg1: "dayWeek",
  setLocalItemArg2: "type2",
  setLocalItemArg3: "dayWeek",
  setLocalItemArg4: "type1",
  setLocalItemArg5: "dayWeek",
  setLocalItemArg6: "type2",
  funcNameArg1: "disable"
  }); });

// keyboardNavigation

body.addEventListener( "keypress" , manualSetDayUrlHash);

}
else {
  console.log("Sorry. We can't use localStorage awesomeness :(");
}

return {
  "setLocalItem": setLocalItem,
  "getLocalItem": getLocalItem
}

})();




