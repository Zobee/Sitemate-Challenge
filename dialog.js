class ReusableDialog extends HTMLElement {
  constructor(){
    super();
    this.shadow = this.attachShadow({mode: 'open'})
  }

  connectedCallback(){
    this.render()
  }

  render(){
    this.shadow.innerHTML = `
      <div>
        <h2>${this.confirmationMsg}</h2>
        <div class='modal-btn-container'>
          <button>Yes</button>
          <button>No</button>
        </div>
      </div>
    `
  }
}

customElements.define("reusable-dialog", ReusableDialog);