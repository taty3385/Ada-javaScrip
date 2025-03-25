const fs = require("fs");
const path = require("path");
const fileVehicle = path.join(__dirname, "../data/vehicles.json");

const modelVehicle = {
  readFile: () => {
    const data = fs.readFileSync(fileVehicle, "utf-8");
    if (!data) {
      console.log("no hay datos ");
    } else {
      return JSON.parse(data);
    }
  },
  writeFile: (data) => {
    const dataJson = JSON.stringify(data, null, 2);
    fs.writeFileSync(fileVehicle, dataJson, "utf-8");
  },
};

module.exports = modelVehicle;
