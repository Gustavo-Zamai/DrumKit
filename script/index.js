/*
This one also worked to all buttons

var btn = document.querySelector('.drum-set');

btn.addEventListener('click', function () {
    alert("Clicked");
});*/

var buttons = document.querySelectorAll(".drum").length;

for (let i = 0; i < buttons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    });
}

document.addEventListener("keydown", function (event) {
    makeSound(event.key);
    buttonAnimation(event.key);
});


function makeSound(key) {
    switch (key) {
        case "w":
            var tom1 = new Audio("/assets/sounds/tom-1.mp3");
            tom1.play();
            break;

        case "a":
            var tom2 = new Audio("/assets/sounds/tom-2.mp3");
            tom2.play();

        case "s":
            var tom3 = new Audio("/assets/sounds/tom-3.mp3");
            tom3.play();
            break;

        case "d":
            var tom4 = new Audio("/assets/sounds/tom-4.mp3");
            tom4.play();
            break;

        case "j":
            var crash = new Audio("/assets/sounds/crash.mp3");
            crash.play();
            break;

        case "k":
            var kick = new Audio("/assets/sounds/kick-bass.mp3");
            kick.play();
            break;

        case "l":
            var snare = new Audio("/assets/sounds/snare.mp3");
            snare.play();
            break;

        default:
            console.log(event);
            break;
    }
}

function buttonAnimation(currentKey) {

    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function () {
        activeButton.classList.remove("pressed");
    }, 120);
}


