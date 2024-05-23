import { LitElement, css, html } from "lit";
import "@material/web/button/filled-button.js";
import "../mole-circle/mole-circle.js";
import "../game-counter/game-counter.js";
import "../level-game/level-game.js";

export class MoleGame extends LitElement {
  static styles = css`
    :host {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 100vh;
    }
    .controls {
      display: flex;
      align-items: center;
      gap: 20px;
      margin-bottom: 20px;
    }
    .mole-container {
      background: var(--accent-color);
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      padding: 20px;
      gap: 20px;
      max-width: 450px;
      margin-bottom: 20px;
      border-radius: 8px;
    }
    .score {
      font-size: 2rem;
      color: #333;
      margin-bottom: 20px;
    }
    md-filled-button {
      width: 150px;
    }


    
    @media only screen and (max-width: 600px) {
      .controls {
        flex-direction: column;
        gap: 9px;
      }
      .mole-container {
        width: 100%;
        padding: 9px;
        gap: 9px;
      }
      md-filled-button {
        width: 95px;
        font-size: 0.75rem;
      }
    }
  `;

  static properties = {
    score: { type: Number },
    moleInterval: { type: Number },
    levelTime: { type: Number },
    gameRunning: { type: Boolean },
    pointsClicked: { type: Number },
    level: { type: String },
  };

  constructor() {
    super();
    this.score = 0;
    this.moleInterval = null;
    this.levelTime = 1000;
    this.gameRunning = false;
    this.pointsClicked = 10;
  }

  connectedCallback() {
    super.connectedCallback();
    this.addEventListener("level-clicked", this.handleLevelClick);
  }

  disconnectedCallback() {
    this.removeEventListener("level-clicked", this.handleLevelClick);
    super.disconnectedCallback();
  }

  handleLevelClick(event) {
    const level = event.detail.level;
    this.setLevel(level);
  }

  setLevel(level) {
    if (level === "low") {
      this.levelTime = 1000;
      this.pointsClicked = 10;
    } else if (level === "medium") {
      this.levelTime = 750;
      this.pointsClicked = 20;
    } else if (level === "high") {
      this.levelTime = 500;
      this.pointsClicked = 30;
    }
  }

  controlGame() {
    if (this.gameRunning) {
      this.stopGame();
    } else {
      this.startGame();
    }
  }

  startGame() {
    this.score = 0;
    this.moleInterval = setInterval(() => {
      this.showRandomMole();
    }, this.levelTime);
    this.gameRunning = true;
  }

  stopGame() {
    clearInterval(this.moleInterval);
    this.moleInterval = null;
    this.resetMoles();
    this.score = 0;
    this.gameRunning = false;
  }

  resetMoles() {
    const circles = this.shadowRoot.querySelectorAll("mole-circle");
    circles.forEach((circle) => (circle.visible = false));
  }

  showRandomMole() {
    this.resetMoles();
    const circles = this.shadowRoot.querySelectorAll("mole-circle");
    const randomCircle = circles[Math.floor(Math.random() * circles.length)];
    randomCircle.visible = true;
  }

  handleMoleClick() {
    this.score += this.pointsClicked;
    this.requestUpdate();
  }

  render() {
    const circles = [];
    for (let i = 0; i < 9; i++) {
      circles.push(html`<mole-circle @mole-clicked=${this.handleMoleClick}></mole-circle>`);
    }
    return html`
      <div class="controls">
        <level-game></level-game>
        <game-counter .score=${this.score}></game-counter>
      </div>
      <div class="mole-container">${circles}</div>
      <md-filled-button trailing-icon @click=${this.controlGame}>
        ${this.gameRunning ? "Stop" : "Play"}
      </md-filled-button>
    `;
  }
}

window.customElements.define("mole-game", MoleGame);
