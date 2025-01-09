const menuBtn = document.querySelector('#menuBtn');
const closeBtn = document.querySelector('#closeBtn');
const sideBar = document.querySelector('#sideBar');
const loader = document.querySelector('#loader');

window.addEventListener('click', function () {
    sideBar.classList.remove('hidden');
});

window.addEventListener('load', function () {
    loader.style.display = 'none';
});

menuBtn.addEventListener('click', function (event) {
    event.stopPropagation(); 
    sideBar.classList.toggle('hidden');
});

closeBtn.addEventListener('click', function (event) {
    event.stopPropagation();
    sideBar.classList.toggle('hidden');
});

sideBar.addEventListener('click', function (event) {
    event.stopPropagation();
});









