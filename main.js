document.querySelectorAll('.tecla').forEach(tecla => {
  tecla.addEventListener('click', () => {
    const instrumento = tecla.classList[1]; // Pega a segunda classe que indica o instrumento
    const som = document.getElementById(`som_${instrumento}`);                      
    if (som) {
      som.currentTime = 0; // Reinicia o som para tocar desde o início
      som.play();
    }                           
    });
    tecla.addEventListener('keydown', (event) => {  
        if (event.code === 'Space' || event.code === 'Enter') {
            tecla.classList.add('ativa');
        }       
    });
    tecla.addEventListener('keyup', (event) => {
        if (event.code === 'Space' || event.code === 'Enter') {
            tecla.classList.remove('ativa');
        }       
    });
});