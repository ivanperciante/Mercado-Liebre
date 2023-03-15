const fs = require('fs')
const path = require('path')
const productsFilePath = path.join(__dirname, '../data/products.json')
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'))

const mainController = {
    index: (req, res) => {
        res.render('index', {products})
    },

    register: (req, res) => {
        res.render('register')
    },

    login: (req, res) => {
        res.render('login')
    }
}

module.exports = mainController