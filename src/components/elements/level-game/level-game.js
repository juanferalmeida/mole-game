import { LitElement, css, html } from 'lit';
import '@material/web/select/filled-select.js';
import '@material/web/select/select-option.js';

export class LevelGame extends LitElement {
  static styles = css`
    .level {
      margin-right: 20px;
    }
  `;

  handleLevel(event) {
    const level = event.target.value;
    this.dispatchEvent(new CustomEvent('level-clicked', {
      detail: { level },
      bubbles: true, 
      composed: true 
    }));
  }

  render() {
    return html`
      <div class="level">
        <md-filled-select label="Level" @change=${this.handleLevel}>
          <md-select-option value="low">Low</md-select-option>
          <md-select-option value="medium">Medium</md-select-option>
          <md-select-option value="high">High</md-select-option>
        </md-filled-select>
      </div>
    `;
  }
}

customElements.define('level-game', LevelGame);