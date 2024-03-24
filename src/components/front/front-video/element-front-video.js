class FrontVideo extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <h1>Моя библиотека frontend видео</h1>
    `;
    this.className = 'front-video';
  }
}

customElements.define('front-video', FrontVideo);
