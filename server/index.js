const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());
app.use(express.json());


const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "password",
    database: "studentsystem"
});



//this is for ToDo App
app.post("/todo/post", (req, res) =>{
    const task = req.body.task;
    db.query(
        "INSERT INTO todo (task) VALUES (?)",
        [task],
        (err, result) => {
            if(err){
                console.log(err);
            }else{
                res.send("Values Inserted");
            }
        }
    )
})
app.get("/todo/get", (req, res) =>{
    db.query(
        "SELECT * FROM todo", (err, result) => {
            if(err){
                console.log(err);
            }else{
                res.send(result);
                console.log("get success");
            }
        }
    )
})
app.delete("/todo/id/:id", (req, res)=>{
    const id = req.params.id;
    db.query("DELETE FROM todo WHERE id = ?", id, (err, result)=>{
        if(err){
            console.log(err);
        }else{
            res.send(result);
        }
    })
});



//this is for Grades.js page
app.get("/grades", (req, res) => {
    db.query(
        "SELECT * FROM grades", (err, result) => {
            if(err){
                console.log(err);
            }else{
                res.send(result);
                console.log("get success");
            }
        }
    )
})



app.listen(3001, ()=>{
    console.log("server is running on port 3001");
})
