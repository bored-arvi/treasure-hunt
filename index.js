import express from "express";
import router from "./api/cluecheck.js"; // adjust path accordingly
import cors from "cors";

const app = express();
const PORT = 5000;

app.use(cors()); // Allow requests from frontend
app.use(express.json()); // Needed to parse req.body

app.use("/api",router);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
