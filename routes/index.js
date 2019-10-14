

const express = require('express');
const router = express.Router();

const indexController = require('../controllers/index');

router.get('/', indexController.index); 
router.get('/products', indexController.listProducts); 
router.post('/new-product', indexController.newProduct); 

module.exports = router;

//DEFINIR RUTAS 
//CUANDO TENGAS LA RUTA VAS A RESPONDER CON UN HELLO WORLD
// router.get('/', (req,res) => {
//     res.render('index', {
//         title: 'My Web'
//     })
// });
// router.get('/products', (req,res,next) => {
//     res.render('products', {
//         title: 'List of Products',
//         items: items
//     })
// });
// router.post('/new-product', (req,res,next) => {
//     const { newItem } = req.body;
//     items.push({
//         id: items.length + 1,
//         name: newItem
//     });
//     res.redirect('/products');
// })