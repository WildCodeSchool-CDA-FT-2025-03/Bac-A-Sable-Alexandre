import express, { Response } from "express";
import repos from "./repos/repos.controllers";

const router = express.Router();

/** 
 * Je suis sur la route /api
 */
router.get("/",(_, res: Response) => {
    res.status(200).send("OK !");
})

router.use("/repos",repos);

export default router;