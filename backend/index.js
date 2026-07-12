import express from "express";
import app from './app.js';
import connectDB from "./src/config/db.js";
const PORT = 8080;

connectDB();

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
