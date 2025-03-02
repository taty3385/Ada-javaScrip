const fs = require('fs');
const path = require('path');
const file=  path.join(__dirname,'../data/vehicles.json');

const readVehicle = () => {
    const data = fs.readFileSync(file , 'utf8');
    return JSON.parse(data);
}

const writeVehicle = (data) => {
    const JsonData = JSON.stringify(data , null, 2);
    fs.writeFileSync(file, JsonData);
   
}

module.exports = {writeVehicle, readVehicle};
  