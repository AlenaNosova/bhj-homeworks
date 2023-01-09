const widget = document.querySelector('.chat-widget');
const input = document.getElementById('chat-widget__input');
const messages = document.querySelector( '.chat-widget__messages' );
const date = new Date;

function botPhrases () {
    const botArray = [
        'Добрый день, мы ещё не проснулись. Позвоните через 10 лет',
        'Кто тут?',
        'Где ваша совесть?'
    ],
    index = Math.floor(Math.random() * botArray.length);

    return botArray[index]
}




widget.addEventListener('click', function(){
    widget.classList.add('chat-widget_active')
})

input.addEventListener('change', function(event) {
    messages.innerHTML += `
    <div class="message message_client">
                            <div class="message__time">${date.getHours() + ":" + date.getMinutes()}</div>
                            <div class="message__text">${this.value}</div>
                        </div>
    `;
        input.value = ''; 
    
    if (event) {
        messages.innerHTML += `
  <div class="message">
    <div class="message__time">${date.getHours() + ":" + date.getMinutes()}</div>
    <div class="message__text">
      ${botPhrases ()}
    </div>
  </div>
`;
    }
        
})

