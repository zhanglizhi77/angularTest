var express = require('express');
var app = express();
var data = require('./data.js');
var http = require('http').createServer(app);
app.set('port', process.env.PORT || 19000);

//监听端口是否启动
http.listen(app.get('port'), function () {
  console.log('server listening on port' + app.get('port'));
});

/**
 * 登录
*/
app.post('/login.action',function(req, res){
  res.send(data.loginMessage);
});