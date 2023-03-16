// Создать кнопку и красный квадрат с размерами 200х200px.
//  При клике на кнопку менять у квадрата цвет заднего фона на зеленый и уменьшать его до размеров 100х100px.


function changeSquare() {
    const square = document.querySelector('.square');
    square.style.backgroundColor = 'green';
    square.style.width = '100px';
    square.style.height = '100px';
}


// Создать кнопку и розовый квадрат с размерами 200х200px.
//  При клике на кнопку менять цвет на синий и выводить в консоль обновленный цвет квадрата.

function changeSquare() {
    const square = document.querySelector('.square');
    square.style.backgroundColor = 'blue';
    console.log('Обновленный цвет квадрата:', square.style.backgroundColor);
}


// Создать кнопку и квадрат с размерами 150х150px.
//  При клике на кнопку увеличивать высоту и ширину квадрата на 20px.

function enlargeSquare() {
    const square = document.querySelector('.square');
    const currentWidth = parseInt(square.style.width) || 150;
    const currentHeight = parseInt(square.style.height) || 150;

    square.style.width = (currentWidth + 20) + 'px';
    square.style.height = (currentHeight + 20) + 'px';
}



// Создать кнопку и div с классом root.
//  При клике на кнопку в div создается параграф синего цвета. 
//  Текст параграфа произвольный.

function createParagraph() {
    const root = document.querySelector('.root');
    const paragraph = document.createElement('p');
    paragraph.classList.add('blue-paragraph');
    paragraph.textContent = 'Произвольный текст';
    root.appendChild(paragraph);
}



// Создать кнопку и div с классом root.
//  При клике на кнопку в div создаются по очереди параграфы синего и зеленого цветов.
//   Первый цвет синий.

let isBlue = true;

function createAlternatingParagraphs() {
    const root = document.querySelector('.root');
    const paragraph = document.createElement('p');
    
    if (isBlue) {
        paragraph.classList.add('blue-paragraph');
        paragraph.textContent = 'Синий параграф';
    } else {
        paragraph.classList.add('green-paragraph');
        paragraph.textContent = 'Зеленый параграф';
    }
    
    root.appendChild(paragraph);
    isBlue = !isBlue;
}
