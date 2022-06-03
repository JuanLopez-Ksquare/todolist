import express, { Request, Response } from "express";
import dotenv from "dotenv";
import { ToDo } from "./types";

dotenv.config();
const app = express();
const port = process.env.PORT;

//Todo data

let todoList = new Array<ToDo>();

// Middlewares //
app.use(express.json());

//List
app.get("/todo", (req: Request, res: Response) => {
  res.json(todoList);
})

//Read
app.get("/todo/:id", (req: Request, res: Response) =>{
  const {id} = req.params

  res.json(todoList[Number(id)]);

})

//Create
app.post("/todo", (req: Request, res: Response) => {
  const { id, description, status} = req.body;

  todoList.push({id, description, status});

  res.send(todoList[todoList.length-1]);

})

//Delete all

app.delete("/todo", (req: Request, res: Response) => {
  
  todoList = [];

  res.send("Clear");

})

app.listen(port, async () => {

    console.log("Up and running!!!");
});
