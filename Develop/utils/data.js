const names = [
  
];

const thoughts = [

];

const reactions = [

];

const users = [];

// Get a random item from a given array
const getArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

// Gets a random user
const getName = () =>
  `${getArrItem(names)} ${getArrItem(names)}`;

// Function to generate thoughts that can be added to the database.
const getThought = (int) => {
  let results = [];
  for (let i = 0; i < int; i++) {
      results.push({
          thoughtText: getArrItem(thoughts),
          reactions: [...getReaction(2)],
      });
  }
  return results;
};

// Create responses
const getReaction = (int) => {
  if (int === 1) {
    return getArrItem(reactions);
  }
  let results = [];
  for (let i = 0; i < int; i++) {
    results.push({
      reactions: getArrItem(reactions),
      username: getName(),
    });
  }
  return results;
};

// Export the functions for use in seed.js
module.exports = { getName, getThought, getReaction };