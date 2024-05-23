import { fixture, html, expect } from '@open-wc/testing';
import '../src/components/elements/menu-bar/menu-bar.js';

describe('MenuBar', () => {
  beforeEach(() => {
    localStorage.setItem('username', 'testuser');
  });

  afterEach(() => {
    localStorage.clear();
  });

  it('displays the username from localStorage', async () => {
    const el = await fixture(html`<menu-bar></menu-bar>`);
    await el.updateComplete;
    const userNameElement = el.shadowRoot.querySelector('h1');
    expect(userNameElement).to.exist;
    expect(userNameElement.textContent).to.equal('testuser');
  });
});