import createError from 'http-errors';
import express from 'express';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import cors from 'cors'
import employeeRouter from './routes/employee.js';
import hrRouter from './routes/hr.js';
import adminRouter from "./routes/admin.js"
import mongoose from "mongoose"

const app = express();
const CONNECTION_URL = "mongodb://localhost:27017/hr-management";
const port = 4000;

app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());


app.use('/', employeeRouter);
app.use('/hr', hrRouter);
app.use('/admin', adminRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json({ message: err.message});
});
mongoose.connect(CONNECTION_URL)
.then(()=>{ console.log("DB Connected"); app.listen(port, ()=> console.log("server running on port " + port)) })
.catch((err)=> console.log("Error connecting DB \n" + err.message))

