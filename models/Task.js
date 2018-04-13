var db=require('../dbconnection'); //reference of dbconnection.js
 
var Task={

postAllTasks:function (callback){
	return db.query("Select * from task",callback);
},

getAllTasks:function (id,callback){
 
return db.query("Select * from task where Id=?",[id],callback);
 
},
 
addTask:function(Task,callback){
 return db.query("Insert into task values(?,?,?)",[Task.id,Task.title,Task.status],callback);
},

deleteTask:function(id,callback){
  return db.query("delete from task where Id=?",[id],callback);
},

updateTask:function(id,Task,callback){
  return db.query("update task set Title=?,Status=? where Id=?",[Task.title,Task.status,id],callback);
},
 
getAllImages:function(page,callback){
	var numberpage=parseInt(page)*10;
	return db.query("select * from image limit 10 offset ?",[numberpage],callback);
}
};
module.exports=Task;