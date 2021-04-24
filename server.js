import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import logger from 'morgan';
import mongoose from 'mongoose';
import cors from 'cors';
import SourceMapSupport from 'source-map-support';
import routes from './src/routes/api';
// define our app using express
const app = express();

app.use(cors())
// app.use(express.static('public'));

app.use("/api/uploads", express.static(__dirname + '/uploads'));


// configure app
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:true }));
app.use(express.static(path.join(__dirname, 'public')));


// set the port
const port = process.env.PORT || 3001;
const fileUpload = require('express-fileupload');

// connect to database
mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://AMJC:projet@cluster0.zkqxn.mongodb.net/myFirstDatabase');
SourceMapSupport.install();
app.get('/', (req,res) => {
  return res.end('Api working');
})

app.use('/api', routes);

// catch 404
app.use((req, res, next) => {
  res.status(404).send('<h2 align=center>Page Not Found!</h2>');
});

// start the server
app.listen(port,() => {
  console.log(`App Server Listening at ${port}`);
});

// middle ware

app.use(fileUpload());
// file upload api
app.post('/upload', (req, res) => {
  if (!req.files) {
      return res.status(500).send({ msg: "file is not found" })
  }
      // accessing the file
  const myFile = req.files.file;
  //  mv() method places the file inside public directory
  myFile.mv(`${__dirname}/public/${myFile.name}`, function (err) {
      if (err) {
          console.log(err)
          return res.status(500).send({ msg: "Error occured" });
      }
      // returing the response with file path and name
      return res.send({name: myFile.name, path: `/${myFile.name}`});
  });
})