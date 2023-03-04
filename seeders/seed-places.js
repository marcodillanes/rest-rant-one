const db = require('../models')

db.Place.create([{
    name: 'H-Thai-ML',
    city: 'Seattle',
    state: 'WA',
    cuisines: 'Thai, Pan-Asian',
    pic: '/images/REST-ONE.jpg',
    founded: 1989,
    srcName: "unsplash",
    srcUrl: "https://unsplash.com/@pablomerchanm?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
}, {
    name: 'Coding zCafe',
    city: 'Phoenix',
    state: 'AZ',
    cuisines: 'Coffee, Bakery',
    pic: '/images/REST-TWO.jpg',
    founded: 2022,
    srcName: 'unsplash',
    srcUrl: "https://unsplash.com/@leyien_?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
}])
.then(() => {
    console.log("Success");
    process.exit();
  })
  .catch((err) => {
    console.log("Failed", err);
    process.exit();
  });