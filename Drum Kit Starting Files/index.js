var num=document.querySelectorAll(".drum").length;
for (var i = 0; i < num; i++) {

    document.querySelectorAll(".drum")[i].addEventListener("click", function(event) {
    makesound(this.innerHTML);
    buttonAnimation(this.innerHTML);
  
    });
}
document.addEventListener("keypress", function(event) {
    makesound(event.key);
    buttonAnimation(event.key);
    
})
function buttonAnimation(currentKey) {

    var activeButton = document.querySelector("." + currentKey);
  
    activeButton.classList.add("pressed");
  
    setTimeout(function() {
      activeButton.classList.remove("pressed");
    }, 100);
  
  }
function makesound(key){
    switch(key){
        case "w":
            var so=new Audio("sounds/tom-1.mp3");
            so.play();
            break;
        case "a":
            var so=new Audio("sounds/tom-2.mp3");
            so.play();
            break;
        case "s":
            var so=new Audio("sounds/tom-3.mp3");
            so.play();
            break;
        case "d":
            var so=new Audio("sounds/tom-4.mp3");
            so.play();
            break;
        case 'j':
            var so=new Audio("sounds/crash.mp3");
            so.play();
            break;
        case "k":
            var so=new Audio("sounds/kick-bass.mp3");
            so.play();
            break;
        case "l":
            var so=new Audio("sounds/snare.mp3");
            so.play();
        break;
    }
}
