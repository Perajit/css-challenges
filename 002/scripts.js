window.onload = () => {
  const frameContent = document.querySelector('.frame__content');
  frameContent.addEventListener('click', () => {
    frameContent.classList.add('with-animation');
    frameContent.classList.toggle('alter');
  });
};