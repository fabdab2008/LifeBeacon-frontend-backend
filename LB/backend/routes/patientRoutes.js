const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Patient API is working!');
});

module.exports = router;
