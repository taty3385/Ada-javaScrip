
const hotelsViews = {
  formatResponse: (hotel) => {
    if (hotel === null) {
      return JSON.stringify({
        status: "error",
        message: "hotel not found",
      });
    } else {
      return JSON.stringify({
        status: "success",
        data: hotel
      });
    }
  },
};

module.exports = hotelsViews;