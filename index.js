document.querySelector('.w').addEventListener('click', function() {
    // var audio = new Audio('sounds/tom-1.mp3');
    // audio.play();
    new Audio('sounds/tom-1.mp3').play();
});
document.querySelector('.a').addEventListener('click', function() {
    var audio = new Audio('sounds/tom-2.mp3');
    audio.play();
});
document.querySelector('.s').addEventListener('click', function() {
    var audio = new Audio('sounds/tom-3.mp3');
    audio.play();
});

document.querySelector('.d').addEventListener('click', function() {
    var audio = new Audio('sounds/tom-4.mp3');
    audio.play();
});
document.querySelector('.j').addEventListener('click', function() {
    var audio = new Audio('sounds/snare.mp3');
    audio.play();
});
document.querySelector('.k').addEventListener('click', function() {
    var audio = new Audio('sounds/crash.mp3');
    audio.play();
});
document.querySelector('.l').addEventListener('click', function() {
    var audio = new Audio('sounds/kick-bass.mp3');
    audio.play();
});
