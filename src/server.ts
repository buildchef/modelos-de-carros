import bodyParser from "body-parser";
import express from "express";
import { myEnvironment } from "./environment";
import router from "./routes/router";

const app = express();

app.use("/minhaApi", router);
app.use(bodyParser.json);

app.listen(myEnvironment.app.port, () => {
    console.log("Api rodando na porta ", myEnvironment.app.port);
});