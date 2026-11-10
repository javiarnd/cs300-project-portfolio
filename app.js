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

document.addEventListener('DOMContentLoaded', () => {
  const themeToggles = document.querySelectorAll('#theme-toggle-mobile, #theme-toggle-desktop');
  const currentTheme = localStorage.getItem('theme') || 'light';

  if (currentTheme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
    updateThemeIcons(true);
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
    updateThemeIcons(false);
  }

  function toggleTheme() {
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    const newTheme = isDark ? 'light' : 'dark';

    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcons(!isDark);
  }

  function updateThemeIcons(isDark) {
    const iconSrc = isDark ? 'images/sun-svgrepo-com.svg' : 'images/moon-svgrepo-com.svg';
    document.querySelectorAll('.theme-icon').forEach(img => {
      img.src = iconSrc;
    });

    const logo = document.getElementById('portfolio-logo');
      if (logo) {
        logo.src = isDark ? 'images/dark-mode-logo.svg' : 'images/light-mode-logo.svg';
      }
  }

  themeToggles.forEach(btn => {
    if (btn) {
      btn.addEventListener('click', toggleTheme);
    }
  });
});