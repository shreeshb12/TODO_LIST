const mongoose=require('mongoose');
const todoSchema=new mongoose.Schema({
    todo:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    dueDate:{
        type:String,
        required:true
    }   
})

const TodoLists=mongoose.model('todo_list',todoSchema);
module.exports=TodoLists;
