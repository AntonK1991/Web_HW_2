// 1. Создайте всплывающее окно, которое спрашивает имя у пользователя и выводит его с помощью функции.
// Не просто использовуйте prompt или alert или confirm, а создайте свою функцию.

function nameInput() {
    let name = prompt("Введите ваше имя!");
    alert(`Привет, ${name}!`);
}

// 2. Создайте всплывающее окно, которое спрашивает ввод любимого фильма и если ввод неверен, 
// то программа отправляет запрос alert “Попробуйте ещё раз”. В функции должны быть минимум 2 условия. 
// Не просто использовуйте prompt или alert или confirm, а создайте свою

function favFilm() {
    let film = prompt("Введите название любимого фильма!");
    if (film == false || film.indexOf('!',"@","#","$","%","^","&")) prompt("Попробуйте еще раз!");
    else if (film == "Криминальное чтиво") alert("Отличный вкус!");
}

nameInput()
favFilm()