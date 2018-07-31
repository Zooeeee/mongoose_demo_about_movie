//导入mongoose 功能模块
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
/*
调用mongoose提供的Schema（）接口创建一个新的schema
每个schema会映射为MongoDB数据库中的一个collection（集合）
一个collection类似于一个类，比如下面我们创建下面代码就创建了一个名为MovieSchema的schema
并规定所映射的集合将包含五个字段:title,post,director,data,score,
并且每个字段只能存储字符串类型的数据，其中title字段中的存储的数据不能为空
*/
const MovieSchema = new Schema(
    {
        title:{type:String,required:true},
        post:{type:String},
        director:{type:String},
        date:{type:String},
        score:{type:String},
    },
    {timestamps:true}
);

/*
虽然定义了一个schema，但是Mongoose还不知道这个schema到底映射成数据库中的哪个集合，
所以还得把一个schema转换成一个model
这里传入的参数Movie，mongoose会自动将其跟名为movies的collection关联
*/ 
module.exports = mongoose.model('Movie',MovieSchema)