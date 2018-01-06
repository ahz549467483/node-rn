var express = require('express');
var router = express.Router();
var fs = require('fs');
var PATH = './public/data/';

/* GET home page. */
router.get('/', function(req, res, next) {
	if(!req.session.user){
		return res.render('login',{})
	}
  res.render('index', { title: 'Express' });
  // return res.send({
  // 	status:1,
  // 	data:'厕所数据'
  // })
});

router.get('/login',function(req, res, next){
	res.render('login',{})
})

router.get('/tuijian', function(req, res, next) {
  if(!req.session.user){
    return res.render('login', {});
  }
  res.render('tuijian', {});
});

router.get('/edit',function(req, res, next){
	if(!req.session.user){
		return res.render('login', {})
	}
	var type = req.param('type');
	if(!type){
		return res.send({
			status:0,
			msg:'参数不足'
		})
	}
	var obj={};
	switch(type){
		case 'sanwen':
        	obj = {};
        	break;
		case 'it':
			obj = {};
			break;
		case 'manager':
			obj = {};
			break;
		case 'cookies':
			obj = {};
			break;
		default :
			return res.send({
		  		status:0,
		  		info: '参数错误'
			});
        	break;
	}
	fs.readFile(PATH+type+'.json',function(error, data){
		if(error){
			return res.send({
				status:0,
				msg:'获取数据失败'
			})
		}
		var obj = JSON.parse(data.toString());
		return res.render('edit', {
			status:1,
			data:obj
		})
	})
})
module.exports = router;
