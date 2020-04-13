window.onload = () => {
  const container = document.querySelector('.container');
  const mainPanel = document.querySelector('.main-panel');
  const menuToggler = document.querySelector('.menu-toggler');
  const searchToggler = document.querySelector('.search-toggler');

  menuToggler.addEventListener('click', () => {
    container.classList.toggle('show-menu');
  });

  searchToggler.addEventListener('click', () => {
    mainPanel.classList.toggle('show-search');
  });
};
