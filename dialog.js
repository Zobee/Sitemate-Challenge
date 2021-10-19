class ReusableDialog extends HTMLElement {
  constructor(){
    super();
    this.shadow = this.attachShadow({mode: 'open'})
  }

  get confirmationMsg() {
    return this.getAttribute("confirmationMsg");
  }

  static get attributes(){
    return ["confirmationMsg"];
  }

  connectedCallback(){
    this.render()
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