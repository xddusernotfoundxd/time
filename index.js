setInterval(function(){
    let date = new Date();
let hours = date.getHours();
let min = date.getMinutes();
let sec = date.getSeconds();

let time = hours + ':' + min + ':' + sec

document.querySelector('body').innerHTML = time
}, 1000)