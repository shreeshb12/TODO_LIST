// importing the models(todo_list)
const todoList=require('../models/todo_list');
// function for redirecting to homePage
module.exports.home=(req,res)=>{
    // fetch the data from database using mongoose
    todoList.find({})
    .then((todo)=>{
        return res.render('homePage',{
            title:'home',
            todo_list:todo
        })
    })
    .catch((err)=>{
        console.error('error in fetching the data'+err);
        return
    })
}

// function for new Data
function DateValue(dueDate){
    let months = ['jan','feb','mar','Apr','May','june','july','aug','sept','oct','nov','dec'] // static value for implementing monthe value


    newdate = '';
    let monapp = '';
    // checking months 
    if(dueDate[1] == '01'){
        monapp=months[0];
    }
    else if(dueDate[1] == '02'){
        monapp=months[1];
    }else if(dueDate[1] == '03'){
        monapp=months[2];
    }else if(dueDate[1] == '04'){
        monapp=months[3];
    }else if(dueDate[1] == '04'){
        monapp=months[3];
    }else if(dueDate[1] == '05'){
        monapp=months[4];
    }else if(dueDate[1] == '06'){
        monapp=months[5];
    }else if(dueDate[1] == '07'){
        monapp=months[6];
    }else if(dueDate[1] == '08'){
        monapp=months[7];
    }else if(dueDate[1] == '09'){
        monapp=months[8];
    }else if(dueDate[1] == '10'){
        monapp=months[9];
    }else if(dueDate[1] == '11'){
        monapp=months[10];
    }else if(dueDate[1] == '12'){
        monapp=months[11];
    }
    newdate =dueDate[2]+'-'+monapp+'-'+dueDate[0] // displaying date in dd-mm-yyyy formate
    return newdate;
}

// function for creating toto list
module.exports.createTodo = function(req,res){
    dueDate =req.body.dateValue.split('-'); // splitting date and taking montha value
   let newdate='';
    newdate= DateValue(dueDate);
    console.log(req.body);
    todoList.create({ // creating new todo and storing into DB
        todo:req.body.desc,
        category:req.body.category,
        dueDate: newdate
    })
    .then((newArr)=>{
        console.log(newArr)
        return res.redirect('/')
    })
    .catch((err)=>{
        console.log('Oops error occoured'+err);
            return;
    })
}
// function for deleting todo list
module.exports.deleteTodo = function(req,res){ 
    sp = req.query.id; // getting the id from ui
    newsp = sp.split(','); 
    for(let i=0;i<newsp.length;i++){ // looping over newsp  to delete all the checked value
        todoList.findByIdAndDelete(newsp[i])
        .catch((err)=>{
            console.log('oops!! error occured while deleting')
        })
    }
return res.redirect('/');
}
// function for fetching data for edit page
module.exports.EditPage = function(req,res){ 
    // fetching the data which need to be edited
    // console.log(req.query)
    todoList.findById(req.query.id)
    .then((todoLists)=>{
        console.log(todoLists)
        res.render('editPage',{
            title:'edit page',
            todolist:todoLists
        })
        
    })
    .catch((err)=>{
        console.log('error!! while editing')
        return
    })
}
// function for updatind tada after the todo is being edited
module.exports.editDetails = function(req,res){
    dueDate =req.body.dueDate.split('-'); // splitting date and taking montha value
    let newdate='';
    newdate= DateValue(dueDate);
    // console.log(req.query) 
     todoList.updateOne({_id:req.query.id},{$set:{todo:req.body.desc,category:req.body.category,dueDate:newdate}})
     .then(()=>{
        return res.redirect('/')
     })
     .catch((err)=>{
        console.log('error!! while updating')
        return
     })
}