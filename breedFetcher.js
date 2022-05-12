const request = require("request");
const breed = process.argv.slice(2);

request(
  `https://api.thecatapi.com/v1/breeds/search?q=${breed}`,
  function (error, response, body) {
    const data = JSON.parse(body);
    if (typeof data[0] == "undefined") {
      const error = new Error("Not Found");
      console.log("error:", error); // ''not found
    } else {
      console.log(data[0].description);
    }
    if (response.statusCode != 200) {
      const error = new Error("Connection Fail");
      console.log("error:", error);
      console.log("response:", response.statusCode);
    }
  }
);
