(function () {
  const checkUsOut = document.querySelector('#cta-event');
  const modalBetaContainer = document.querySelector('#modal-beta');
  const modalOverLay = document.querySelector('.overlay')
  const modalBetaForm = document.querySelector('#modal-beta-form');

  checkUsOut.addEventListener('click', () => {
    modalBetaContainer.style = 'display: block';
    modalOverLay.style = 'display: block;'
  })
})();