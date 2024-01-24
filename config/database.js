const mongoose = require("mongoose");

require("dotenv").config();

const dbConnect = ()=>{
    mongoose.connect(process.env.DATABASE_URL,{
        useNewUrlParser: true,
        useUnifiedTopology:true,
    })
    .then(console.log("db connection is successfull"))
    .catch((err)=>{
        console.log("Db is facing connection issues");
        console.log(err);
        process.exit(1);
    })
};

module.exports = dbConnect;