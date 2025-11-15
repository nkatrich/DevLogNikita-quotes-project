// Vars
    // Vars of DOM
    const burgerMenu = document.querySelector('.burger-menu');
    const navHeaderNavPhone = document.querySelector('.nav-header-nav-phone');
    const backgroundFilterLayer = document.querySelector('.background-filter-layer');
    const displayOfQuotes = document.querySelector('.display-of-quotes');
    const quote = document.querySelector('.quote');
    const author = document.querySelector('.author');
    const previos = document.querySelector('.previos');
    const next = document.querySelector('.next');

let currentQuote = 0;
const accent1Color = '#04AF98';
const opacAccent1Color = '#04af9800';

// random bg

const bgImages = ['../assets/images/pattern-1.png', '../assets/images/pattern-2.png', '../assets/images/pattern-3.png'];

// memory of quotes

const quotes = [
    {
        author: "Христофор Колумб",
        quote: "Вы никогда не пересечёте океан, если не наберётесь мужества потерять берег из виду."
    },
    {
        author: "Джим Рон",
        quote: "Сделай сегодня то, что другие не хотят, и завтра будешь жить так, как другие не могут."
    },
    {
        author: "Уолт Дисней",
        quote: "Лучший метод, чтобы начать что-то делать – перестать говорить и начать делать."
    },
    {
        author: "Джоан Роулинг",
        quote: "Невозможно прожить жизнь, ни разу не потерпев неудачу, если только вы не живете настолько осторожно, что с тем же успехом могли бы и не жить вовсе."
    },
    {
        author: "Федор Достоевский",
        quote: "Хорошее время не с неба падает, а мы его делаем, оно заключается в сердце нашем."
    },
    {
        author: "Артур Кларк",
        quote: "Лучший способ найти границы возможного — пересечь их и вступить на территорию невозможного."
    },
    {
        author: "Пабло Пикассо",
        quote: "Действие — основной ключ к успеху."
    },
    {
        author: "Рэй Брэдбери",
        quote: "Не важно, что именно ты делаешь, важно, чтобы все, к чему ты прикасаешься, меняло форму, становилось не таким, как раньше, чтобы в нем оставалась частица тебя самого."
    },
    {
        author: "Джордж Бернард Шоу",
        quote: "Успех — это сумма мелких усилий, повторяющихся день за днем."
    },
    {
        author: "Генри Форд",
        quote: "Если вы думаете, что на что-то способны, вы правы; если думаете, что у вас ничего не получится — вы тоже правы."
    },
    {
        author: "Маргарет Тэтчер",
        quote: "Вы можете быть уверены, что если вам нужно убедить других, вы должны сначала убедить себя."
    },
    {
        author: "Зигмунд Фрейд",
        quote: "Прежде чем поставить себе цель, нужно убедиться, что ты на самом деле её достигнешь."
    },
    {
        author: "Леонардо да Винчи",
        quote: "Опыт – отец всякой достоверности."
    },
    {
        author: "Ричард Брэнсон",
        quote: "Неважно, что ты делаешь, важно, чтобы тебе это нравилось."
    },
    {
        author: "Наполеон Хилл",
        quote: "То, о чем разум может подумать и во что может поверить, он может и достичь."
    },
    {
        author: "Сенека",
        quote: "Начать – половина дела; дерзай, чтобы и вторую половину сделать!"
    },
    {
        author: "Коко Шанель",
        quote: "Чтобы быть незаменимой, нужно все время меняться."
    },
    {
        author: "Элеонора Рузвельт",
        quote: "Будущее принадлежит тем, кто верит в красоту своей мечты."
    },
    {
        author: "Роберт Кийосаки",
        quote: "Главная причина финансовых проблем в том, что люди всю жизнь работают на кого-то другого."
    },
    {
        author: "Марк Твен",
        quote: "Самые важные дни в твоей жизни: день, когда ты родился, и день, когда понял зачем."
    },
    {
        author: "Майкл Джордан",
        quote: "Я могу принять поражение, но не могу принять попытку не совершить его."
    },
    {
        author: "Дональд Трамп",
        quote: "Всегда стремитесь к большему, потому что никто и никогда не ставил памятника скромности."
    },
    {
        author: "Аристотель",
        quote: "Качество – это не действие, а привычка."
    },
    {
        author: "DevLog Nikita",
        quote: "Если тяжело начать - Это нормально. Лучше первые 10-20 минут страдать, чем всю жизнь жалеть не сделав этого."
    },
    {
        author: "DevLog Nikita",
        quote: "Если ты сделаешь одно дело через силу - ты не пожалеешь о своем решении."
    }
];

// creating random quotes sequence
const randomQuotes = [];

while (quotes.length > 0) {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    randomQuotes.push(quotes[randomIndex]);
    quotes.splice(randomIndex, 1);
}

// Burger-menu

function toggleBurgerMenu() {
    navHeaderNavPhone.classList.toggle('open');
}

burgerMenu.addEventListener('click', toggleBurgerMenu);

// Smooth scroll

document.addEventListener('DOMContentLoaded', () => {
    window.addEventListener('wheel', (e) => {
        if (e.ctrlKey || e.metaKey) return;
        e.preventDefault();

        const cordScroll = 200;

        let posSiteScroll = window.scrollY;

        if (e.deltaY > 0) {
            posSiteScroll += cordScroll;
        }
        else {
            posSiteScroll -= cordScroll;
            if (posSiteScroll < 0) {
                posSiteScroll = 0;
            }
        }

        window.scrollTo({
            top: posSiteScroll,
            behavior: 'smooth'
        })

    }, {passive: false});
})

// Manupulation with quotes

function nextQuote() {
    if (currentQuote === randomQuotes.length - 1) {
        return;
    }
    else {
        currentQuote += 1;
        manupulationQuote()
    }
}

function previousQuote() {
    if (currentQuote === 0) {
        return;
    }
    else {
        currentQuote -= 1;
        manupulationQuote()
    }
}

// manupulation

function manupulationQuote() {
        // temp vars
        let generateNumForBg = Math.floor(Math.random() * bgImages.length);
        let eachLetter = randomQuotes[currentQuote].quote.split('');
        let letterDelay = 0.0;
        let allSpans = quote.children;

        // insert quote
        author.textContent = randomQuotes[currentQuote].author;
        quote.textContent = randomQuotes[currentQuote].quote;

        // anim display of quotes
        quote.style.backgroundColor = accent1Color;
        quote.style.transition = 'none';
        backgroundFilterLayer.style.backgroundImage = `none`;
        backgroundFilterLayer.style.transition = 'none';
        backgroundFilterLayer.style.opacity = 0;
        backgroundFilterLayer.style.backgroundImage = `url(${bgImages[generateNumForBg]})`;

        quote.innerText = ``;
        eachLetter.forEach((letter) => {
            if (letter === ' ') {
                quote.innerHTML += `<span>&nbsp;</span>`;
            }
            else {
                quote.innerHTML += `<span>${letter}</span>`;
            }
        }); 
        
        for (span of allSpans) {
            span.style.opacity = 0;
        }
   
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                quote.style.transition = 'background-color 2.5s ease';
                quote.style.backgroundColor = opacAccent1Color;

                backgroundFilterLayer.style.transition = 'filter 2s ease-in-out, opacity 2s ease-in-out';
                backgroundFilterLayer.style.opacity = 0.6;

                for (span of allSpans) {
                    letterDelay += 0.05;
                    span.style.animation = `fadeLetter 0.4s ease-in-out ${letterDelay}s 1 alternate forwards`;
                }
            })
        })
}

// Management (2 buttons) with quotes

next.addEventListener('click', nextQuote);
previos.addEventListener('click', previousQuote);

// management on keyboard

document.body.addEventListener('keyup', function(e) {
    if (e.key === 'ArrowLeft') previousQuote();
    if (e.key === 'ArrowRight') nextQuote();
})

// call one time

nextQuote();
// Способ проще: сделать каунтер от 0 до 25, и и по каунтеру вызывать обьект и в одном маассиве вызываешь обьект(тут и память автоматически будет)

// Код ранее:

/*
function callQuote() {
    let choice_random_quote = Math.floor(Math.random() * quotes.length);
    let chosen_author = quotes[choice_random_quote].author;
    let chosen_quote = quotes[choice_random_quote].quote;
    
    
    previous_quotes.push(quotes[choice_random_quote]);
    
    quotes.splice(choice_random_quote, 1);
    
    quote.textContent = chosen_quote;
    author.textContent = chosen_author;
    console.log("q")
    console.log(quotes)
}

function previousQuote() {
    if (previous_quotes.length === 1) {
        return;
    }
    else {
        continuing_quotes.push(previous_quotes.pop())
        let indexOfPrevios = previous_quotes.length - 1;
        
        let chosen_author = previous_quotes[indexOfPrevios].author;
        let chosen_quote = previous_quotes[indexOfPrevios].quote;

        quote.textContent = chosen_quote;
        author.textContent = chosen_author;
        console.log("prev")
        console.log(previous_quotes)
    }
}

function continuingQuote() {
    previous_quotes.push(continuing_quotes.pop())
    let indexOfPrevios = continuing_quotes.length - 1;
    
    
    let chosen_author = continuing_quotes[indexOfPrevios].author;
    let chosen_quote = continuing_quotes[indexOfPrevios].quote;

    quote.textContent = chosen_quote;
    author.textContent = chosen_author;
    console.log("Cont")
    console.log(continuing_quotes)
}

previos.addEventListener('click', () => {
    if (previous_quotes.length) {
        previousQuote();
    }
})

next.addEventListener('click', () => {
    if (continuing_quotes.length) {
        continuingQuote();
    }
    else if (quotes.length) {
        callQuote();
    }
})
callQuote()
*/