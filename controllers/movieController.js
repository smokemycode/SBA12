// Axios lets our server call the OMDB API
import axios from "axios";

// handles GET /api/search
export const searchMovies = async (req, res) => {
    // Read the search word from the URL
    const { title } = req.query;
    // No title? Stop and say what's wrong
    if (!title) {
        return res.status(400).json({ error: "Title query parameter is required" });
    }
    try {
        // Ask OMDb for movies matching the title
        const response = await axios.get(`http://www.omdbapi.com/`, {
            params: {
                s: title,
                apikey: process.env.OMDB_API_KEY
            }
        });
        // OMDb says Response "False" when nothing matched
        if (response.data.Response === "False") {
            return res.status(404).json({ error: response.data.Error });
        }
        // Send back the list of movies
        res.json(response.data);
    } catch (error) {
        // Something broke talking to OMDb, so log it and reply with 500
        console.error("Error searching movies:", error);
        res.status(500).json({ error: "Failed to fetch movies from OMDb" });
    }
};

// handles GET /api/movies/:id
export const getMovieDetails = async (req, res) => {
    // Read the movie ID from the URL
    const { id } = req.params;
    try {
        // ask OMDb for one movie by ID
        const response = await axios.get(`http://www.omdbapi.com/`, {
            params: {
                i: id,
                apikey: process.env.OMDB_API_KEY
            },
    });
    // OMDb says Response "False" when nothing matched
    if (response.data.Response === "False") {
        return res.status(404).json({ error: response.data.Error });
    }
    // Send back the movie details
    res.json(response.data);
    } catch (error) {
        // Something broke talkin to OMDb, so log it and reply with 500
        console.error("Error getting movie details:", error);
        res.status(500).json({ error: "Failed to fetch movie details from OMDb" });
    }
};
