//导入express 功能模块，创建一个Express应用实例名为app  
const express = require('express');
//const bodyParser = require('body-parser');
const app = express();

//引入mongoose数据库驱动
const mongoose = require('mongoose');
//设置连接位置
mongoose.connect('mongodb://localhost:27017/movie-db');
const db = mongoose.connection;
//引入MovieSchema
const Movie = require('./models/movie')

/*
//使用body-parser中间件
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}))
*/

//监听链接信息
db.on('error',console.log);
//手动连接一次，回调函数打印success
db.once('open',function(callback){
    console.log("success")
})


//app.get（）接口会响应http get 的请求
//当访问路径与/相匹配是，会执行上述代码，并通过res.send()接口像客户端发送hello world 字符串
app.get('/',function(req,res){
    res.send('Hello world!');//向服务器发送消息
})

//app.listen()方法会创建一个HTTP server实例，用来监听来自本地3000端口的所有请求
app.listen(3000,function(){
    console.log('你的服务器在3000端口')
})








//======================================================
//======================================================
//以下是我根据文档写的几个demo
//可以在每个方法下将注释解除 便能使用

//显示所有信息
function get_movies(){
Movie.find(function(err,movies){
    if(err) return console.error(err)
    console.log("这是展示全体数据的")
    console.log(movies)
})
}
//get_movies()

//添加一个电影到数据库，传入参数为一个含有title属性的对象
function post_one_movie(obj) {  
var abc  = new Movie({title:obj.title});
abc.save(function (err,abc) { 
    if(err) return console.error(err)
    console.log(abc.title+"添加成功")
 })
}
//post_one_movie({title:"我不是药神"})


//通过id寻找该数据对象
function get_one_movie_by_id(id){
Movie.findById(id,function(err,doc){
    if(err) return console.error(err)
    console.log(doc)
})
}
/*
let id = "5b607510372519833c9fec4a";
get_one_movie_by_id(id)
*/

//通过id修改该数据对象的一个属性
function modify_by_id (id,obj){
Movie.update({"_id":id},obj,function(err,doc){
    if(err) return console.error(err)
    console.log("修改成功"+doc)
})
}

/*let obj = {title:"我不是药神"};
let id = "5b607510372519833c9fec4a";
modify_by_id (id,obj)*/


function remove_first_movie_by_title(title){
Movie.findOneAndRemove({title:title},function(err,doc){
    if(err) return console.error(err)
    console.log("删除成功"+doc)
})
}
//remove_first_movie_by_title("我不是药神")