import { LitElement, css, html } from "lit";
import "../../elements/user-form/user-form.js";

export class LoginPage extends LitElement {
  static styles = css`
    :host {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100vh;
    }
    .login-container {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      width: 100%;
      max-width: 600px;
      padding: 20px;
      box-sizing: border-box;
    }
  `;

  render() {
    return html` 
    <section class="login-container">
      <user-form></user-form>
    </section>`;
  }
}

window.customElements.define("login-page", LoginPage);