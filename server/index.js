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
    database: "employeesystem"
});
app.post("/create", (req, res) =>{
    const name = req.body.name;
    const age = req.body.age;
    const country = req.body.country;
    const position = req.body.position;
    const wage = req.body.wage;

    db.query(
        "INSERT INTO employees (name, age, country, position, wage) VALUES (?,?,?,?,?)",
        [name, age, country, position, wage],
        (err, result) =>{
            if(err){
                console.log(err);
            }else{
                res.send("Values Inserted");
            }
        }
    )
    // res.send("working"); //i should not have more than 1  res in one controller else it will give an error
});
app.get("/employees", (request, response)=>{
    db.query("SELECT * FROM employees", (err, result)=>{
        if(err){
            console.log(err);
        }else{
            response.send(result);
        }
    })
})

app.listen(3001, ()=>{
    console.log("server is running on port 3001");
})
