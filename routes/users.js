const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.send("Users page")
})

router.get("/new", (req, res) => {
    res.send("New users page")
})

module.exports = router