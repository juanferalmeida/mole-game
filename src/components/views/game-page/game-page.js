import { LitElement, css, html } from 'lit';
import '../../elements/menu-bar/menu-bar.js';
import '../../elements/mole-game/mole-game.js';

export class GamePage extends LitElement {
  static styles = css`
    :host {
      height: 100%;
      display: flex;
      flex-direction: column;
    }
  `;
  
  render() {
    return html`
      <menu-bar></menu-bar>
      <mole-game></mole-game>
    `;
  }
}

customElements.define('game-page', GamePage);