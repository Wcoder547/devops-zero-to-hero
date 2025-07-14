const express = require("express");
const cors = require("cors");
const app = express();
const dataSource = require("./config/config");
const customerRoutes = require("./routes/CustomerRoutes");
require("dotenv").config();

app.use(express.json());
app.use(
    cors({
        origin: "http://localhost:3000",
        methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"]
    })
);

app.use("/customer", customerRoutes);

// Handle 404 errors
app.use((req, res) => {
    console.log(`${req.originalUrl} Endpoint Not found`);
    res.status(404).json({
        message: `${req.originalUrl} Endpoint Not found`,
    });
});

// Error handling middleware
app.use((error, req, res, next) => {  // Added 'next' parameter here
    console.log("Error :", error);
    res.status(500).json({
        message: error.message,
    });
});

dataSource
    .initialize()
    .then(() => {
        console.log("Database connected!!");

        app.listen(8004, () => {
            console.log("Customer Service running on Port 8004");
        });
    })
    .catch((err) => {
        console.log(err);
    });
