import axios from "axios";
import { toast } from "react-toastify";
import { PostDataInterface, TodoInterface } from './interfaces/global-interfaces'

const getTodos = async () => {
  const response = await axios.get('http://localhost:3001/api/getTodos');
  const todos = response.data.data;

  return todos
}


const postTodo = (data: PostDataInterface): any => {
  axios.post('http://localhost:3001/api/createTodo', data)
    .then(response => {
      if (!response) {
        toast.error("Unkown error !", {
          position: toast.POSITION.TOP_CENTER
        })
      } else {
        toast.success("Successfully added a new todo !", {
          position: toast.POSITION.TOP_CENTER
        })
      }
    }).catch(err => {
      console.log(err)
    })
}


const deleteTodo = (id: string): void => {
  axios.delete(`http://localhost:3001/api/deleteTodo/${id}`).then(response => {
    toast.warn('Delete todo !', {
      position: toast.POSITION.TOP_CENTER
    })
  }).catch(err => {
    console.log(err)
  })
}


const updateTodo = (id: string, status: boolean): void => {
  axios.put(`http://localhost:3001/api/updateTodo/${id}`,
    { data: { status: status } })
    .then(response => {
      toast.success('completed a todo, keep up !', {
        position: toast.POSITION.TOP_CENTER
      })
    }).catch(err => {
      console.log(err)
    })

}



export { getTodos, postTodo, deleteTodo, updateTodo }

