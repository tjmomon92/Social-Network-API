const connection = require('../config/connection');
const { Thought, User } = require('../models');
// Import functions for seed data
const { getName, getThought } = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('Connection to database successful.');
  await User.deleteMany({});
  await Thought.deleteMany({});
  const users = [];
  const thoughts = getThought(9);
  for(let i = 0; i < 15; i++) {
      const fullName = getName();
      const first = fullName.split(' ')[0];
      const last = fullName.split(' ')[1];

      users.push({
          first,
          last,
          userEmail: `${first}_${last}@domain.com`,
          userName: `${first}.${last}`,
      }
      );
  }

  console.log(users);

await User.collection.insertMany(users);
await Thought.collection.insertMany(thoughts);

console.table(users);
console.table(thoughts);
console.info('Seeding complete!');
process.exit(0);

});