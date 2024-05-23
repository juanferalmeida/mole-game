import { LitElement, css, html } from "lit";

export class MoleCircle extends LitElement {
  static styles = css`
    .circle {
      width: 120px;
      height: 120px;
      border-radius: 50%;
      background: var(--surface-color);
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      position: relative;
      font-size: 2rem;
      color: black;
    }
    .visible {
      display: block;
    }
    
  `;

  static properties = {
    visible: { type: Boolean },
  };

  constructor() {
    super();
    this.visible = false;
  }

  handleClick() {
    if (this.visible) {
      this.visible = false;
      this.dispatchEvent(new CustomEvent('mole-clicked'));
    }
  }

  render() {
    return html`
      <div class="circle" @click=${this.handleClick}>
        ${this.visible ? html`<div class="visible"><img src="/assets/topo.png" alt="mole" width="80" /></div>` : ''}
      </div>
    `;
  }
}

window.customElements.define("mole-circle", MoleCircle);