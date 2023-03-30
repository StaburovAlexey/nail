const btnMinimal = document.querySelector('.btn-minimal');
const btnStandart = document.querySelector('.btn-standart');
const btnMaximum = document.querySelector('.btn-maximum');
const btnPedicure = document.querySelector('.btn-pedicure');
const temlateMinimal = document.querySelector('#minimal').content;
const temlateStandart = document.querySelector('#standart').content;
const temlateMaximum = document.querySelector('#maximum').content;
const temlatePedicure = document.querySelector('#pedicure').content;
const templateList = document.querySelector('.template-list');
const item = temlateMinimal.querySelector('.minimal').cloneNode(true);
const servicesFoto = document.querySelector('.services__foto');

const burgerBtn = document.querySelector('.header__nav-burger');
const popupNav = document.querySelector('.popup');
const popupNavBtnClose = document.querySelector('.popup__btn-close');

const popupImg = document.querySelector('.popup-img');
const img = document.querySelector('.popup-img__img');
const popupImgBtnClose = document.querySelector('.popup-img__btn-close');

const btnOpenSelect = document.querySelector('.open-select');
const btnMinimalSelect = document.querySelector('.minimal-select');
const btnStandartSelect = document.querySelector('.standart-select');
const btnMaximumSelect = document.querySelector('.maximum-select');
const btnPedicureSelect = document.querySelector('.pedicure-select');
const selectNav = document.querySelector('.select__nav');
const selectBtnImg = document.querySelector('.select__img');

openMinimal();

function openMinimal() {
  templateList.innerHTML = '';
  const item = temlateMinimal.querySelector('.minimal').cloneNode(true);
  const fotoList = item.querySelectorAll('.services__foto-album');
  fotoList.forEach((foto) => {
    foto.addEventListener('click', () => {
      if (window.innerWidth <= 1024) {
        popupImg.classList.add('popup-img_active');
        img.src = foto.src
      }
      else { servicesFoto.src = foto.src; }
    })
  })
  templateList.append(item);
}

function openStandart() {
  templateList.innerHTML = '';
  const item = temlateStandart.querySelector('.standart').cloneNode(true);
  const fotoList = item.querySelectorAll('.services__foto-album');
  fotoList.forEach((foto) => {
    foto.addEventListener('click', () => {
      if (window.innerWidth <= 1024) {
        popupImg.classList.add('popup-img_active');
        img.src = foto.src
      }
      else { servicesFoto.src = foto.src; }
    })
  })
  templateList.append(item);
}

function openMaximum() {
  templateList.innerHTML = '';
  const item = temlateMaximum.querySelector('.maximum').cloneNode(true);
  const fotoList = item.querySelectorAll('.services__foto-album');
  fotoList.forEach((foto) => {
    foto.addEventListener('click', () => {
      if (window.innerWidth <= 1024) {
        popupImg.classList.add('popup-img_active');
        img.src = foto.src
      }
      else { servicesFoto.src = foto.src; }
    })
  })
  templateList.append(item);
}

function openPedicure() {
  templateList.innerHTML = '';
  const item = temlatePedicure.querySelector('.pedicure').cloneNode(true);
  const fotoList = item.querySelectorAll('.services__foto-album');
  fotoList.forEach((foto) => {
    foto.addEventListener('click', () => {
      if (window.innerWidth <= 1024) {
        popupImg.classList.add('popup-img_active');
        img.src = foto.src
      }
      else { servicesFoto.src = foto.src; }
    })
  })
  templateList.append(item);
}
//исспользование селекта

function openSelectMinimal() {
  openMinimal();
  selectNav.classList.toggle('select__nav_active');
  btnOpenSelect.classList.toggle('select_active');
  btnOpenSelect.innerText = btnMinimalSelect.innerText
}

function openSelectStandart() {
  openStandart();
  selectNav.classList.toggle('select__nav_active');
  btnOpenSelect.classList.toggle('select_active');
  btnOpenSelect.innerText = btnStandartSelect.innerText
}

function openSelectMaximum() {
  openMaximum();
  selectNav.classList.toggle('select__nav_active');
  btnOpenSelect.classList.toggle('select_active');
  btnOpenSelect.innerText = btnMaximumSelect.innerText
}

function openSelectPedicure() {
  openPedicure();
  selectNav.classList.toggle('select__nav_active');
  btnOpenSelect.classList.toggle('select_active');
  btnOpenSelect.innerText = btnPedicureSelect.innerText
}





btnMinimal.addEventListener('click', openMinimal);

btnStandart.addEventListener('click', openStandart);

btnMaximum.addEventListener('click', openMaximum);

btnPedicure.addEventListener('click', openPedicure);

btnOpenSelect.addEventListener('click', () => {
  btnOpenSelect.classList.toggle('select_active');
  selectNav.classList.toggle('select__nav_active');
});

popupImgBtnClose.addEventListener('click', () => {
  popupImg.classList.remove('popup-img_active');
})

burgerBtn.addEventListener('click', () => {
  popupNav.classList.add('popup_active');
})

popupNavBtnClose.addEventListener('click', () => {
  popupNav.classList.remove('popup_active');
})

btnMinimalSelect.addEventListener('click', openSelectMinimal);
btnStandartSelect.addEventListener('click', openSelectStandart);
btnMaximumSelect.addEventListener('click', openSelectMaximum);
btnPedicureSelect.addEventListener('click', openSelectPedicure);
