const express = require('express')
const router = express.Router()
const productsController = require('../controllers/productsController')
const multer = require('multer')
const path = require('path')

/******** MULTER *********/
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public/images/')
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
  })
  
  const upload = multer({ storage: storage })


router.get('/detail/:id', productsController.detail)

router.get('/create', productsController.create)
router.post('/create', upload.any(), productsController.store)

router.get('/edit/:id', productsController.edit)
router.put('/edit/:id', upload.any(), productsController.update)

router.delete('/edit/:id', productsController.destroy)

module.exports = router