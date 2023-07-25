import express from 'express';
import ProductManager from './ProductManager.js';

const app = express();

app.use(express.urlencoded({extended: true}))

const manager = new ProductManager()

app.get('/products', async (req, res) => {
    let {limit} = req.query
    let productos = await manager.getProducts()
    let limite = limit ? productos.filter(product => product.limit == limit) : productos
    res.send(limite)
})

app.get('/products/:pid', async (req, res) => {
    let pid = req.params.pid
    let productos = await manager.getProducts()
    let producto = productos.find(product => product.pid == pid)
    res.send(producto)
})

const server = app.listen(8080, () => console.log('Server running on port: 8080'))