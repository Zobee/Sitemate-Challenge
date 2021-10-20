const openModalBtn = document.querySelectorAll('.open-modal');

openModalBtn.forEach(btn => {
  const myDialog = new ReusableDialog(btn.dataset.modalMsg);
  myDialog.setAttribute('confirm', "Oui")
  myDialog.setAttribute('deny', 'Non')
  btn.addEventListener('click', () => {
    document.body.append(myDialog);
  })
})