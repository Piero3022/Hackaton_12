
class RETO1 {

    constructor(elemento) {
        this.drop = elemento;
        this.Button = this.drop.querySelector('.SELECT');
        this.menu = this.drop.querySelector('.menu');
        this.Opcion = Array.from(this.drop.querySelector('.opcionesEnLista'));
        this.desplegable = false;

        this.Button.addEventListener('click', this.lista.bind(this));



        this.Opcion.forEach((opciones) => {
            opciones.addEventListener('click', this.seleccion.bind(this, opciones.textContent))
        });

    }

    lista() {
        this.desplegable = !this.desplegable;
        this.menu.style.display = this.desplegable ? 'block' : 'none';
    }



    seleccion(ALEM) {
        console.log(`Opcion seleccionada es: ${ALEM}`);
        this.lista();
    }
}

const elemento = document.querySelector('.drop');
const drop = new RETO1(elemento);

class RETO02 {
    constructor(accordionElement) {
        this.accordion = accordionElement;
        this.items = this.accordion.querySelectorAll('.accordion__item');

        this.items.forEach((item) => {
            const header = item.querySelector('.accordion__header');
            header.addEventListener('click', this.toggle.bind(this, item));
        });
    }

    toggle(item) {
        item.classList.toggle('active');
    }
}

const accordionElement = document.querySelector('.accordion');
const accordion = new RETO02(accordionElement);


class RETO03 {
    constructor(modalElement) {
        this.modal = modalElement;
        this.modalContent = this.modal.querySelector('.modal__content');
        this.closeButton = this.modal.querySelector('.modal__close');

        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);

        this.closeButton.addEventListener('click', this.closeModal);
    }

    openModal() {
        this.modal.style.display = 'block';
    }

    closeModal() {
        this.modal.style.display = 'none';
    }
}

const modalElement = document.getElementById('modal');
const modal = new RETO03(modalElement);

const openButton = document.querySelector('.modal__button');
openButton.addEventListener('click', modal.openModal);




