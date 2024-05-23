import { LitElement, css, html } from "lit";
import { Router } from "@vaadin/router";
import "@material/web/button/filled-button.js";

export class UserForm extends LitElement {
  static styles = css`
    :host {
      width: 100%;
      box-sizing: border-box;
    }

    .form-container {
      width: 100%;
      max-width: 500px;
      padding: 20px;
      background-color: var(--accent-color);
      border-radius: 8px;
      text-align: center;
      margin: 0 auto;
      box-sizing: border-box;
    }

    .form-label {
      display: block;
      margin-bottom: 10px;
    }

    .form-input {
      width: 100%;
      padding: 12px;
      font-size: 1.2rem;
      border: 2px solid white;
      border-radius: 4px;
      margin-bottom: 20px;
      box-sizing: border-box;
    }

    .form-input:focus {
      box-shadow: 0 0 8px var(--gradient-color);
      outline: none;
    }

    .logo {
      width: 100px;
      height: auto;
      margin-bottom: 30px;
    }
    md-filled-button {
      width: 150px;
    }
  `;

  handleSubmit(event) {
    event.preventDefault();
    const username = this.shadowRoot.getElementById("username").value;
    localStorage.setItem("username", username);
    Router.go("/game");
  }

  render() {
    return html`
      <form id="userform" class="form-container" @submit="${this.handleSubmit}">
        <img src="/assets/mouse.png" alt="Logo" class="logo" />
        <label for="username" class="form-label">
          <input
            type="text"
            class="form-input"
            autocomplete="username"
            id="username"
            aria-required="true"
            placeholder="Nombre de usuario"
            required
          />
        </label>
        <md-filled-button type="submit" class="form-button"> Register </md-filled-button>
      </form>
    `;
  }
}

window.customElements.define("user-form", UserForm);
