const express = require("express");
const cors = require("cors");
const mysql = require("mysql");

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "jda01jda",
    database: "students",
});

db.connect((err) => {
    if (err) throw err;
    console.log("DB Connected!");
});

const app = express();
app.use(express.json());
app.use(cors());

app.post("/student", (req, res) => {
    const request = `INSERT INTO students_info
    (id, student_name, age, gender, class, sports_grade, teacher)
VALUES
   ( DEFAULT, 'jonathan p', 25,'M','ss2',69, 'Mr Adebayo' )  `;
    db.query(request, (err, data) => {
        if (err) res.send(err);
        res.send(data);
    });
});

app.get("/student", (req, res) => {
    const request = `SELECT * FROM students_info`;
    db.query(request, (err, data) => {
        if (err) res.send(err);
        res.send(data);
    });
});

app.listen(8000, () => {
    console.log(`server conected at http://${hostName}:${port} `);
});
