let widget = document.querySelector('.chat-widget');
let input = document.getElementById('chat-widget__input');
let message = document.querySelector('.message_client');
const date = new Date;




widget.addEventListener('click', function(){
    widget.classList.add('chat-widget_active')
})

input.addEventListener('keyup', function(event) {
    if(event.code === 'Enter' && input.value) {
        event.preventDefault();
        message.querySelector('.message__text').innerHTML = input.value;
        message.querySelector('.message__time').innerHTML = date.getHours() + ":" + date.getMinutes();
    } 
})