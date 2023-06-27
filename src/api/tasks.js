const express = require('express');
const router = express.Router();
const { pool } = require('../config/db')


 router.get("/tasks", async (req, res) => {
    let getTasks = [];
    try {
        getTasks = await pool.query(`select * from tasks`);
    }
    catch (error) {
       res.send(error);
    }
    finally {
        res.send(getTasks.rows);
    }
 })
 
 router.patch(`/task/:id`,  async (req, res) => {
    let edit=[];
    if (req.body.info =='flag'){
        try {
            edit = await pool.query(`update tasks set flag = ${req.body.flag} where id=${req.params.id}` );
        }
        catch (error) {
            res.send(error);
        }
        finally {   
            res.send(`flag updated`)
        }
    }
    else {
        try {
            edit = await pool.query(`update tasks set task = '${req.body.task}' where id=${req.params.id}` );
        }
        catch (error) {
            res.send(error);
        }
        finally {   
            res.send(`task updated`)
        }
    }
})

router.delete(`/task/:id`,  async (req, res) => {
    const deleteTask = await pool.query(`DELETE FROM tasks WHERE id = ${req.params.id}`);
    res.send('info deleted');
})

router.post(`/task/:id`, async (req, res) => {
    let sendTasks = [];
    let updatedTasks = [];
    try {
        sendTasks = await pool.query(`INSERT INTO tasks (task) VALUES('${req.body.task}')`);
        
        updatedTasks = await pool.query(`SELECT * FROM tasks`);
    }
    catch (error) {
       res.send(error);
    }
    finally {
        res.send(updatedTasks.rows);
    }
 })

module.exports = router;