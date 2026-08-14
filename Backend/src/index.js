import express from "express";
import pool from "./db.js";

const app = express();
app.use(express.json());

// endpoint بسيط للتأكد إن السيرفر شغال
app.get("/api/health", (req, res) => {
  res.json({ status: "ok" });
});

// endpoint بيتأكد إن الاتصال بالداتابيز شغال فعلاً
app.get("/api/db-health", async (req, res) => {
  try {
    const result = await pool.query("SELECT NOW()");
    res.json({ db: "connected", time: result.rows[0].now });
  } catch (err) {
    console.error(err);
    res.status(500).json({ db: "error", message: err.message });
  }
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});