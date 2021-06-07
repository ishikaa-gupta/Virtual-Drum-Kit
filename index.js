var n=document.querySelectorAll(".drum").length;

// clicked

for(var i=0;i<n;i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        
        var buttonInnerHTML =this.innerHTML;

        switch(buttonInnerHTML.toLowerCase())
        {
            case 'w': 
            var tom1= new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;

            case "a": 
            var tom2= new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;

            case "s": 
            var tom3= new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;

            case "d": 
            var tom4= new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;

            case "j": 
            var snare= new Audio("sounds/snare.mp3");
            snare.play();
            break;

            case "k": 
            var crash= new Audio("sounds/crash.mp3");
            crash.play();
            break;

            case "l": 
            var kick= new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;

            default: console.log(buttonInnerHTML);
        }

        buttonAnimation(buttonInnerHTML.toLowerCase());

    });
}

// keypress

document.addEventListener("keydown",function(event)
{
    switch(event.key.toLowerCase())
        {
            case 'w': 
            var tom1= new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;

            case "a": 
            var tom2= new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;

            case "s": 
            var tom3= new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;

            case "d": 
            var tom4= new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;

            case "j": 
            var snare= new Audio("sounds/snare.mp3");
            snare.play();
            break;

            case "k": 
            var crash= new Audio("sounds/crash.mp3");
            crash.play();
            break;

            case "l": 
            var kick= new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;

            default: console.log(event.key);
        }

        buttonAnimation(event.key.toLowerCase());
});

// animation

function buttonAnimation(currentkey)
{
    var activebutton=document.querySelector("."+currentkey);
    activebutton.classList.add("pressed");

    setTimeout(function(){  activebutton.classList.remove("pressed");} , 100) ;
}