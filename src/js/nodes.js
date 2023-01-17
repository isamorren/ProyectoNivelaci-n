import {productos}  from "./pedido.js";

export const SectionModal = document.getElementsByClassName('SectionModal');
export const modal = document.getElementsByClassName('modal');
export const btnClose = document.getElementById('btnClose');
export const containProducts = document.getElementById('products');
export const navServicio = document.getElementById('MisServicios');
var id = 0;


export class ModalServicios{

    abrirModal(e){
        e.preventDefault();
        if(e.target.classList.contains('btnModal')){
            console.log("Contiene btnModal");
            const elemento = e.target.parentElement;
            id = elemento.getAttribute('id');
            const modalElemento = document.getElementById('modal-'+id+'');
            modalElemento.style.display= "block";
            console.log(modalElemento);
            modalElemento.addEventListener('click', (e) =>{modalServicios.cerrarModal(e)});
        }
    }

    cerrarModal(e){
        console.log("Entro a cerrar");
        if(e.target.classList.contains('close')){
            console.log("Contiene close");
            const modalElemento = document.getElementById('modal-'+id+'');
            modalElemento.style.display=  "none";
        }
    }
}

export const modalServicios  = new ModalServicios();

const cargarModal= ()=>{

    console.log(SectionModal);
    productos.addEventListener('click', (e)=>{ modalServicios.abrirModal(e)});
    
}

export {cargarModal,};