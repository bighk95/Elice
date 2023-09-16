/* 1. express lib import
2. mongoose lib import
3. dotenv setting*/
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const { MONGO_USER, MONGO_PASS, PORT } = process.env
const userRouter = require('./router/userRouter')
const User = require('./models/users')

/*mongodb connect*/
mongoose
    .connect(`mongodb+srv://${MONGO_USER}:${MONGO_PASS}@cluster0.septvqn.mongodb.net/?retryWrites=true&w=majority&appName=AtlasApp`)
    .then(() => {console.log(`Connected to MongoDB Database`)})
    .catch((err) => console.log(err));



/*app.use setting*/
app.use(express.json());
app.use(express.urlencoded({ extended: true }))



/*Ejs setting (view engine)*/
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');



/*Router setting*/
app.use('/user', userRouter);



/*
get 요청
/ 경로로 들어왔을때 모든 유저를 조회해서 보내줌.
*/
app.get('/',(req, res) => {
    User.find({})
    .exec()
    .then((users) => {
        res.render('index', {users: users})
    })
    .catch((err) => {
        res.sendStatus(500)
    })
})

/*server start, port connect*/
app.listen(PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`)
})