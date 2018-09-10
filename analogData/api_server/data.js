const Mock = require('mockjs');
const Random = Mock.Random;

/**
 * 登录
 * 用户信息
*/
exports.loginMessage={
	isSuccess:true,
    message:'登陆成功',
	data:{
		token:Random.id()
	}
};
