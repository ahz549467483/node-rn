var express = require('express');
var router = express.Router();
var fs = require('fs');
var PATH = './public/data/';
//读取/data/read?type=it下的数据
router.get('/', function(req, res, next) {
  res.send('data');
});
router.get('/read',function(req, res, next){
	var type = req.param('type')||'';
	fs.readFile(PATH+type+'.json',function(error, data){
		if(error){
			return res.send({
				status:0,
				data:'',
				msg:'获取数据失败'
			})
		}
		var ACOUNT=50;
		//做错误处理
		var obj=[];
		try{
			obj= JSON.parse(data.toString());
		}catch(err){
			obj=[];
		}
		var obj= JSON.parse(data.toString());
		if(obj.length>50){
			obj=obj.slice(0, ACOUNT);
		}
		return res.send({
			status:1,
			data:obj
		})
	})
})	

router.post('/write', function(req, res, next){
	if(!req.session.user){
		return res.send({
			status:0,
			msg:'您尚未登录'
		})
	}
	var type = req.param('type')||'';
	var title = req.param('title')||'';
	var img = req.param('img')||'';
	var url = req.param('url')||'';
	if(!title || !img || !url){
		return res.send({
			status:0,
			msg:'提交的参数不全'
		})
	}
	var filePath = PATH + type +'.json';
	fs.readFile(filePath ,function(error, data){
		if(error){
			return res.send({
				status:0,
				data:'',
				msg:'获取数据失败'
			})
		}
		//获取元数据
		var arr = JSON.parse(data.toString());
		var obj={
			url:url,
			title:title,
			img:img,
			type:type,
			id:guidGenerate()
		};
		// 插入新数据
		arr.splice(0, 0, obj);
		var newArr= JSON.stringify(arr);
		fs.writeFile(filePath, newArr, function(err){
			if(err){
				return res.send({
					status:0,
					msg:'保存失败'
				})
			}
			return res.send({
					status:1,
					msg:'保存成功'
				})
		})
	})
})
//阅读模块写入结构，
router.post('/write_config', function(req, res, next){
	var data = JSON.parse(req.body.data);
	var newData= JSON.stringify(data);
	/**
	 * todo
	 * 防止xss攻击
	 * npm install xss
	 * require('xss')
	 * var string= xss(name);
	 */
	 fs.writeFile( PATH+'config.json', newData, function(err){
			if(err){
				return res.send({
					status:0,
					msg:'写入失败'
				})
			}
			return res.send({
					status:1,
					data:data
				})
		})
})
//登录接口
router.post('/login',function(req, res, next){
	var username = req.body.username,
		password = req.body.password;
		console.log(req.body)
	if(username == 'admin' && password == 'password'){
		req.session.user = {
			username:username
		}
		return res.send({
			status:1,
			msg:'登录成功'
		})
	}else{
		return res.send({
			status:0,
			msg:'登录失败'
		})
	}
})
//存储数据
function guidGenerate(){
	return 'xxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c){
		var r= Math.random()*16 | 0,
		v = c=='x'? r:(r & 0x3 | 0x8);
		return v.toString(6);
	}).toUpperCase();
}
module.exports = router;