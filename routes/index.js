const express=require('express');
const router=express.Router();
const newController=require('../controllers/home_controller');
router.get('/',newController.home)
router.post('/create_todo',newController.createTodo) //controller for creating todo list
router.post('/delete_todo',newController.deleteTodo) // controller for deleting the todo list
router.get('/editdata',newController.EditPage)       // controller for getting Edit page
router.post('/edit-todolist',newController.editDetails) // controller for Edting todo list
console.log('route')
module.exports=router;