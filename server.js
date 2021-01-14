const mongoose = require("mongoose");
const express = require("express");
const PORT = 3000

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true });

const app = express();

//++++++++++++ following 2 lines added by Me because of library tutorial++++++++++++++++++++++
const htmlRouter = require('./routes/htmlRoutes.js');
const WorkoutRouter = require('./routes/apiRoutes.js');
//+++++++++++++++++++++++++



app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

//++++++++++++ following 2 lines added by Me because of library tutorial++++++++++++++++++++++
app.use('/', htmlRouter);
app.use('/workouts', WorkoutRouter);


//+++++++++++++++++++++++++++++++++++++
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
  res.render('error');
});
//++++++++++++++++++++++++++++++++

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
  });


//++++++++++++ following line added by Me because of library tutorial++++++++++++++++++++++
  module.exports = server;