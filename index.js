const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 8050;

app.use(cors());
app.use(express.json());
app.set("trust proxy", true);
app.get("/api/get-ip", (req, res) => {
  const clientIP =
    req.headers["x-forwarded-for"]?.split(",")[0].trim() ||
    req.headers["cf-connecting-ip"] ||
    req.headers["x-real-ip"] ||
    req.socket.remoteAddress;

  res.json({ clientIP });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
