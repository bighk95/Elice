"use strict";
/*const express = require('express');
const dotenv = require('dotenv');*/
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
app.get('/', (request, response) => {
    response.send('Express + TypeScript Server');
});
app.listen(process.env.PORT, () => {
    console.log(`[Server]: Server is runnig at http://localhost:${process.env.PORT}`);
});
