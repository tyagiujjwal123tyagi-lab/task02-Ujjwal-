const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Backend API Running Successfully");
});

app.get("/student", (req, res) => {
    res.json({
        name: "Ujjwal Tyagi",
        course: "B.Tech CSE",
        college: "RKGIT"
    });
});

app.post("/student", (req, res) => {

    const { name } = req.body;

    if (!name) {
        return res.status(400).json({
            message: "Name is required"
        });
    }

    res.status(201).json({
        message: "Student Added Successfully",
        student: name
    });

});

app.listen(3000, () => {
    console.log("Server running on Port 3000");
});