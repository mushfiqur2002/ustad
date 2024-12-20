const menuBtn = document.querySelector('#menuBtn');
const closeBtn = document.querySelector('#closeBtn');
const sideBar = document.querySelector('#sideBar');

window.addEventListener('click', function () {
    sideBar.classList.remove('hidden');
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
