
const express = require("express");
const sqlite3 = require("sqlite3").verbose();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

const db = new sqlite3.Database("./tasks.db");

db.run(`
  CREATE TABLE IF NOT EXISTS tasks (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    due_date TEXT,
    completed INTEGER DEFAULT 0
  )
`);

app.get("/", (req, res) => {
  res.send("Student Task Manager API is running!");
});

app.get("/tasks", (req, res) => {
  db.all("SELECT * FROM tasks", [], (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
});

app.post("/tasks", (req, res) => {
  const { title, due_date } = req.body;

  if (typeof title !== "string" || !title.trim()) {
    return res.status(400).json({ error: "Title is required" });
  }

  db.run(
    "INSERT INTO tasks (title, due_date) VALUES (?, ?)",
    [title.trim(), due_date || null],
    function (err) {
      if (err) return res.status(500).json({ error: err.message });
      res.status(201).json({ id: this.lastID, title, due_date });
    }
  );
});

app.put("/tasks/:id", (req, res) => {
  const { title, due_date, completed } = req.body;

  db.run(
    `UPDATE tasks SET
      title = COALESCE(?, title),
      due_date = COALESCE(?, due_date),
      completed = COALESCE(?, completed)
     WHERE id = ?`,
    [title, due_date, completed, req.params.id],
    function (err) {
      if (err) return res.status(500).json({ error: err.message });
      if (!this.changes) return res.status(404).json({ error: "Task not found" });
      res.json({ message: "Task updated" });
    }
  );
});

app.delete("/tasks/:id", (req, res) => {
  db.run("DELETE FROM tasks WHERE id = ?", [req.params.id], function (err) {
    if (err) return res.status(500).json({ error: err.message });
    if (!this.changes) return res.status(404).json({ error: "Task not found" });
    res.json({ message: "Task deleted" });
  });
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Student Task Manager running on port ${PORT}`);
});
