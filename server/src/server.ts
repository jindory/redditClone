import express from "express"
import morgan from "morgan"
import { AppDataSource } from "./data-source";
import autoRoutes from './routes/auth'
import cors from 'cors';

const app = express()
const origin = "http://localhost:4000";

app.use(cors({
    origin
}))
app.use(express.json());
app.use(morgan('dev'));

app.get("/", (_, res) => res.send("running"));
app.use("/api/auth", autoRoutes)

let port = 4000;
app.listen(port, async ()=>{
    console.log(`server running at http://localhost:${port}`);

    AppDataSource.initialize().then(async () => {
        console.log("database initial")
    }).catch(error => console.log(error))
    
})