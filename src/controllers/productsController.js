const fs = require('fs')
const path = require('path')
const productsFilePath = path.join(__dirname, '../data/products.json')
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'))

const productsController = {
    detail: (req, res) => {
        let product = products.find(product => product.id == req.params.id)
        res.render('product-detail', {product})
    },

    edit: (req, res) => {
        let product = products.find(product => product.id == req.params.id)
        res.render('product-edit', {product})
    },

    create: (req, res) => {
        res.render('product-create')
    },
    
    store: (req, res) => {
        
        let image

        if(req.files[0] != undefined){

            image = req.files[0].filename

        }else{

            image = "default-image.png"

        }

        let newProduct = {
            
            id: products[products.length - 1].id + 1,
            ...req.body,
            img: image
        }

        products.push(newProduct)

        fs.writeFileSync(productsFilePath, JSON.stringify(products, null, ''))

        res.redirect('/')
    },

    update: (req, res) => {
        let image

        if(req.files[0] != undefined){

            image = req.files[0].filename

        }else{

            image = "default-image.png"

        }

        let productToEdit = products.find(product => product.id == req.params.id)

        productToEdit = {
            id: productToEdit.id,
            ...req.body,
            img: image
        }

        let updatedProducts = products.map(product => {
            if(product.id == productToEdit.id){
                return product = {...productToEdit}
            } return product
        })

        fs.writeFileSync(productsFilePath, JSON.stringify(updatedProducts, null, ''))

        res.redirect('/')
    },

    destroy: (req, res) => {
        let productDeleted = products.filter(product => product.id != productDeleted.id)
    
        fs.writeFileSync(productsFilePath, JSON.stringify(productDeleted, null, ''))

        res.redirect('/')
    }
}

module.exports = productsController