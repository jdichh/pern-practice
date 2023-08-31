const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

app.use(cors());
app.use(express.json());

// Add item
app.post("/todos", async (req, res) => {
    try {
        const { text } = req.body;
        const newItem = await pool.query("INSERT INTO todos (text) VALUES ($1) RETURNING *", [text]);
        const totalCount = await pool.query("SELECT COUNT(*) FROM todos");
        res.json({ item: newItem.rows[0], totalCount: totalCount.rows[0].count });
    } catch (error) {
        console.log(error.messsage)
    }
})

// Retrieve all items with pagination
app.get("/todos", async (req, res) => {
    try {
        const { page = 1, limit = 10} = req.query
        const offset = (page - 1) * limit
        const getItems = await pool.query("SELECT * FROM todos ORDER BY id LIMIT $1 OFFSET $2", [limit, offset]);
        res.json(getItems.rows)
    } catch (error) {
        console.log(error.messsage)
    }
})

// Retrieve specific item
app.get("/todos/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const getOneItem = await pool.query("SELECT * FROM todos WHERE id = $1", [id]);
        res.json(getOneItem.rows[0]);
    } catch (error) {
        console.log(error.messsage)
    }
})


// Update item
app.put("/todos/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const { text } = req.body;
        const updateItem = await pool.query("UPDATE todos SET text = $1 WHERE id = $2", [text, id])
        res.json("To-do item was updated.");
    } catch (error) {
        console.log(error.messsage)
    }
})

// Delete item
app.delete("/todos/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const deleteItem = await pool.query("DELETE FROM todos WHERE id = $1", [id])
        res.json("To-do item was deleted.");
    } catch (error) {
        console.log(error.messsage)
    }
})

app.listen(4000, () => {
    console.log("Server started on port 4000.")
})