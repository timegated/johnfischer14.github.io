export class UI  {
  constructor() {
    this.cta = document.querySelector('#cta-event');
    this.modalContainer = document.querySelector('#modal-beta');
    this.overLay = document.querySelector('.overlay');
    this.modalForm = document.querySelector('#modal-beta-form');
  }

  getElements() {
    return [
      {
       cta: document.querySelector('#cta-event')
      },
      {
        modalContainer: document.querySelector('#modal-beta')
      },
      {
        overLay: document.querySelector('.overlay')
      },
      {
        modalForm: document.querySelector('#modal-beta-form')
      },
    ]
   }
 
}