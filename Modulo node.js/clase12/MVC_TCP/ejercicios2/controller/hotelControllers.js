const hotelView = require('../views/hotelsViews');
const hotelModel = require('../models/hotel');

const hotelController = {
    handleRequest: (id) => {
        const hotel = hotelModel.getHotelsId(parseInt(id, 10));
        return hotelView.formatResponse(hotel);
    }
};

module.exports = hotelController;