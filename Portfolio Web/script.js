// small interactions: mobile menu + smooth scroll + year
document.addEventListener('DOMContentLoaded', function(){
  const menuToggle = document.getElementById('menuToggle');
  const mainNav = document.getElementById('mainNav');

  menuToggle && menuToggle.addEventListener('click', function(){
    mainNav.classList.toggle('open');
  });

  // smooth scroll for internal links
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', function(e){
      const href = this.getAttribute('href');
      if(href.startsWith('#')){
        e.preventDefault();
        const el = document.querySelector(href);
        if(el) el.scrollIntoView({behavior:'smooth', block:'start'});
        // close mobile nav
        if(mainNav.classList.contains('open')) mainNav.classList.remove('open');
      }
    });
  });

  // year
  const y = new Date().getFullYear();
  document.getElementById('year').textContent = y;
});

// Theme toggle
document.addEventListener('DOMContentLoaded', function(){
  const themeToggle = document.getElementById('themeToggle');
  const themeLabel = document.getElementById('themeLabel');
  const html = document.documentElement;

  if(themeToggle){
    // Load saved theme
    const savedTheme = localStorage.getItem('theme');
    if(savedTheme === 'light-mode'){
      html.classList.add('light-mode');
      themeToggle.classList.add('light');
      if(themeLabel) themeLabel.textContent = 'Light Mode';
    } else {
      if(themeLabel) themeLabel.textContent = 'Dark Mode';
    }

    // Toggle theme
    themeToggle.addEventListener('click', function(){
      if(html.classList.contains('light-mode')){
        html.classList.remove('light-mode');
        themeToggle.classList.remove('light');
        localStorage.setItem('theme', '');
        if(themeLabel) themeLabel.textContent = 'Dark Mode';
      } else {
        html.classList.add('light-mode');
        themeToggle.classList.add('light');
        localStorage.setItem('theme', 'light-mode');
        if(themeLabel) themeLabel.textContent = 'Light Mode';
      }
    });
  }
});
