const express = require('express');  //BASIC
const mongoose = require('mongoose'); 
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();


const connectDB = require('./config/dbconfig');                      

const app = express();              //BASIC


app.use(cors());


  
app.use(cors({
    origin: 'http://localhost:3000' 
  }));
  

//whenever someone sends data in the JSON format to your server, the server will automatically understand and convert that data into a JavaScript object
app.use(express.json());
connectDB();
 
 
 
const PORT = 3500;                  //BASIC









// IMPORT THE ROUTER FILES
const hotelDataAddedToDBRouter = require("./routes/dataimport.router");              // POST DATA TO MONGODB              (2)
const categoryDataAddedToDBRouter = require("./routes/categoryimport.router");       // POST DATA TO MONGODB              (3)


// IMPORT THE ROUTER FILES
const hotelRouter = require("./routes/hotel.router");                               // TO GET ALL DATA                                    (1)
const categoryRouter = require("./routes/category.router");                         // TO GET ALL DATA BY CATEGORY                        (4)
const singleHotelRouter = require("./routes/singlehotel.router");                   // TO GET ONE DATA , WRITING ID FROM DATABAS          (5)
const authRouter = require("./routes/auth.router");                                 // TO POST DATA, new register can register,           (6) 
                                                                                    // using username,number,password,email
                                                                                    // /login , login using number and password
const wishlistRouter = require("./routes/wishlist.router");                         // (7)








app.get("/",(req,res)=>{            //BASIC
    res.send("Hello ALL")
})




// USE THE ROUTERS
app.use("/api/hotels",hotelRouter);                                         //   (1) (get HOTEL DATA)
app.use("/api/hoteldata", hotelDataAddedToDBRouter);                        //   (2) (post)
app.use("/api/categorydata", categoryDataAddedToDBRouter);                  //   (3) (post)
app.use("/api/category", categoryRouter);                                   //   (4) (get CATEGORY DATA)
app.use("/api/hotels", singleHotelRouter);                                  //   (5) (get single hotel data using id)
app.use("/api/auth", authRouter);                                           //   (6) (new register by post) / register and / login
app.use("/api/wishlist", wishlistRouter);                                   //   (7)



mongoose.connection.once("open", () => {
    console.log("Connected to DB");
    app.listen(process.env.PORT || PORT, () => {        //BASIC
        console.log("Server is UP and Running ");
    });
});  

