
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Hola mundo' });
};

exports.hello = function(req, res){

	var informacion = req.body.saludo
	var suma = 2+2
    res.render('saludo', { info: informacion, suma: suma });
};