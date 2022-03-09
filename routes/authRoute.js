const router = require("express").Router();

router.get("/", (req, res) => {
    res.send("Auth page")
})

module.exports = router