// handles GET /api/search
export const searchMovies = async (req, res) => {
    res.json({ message: 'search route works', title: req.query.title });
};

// handles GET /api/movies/:id
export const getMovieDetails = async (req, res) => {
    res.json({ message: 'details route works', id: req.params.id });
};

