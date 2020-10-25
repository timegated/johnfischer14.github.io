import { UI } from './UI/domelements.js';

(function () {
  
  const ui = new UI();  

  const { cta, modalContainer, overLay } = ui;

  const toggleModal = (e) => {
    e.preventDefault();
    modalContainer.classList.toggle('none');
    overLay.classList.toggle('none');
  };

  cta.addEventListener('click', toggleModal);
 
})();