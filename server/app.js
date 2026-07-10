const express = require("express");
const cors = require("cors");

const db = require("./config/db");

const authRoutes = require("./routes/authRoutes");
const protect = require("./middleware/authMiddleware");

const app = express();

const categoryRoutes = require("./routes/categoryRoutes");

const bookRoutes = require("./routes/bookRoutes");

const cartRoutes=require("./routes/cartRoutes");

const orderRoutes=require("./routes/orderRoutes");

app.use(cors());
app.use(express.json());

app.use("/api/orders",orderRoutes);

app.use("/api/cart",cartRoutes);

app.use("/api/categories",categoryRoutes);

app.use("/api/books",bookRoutes);

app.get("/", (req, res) => {
    res.json({
        message: "Book Ordering API Running"
    });
});

app.get("/test-db", async (req, res) => {
    try {
        const pool = await db.poolPromise;
        const result = await pool.request().query("SELECT 1 + 1 AS solution");
        res.json(result.recordset);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Protected Test Route
app.get("/api/profile", protect, (req, res) => {
    res.json({
        message: "Protected route working",
        user: req.user
    });
});

app.use("/api/auth", authRoutes);

module.exports = app;