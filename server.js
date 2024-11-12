import express from 'express';
import { MongoDbUrl } from './src/Database/dbconfig.js';
import cors from 'cors'
import morgan from 'morgan';
import { UserRouter } from './src/routes/user.js';
import { TransactionRouter } from './src/routes/transaction.js';


const port = 9001;
const app = express();

//Database
MongoDbUrl();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

app.use("/api/v1/users", UserRouter);
app.use("/api/v1/transactions", TransactionRouter);

app.get("/", (req, res) =>{
    res.json({
        status:"Success",
        message: "Hello Server"
    })
})

app.listen(port, 
    (error) =>{
        error? console.log("Server error")
        : console.log("Server connected"), port;
    }
)



