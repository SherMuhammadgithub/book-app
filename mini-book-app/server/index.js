const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');
const router = require("./routes/Book-route");
const router2 = require("./routes/User-route");

// Middleware
app.use(express.json()); // To parse JSON request bodies
app.use(cors({
    origin: "https://book-app-frontend-virid.vercel.app",
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    credentials: true
}));

// Routes
app.use("/books", router); // localhost:5000/books
app.use("/user", router2); // localhost:5000/user

mongoose.connect(
    "mongodb+srv://foodApp123:foodApp123@cluster0.txvgoyc.mongodb.net/bookStore?retryWrites=true&w=majority"
)
    .then(() => {
        console.log("Connected to Database");
        app.listen(5000, () => {
            console.log("Server is running on port 5000");
        });
    })
    .catch((err) => console.log("Error connecting to Database", err));
