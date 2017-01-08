(function() {

var d1 = new Date(); 
    d0 = new Date(),
    oddElements = document.querySelectorAll('.day_week li:nth-child(odd)'),
    evenElements = document.querySelectorAll('.day_week li:nth-child(even)'),
    backgrButton = document.querySelector(".background-setup"),
    sideMenu = document.querySelector(".menu"),
    menuButton = document.querySelector(".menu-setup");


    function maxOpacity (element) {
      element.style.opacity = ".9";
    };
    function minOpacity (element) {
      element.style.opacity = "1";
    };


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

  backgrButton.addEventListener( "click" , function(){
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

  backgrButton.addEventListener( "click" , function(){
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



if (localStorage.getItem("MenuStyle") === "type1") {
    sideMenu.style.display = "block";
  }
  else if (localStorage.getItem("MenuStyleMenuStyle") === "type2") {
    sideMenu.style.display = "none";
  }
  else {
    sideMenu.style.display = "none";
  };

  menuButton.addEventListener( "click" , function(){
  if (localStorage.getItem("MenuStyle") === "type1") {
    localStorage.setItem("MenuStyle", "type2");
    sideMenu.style.display = "none";
  }
  else if (localStorage.getItem("MenuStyle") === "type2") {
    localStorage.setItem("MenuStyle", "type1");
    sideMenu.style.display = "block";
  }
  else {
    localStorage.setItem("MenuStyle", "type1");
    sideMenu.style.display = "block";
  };
  });
}
else {
  console.log("Sorry. We can't use localStorage awesomeness :(")
};


})();

