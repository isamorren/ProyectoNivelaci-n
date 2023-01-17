import { products } from "../utils/data.js";
import {cargarModal, containProducts} from "../js/nodes.js";
import { cargarEventos}  from "./pedido.js";

const templateCard = (product) =>{
    console.log(product);
    return`
        <div>
            <div id="modal-${product.id}" class="modal">
                <div class="modal-content">
                    <figure class="btnClose" id="boton-${product.id}">
                        <img class="imgIcon close" src="public/assets/iconClose.png" alt="">
                    </figure>
                    <figure class="containImg">
                        <img src="public/imgProducts/${product.url}" alt="" class="imgCard">
                    </figure>
                    <h2 class="nameProduct">${product.name}</h2>
                    <div>
                        <p>${product.description}</p>
                    </div>
                </div>
            </div>
            <div class="SectionModal card">
                <figure id="${product.id}" class="containImg">
                    <img src="public/imgProducts/${product.url}" alt="" class="btnModal imgCard">
                </figure>
                    <h2 class="nameProduct">${product.name}</h2>
                <div class="button-card">
                    <button class="AddCarrito" data-id=${product.id}>Add</button>
                </div>
            </div>
        </div>
    `
}

const view = () =>{
    const view = products.map((product) => templateCard(product));
    containProducts.innerHTML = view.join(" ");
    cargarEventos();
    cargarModal();
}

export {view,};
