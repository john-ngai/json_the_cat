const request = require('request');

const breed = process.argv.slice(2)[0];
let url = `https://api.thecatapi.com/v1/breeds/search?q=${breed}`;

request(url, (error, response, body) => {
  
  // Edge Case: Request Failed.
  if (error) {
    console.log('Request failed. Please try again.');
    return;
  }
  
  // Convert the JSON string into an object.
  const data = JSON.parse(body)[0];

  // Edge Case: Breed Not Found.
  if (!data) {
    console.log('\nBreed not found. Please try again.\n');
    return;
  }

  // Log the description onto the console.
  console.log('\n' + data['description'] + '\n');
});