const { fetchBreedDescription } = require('./breedFetcher');

const breed = process.argv.slice(2)[0];

fetchBreedDescription(breed, (error, description) => {
  if (error) {
    console.log(error);
    return;
  }
  console.log(description);
});