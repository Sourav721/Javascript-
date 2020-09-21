// Events of JavaScript
// https://www.w3schools.com/JS/js_events_examples.asp

// Event Listener

let btn=document.querySelector('#email');
btn.addEventListener('keyup',message);

function message(e) {
    document.querySelector('.page').innerText=this.value;
}