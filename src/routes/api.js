import express from 'express';
import memberRoute from "../member/memberRoute";
import structerRoute from "../structer/structerRoute";

const app = express();

app.use('/members',memberRoute);
app.use('/structers',structerRoute);


module.exports = app;