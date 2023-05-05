const names = [
  'Aaron',
  'Cameron',
  'TJ',
  'Adrian',
  'Amy',
  'Charles',
  'Christopher',
  'CJ',
  'Chris',
  'Cristobal',
  'Diem',
  'Dillon',
  'Gabriel',
  'Giuliana',
  'Jacob',
  'Jerrod',
  'Jonathan',
  'Johnathon',
  'Jose',
  'Joshua',
  'Julian',
  'Kiefer',
  'Lemry',
  'Luis',
  'Soa',
  'Taylor',
  'Tom',
  'Tony',
  'Trey',
  'Valerie',
];

const thoughts = [
  'Hello World',
  'Lorem-Fucking-Ipsum',
  'This code will totally change your life',
  'New Movie Trailer is fire',
  'New Movie Trailer is shit',
  'New Movie Trailers are just mediums for capitalist control',
  'Hur Dur Democrats',
  'Hur Dur Republicans',
  'How to do that one thing that totally takes years of practice and be a complete expert in .02 seconds Im so serial dont click away',
];

const reactions = [
  'WTF',
  'But why tho',
  'Ew what is that',
  'I love this more than my own parents',
  'This is the Steven Seagal of opinions',
  'LQTM',
  'That actually was not terrible',
  'That actually was terrible',
  'I tried this, and my dog divorced me',
  'Lorem-Fucking-Ipsum'
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

// const names = [
//   "Aaran",
//   "Aaren",
//   "Aarez",
//   "Aarman",
//   "Aaron",
//   "Aaron-James",
//   "Aarron",
//   "Aaryan",
//   "Aaryn",
//   "Aayan",
//   "Aazaan",
//   "Abaan",
//   "Abbas",
//   "Abdallah",
//   "Abdalroof",
//   "Abdihakim",
//   "Abdirahman",
//   "Abdisalam",
//   "Abdul",
//   "Abdul-Aziz",
//   "Abdulbasir",
//   "Abdulkadir",
//   "Abdulkarem",
//   "Ze",
//   "Zechariah",
//   "Zeek",
//   "Zeeshan",
//   "Zeid",
//   "Zein",
//   "Zen",
//   "Zendel",
//   "Zenith",
//   "Zennon",
//   "Zeph",
//   "Zerah",
//   "Zhen",
//   "Zhi",
//   "Zhong",
//   "Zhuo",
//   "Zi",
//   "Zidane",
//   "Zijie",
//   "Zinedine",
//   "Zion",
//   "Zishan",
//   "Ziya",
//   "Ziyaan",
//   "Zohaib",
//   "Zohair",
//   "Zoubaeir",
//   "Zubair",
//   "Zubayr",
//   "Zuriel",
// ];
// const thoughts = [
//   "How to disagree with someone",
//   "iPhone review",
//   "how-to video",
//   "video essay on the history of video games",
//   "How to make money on the App Store",
//   "Learn NextJS in five minutes (Not clickbate)",
//   "Movie trailer",
//   "Hello world",
//   "Another possible solution to the algorithm",
//   "Apology video",
//   "Submission for startup pitch",
// ];
// const reactions = [
//   "I disagree!",
//   "I tried your algorithm, here were the results",
//   "This was awesome",
//   "Thank you for the great content",
//   "Please check out my video response",
//   "Like and subscribe to my channel please",
//   "Reply: The side effects of in app purchases on digital marketplaces",
// ];
// const users = [];
// // Get a random item given an array
// const getArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];
// // Gets a random full name
// const getName = () =>
//   `${getArrItem(names)} ${getArrItem(names)}`;
// // Function to generate random videos that we can add to the database. Includes video responses.
// const getThought = (int) => {
//   let results = [];
//   for (let i = 0; i < int; i++) {
//       results.push({
//           thoughtText: getArrItem(thoughts),
//           reactions: [...getReaction(2)],
//       });
//   }
//   return results;
// };
// // Create the responses that will be added to each video
// const getReaction = (int) => {
//   if (int === 1) {
//     return getArrItem(reactions);
//   }
//   let results = [];
//   for (let i = 0; i < int; i++) {
//     results.push({
//       reactions: getArrItem(reactions),
//       userName: getName(),
//     });
//   }
//   return results;
// };
// // Export the functions for use in seed.js
// module.exports = { getName, getThought, getReaction };