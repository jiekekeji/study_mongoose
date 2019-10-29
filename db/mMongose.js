var mMongoose = require('mongoose')
var db_config = require('config')

// 发起连接
mMongoose.connect(`mongodb://${db_config.DB_URL}:${db_config.DB_URL_PORT}/${db_config.DB_NAME}`);

// 连接成功回调
mMongoose.connection.on('connected', function () {
  console.log('连接成功');
});

// 连接异常回调
mMongoose.connection.on('error', function (err) {
  console.log('连接异常: ' + err);
});

// 连接断开回调
mMongoose.connection.on('disconnected', function () {
  console.log('连接断开');
})

module.exports = mMongoose
