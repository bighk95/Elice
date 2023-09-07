/*const express = require('express');
const dotenv = require('dotenv');*/

import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app: Express = express();

app.get('/', (request: Request, response: Response) => {
  response.send('Express + TypeScript Server')
});

app.listen(process.env.PORT, () => {
  console.log(
    `[Server]: Server is runnig at http://localhost:${process.env.PORT}`
  )
})