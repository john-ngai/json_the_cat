const request = require('request');

const fetchBreedDescription = (breedName, callback) => {
  let url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;

  request(url, (error, response, body) => {
  
    // Edge Case: Request Failed.
    if (error) {
      callback(error, null);
      return;
    }
    
    // Convert the JSON string into an object.
    const data = JSON.parse(body)[0];

    // Edge Case: Breed Not Found.
    if (!data) {
      callback(null, '\nBreed not found. Please try again.\n');
      return;
    }
    
    // Find the value for the description key from the data object.
    const description = data['description'];

    // Pass the description into the callback function.
    callback(null, description);
  });
};

module.exports = { fetchBreedDescription };
