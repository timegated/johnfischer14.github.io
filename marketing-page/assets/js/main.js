import { UI } from './UI/domelements.js';

(function () {
  
  const ui = new UI();  

  ui.cta.addEventListener('click', (e) => {
    e.preventDefault();
    ui.modalContainer.classList.toggle('none');
    ui.overLay.classList.toggle('none')
  });
 
})();