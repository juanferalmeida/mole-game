import { LitElement, css, html } from "lit";
import { Router } from '@vaadin/router';

export class LinkButton extends LitElement {
  static styles = css`
    a {
      padding: 8px 16px;
      color: white;
      text-decoration: none;
      display: inline-block;
      transition: transform 0.3s ease; 
    }
    a:hover {
      transform: scale(1.05);  
    }
  `;

  static properties = {
    href: { type: String },
  };

  constructor() {
    super();
    this.href = '/game';
  }

  render() {
    return html`
      <a class="route" href="${this.href}" @click="${this.routeTo}">
        <slot></slot>
      </a>
    `;
  }

  routeTo(event) {
    event.preventDefault();
    Router.go(this.href);
  }
}

window.customElements.define("link-button", LinkButton);