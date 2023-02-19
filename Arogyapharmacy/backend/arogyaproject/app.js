let express  = require("express");
let cors = require("cors");
let app  = express();
let dbConfig = require("./config/dbConfig");
let loginRouter = require("./router/loginRouter");
let DiseaseCategoryRouter = require("./router/DiseaseCategoryRouter");
let MedicineProduct = require("./router/MedcProductRouter");
let orderCollectionRouter = require("./router/orderRouter");
let categoryRouter=require("./router/CategoryRouter");
let productRouter=require("./router/ProductRouter");

dbConfig.dbConnection;  // calling this variable to get the connection 
dbConfig.adminAccount(); //calling this variable to get admin account login 

app.use(express.json());
app.use(cors());            // disable cors policy 



app.use("/api/login",loginRouter);
app.use("/api/diseasecat",DiseaseCategoryRouter);
app.use("/api/medicineproduct",MedicineProduct);
app.use("/api/ordercollection",orderCollectionRouter);
app.use("/api/category",categoryRouter);
app.use("/api/product",productRouter);





app.listen(3000,()=>console.log("server running on port number 3000")); 