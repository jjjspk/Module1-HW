//ดู purchase + total


class Game {
    constructor(id, title, genre, price) {
        this.id = id;
        this.title = title;
        this.genre = genre;
        this.price = price;
    }
}

class GameStore {
    constructor(storeName) {
        this.storeName = storeName;
        this.inventory = [];
    }

    addGame(game) {
        if (game instanceof Game) {
            this.inventory.push(game);
            console.log(`Game '${game.title}' added to inventory.`);
        } else {
            console.log("Invalid game object. Please provide a valid Game object.");
        }
    }

    searchByTitle(title) {
        const matchingGames = this.inventory.filter(game => game.title.toLowerCase().includes(title.toLowerCase()));
        return matchingGames;
    }

    searchByGenre(genre) {
        const gamesInGenre = this.inventory.filter(game => game.genre.toLowerCase() === genre.toLowerCase());
        return gamesInGenre;
    }
 


    //ดุอันนี้
    purchaseGame(id) {
        const index = this.inventory.findIndex(game => game.id === id);
        if (index !== -1) {
            const purchasedGame = this.inventory.splice(index, 1)[0];
            console.log(`Game '${purchasedGame.title}' purchased.`);
            return purchasedGame;
        } else {
            console.log("Game not found in inventory.");
            return null;
        }
    }




    listInventory() {
        console.log("Inventory:");
        this.inventory.forEach(game => {
            console.log(`ID: ${game.id}, Title: ${game.title}, Genre: ${game.genre}, Price: ${game.price}`);
        });
    }



    updateGamePrice(id, newPrice) {
        const gameToUpdate = this.inventory.find(game => game.id === id);
        if (gameToUpdate) {
            gameToUpdate.price = newPrice;
            console.log(`Price for '${gameToUpdate.title}' updated to ${newPrice}.`);
        } else {
            console.log("Game not found in inventory.");
        }
    }



    //ดูอันนี้
    totalInventoryValue() {
        const totalValue = this.inventory.reduce((acc, game) => acc + game.price, 0);
        return totalValue;
    }




    listGenres() {
        const genres = [...new Set(this.inventory.map(game => game.genre))];
        console.log("Genres available in inventory:", genres);
    }
}

// Example usage:
const store = new GameStore("Awesome Games");
const game1 = new Game(1, "The Legend of Zelda", "Adventure", 59.99);
const game2 = new Game(2, "Super Mario Odyssey", "Adventure", 49.99);
const game3 = new Game(3, "Gears of War", "Action", 39.99);

store.addGame(game1);
store.addGame(game2);
store.addGame(game3);

console.log("Search by Title:", store.searchByTitle("Mario"));
console.log("Search by Genre:", store.searchByGenre("Adventure"));

store.listInventory();
console.log("Total Inventory Value:", store.totalInventoryValue());
store.listGenres();

store.updateGamePrice(1, 69.99);
console.log("Updated Price:", store.inventory[0].price);

const purchasedGame = store.purchaseGame(2);
console.log("Purchased Game:", purchasedGame);
store.listInventory();
