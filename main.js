document.querySelectorAll('.tecla').forEach(tecla => {
  tecla.addEventListener('click', () => {
    const instrumento = tecla.classList[1];
    const som = document.getElementById(`som_${instrumento}`);                      
    if (som) {
      som.currentTime = 0;
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