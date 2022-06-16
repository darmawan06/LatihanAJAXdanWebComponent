class customCard extends HTMLElement{
	connectedCallback(){
		this.innerHTML = `
		<div class="data">
            <h1>ID : ${this.getAttribute('id_brand')}</h1>
            <h2>Nama Brand : ${this.getAttribute('nama_brand')}</h2>
            <h3>Nama Brand Slug : $${this.getAttribute('nama_slug_brand')}</h3>
            <h3>Total Device : ${this.getAttribute('total_device')}</h3>
        </div>`;
	}
}


customElements.define('custom-card',customCard);