class timer {
    constructor() {}
    
}
let time = 60;
function countdown() {
    let count = document.getElementById('div1');
    
    let a = setInterval(function() {
        if (time > 0) {
            
            count.innerText = time;
            time = time - 1;
        } else {
            alert('Ohh Coders Come Out To Play');
            clearInterval(a);
        }
   }, 1000);

}
let mypage = new timer();