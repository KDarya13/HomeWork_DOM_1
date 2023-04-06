//1. Найти по id, используя getElementById, элемент с id равным "super_link" и вывести этот элемент в консоль.
const searchId = document.getElementById('super_link');
console.log(searchId);

//2. Внутри всех элементов на странице, которые имеют класс "card-link", поменяйте текст внутри элемента на "ссылка".
const changeTxt = document.getElementsByClassName('card-link');
console.log(changeTxt);
for (let elem of changeTxt) {
    elem.textContent = 'ссылка';
}

//3. Найти все элементы на странице с классом "card-link", которые лежат в элементе с классом "card-body" и вывести полученную коллекцию в консоль.
const linkBody = document.querySelectorAll('.card-body .card-link');
console.log(linkBody);

//4. Найти первый попавшийся элемент на странице у которого есть атрибут data-number со значением 50 и вывести его в консоль.

const searchNum = document.querySelector('[data-number = "50"]');
console.log(searchNum);

//5. Выведите содержимое тега title в консоль.
 const title = document.querySelector('title');
 console.log(title);

//6. Получите элемент с классом "card-title" и выведите его родительский узел в консоль.
const CardTitle = document.querySelector('.card-title');
console.log(CardTitle.parentElement);

//7. Создайте тегp, запишите внутри него текст "Привет" и добавьте созданный тег в начало элемента, который имеет класс "card".
const p = document.createElement('p');
p.textContent = 'Привет';
const cardDiv = document.querySelector('.card');
console.log(cardDiv);
cardDiv.prepend(p);

//8. Удалите тег h6 на странице.
const six = document.querySelector('h6');
console.log(six);
six.remove();
