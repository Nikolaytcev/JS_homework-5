
class message {
    constructor(author, insertText, chat) {
        this.author = author;
        this.insertText = insertText;
        this.chat = chat;
        this.whriteText();
    };

    whriteText() {
        let date = new Date;
        let html = `<div class="${this.author}">
            <div class="message__time">
                ${date.getHours()}:${date.getMinutes()}
            </div>
            <div class="message__text">
            ${this.insertText}
            </div>
        </div>`;
        this.chat.innerHTML += html;
    };
};

function getAnswerBot() {
    let words = [
        'Добрый день',
        'Вы ещё ничего у нас не купили',
        'Что?',
        'Всего хорошего!',
        'Пока!',
        'Ожидайте звонка',
        'Не понимаю вопроса',
        'Вам нужна помощь?',
    ];
    return words[Math.floor(Math.random()*words.length)];
};


function setTimeDelay() {
    let timeOut = setInterval(() => {
        if (widgetActive.classList.contains('chat-widget_active')) {
            new message('message', 'Что молчим??!', chat);
            chat.scrollTo(0, chat.scrollHeight);
        };
    }, 30000);
    return timeOut
};

const widgetActive = document.querySelector('.chat-widget');
const text = document.getElementById('chat-widget__input');
const chat = document.querySelector('.chat-widget__messages-container');

widgetActive.addEventListener('click', () => {
    widgetActive.classList.add('chat-widget_active');
});

let timeOut = setTimeDelay();

text.addEventListener('change', () => {
    clearInterval(timeOut);
    new message('message message_client', text.value, chat);
    text.value = '';
    new message('message', getAnswerBot(), chat);
    chat.scrollTo(0, chat.scrollHeight)
    timeOut = setTimeDelay();
    
});







