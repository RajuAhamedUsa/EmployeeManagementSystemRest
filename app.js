const express = require("express");

const bodyParser = require("body-parser");

const mongoose =require("mongoose");

const cors  = require('cors');

const dbURL =require('./config/db.config').mongoURL;
//Connection
mongoose.connect(dbURL).then(()=>{
  console.log("Mongo Connected");
}).catch((err)=>{
  console.log(err);
})

const app = express();
app.use(cors());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
app.use(bodyParser.json());

const emp = require("./routes/emp") //emp model hold

app.use("/emp",emp);


app.listen(5000, () => {
  console.log("server is running on port 5000");
});
