import express, { Response } from "express";
import repos from "../router/api/api.router";
import languages from "../languages/languages.controllers";

const router = express.Router();

/**
 * Je suis sur la route /api
 */
router.get("/", (_, res: Response) => {
  res.status(200).send("OK !");
});

router.use("/repos", repos);
router.use("/languages", languages);

export default router;
