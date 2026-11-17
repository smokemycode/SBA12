import express from "express";
// Bring in the controller functions
import { searchMovies, getMovieDetails } from "../controllers/movieController.js";

// Holds the movie routes seperately from the main server file
const router = express.Router();

// Connect each URL to the function that handles it
router.get("/search", searchMovies);
router.get("/movies/:id", getMovieDetails);

// Share the router with the rest of the app
export default router;
