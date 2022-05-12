const request = require("request");

const fetchBreedDescription = function (breedName, callback) {
  request(
    `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`,
    function (error, response, body) {
      const data = JSON.parse(body);

      let description = null;
      if (typeof data[0] == "undefined") {
        error = new Error("Not Found");
        // console.log("error:", error); // ''not found
      } else if (response.statusCode != 200) {
        error = new Error("Connection Fail");
        // console.log("error:", error);
        // console.log("response:", response.statusCode);
      } else {
        description = data[0].description;
      }
      callback(error, description);
    }
  );
};

module.exports = { fetchBreedDescription };
