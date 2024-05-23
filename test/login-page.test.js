import { fixture, html, expect, aTimeout } from '@open-wc/testing';
import '../src/components/views/login-page/login-page.js';

describe('LoginPage', () => {
  it('renders the user form', async () => {
    const el = await fixture(html`<login-page></login-page>`);
    await el.updateComplete;  
    const userForm = el.shadowRoot.querySelector('user-form');
    expect(userForm).to.exist;
  });

  it('navigates on form submission', async () => {
    const el = await fixture(html`<login-page></login-page>`);
    const userForm = el.shadowRoot.querySelector('user-form');
    await el.updateComplete;
    userForm.shadowRoot.getElementById('username').value = 'testuser';
    userForm.shadowRoot.querySelector('form').dispatchEvent(new Event('submit'));
    expect(localStorage.getItem('username')).to.equal('testuser');

  });
});