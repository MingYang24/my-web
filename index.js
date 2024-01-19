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
                <div class="dropdown">
                    <button class="dropbutton" role="button">works ⌄</button>
                    <div class="dropdown-content">
                        <a href="#" role="link">concert pieces</a>
                        <a href="#" role="link">installations</a>
                        <a href="#" role="link">experiments</a>
                    </div>
                </div>
            </nav>
        </div>
      </header>
    `;
    }
  }
  
  customElements.define("header-component", Header);