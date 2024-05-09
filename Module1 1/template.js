//Write your student id, firstname, and lastname in a single line comment before starting your program
//students who do not put this comment will get 50% taken off their score.
//ID:       Name:
class Game {
}
 
class GameStore {
}

const store = new GameStore("Epic Game Store");
 
// Adding games to the inventory
store.addGame(new Game(1, "Game One", "Action", 59.99));
store.addGame(new Game(2, "Game Two", "Adventure", 49.99));
 
// Searching games by title
console.log(store.searchByTitle("One"));
 
// Searching games by genre
console.log(store.searchByGenre("Adventure"));
 
// Purchasing a game
console.log(store.purchaseGame(1));
 
// Listing the inventory
console.log(store.listInventory());
 
// Updating a game price
store.updateGamePrice(2, 39.99);
 
// Calculating total inventory value
console.log(store.totalInventoryValue());
 
// Listing all genres
console.log(store.listGenres());
 
// // Selling a game (assuming the game with ID 2 had its stock increased appropriately before)
// console.log(store.sellGame(2, 1));
