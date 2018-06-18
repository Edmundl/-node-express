const express=require('express');

//1.创建服务
var server=express();

//3.处理请求
/*
server.get('/',function(){
	console.log('有get');
});
server.post('/',function(){
	console.log('有post');
});
*/

server.use('/',function(){
	console.log('有get或post');
});

/*
server.use('/a.html',function (req,res) {
	res.send('123');
	res.end();
});
server.use('/b.html',function (req,res) {
	res.send('456');
	res.end();
});
*/

//2.监听
server.listen(8080);