const express = require("express");
const app = express();

require("dotenv").config();

const PORT = process.env.PORT || 4000;

//middleware
app.use(express.json());

//import routes
const blog = require("./routes/Blog.js");
//mount
app.use("/api/v1", blog);

const dbConnect = require("./config/database");
dbConnect();

//start the server
app.listen(PORT,() => {
    console.log(`App is started at port no ${PORT}`);
})

app.get("/",(req,res)=>{
    res.send("this is Homepage baby");
})