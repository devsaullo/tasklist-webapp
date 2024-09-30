const darkBtn = document.getElementById('dark_btn');
const icon = darkBtn.querySelector('i');
const cTheme = localStorage.getItem('theme');

const toggleTheme = () => {
   if (document.body.getAttribute('data-theme') === 'light') {
      document.body.removeAttribute('data-theme');
      icon.classList.replace('fa-moon', 'fa-sun');
      localStorage.setItem('theme', 'dark');
   } else {
      document.body.setAttribute('data-theme', 'light');
      icon.classList.replace('fa-sun', 'fa-moon');
      localStorage.setItem('theme', 'light'); 
   }
}

export const darkToggleTheme = darkBtn.addEventListener('click', toggleTheme);

if (cTheme === 'light') {
   document.body.setAttribute('data-theme', 'light');
   icon.classList.replace('fa-sun', 'fa-moon');
} else {
   document.body.removeAttribute('data-theme');
   icon.classList.replace('fa-moon', 'fa-sun');
}