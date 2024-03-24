class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <footer class="footer container">
      <div class="footer__logo">200TERABYTE WEB STUDIO</div>
    </footer>
    `;
  }
}

customElements.define('footer-component', Footer);
