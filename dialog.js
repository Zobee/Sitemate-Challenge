const modalContainerStyle = `background-color: red;`

const modalStyle = `
position: absolute; 
height: 500px; 
width: 500px; 
margin-left: auto; 
margin-right: auto; 
right: 0; 
left: 0; 
background-color: white; 
display: flex; 
flex-direction: column; 
justify-content: center; 
align-items: center;`


class ReusableDialog extends HTMLElement {
  constructor(confirmationMsg){
    super();
    this.shadow = this.attachShadow({mode: 'open'})
    this.confirmationMsg = confirmationMsg;
    this.clickedMsg;
    this.confirmMsg = "You clicked yes";
    this.denyMsg = "You clicked no";
  }

  closeModal(){
    this.shadow.innerHTML = ``;
  }

  handleModalSelect(type){
    this.clickedMsg = type === "confirm" ? this.confirmMsg : this.denyMsg
    this.closeModal();
  }

  //Called when element is inserted into the DOM
  connectedCallback(){
    this.render()
    let confirmBtn = this.shadow.getElementById('confirm');
    let denyBtn = this.shadow.getElementById('deny');
  
    confirmBtn.addEventListener('click', () => this.handleModalSelect('confirm'))
    denyBtn.addEventListener('click', () => this.handleModalSelect('deny'))
  }

  //Called when element is removed from DOM
  disconnectedCallback(){
    let confirmBtn = this.shadow.getElementById('confirm');
    let denyBtn = this.shadow.getElementById('deny');
    confirmBtn.removeEventListener()
    denyBtn.removeEventListener()
  }

  //Called when an attribute is modified in any way
  attributeChangedCallback(attr, oldVal, newVal){

  }

  render(){
    this.shadow.innerHTML = `
      <div style='${modalContainerStyle}'>
        <div style='${modalStyle}'>
          <h2>${this.confirmationMsg}</h2>
          <div class='modal-btn-container'>
            <button id='confirm'>${this.getAttribute('confirm')}</button>
            <button id='deny'>${this.getAttribute('deny')}</button>
          </div>
        </div>
      </div>
    `
  };
};
customElements.define("reusable-dialog", ReusableDialog);