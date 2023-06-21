const express = require('express');
const router = express.Router();
const {pool} = require('../config/db')


router.get("/tasks", async (req, res) => {
    const getTasks = await pool.query('select * from tasks');
    res.send(getTasks.rows);
})

module.exports = router;