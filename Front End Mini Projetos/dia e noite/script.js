const toggleButton = document.querySelector('.button');

toggleButton.addEventListener('click', function() {
  document.body.classList.toggle('light-theme');
  document.body.classList.toggle('dark-theme');
});
