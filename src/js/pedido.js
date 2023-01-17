import { Carrito} from "./carrito.js";

const carro = new Carrito();
const misServicios = document.getElementById('MisServicios');
export const productos = document.getElementById('products');


const cargarEventos = ()=>{
    productos.addEventListener('click', (e)=>{carro.comprarProducto(e)});
    misServicios.addEventListener('click', (e)=>{carro.eliminarProducto(e)});
    document.addEventListener('DOMContentLoaded', carro.leerLocalStorage());

}

export {cargarEventos,};