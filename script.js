document.addEventListener("DOMContentLoaded", function () {
  console.log("Script caricato con successo!");

  const buttons = document.querySelectorAll('#slider-nav button');
  const slideTrack = document.getElementById('slideTrack');
  const slider = document.getElementById('slider');

  if (!buttons.length || !slideTrack) {
    console.warn("Elementi non trovati: controlla gli ID nel tuo HTML");
    return;
  }

  const debugColors = ['#1e1e40', '#2c2c5a', '#3a3a74']; // Colori diversi per ogni slide

  buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
      slideTrack.style.transform = "translateX(-" + (index * 100) + "%)";
      slider.style.backgroundColor = debugColors[index]; // Cambio colore debug
      console.log("Slide " + (index + 1) + " attivata");
    });
  });
});
