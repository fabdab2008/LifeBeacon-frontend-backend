const express = require('express');
const Hospital = require("../DB/HospitalSchema");
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Hospital API is working!');
});

module.exports = router;
