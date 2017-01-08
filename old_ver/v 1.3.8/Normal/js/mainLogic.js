(function() {
"use strict";

var oddElements = document.querySelectorAll('.day_week li:nth-child(odd)'),
    evenElements = document.querySelectorAll('.day_week li:nth-child(even)'),
    liSetup = document.querySelector(".li-setup"),
    menu = document.querySelector(".menu"),
    menuSetup = document.querySelector(".menu-setup"),
    body = document.querySelector("body"),
    footer = document.querySelector(".footer"),
    backgroundSetup = document.querySelector(".background-setup"),
    daySetup = document.querySelector(".day-setup");

    function setElemColor(element,color) {
      function darkColor (elem) {
        elem.style.background = "#61697c";
      };
      function lightColor (elem) {
        elem.style.background = "#4f5a6e";
      };
      if (element === "oddElements" && color === "lightColor") {
        [].forEach.call(oddElements,lightColor);
      }
      else if (element === "oddElements" && color === "darkColor") {
        [].forEach.call(oddElements,darkColor);
      }
      else if (element === "evenElements" && color === "lightColor") {
        [].forEach.call(evenElements,lightColor);
      }
      else if (element === "evenElements" && color === "darkColor") {
        [].forEach.call(evenElements,darkColor);
      }
      else {
        return;
      };
    };
    function setLocalItem (item,type) {
      localStorage.setItem(item,type);
    };
    function getLocalItem (item) {
      return localStorage.getItem(item);
    };
    function menuStyle (key) {
      switch (key) {
        case "block":
          menu.style.display = "block";
          break;
        case "none":
          menu.style.display = "none";
          break;
        default:
      };
    };
    function setBackground (key) {
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
      };
    };
    function setDayUrlHash(key) {
      var currentDay = new Date().getDay();
      if (key === "disable") {location.hash = ""}
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
          };
       };
    };
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
};


if (storageAvailable('localStorage')) {
if(new Date().getWeek() % 2 !== 0) {
  switch (getLocalItem ("colorStyle")) {
  case "type1":
    setElemColor("oddElements","lightColor");
    break;
  case "type2":
    setElemColor("oddElements","darkColor");
    break;
  default:
    setElemColor("oddElements","darkColor");
  };
liSetup.addEventListener( "click" , function(){
  switch (getLocalItem ("colorStyle")) {
  case "type1":
    setLocalItem ("colorStyle", "type2");
    setElemColor("oddElements","darkColor");
    break;
  case "type2":
    setLocalItem ("colorStyle", "type1");
    setElemColor("oddElements","lightColor");
    break;
  default:
    localStorage.setItem("colorStyle", "type1");
    setElemColor("oddElements","lightColor");
  };
  }); 
}
else {
  switch (getLocalItem ("colorStyle")) {
  case "type1":
    setElemColor("evenElements","lightColor");
    break;
  case "type2":
    setElemColor("evenElements","darkColor");
    break;
  default:
    setElemColor("evenElements","darkColor");
  };
liSetup.addEventListener( "click" , function(){
  switch (getLocalItem ("colorStyle")) {
  case "type1":
    setLocalItem ("colorStyle", "type2");
    setElemColor("evenElements","darkColor");
    break;
  case "type2":
    setLocalItem ("colorStyle", "type1");
    setElemColor("evenElements","lightColor");
    break;
  default:
    localStorage.setItem("colorStyle", "type1");
    setElemColor("evenElements","lightColor");
  };
  });
};


//menuSetup

  switch (getLocalItem ("menuStyle")) {
  case "type1":
    menuStyle("block");
    break;
  case "type2":
    menuStyle("none");
    break;
  default:
    menuStyle("block");
  };

menuSetup.addEventListener( "click" , function(){
  switch (getLocalItem ("menuStyle")) {
  case "type1":
    setLocalItem ("menuStyle", "type2");
    menuStyle("none");
    break;
  case "type2":
    setLocalItem ("menuStyle", "type1");
    menuStyle("block");
    break;
  default:
    setLocalItem ("menuStyle", "type2");
    menuStyle("none");
  };
  });


//backgroundStyle

  switch (getLocalItem ("backgroundStyle")) {
  case "type1":
    setBackground("light");
    break;
  case "type2":
    setBackground("dark");
    break;
  default:
    setBackground("light");
  };

backgroundSetup.addEventListener( "click" , function(){
  switch (getLocalItem ("backgroundStyle")) {
  case "type1":
    setLocalItem ("backgroundStyle", "type2");
    setBackground("dark");
    break;
  case "type2":
    setLocalItem ("backgroundStyle", "type1");
    setBackground("light");
    break;
  default:
    setLocalItem ("backgroundStyle", "type1");
    setBackground("dark");
  };
  });


//dayWeek

  switch (getLocalItem ("dayWeek")) {
  case "type1":
    setDayUrlHash();
    break;
  case "type2":
    setDayUrlHash("disable");
    break;
  default:
    setDayUrlHash("disable");
  };

daySetup.addEventListener( "click" , function(){
  switch (getLocalItem ("dayWeek")) {
  case "type1":
    setLocalItem ("dayWeek", "type2");
    setDayUrlHash("disable");
    break;
  case "type2":
    setLocalItem ("dayWeek", "type1");
    setDayUrlHash();
    break;
  default:
    setLocalItem ("dayWeek", "type1");
    setDayUrlHash();
  };
  });
}
else {
  console.log("Sorry. We can't use localStorage awesomeness :(")
};
})();

