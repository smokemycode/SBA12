// Axios lets our server call the OMDB API
import axios from "axios";

// handles GET /api/search
export const searchMovies = async (req, res) => {
    const { title } = req.query;
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
        res.status(500).json({ error: "Internal server error" });
    }
};

// handles GET /api/movies/:id
export const getMovieDetails = async (req, res) => {
    res.json({ message: 'details route works', id: req.params.id });
};

