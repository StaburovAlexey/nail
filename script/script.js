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

btnMinimal.addEventListener('click', function () {
  templateList.innerHTML = '';
  const item = temlateMinimal.querySelector('.minimal').cloneNode(true);
  templateList.append(item);
})

btnStandart.addEventListener('click', function () {
  templateList.innerHTML = '';
  const item = temlateStandart.querySelector('.standart').cloneNode(true);
  templateList.append(item);

})

btnMaximum.addEventListener('click', function () {
  templateList.innerHTML = '';
  const item = temlateMaximum.querySelector('.maximum').cloneNode(true);
  templateList.append(item);

})

btnPedicure.addEventListener('click', function () {
  templateList.innerHTML = '';
  const item = temlatePedicure.querySelector('.pedicure').cloneNode(true);
  templateList.append(item);

})
