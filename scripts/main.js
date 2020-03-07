function modal(element) {
  this.element = document.querySelector(element);
  this.elementClose = this.element.querySelector(".modal-elementClose");
  this.elementCancel = this.element.querySelector(".modal-cancel");

  this.addEvents();
}

modal.prototype.addEvents = function() {
  this.elementClose.onclick = () => {
    this.element.style.display = "none";
  };
  this.elementCancel.onclick = () => {
    this.element.style.display = "none";
  };
};
modal.prototype.open = function() {
  this.element.style.display = "block";
};

let modal1 = new modal(".modal1");
let modal2 = new modal(".modal2");
let modal3 = new modal(".modal3");

let buttonmodal1 = document.querySelector(".jsbtn1");
let buttonmodal2 = document.querySelector(".jsbtn2");
let buttonmodal3 = document.querySelector(".jsbtn3");

buttonmodal1.onclick = () => {
  modal1.open();
};
buttonmodal2.onclick = () => {
  modal2.open();
};
buttonmodal3.onclick = () => {
  modal3.open();
};

window.addEventListener ("click", function(event){
  if (event.target.classList.contains("modal")) {
    event.target.style.display = "none"
  }
})
