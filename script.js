const searchDatabase = [
  'cats.com',
  'souprecipes.com',
  'flowers.com',
  'animals.com',
  'catpictures.com',
  'myfavouritecats.com',
  'myfavouritecats2.com'
];

const search = (searchInput, db) => {
  const matches = db.filter(website => website.includes(searchInput));
  return matches.length > 3 ? matches.slice(0, 3) : matches;
};

 //console.log(googleSearch('cats', searchDatabase));

 module.exports = search;