import { UI } from './UI/domelements.js';

(function () {
  
  const ui = new UI();  

  const { cta, modalContainer, overLay, submitForm } = ui;

  const toggleModal = (e) => {
    e.preventDefault();
    modalContainer.classList.toggle('none');
    overLay.classList.toggle('none');
  };

  const mockRequest = (e) => {
    e.preventDefault();
    const modalForm = document.forms['modalForm'];
    const { elements } = modalForm;
    
    console.group(elements.name.value, elements.email.value);
    setTimeout(() => {
      console.log('ajax request here');
    }, 1500);
    
    // Clear Inputs
    elements.name.value = '';
    elements.email.value = '';
  };

  cta.addEventListener('click', toggleModal);
  overLay.addEventListener('click', toggleModal);
  submitForm.addEventListener('click', mockRequest);
})();