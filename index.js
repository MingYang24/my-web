// Header
class Header extends HTMLElement {
    constructor() {
      super();
    }
    connectedCallback() {
      this.innerHTML = `
      <header role="banner">
        <div id="logo">
            <h1 role="heading" alt="home"><a href="/">Ming Yang</a></h1>
        </div>
        <div id="nav">
            <nav role="navigation">
                <a href="../about.html">about</a>
                <a href="../works.html">works</a>
            </nav>
        </div>
      </header>
    `;
    }
  }
  
  customElements.define("header-component", Header);