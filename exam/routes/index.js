var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/ingresar', function(req, res, next) {
  res.render('ingresar');
});

router.get('/eliminar', function(req, res, next) {
  res.render('eliminar');
});


router.get('/actualizar', function(req, res, next) {
  res.render('actualizar');
});


router.get('/buscar', function(req, res, next) {
  res.render('buscar');
});

module.exports = router;
