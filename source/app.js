const closeBtn = document.querySelector('.close-btn');
const openBtn = document.querySelector('.sidebar-toggle')
const sidebar = document.querySelector('.sidebar');

openBtn.addEventListener('click', function () {
    sidebar.classList.toggle('show-sidebar');
});

closeBtn.addEventListener('click', function () {
    sidebar.classList.remove('show-sidebar');
});

