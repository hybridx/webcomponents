const copyright = document.createElement('template');

copyright.innerHTML = `
<div class="copyight-section">
	<span class="copyright">
			Copyright &copy; <span id="year"></span> <slot name="name">All rights reserved</slot>
</div>
<style>
	.copyight-section {
		font-size: 14px;
		color: #72767B;
	}
</style>
`;

/**
 * OpCopyright is a web component for RedHat internal applications
 * which will automatically provide user with the current year if 
 * not explicitly provided
 * 
 * 
 *
 * @class OpCopyright
 * @extends {HTMLElement}
 */
class OpCopyright extends HTMLElement {
	constructor() {
		super();
	}

	connectedCallback() {
		const shadow = this.attachShadow({ mode: 'open' });
		shadow.appendChild(copyright.content.cloneNode(true));
		if (this.getAttribute('year') === null) {
			shadow.getElementById('year').innerHTML = new Date().getFullYear();
		} else {
			shadow.getElementById('year').innerHTML = this.getAttribute('year');
		}
	}
}
window.customElements.define('copyright-x', OpCopyright);
