const { application } = require('express');
const express = require('express');
const {Router}= express
const aplicacion = express()

const rutaProductos = Router()

const port = 8080;



class contenedor {
    Constructor(productos) {
        this.productos = productos
    }

     save(objecto) {
        let id = 1;
        this.productos.forEach(element, index => {
            if (element.id >= id) {
                id = element.id + 1;
            }
        });

        objecto.id = id;
        this.productos.push(objecto)
        return id;

    }

     getByid(id) {
      
        let objetoSeleccionado = null;
        this.productos.forEach(element => {
            if (element.id == id) {
                objetoSeleccionado = element;
            }
        });
        return objetoSeleccionado
    }


     getAll() { 
        return this.productos;
    }


    deleteByid() {
        
        return archivoParseado;
        let indexSeleccionado = -1;
            this.productos.forEach((element, index => {
            if (element.id == id) {
                indexSeleccionado = index;
            }
        }));
        if(indexSeleccionado != -1){
            this.productos.splice (indexSeleccionado,1)
            
        }
    }

     deleteAll() {
       this.productos = [];
     
    }

}

const productos = new Contenedor([])

productos.save ({
    titulo:'Computadora',
    precio:'20000' ,
    
    titulo:'iphone',
    precio:'100000' ,
    
    titulo:'televisor',
    precio:'150000' ,

    
})

rutaProductos.get('/id:', async (peticion,respuesta) => {
    const id= peticion.params.id;
    const producto=productos.getByid(id)
    if(producto) {
        respuesta.json(producto) 
    } else {
        respuesta.status(404);
        respuesta.json({ error:'producto no encontrado'}); 
    }
    
});


rutaProductos.get('/', async (peticion,respuesta)=>{
    const listaProductos = productos.getAll()
    respuesta.json(listaProductos)
})

aplicacion.use('/productos',rutaProductos);