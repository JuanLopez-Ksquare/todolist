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
Object.defineProperty(exports, "__esModule", { value: true });
exports.startSequelize = exports.sequelize = void 0;
const sequelize_1 = require("sequelize");
const Todo_model_1 = require("./Todo.model");
const models = [Todo_model_1.initTodoModel];
const startSequelize = (db_name, db_password, db_hostname, db_username) => __awaiter(void 0, void 0, void 0, function* () {
    exports.sequelize = new sequelize_1.Sequelize("", db_username, db_password, {
        dialect: "postgres",
        host: db_hostname,
        logging: false,
    });
    for (const initModel of models) {
        initModel(exports.sequelize);
    }
    exports.sequelize.sync();
});
exports.startSequelize = startSequelize;
