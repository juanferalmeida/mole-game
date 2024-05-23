import { LitElement, css, html } from "lit";

export class GameCounter extends LitElement {
  static styles = css`
    .counter {
      font-size: 2rem;
      margin:20px;
    }
  `;

  static properties = {
    score: { type: Number },
  };

  constructor() {
    super();
    this.score = 0;
  }

  render() {
    return html`<div class="counter">Puntos: ${this.score}</div>`;
  }
}

window.customElements.define("game-counter", GameCounter);