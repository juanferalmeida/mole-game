import { LitElement, css, html } from "lit";
import "../link-button/link-button.js";

export class MenuBar extends LitElement {
  static styles = css`
  .menu {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: var(--secondary-color);
    padding: 1rem;
    height: 50px;
    position: relative;
  }
  .menu-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }
  .left-section,
  .right-section {
    display: flex;
    align-items: center;
  }
  h1 {
    color: white;
    margin-right: 10px;
  }
  img {
    vertical-align: middle;
    margin-left: 8px;
  }
  .menu-responsive {
    display: none;
    cursor: pointer;
    z-index: 2; 
  }
  .menu-items {
    display: none;
    flex-direction: column;
    align-items: center;
    background-color: var(--secondary-color);
    position: absolute;
    top: 60px;
    left: 0;
    width: 100%;
    padding: 1rem 0;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    z-index: 1;
  }
  .menu-items.open {
    display: flex;
  }

  @media (max-width: 600px) {
    .menu-content {
      display: none;
    }
    .menu-responsive {
      display: flex;
    }
  }
`;

  changeMenu() {
    const menuItems = this.shadowRoot.querySelector(".menu-items");
    menuItems.classList.toggle("open");
  }

  render() {
    const userName = localStorage.getItem('username');
    return html`
      <div class="menu">
        <div class="menu-content">
          <div class="left-section">
            <h1>${userName}</h1>
          </div>
          <div class="right-section">
            <link-button href="/">
              Exit <img alt="Exit button" src="/assets/logout.png" width="30px" />
            </link-button>
          </div>
        </div>
        <div class="menu-responsive" @click=${this.changeMenu}>
          <img alt="Menu" src="/assets/burger-bar.png" width="30px" />
        </div>
      </div>
      <div class="menu-items">
        <div class="left-section">
          <h1>${userName}</h1>
        </div>
        <div class="right-section">
          <link-button href="/">
            Exit <img alt="Exit button" src="/assets/logout.png" width="30px" />
          </link-button>
        </div>
      </div>
    `;
  }
}

customElements.define("menu-bar", MenuBar);
