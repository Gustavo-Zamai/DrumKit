/*
This one also worked to all buttons

var btn = document.querySelector('.drum-set');

btn.addEventListener('click', function () {
    alert("Clicked");
});*/

/*var buttons = document.querySelectorAll('.drum-pad').length;

for (let i = 0; i < buttons; i++) {
    document.querySelectorAll('.drum-pad')[i].addEventListener('click', function () {
        
        var audio = new Audio('/assets/sounds/tom-1.mp3');
        audio.play();
    
    });
}
*/

var tom1 = document.querySelector('#tom-1').addEventListener('click', function () {
    var audio = new Audio('/assets/sounds/tom-1.mp3');
    audio.play();
});

var tom2 = document.querySelector('#tom-2').addEventListener('click', function () {
    var audio = new Audio('/assets/sounds/tom-2.mp3');
    audio.play();
});

var tom3 = document.querySelector('#tom-3').addEventListener('click', function () {
    var audio = new Audio('/assets/sounds/tom-3.mp3');
    audio.play();
});

var tom4 = document.querySelector('#tom-4').addEventListener('click', function () {
    var audio = new Audio('/assets/sounds/tom-4.mp3');
    audio.play();
});

var crash = document.querySelector('#crash').addEventListener('click', function () {
    var audio = new Audio('/assets/sounds/crash.mp3');
    audio.play();
});

var kick = document.querySelector('#kick').addEventListener('click', function () {
    var audio = new Audio('/assets/sounds/kick-bass.mp3');
    audio.play();
});

var snare = document.querySelector('#snare').addEventListener('click', function () {
    var audio = new Audio('/assets/sounds/snare.mp3');
    audio.play();
});