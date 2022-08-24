var numberofDrumButtons= document.querySelectorAll(".drum").length;

for(var i=0 ;i<numberofDrumButtons;i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
      
        var buttonInnerHTML=this.innerHTML;

        makesound(buttonInnerHTML);
      
    });
    
}


document.addEventListener("keypress",function(event)
{

 makesound(event.key);
});



function makesound(key)
{
    var buttonInnerHTML1=this.innerHTML;

    switch (key){
   case"w":
    var audio=new Audio("C:/Users/tikkh/Downloads/crash.mp3");
    audio.play();
    break;

    case"a":
    var audio=new Audio("C:/Users/tikkh/Downloads/crash.mp3");
    audio.play();
    break;


    case"s":
    var audio=new Audio("C:/Users/tikkh/Downloads/tom-1.mp3");
    audio.play();
    break;

    case"j":
    var audio=new Audio("C:/Users/tikkh/Downloads/crash.mp3");
    audio.play();
    break;

    case"k":
    var audio=new Audio("C:/Users/tikkh/Downloads/tom-1.mp3");
    audio.play();
    break;
  
    case"d":
    var audio=new Audio("C:/Users/tikkh/Downloads/tom-1.mp3");
    audio.play();
    break;


    case"l":
    var audio=new Audio("C:/Users/tikkh/Downloads/tom-1.mp3");
    audio.play();
    break;

    default: console.log(buttonInnerHTML1);
}
}

function buttonAnimation(currentkey){
    var activebutton=document.querySelector("."+currentkey);
  activebutton.classList.add("pressed");

  setTimeout(function(){
    activebutton.classList.remove("pressed" )
  })
}

