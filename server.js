const express = require('express');  //BASIC
const mongoose = require('mongoose'); 


const hotelDataAddedToDBRouter = require("./routes/dataimport.router");



// IMPORT THE ROUTER FILES
const hotelRouter = require("./routes/hotel.router");
const connectDB = require('./config/dbconfig');                      



const app = express();              //BASIC



 //whenever someone sends data in the JSON format to your server, the server will automatically understand and convert that data into a JavaScript object
app.use(express.json());
connectDB();



const PORT = 3500;                  //BASIC





app.get("/",(req,res)=>{            //BASIC
    res.send("Hello ALL")
})




// USE THE ROUTERS
app.use("/api/hoteldata", hotelDataAddedToDBRouter);
app.use("/api/hotels",hotelRouter);



mongoose.connection.once("open", () => {
    console.log("Connected to DB");
    app.listen(process.env.PORT || PORT, () => {        //BASIC
        console.log("Server is UP and Running ");
    });
});  