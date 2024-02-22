// Header
class Header extends HTMLElement {
    constructor() {
      super();
    }
    connectedCallback() {
      this.innerHTML = `
      <header>
        <div id="logo">
            <h1 role="heading" alt="home"><a href="/">Ming Yang</a></h1>
        </div>
        <div id="nav">
            <nav>
                <a href="../../about.html">about <span>→</span></a>
                <a href="../../works.html">works <span>→</span></a>
                <a href="../../research.html">research <span>→</span></a>
            </nav>
        </div>
      </header>
    `;
    }
  }
  
  customElements.define("header-component", Header);

// pdf modal
let modalBtns = document.querySelectorAll(".modal-btn");
let modal = document.getElementById("pdf-modal");
var span = document.getElementsByClassName("close")[0];

modalBtns.forEach(function(btn) {
    btn.onclick = function() {
        modal.style.display = "block";
        let pdfUrl = btn.getAttribute("data-pdf-url");
        document.getElementById("pdf-frame").src = pdfUrl;
    }
});

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

