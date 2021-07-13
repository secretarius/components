class Confirmlink extends HTMLAnchorElement {
    connectedCallback() {
        this.addEventListener('click', event => {
            if(!confirm('Do you really want to leave?')) {
                event.preventDefault();
            }
        });
    }
}

customElements.define('us-confirm-link', Confirmlink, {extends: 'a'});