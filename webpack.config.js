var webpack = require('webpack')
var path = require('path')

module.exports = {
	entry:'./js/index.js',
	output:{
		//path:__dirname +'./dist',   //webpack2写法
		path:path.resolve(__dirname,'./dist'),
		filename:'merge.js'
	}
}