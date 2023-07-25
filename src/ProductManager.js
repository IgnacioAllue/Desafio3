import fs from 'fs'

class ProductManager {
    constructor() {
        this.path = 'productos.json'
    }

    async getProducts(){
        let productos;
        try {
            let contenido = await fs.promises.readFile(this.path)
            productos = JSON.parse(contenido)
        } catch (error) {
            console.log(error)
        }
        return productos
    }
}

export default ProductManager