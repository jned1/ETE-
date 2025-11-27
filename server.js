const express = require("express");
const app = express();

app.use(express.json());

let students = [
  { id: 1, name: "Amit", marks: 85 }
];

// GET all students
app.get("/students", (req, res) => {
  res.json(students);
});

// POST add new student
app.post("/students", (req, res) => {
  const { name, marks } = req.body;

  const newStudent = {
    id: students.length + 1,
    name,
    marks
  };

  students.push(newStudent);
  res.json(newStudent);
});

// GET student by ID
app.get("/students/:id", (req, res) => {
  const id = Number(req.params.id);
  const student = students.find(s => s.id === id);

  if (!student) {
    return res.status(404).json({ message: "Student not found" });
  }

  res.json(student);
});

app.listen(3000, () => console.log("Student Manager running on 3000"));
