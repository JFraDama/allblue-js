document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll('#slider-nav button');
  const slideTrack = document.getElementById('slideTrack');

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const index = button.getAttribute('data-slide');
      slideTrack.style.transform = "translateX(-" + (index * 100) + "%)";
    });
  });
});


add script
