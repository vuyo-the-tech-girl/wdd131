document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = document.lastModified;

// Hamburger menu toggle
const hamburgerBtn = document.getElementById('hamburgerBtn');
const navList = document.querySelector('#nav ul');

hamburgerBtn.addEventListener('click', () => {
    navList.classList.toggle('show');
    hamburgerBtn.textContent = navList.classList.contains('show') ? 'X' : '☰';
});