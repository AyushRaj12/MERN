const axios = require("axios");
const { application } = require("express");
const HttpError = require("../models/http-error");

const API_KEY = process.env.GOOGLE_API_KEY;

function getCoordsForAddress(address) {
  return {
    lat: 40.7484474,
    lng: -73.9871516,
  };
}

// async function getCoordsForAddress(address) {
//   const response = await axios.get(
//     `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
//       address
//     )}&key=${API_KEY}`
//   );

//   const data = response.data;

//   if (!data || data.status === "ZERO_RESULTS") {
//     const error = new HttpError(
//       "Could not find location for specified address ",
//       422
//     );
//     throw error;
//   }

//   const coordinates=data.results[0].geometry.location;
//    return coordinates;
// }

module.exports=getCoordsForAddress;
