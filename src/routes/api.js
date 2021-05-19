import express from 'express';
import memberRoute from "../member/memberRoute";
import structerRoute from "../structer/structerRoute";
import userRoute from "../users/users-router";

const app = express();

app.use('/members',memberRoute);
app.use('/structers',structerRoute);
app.use('/users', userRoute)


module.exports = app;