import express from 'express';
import { HydratedDocument } from 'mongoose';
import Todo from '../model/todoModel';
import { TodoInterface } from '../gloabalInterfaces';
const app = express();
const router = express.Router();


router.get('/getTodos', (req, res) => {
  Todo.find({})
    .select({ todo: 1, status: 1, id: 1 })
    .then(docs => {
      res.json({
        data: docs
      })
    }).catch(err => {
      res.json({
        error: err
      })
    })
})

router.put('/updateTodo/:id', (req, res) => {
  const { id } = req.params;
  const { data } = req.body;

  Todo.findByIdAndUpdate({ _id: id }, data).then((doc) => {
    res.json({
      data: "Updated"
    })
  }).catch(err => {
    res.json({
      error: err
    })
  })
})

router.delete('/deleteTodo/:id', (req, res) => {
  const { id } = req.params;

  Todo.findByIdAndDelete({ _id: id })
    .then((doc) => {
      if (!doc) {
        res.json({
          data: "The todo does'nt exist"
        })
      }
      res.json({
        data: true
      })
    }).catch(err => {
      res.json({
        error: err
      })
    })
})


router.post('/createTodo', (req, res) => {
  const { data } = req.body;
  console.log(data)

  const newTodo: HydratedDocument<TodoInterface> = new Todo(data);
  newTodo.save().then(doc => {
    res.json({
      data: {
        todo: doc.todo,
        status: doc.status,
        id: doc.id
      }
    })
  }).catch(error => {
    res.json({
      err: error
    })
  });
})


export default router;
