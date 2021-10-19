const openModalBtn = document.querySelector('.open-modal');

const myDialog = new ReusableDialog("Hello");

openModalBtn.addEventListener('click', () => {
  document.body.append(myDialog);
})