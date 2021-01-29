const express = require("express");
const router2 = express.Router();

router2.get("/", (req,res)  => {
    res.send("Welcome to Avengers API ");
});

module.exports = router2
