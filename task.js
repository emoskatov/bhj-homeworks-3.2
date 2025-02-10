
let xhr = new XMLHttpRequest(); // создаём переменную
xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll'); ///инициализируем запрос
xhr.send();///отправляем запрос

xhr.addEventListener('readystatechange', function () {
    const question = document.querySelector('#poll__title');
    const answers = document.querySelector('.poll__answers');
    const button = document.getElementsByClassName('poll__answer');

    if (this.readyState === xhr.DONE) {
        let obj = JSON.parse(xhr.responseText);
        answersArr = Object.values(obj.data['answers']);
        question.innerHTML = obj.data['title'];   ///Отображаем вопрос

        answersArr.forEach(el => {  ///Отображаем ответы
            answers.insertAdjacentHTML('beforeend', `<button class="poll__answer">`
                + el +
                `</button>`)
        });

        for (let el of button) { ///Клик по кнопке
            el.style.marginLeft = "5px";
            el.onclick = () => alert('«Спасибо, ваш голос засчитан!»');
        }
    }

});