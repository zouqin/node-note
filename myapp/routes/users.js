var express = require('express');
var request = require('request');
var router = express.Router();

/**
 * 测试模块
 * 使用request模块在node服务器中请求php 后台参数，根据请求过程得出：
 * 1.传统后台 MVC 视图层,将V（ 视图层划分至前端 ）；
 * 2.后台只需要关注业务落体提供数据接口；
 * 3.静态文件 css、html、js 模板存放在前端服务器上；
 */
router.get('/', function(req, res, next) {
    request('http://127.0.0.1/index.php?m=Wap&com=User&c=King&a=smallSign&token=zkvxmx1450751134&login=o5untwtiYfa2jXOcnB1RRQK1xBFc',function (error, response, body){
	    if (!error && response.statusCode == 200) {
	    	console.log( body );
        	res.send( body );
    	}
  	});
});
module.exports = router;
