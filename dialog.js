class ReusableDialog extends HTMLElement {
  constructor(confirmationMsg){
    super();
    this.shadow = this.attachShadow({mode: 'open'})
    this.confirmationMsg = confirmationMsg;
  }

  static get attributes(){
    return ["confirmationMsg"];
  }

  closeModal(){
    this.shadow.innerHTML = ``;
  }

  handleModalSelect(type){
    //Return the message dependent on type (either confirm or deny), then close modal;
    alert(type);
    this.closeModal();
  }

  connectedCallback(){
    this.render()
    let confirmBtn = this.shadow.getElementById('confirm');
    let denyBtn = this.shadow.getElementById('deny');
  
    confirmBtn.addEventListener('click', () => this.handleModalSelect('confirm'))
    denyBtn.addEventListener('click', () => this.handleModalSelect('deny'))
  }

  render(){
    this.shadow.innerHTML = `
      <div>
        <h2>${this.confirmationMsg}</h2>
        <div class='modal-btn-container'>
          <button id='confirm'>Yes</button>
          <button id='deny'>No</button>
        </div>
      </div>
    `
  };
};
customElements.define("reusable-dialog", ReusableDialog);