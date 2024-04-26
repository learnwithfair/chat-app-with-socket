const express = require('express');
const app = express();
const cors = require("cors");
const io = require("socket.io")(8080, {
    cors: {
        origin: "http://localhost:3000",
    },
});

// app Use

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.get('/', (req, res) => {

    res.send("Welcome");
})



let users = []; // for Data store
io.on("connection", (socket) => {
    console.log("User connected", socket.id);

    socket.on("chat", (data) => {
        users.push(data);
        io.emit("transfer", data);

    });

    socket.on("disconnect", function () {
        console.log("Disconnect");

    })


});

app.listen(5000, () => {
    console.log("Server Run at http://localhost:5000");
})