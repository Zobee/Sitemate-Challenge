const openModalBtn = document.querySelectorAll('.open-modal');

openModalBtn.forEach(btn => {
  const myDialog = new ReusableDialog(btn.dataset.modalMsg);
  btn.addEventListener('click', () => {
    document.body.append(myDialog);
  })
})