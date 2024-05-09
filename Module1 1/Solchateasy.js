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
        this.inventory.push(game);
    }

    searchByTitle(title) {
        return this.inventory.filter(game => game.title.includes(title));
    }

    searchByGenre(genre) {
        return this.inventory.filter(game => game.genre === genre);
    }

    purchaseGame(id) {
        const index = this.inventory.findIndex(game => game.id === id);
        if (index !== -1) {
            return this.inventory.splice(index, 1)[0];
        }
        return null;
    }

    listInventory() {
        return this.inventory;
    }

    updateGamePrice(id, newPrice) {
        const game = this.inventory.find(game => game.id === id);
        if (game) {
            game.price = newPrice;
        }
    }

    totalInventoryValue() {
        return this.inventory.reduce((total, game) => total + game.price, 0);
    }

    listGenres() {
        return [...new Set(this.inventory.map(game => game.genre))];
    }
}
