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
})

document.querySelectorAll('#main-nav a').forEach(link => {
  const blinkBox = link.querySelector('.blink-box-nav');

  if (blinkBox) {
    link.addEventListener('mouseenter', () => {
      blinkBox.classList.add('active');
    });

    link.addEventListener('mouseleave', () => {
      blinkBox.classList.remove('active');
    });
  }
});

document.getElementById('copyright-year').textContent = new Date().getFullYear();

