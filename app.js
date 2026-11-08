const menuToggle = document.getElementById('menu-toggle');
const mainNav = document.getElementById('main-nav');

menuToggle.addEventListener('click', () => {
  menuToggle.classList.toggle('active');
  mainNav.classList.toggle("active");
})

document.querySelectorAll('#main-nav a').forEach(link => {
  link.addEventListener('click', () => {
    menuToggle.classList.remove('active');
    mainNav.classList.remove("active");
  });
});
