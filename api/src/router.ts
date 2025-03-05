import express from "express";

const router = express.Router();

router.get("/repos",(req, res) => {
    res.status(200).send("OK");
})

export default router;