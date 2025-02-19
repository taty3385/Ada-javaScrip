const movieModels = require("../models/movieModel");
const movieViews = require("../view/movieViews");


const movieController = {
    getMovie: (title) => {
        const movie = movieModels.getTitleMovie(title);
        return movieViews.formatResponse(movie);
    },
}

module.exports = movieController;