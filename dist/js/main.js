//модальное окно
const openModalButton = document.querySelector('.promo-button');
const closeModalButton = document.querySelector('.popup-close');
const popup = document.querySelector('.popup-bg');

function openModal() {
    popup.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    popup.style.display = 'none';
    document.body.style.overflow = '';
}

openModalButton.addEventListener('click', openModal);
closeModalButton.addEventListener('click', closeModal);


popup.addEventListener('click', function(event) {
    if (event.target === popup) {
        closeModal();
    }
});


//мобильное меню
const openMenuButton = document.querySelector('.header-button');
const closeMenuButton = document.querySelector('.mobile-close');
const mobileMenu = document.querySelector('.mobile');
const mobileBg = document.querySelector('.mobile-bg');

openMenuButton.addEventListener('click', () => {
    mobileMenu.classList.add('mobile-active'); 
    mobileBg.style.display = 'flex';
    document.body.style.overflow = 'hidden';
});

closeMenuButton.addEventListener('click', () => {
    mobileMenu.classList.remove('mobile-active');
    mobileBg.style.display = 'none';
    document.body.style.overflow = '';
});