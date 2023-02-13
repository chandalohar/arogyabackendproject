let express  = require("express");
let cors = require("cors");
let app  = express();
let dbConfig = require("./config/dbConfig");
let loginRouter = require("./router/loginRouter");
let DiseaseCategoryRouter = require("./router/DiseaseCategoryRouter");
let MedicineProduct = require("./router/MedcProductRouter");
let orderCollectionRouter = require("./router/orderRouter")

dbConfig.dbConnection;  // calling this variable to get the connection 

app.use(express.json());
app.use(cors());            // disable cors policy 



app.use("/api/login",loginRouter);
app.use("/api/diseasecat",DiseaseCategoryRouter);
app.use("/api/medicineproduct",MedicineProduct);
app.use("/api/ordercollection",orderCollectionRouter);



app.listen(3000,()=>console.log("server running on port number 3000")); 