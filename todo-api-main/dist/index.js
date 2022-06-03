"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT;
//Todo data
let todoList = new Array();
// Middlewares //
app.use(express_1.default.json());
//List
app.get("/todo", (req, res) => {
    res.json(todoList);
});
//Read
app.get("/todo/:id", (req, res) => {
    const { id } = req.params;
    res.json(todoList[Number(id)]);
});
//Create
app.post("/todo", (req, res) => {
    const { id, description, status } = req.body;
    todoList.push({ id, description, status });
    res.send(todoList[todoList.length - 1]);
});
//Delete all
app.delete("/todo", (req, res) => {
    todoList = [];
    res.send("Clear");
});
app.listen(port, () => __awaiter(void 0, void 0, void 0, function* () {
    console.log("Up and running!!!");
}));
