import express from "express";
import "dotenv/config";
import router from "./router";

const app = express();

const port = process.env.SERVER_PORT || 3000;

app.use(express.json());
app.use('/api', router);


app.listen(port, () => {
    console.info(`Server running on http://localhost:${port}`);
});