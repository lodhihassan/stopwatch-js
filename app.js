//two arguments 1
// var count = 0;
// var interval;
// interval = setInterval(() => {
//     count++
//     console.log(count)
// }, 1000)

// // setInterval(function () {

// // }, 2000)

// setTimeout(() => {
//     clearInterval(interval)
// }, 10000);
var interval;
var min = 0;
var sec = 0;
var msec = 0;
var minutes = document.getElementById("min");
var seconds = document.getElementById("sec");
var miliseconds = document.getElementById("msec");
var startbtn = document.getElementById("start");
var pausebtn = document.getElementById("stop");
var clearbtn = document.getElementById("clear");
var item = document.getElementById("list");

function timer() {
    msec++;
    miliseconds.innerHTML = msec;

    if (msec >= 100) {
        sec++;
        seconds.innerHTML = sec;
        msec = 0;
    } else if (sec >= 60) {
        min++;
        minutes.innerHTML = min;
        sec = 0;
    }
}
// TIMER START
function start() {
    interval = setInterval(timer, 10);
    // btn.disable = true
    console.log(startbtn);
    startbtn.disabled = true;
    pausebtn.disabled = false;
}
// TIMER STOP
function stop() {
    clearInterval(interval);
    startbtn.disabled = false;
    var newitem = document.createElement("li");
    var item1 = min + " Min " + sec + " Sec " + msec + " Milisec ";
    newitem.append(item1);
    var item = document.getElementById("list").append(newitem);
    newitem.className = "list";
    console.log(item);
    console.log(min, sec, msec);
    console.log(newitem);
}
// TIMER CLEAR
function cler() {
    // var newitem = document.createElement("li");
    // var item1 = min + " Min " + sec + " Sec " + msec + " MiliSec";
    // newitem.append(item1);
    // item.append(newitem);
    // newitem.className = "list";
    // console.log(item);
    // console.log(min, sec, msec);
    // console.log(newitem);

    clearInterval(interval);
    min = "00";
    sec = "00";
    msec = "00";
    minutes.innerHTML = min;
    seconds.innerHTML = sec;
    miliseconds.innerHTML = msec;
    startbtn.disabled = false;
    pausebtn.disabled = true;
    item.innerHTML = "";
    //   btn2.disabled = true;
}