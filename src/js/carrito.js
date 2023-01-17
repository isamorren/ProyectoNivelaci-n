import {navServicio} from "./nodes.js";

export class Carrito{
    comprarProducto(e){

        e.preventDefault();
        if(e.target.classList.contains('AddCarrito')){
            const producto= e.target.parentElement.parentElement;
            this.leerDatosProducto(producto);
        }
    }

    leerDatosProducto(producto){
        const infoProducto = {
            imagen : producto.querySelector('img').src,
            titulo : producto.querySelector('h2').textContent,
            id : producto.querySelector('button').getAttribute('data-id')
        }
        this.insertarCarrito(infoProducto);

    }

    insertarCarrito(producto){
   
        const div = document.createElement('div');
        div.innerHTML = `

            <div class="list__item">
            <figure>
                <img class="img__item"
                    src="${producto.imagen}"
                    alt="">
            </figure>
            <div>
                <h3 class="title__item">${producto.titulo}</h3>
            </div>
            <div> 
                <a data-id="${producto.id}">
                    <img class="borrar-producto img__item" src="/public/assets/iconClose.png" alt="">
                </a>
            </div>
        </div>
    `;
    navServicio.appendChild(div);
    this.guardarProductosLocalStorage(producto);
    }

    eliminarProducto(e){
        e.preventDefault();
        let producto, productoID;
        
        if(e.target.classList.contains('borrar-producto')){
            e.target.parentElement.parentElement.parentElement.remove();
            producto = e.target.parentElement.parentElement;
            productoID = producto.querySelector('a').getAttribute('data-id');
            console.log(productoID);
            this.eliminarProductoLocalStorage(productoID);
        }
        
    }
  
    guardarProductosLocalStorage(producto){
        let productos;
        productos = this.obtenerProductosLocalStorage();
        productos.push(producto);
        localStorage.setItem('productos', JSON.stringify(productos));
    }

    obtenerProductosLocalStorage(){
        let productoLS;

        if(localStorage.getItem('productos') === null){
            productoLS = [];
        }
        else {
            productoLS = JSON.parse(localStorage.getItem('productos'));
        }
        return productoLS;
    }
    
    eliminarProductoLocalStorage(productoID){
        let productosLS;
        console.log("producto ID: ", productoID);
        productosLS = this.obtenerProductosLocalStorage();
        productosLS.forEach(function(productoLS, index){
            console.log("productoLS: ", productoLS.id);
            if(productoLS.id === productoID){
                productosLS.splice(index, 1);
            }
        });

        localStorage.setItem('productos', JSON.stringify(productosLS));


    }

    leerLocalStorage(){
        let productosLS;
        productosLS = this.obtenerProductosLocalStorage();
        productosLS.forEach(function(producto){
                const div = document.createElement('div');
                div.innerHTML = `

                    <div class="list__item">
                    <figure>
                        <img class="img__item"
                            src="${producto.imagen}"
                            alt="">
                    </figure>
                    <div>
                        <h3 class="title__item">${producto.titulo}</h3>
                    </div>
                    <div> 
                        <a data-id="${producto.id}">
                            <img class="borrar-producto img__item" src="/public/assets/iconClose.png" alt="">
                        </a>
                    </div>
                </div>
            `;
            navServicio.appendChild(div);
        });
    }

}
