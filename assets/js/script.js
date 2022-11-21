'use strict';

// 1
const t1button = document.querySelector('.task1 button');
addEventListener('DOMContentLoaded', () => { // ожидание загрузки dom
    setTimeout(() => { // ожидание 3 секунды
        t1button.addEventListener('click', () => {
            window.scrollBy(0, 500); // прокрутка на 500 пикселей вниз
        })
    }, 3000);
})


// 2
const t2button = document.querySelector('.task2 button');

t2button.addEventListener('click', () => {
    let totalHeight = document.documentElement.scrollHeight;
    let visibleHeight = document.documentElement.clientHeight;

    if (totalHeight == visibleHeight) {
        console.log('Скролла нет')
    } else {
        console.log('Скролл есть')
    }
})


// 3
const form = document.forms.form; // получение формы по id
form.addEventListener('submit', event => {
    event.preventDefault();

    let sum = 0;

    const inputs = form.querySelectorAll('input'); // все инпуты в форме
    inputs.forEach(input => {
        sum += parseInt( input.value );
    })
    console.log(sum);
})


// 4
const selectCountry = document.querySelector('.task4 .country');
const selectCity = document.querySelector('.task4 .city');

selectCountry.addEventListener('change', () => { 
    selectCity.style.display = '';

    const country = selectCountry.value;

    // объект со списками городов
    const cities = {
        Russia: ['Moscow', 'Saransk', 'Chelyabinsk'],
        USA: ['Washington', 'Los Angelos', 'San Francisco'],
        Japan: ['Tokyo', 'Odayba', 'Ebisu']
    }

    const options = selectCity.children;

    for (let i = 0; i < options.length; i++) {
        options[i].textContent = cities[country][i]; // выбирается нужный список городов в зависимости от страны
    }
})


// 5
const t5ol = document.querySelector('.task5 ol');

// создается и добавляется li к списку
const li = document.createElement('li');
li.textContent = 'пункт';
t5ol.appendChild(li);


// 6
const t6links = document.querySelector('.task6 .links');

t6links.addEventListener('mouseover', event => {
    const link = event.target.closest('a');

    if (link) {
        const initialText = link.textContent // сохранение изначального текста
    
        link.textContent += ` ( ${link.href} )`;
    
        link.addEventListener('mouseout', () => { // выход мыши
            link.textContent = initialText; // возвращение начального текста
        })
    }
})


// 7
const numbers = document.querySelector('.task7 .numbers');

numbers.addEventListener('click', event => {
    const p = event.target.closest('p'); 

    if (p)
        p.textContent = parseInt(p.textContent) ** 2;
})


// 8
const t8button = document.querySelector('.task8 button');


t8button.addEventListener('click', function() {
    this.textContent = parseInt(this.textContent) + 1; // при клике число в кнопке увеличивается на 1
})


// 9
const t9ul = document.querySelector('.task9 ul');

// добавление "!" к li по клику
t9ul.addEventListener('click', event => {
    const li = event.target.closest('li');
    li.textContent += '!';
})

const t9button = document.querySelector('.task9 button');

// добавление элемента в список
t9button.addEventListener('click', event => {
    const newLi = document.createElement('li'); 
    newLi.textContent = 'пункт';
    t9ul.appendChild(newLi);
})


// 10
const addUserForm = document.forms.add_user;
const usersTable = document.querySelector('#users');

// добавление строки в таблицу
addUserForm.addEventListener('submit', function(event) {
    event.preventDefault();

    // получение значений из инпутов
    let name = this.name.value;
    let surname = this.surname.value;

    // создание строки таблицы с полученными значениями
    const tr = document.createElement('tr');
    tr.innerHTML = `<td>${name}</td> <td>${surname}</td>`;

    usersTable.appendChild(tr);
})

// Изменение значения по клику
usersTable.addEventListener('click', event => {
    const cell = event.target.closest('td');

    cell.textContent = prompt('New value: ');
})