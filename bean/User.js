const mMongoose = require('../db/mMongose')
const mongoosePaginate = require('mongoose-paginate');
const schema = new mMongoose.Schema({
  newsInfoId: {type: String}, // 新闻资讯ID
  matchId: {type: String}, // 赛事ID
  user: {type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true}, // 评论者
  date: {type: String, required: true}, // 评论日期
  time: {type: String, required: true},// 评论时间08:30:23
  content: {type: String, maxlength: 200}, // 评论最长200个字符
  zanNum: {type: Number, default: 0}, // 获得赞的个数
  caiNum: {type: Number, default: 0}, // 获得踩的个数
  state: {type: Number, default: 0, enum: [0, 1, 2]}, // 0 正常, 1 已下架， 2 被举报
  stateTips: {type: String},
  replys: [
    {type: mongoose.Schema.Types.ObjectId, ref: 'CommentReply'}
  ]
}, {timestamps: {createdAt: 'created', updatedAt: 'updated'}});
schema.plugin(mongoosePaginate);
module.exports = mMongoose.model('Comment', schema);
