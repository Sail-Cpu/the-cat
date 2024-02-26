// @ts-ignore
import express, { Response, Request } from "express";
// @ts-ignore
import bodyParser from "body-parser";

//router
import userRouter from "./router/users/router";

const app = express();

app.use(bodyParser.json());
app.use(express.json());

app.use(userRouter);

app.listen(3000, () => {
    console.log("The server is running on port 3000.");
})