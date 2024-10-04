const darkBtn = document.getElementById('dark_btn');
const icon = darkBtn.querySelector('i');
const cTheme = localStorage.getItem('theme');

/**
 * Função que alterna entre os temas light e dark;
*/
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

if (cTheme === 'light') {
   document.body.setAttribute('data-theme', 'light');
   icon.classList.replace('fa-sun', 'fa-moon');
} else {
   document.body.removeAttribute('data-theme');
   icon.classList.replace('fa-moon', 'fa-sun');
}

/**
 * Função para ouvir o evento de click e alternar entre os temas light e dark. 
*/
export const darkToggleTheme = () => darkBtn.addEventListener('click', toggleTheme);