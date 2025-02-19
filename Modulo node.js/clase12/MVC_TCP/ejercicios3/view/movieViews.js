

const movieViews = {
  formatResponse: (movie) => {
    if (movie === null) {
      return JSON.stringify({ status: "error", menssage: "Movie not found" });
    }
    return JSON.stringify({status: "success", data: movie});
  } 
 
};
module.exports = movieViews;
