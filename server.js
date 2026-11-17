import "dotenv/config";
import express from "express";
// Bring in the movie routes
import movieRoutes from "./routes/movieRoutes.js";

const app = express();
const PORT = process.env.PORT || 3001;

app.get("/", (req, res) => {
  res.send("Movie Finder API is running!");
});

// All movie routes start with /api
app.use('/api', movieRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});