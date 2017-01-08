d0 = new Date(); 
d0.setFullYear((new Date()).getMonth() < 9 ? (new Date()).getFullYear() - 1 : (new Date()).getFullYear(), 8, 1); 
d1 = new Date(); 
dt = Math.floor(((d1.getTime() - d0.getTime() + 1000*60*60*24) / (1000*60*60*24*7)) + 1); 
if(dt % 2) {
  (function(){
    	[].forEach.call(
           document.querySelectorAll('li:nth-child(1),li:nth-child(3),li:nth-child(5),li:nth-child(7)'),
           function (item) { item.style.opacity = '.9'; }
           )
    })();
} 
else {
    (function(){
    	[].forEach.call(
           document.querySelectorAll('li:nth-child(2),li:nth-child(4),li:nth-child(6),li:nth-child(8)'),
           function (item) { item.style.opacity = '.9'; }
           )
    })();
};
