const express = require('express');
const router = express.Router();
const {pool} = require('../config/db')

router.get("/characters", async (req, res) => {
    const getCharacters = await pool.query('select * from characters');
    res.send(getCharacters.rows);
})

module.exports = router;