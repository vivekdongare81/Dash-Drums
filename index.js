

var len=document.querySelectorAll("button").length;
//     Appling click eventListener to All Drums
for(var i=0;i<len;i++)
{
   document.querySelectorAll("button")[i].addEventListener("click",function() {
      
      var classtype=this.classList[0];

       playsound(classtype);
       playanimination(classtype);
   });
}
   
//   applying  keypress evenlistener to Document
document.addEventListener("keypress",function(event){
  playsound(event.key);
  playanimination(event.key);
 
});

//   Function that calls Audio As Per The Drum 
function playsound(classtypeOrKeyType)
{
 switch(classtypeOrKeyType)
 {
     case "w": var audio = new Audio('sounds/tom-1.mp3');
                           audio.play(); break;
     case "a": var audio = new Audio('sounds/tom-2.mp3');
                           audio.play(); break; 

     case "s": var audio = new Audio('sounds/tom-3.mp3');
                           audio.play(); break;
     case "d": var audio = new Audio('sounds/tom-4.mp3');
                           audio.play(); break;
     case "j": var audio = new Audio('sounds/crash.mp3');
                           audio.play(); break;
     case "k": var audio = new Audio('sounds/snare.mp3');
                           audio.play(); break;
     case "l": var audio = new Audio('sounds/kick-bass.mp3');
                           audio.play(); break;
                                               
 }
}

// function that applies and removes animation to the Box   
function playanimination(classtype)
{
var classname="."+classtype;
console.log(classname);
document.querySelector(classname).classList.add("animation");
 
 
setTimeout(function(){document.querySelector(classname).classList.remove("animation");},1500);

}