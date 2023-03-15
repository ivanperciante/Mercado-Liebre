const express = require('express')
const app = express()
const path = require('path')
const mainRouter = require('./src/routes/main.js')
const productRouter = require('./src/routes/products')
const methodOverride = require('method-override')

/******Middlewares ******/
app.use(express.static('public'))
app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use(methodOverride('_method'))

app.set('view engine', 'ejs')
app.set('views', './src/views')

app.listen(3000, () => 
    console.log('Servidor corriendo')
)

app.use('/', mainRouter)
app.use('/products', productRouter)
