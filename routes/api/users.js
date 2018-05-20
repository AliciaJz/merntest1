const express = require("express");
const router = express.Router();

// @route       GET api/users/test
// @descripcion Test users route
// @access      Public
router.get("/test", (req, res) => res.json({ msg: "Usuarios funciona" }));

module.exports = router;
