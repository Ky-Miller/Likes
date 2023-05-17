console.log("js is working")

var Neil = 0;
var neiltext = document.querySelector("#neilLikes");

function neilLike(){
    Neil++;
    neiltext.innerText = (Neil + " like(s)");
}

var Nichole = 0;
var nicholetext = document.querySelector("#nicholeLikes");

function nicholeLike(){
    Nichole++;
    nicholetext.innerText = (Nichole + " like(s)");
}

var Jim = 0;
var jimtext = document.querySelector("#jimLikes");

function jimLike(){
    Jim++;
    jimtext.innerText = (Jim + " like(s)");
}