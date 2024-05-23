import { fixture, html, expect } from '@open-wc/testing';
import '../src/components/elements/mole-game/mole-game.js';

describe('MoleGame', () => {
  it('updates points and increments score correctly', async () => {
    const el = await fixture(html`<mole-game></mole-game>`);
    
    const levelGame = el.shadowRoot.querySelector('level-game');
    levelGame.dispatchEvent(new CustomEvent('level-clicked', {
      detail: { level: 'medium' },
      bubbles: true,
      composed: true
    }));
    await el.updateComplete;
    
    expect(el.pointsClicked).to.equal(20);
    expect(el.levelTime).to.equal(750);

    el.score = 0;
    const moleCircle = el.shadowRoot.querySelector('mole-circle');
    moleCircle.visible = true;
    moleCircle.dispatchEvent(new CustomEvent('mole-clicked', {
      bubbles: true,
      composed: true
    }));
    await el.updateComplete;
    expect(el.score).to.equal(20);
    const scoreText = el.shadowRoot.querySelector('game-counter').shadowRoot.querySelector('.counter').textContent;
    expect(scoreText).to.contain('20');
  });
});