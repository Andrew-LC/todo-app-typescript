import { Schema, model } from "mongoose";
import { TodoInterface } from "../gloabalInterfaces";

const todoSchema = new Schema<TodoInterface>({
  todo: String,
  status: Boolean
})

const Todo = model<TodoInterface>('Todo', todoSchema);


export default Todo;
