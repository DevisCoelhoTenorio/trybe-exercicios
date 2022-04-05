const coolestTvShow = {
    name: "BoJack Horseman",
    genre: "adult animation",
    createdBy: "Raphael Bob-Waksberg",
    favoriteCharacter: "Princess Carolyn",
    quote: "Princess Carolyn always lands on her feet.",
    seasons: 6,
  };
  
  // for (const property in coolestTvShow) {
  //   console.log(property);
  // }
  
//   console.log(Object.keys(coolestTvShow));

for (let index = 0; index < Object.keys(coolestTvShow).length; index += 1){
    console.log(`${Object.keys(coolestTvShow)[index]}: ${coolestTvShow[Object.keys(coolestTvShow)[index]]}`);
}
  
  // [ 'name', 'genre', 'createdBy', 'favoriteCharacter', 'quote', 'seasons' ]