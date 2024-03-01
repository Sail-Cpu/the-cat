// @ts-ignore
import express, {Response, Request} from "express";
// @ts-ignore
import bodyParser from "body-parser";
// @ts-ignore
import cors from "cors";

//router
import userRouter from "./router/users/router";
import appRouter from "./router/applications/router";

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

app.use(userRouter);
app.use(appRouter);

app.listen(3000, () => {
    console.log("The server is running on port 3000.");
})