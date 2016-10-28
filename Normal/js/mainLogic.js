(function() {
"use strict";

var dt,
    d1 = new Date(),
    d0 = new Date(),
    oddElements = document.querySelectorAll('.day_week li:nth-child(odd)'),
    evenElements = document.querySelectorAll('.day_week li:nth-child(even)'),
    opacitySetup = document.querySelector(".opacity-setup"),
    menu = document.querySelector(".menu"),
    menuSetup = document.querySelector(".menu-setup"),
    body = document.querySelector("body"),
    footer = document.querySelector(".footer"),
    backgroundSetup = document.querySelector(".background-setup");


    function maxOpacity (element) {
      element.style.opacity = ".9";
    };
    function minOpacity (element) {
      element.style.opacity = "1";
    };
    function menuStyle (key) {
      if (key === "block") {
        menu.style.display = "block";
      }
      else if (key === "none") {
        menu.style.display = "none";
      };
    };
    function setBackground (key) {
      if (key === "light") {
        body.style.backgroundImage = "url(img/diagonal_striped_brick.png)";
        footer.style.color = "#000";
      }
      else if (key === "dark") {
        body.style.backgroundImage = "url(img/escheresque_ste.png)";
        footer.style.color = "#fff";
      };
    }
    

d0.setFullYear((new Date()).getMonth() < 9 ? (new Date()).getFullYear() - 1 : (new Date()).getFullYear(), 8, 1); 
dt = Math.floor(((d1.getTime() - d0.getTime() + 1000*60*60*24) / (1000*60*60*24*7)) + 1); 


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
if(dt % 2) {
  if (localStorage.getItem("transparencyStyle") === "type1") {
    [].forEach.call(oddElements,minOpacity);
  }
  else if (localStorage.getItem("transparencyStyle") === "type2") {
    [].forEach.call(oddElements,maxOpacity);
  }
  else {
    [].forEach.call(oddElements,maxOpacity);
  };

opacitySetup.addEventListener( "click" , function(){
  if (localStorage.getItem("transparencyStyle") === "type1") {
    localStorage.setItem("transparencyStyle", "type2");
    [].forEach.call(oddElements,maxOpacity);
  }
  else if (localStorage.getItem("transparencyStyle") === "type2") {
    localStorage.setItem("transparencyStyle", "type1");
    [].forEach.call(oddElements,minOpacity);
  }
  else {
    localStorage.setItem("transparencyStyle", "type1");
    [].forEach.call(oddElements,minOpacity);
  };
  });
}



else {
  if (localStorage.getItem("transparencyStyle") === "type1") {
    [].forEach.call(evenElements,minOpacity);
  }
  else if (localStorage.getItem("transparencyStyle") === "type2") {
    [].forEach.call(evenElements,maxOpacity);
  }
  else {
    [].forEach.call(evenElements,maxOpacity);
  };

opacitySetup.addEventListener( "click" , function(){
  if (localStorage.getItem("transparencyStyle") === "type1") {
    localStorage.setItem("transparencyStyle", "type2");
    [].forEach.call(evenElements,maxOpacity);
  }
  else if (localStorage.getItem("transparencyStyle") === "type2") {
    localStorage.setItem("transparencyStyle", "type1");
    [].forEach.call(evenElements,minOpacity);
  }
  else {
    localStorage.setItem("transparencyStyle", "type1");
    [].forEach.call(evenElements,minOpacity);
  };
  });
};



  if (localStorage.getItem("menuStyle") === "type1") {
    menuStyle("block");
  }
  else if (localStorage.getItem("menuStyle") === "type2") {
    menuStyle("none");
  }
  else {
    menuStyle("block");
  }

menuSetup.addEventListener( "click" , function(){
  if (localStorage.getItem("menuStyle") === "type1") {
    localStorage.setItem("menuStyle", "type2");
    menuStyle("none");
  }
  else if (localStorage.getItem("menuStyle") === "type2") {
    localStorage.setItem("menuStyle", "type1");
    menuStyle("block");
  }
  else {
    localStorage.setItem("menuStyle", "type2");
    menuStyle("none");
  }
  });




  if (localStorage.getItem("backgroundStyle") === "type1") {
    setBackground("light");
  }
  else if (localStorage.getItem("backgroundStyle") === "type2") {
    setBackground("dark");
  }
  else {
    setBackground("light");
  }

backgroundSetup.addEventListener( "click" , function(){
  if (localStorage.getItem("backgroundStyle") === "type1") {
    localStorage.setItem("backgroundStyle", "type2");
    setBackground("dark");
  }
  else if (localStorage.getItem("backgroundStyle") === "type2") {
    localStorage.setItem("backgroundStyle", "type1");
    setBackground("light");
  }
  else {
    localStorage.setItem("backgroundStyle", "type1");
    setBackground("dark");
  }
  });

}
else {
  console.log("Sorry. We can't use localStorage awesomeness :(")
};

})();

