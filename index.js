var keys = document.querySelectorAll(".drum");
console.log(keys.length);
playOnClick();

document.addEventListener("keypress", (e) => {
    var key = (String.fromCharCode(e.which));
    switch(key) {
        case 'w' : 
        var music = new Audio("./sounds/crash.mp3");
        music.play();
        break;
        case 'a' : 
        var music = new Audio("./sounds/kick-bass.mp3");
        music.play();
        break;
        case 's' : 
        var music = new Audio("./sounds/snare.mp3");
        music.play();
        break;
        case 'd' : 
        var music = new Audio("./sounds/tom-1.mp3");
        music.play();
        break;
        case 'j' : 
        var music = new Audio("./sounds/tom-2.mp3");
        music.play();
        break;
        case 'k' : 
        var music = new Audio("./sounds/tom-3.mp3");
        music.play();
        break;
        case 'l' : 
        var music = new Audio("./sounds/tom-4.mp3");
        music.play();
        break;
        default  : 
    }
})


function playOnClick() {
    keys[0].addEventListener("click",() => {
        var music = new Audio("./sounds/crash.mp3");
        music.play();
    })
    keys[1].addEventListener("click",() => {
        var music = new Audio("./sounds/kick-bass.mp3");
        music.play();
    })
    keys[2].addEventListener("click",() => {
        var music = new Audio("./sounds/snare.mp3");
        music.play();
    })
    keys[3].addEventListener("click",() => {
        var music = new Audio("./sounds/tom-1.mp3");
        music.play();
    })
    keys[4].addEventListener("click",() => {
        var music = new Audio("./sounds/tom-2.mp3");
        music.play();
    })
    keys[5].addEventListener("click",() => {
        var music = new Audio("./sounds/tom-3.mp3");
        music.play();
    })
    keys[6].addEventListener("click",() => {
        var music = new Audio("./sounds/tom-4.mp3");
        music.play();
    })
}