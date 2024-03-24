import html from './elem-header.html';

class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = html;
  }
}

customElements.define('header-component', Header);
