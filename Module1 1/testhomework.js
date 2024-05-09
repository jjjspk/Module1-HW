//Write your student id, firstname, and lastname in a single line comment before starting your program
//students who do not put this comment will get 50% taken off their score.
//ID:       Name:
class Game {

    constructor(id, title, genre, price){
        this.id = id
        this.title = title
        this.genre = genre
        this.price = price
    }



}
 
class GameStore {
    constructor(storeName){
        this.storeName =storeName
        this.inventory = []

    }


    addGame(game){
        if(game.id&&game.title&&game.genre&&game.price){
            //ไปเรียกใช้ class Game ถ้ามีตาม constructor push เลย!
            this.inventory.push(game)
        }

    }

    searchByTitle(title){

        return this.inventory.filter((game) =>
        game.title.toLowerCase().includes(title.toLowerCase()))

        // /game.title,
        // returns array of all matching games. ใช้ .includes คือที่เจอทั้งหมด มีบางส่วนตรงก็ได้แล้ว
        //game ใช้ชื่ออะไรก็ได้
        

    }

    searchByGenre(genre){

        return this.inventory.filter((game) =>
        game.genre.toLowerCase() === genre.toLowerCase())

    //game.genre
    // returns array of all games within a specified genre in the
    // inventory. ที่เจอจะต้องตรงทั้งหมดเท่านั้น ที่มีอยู่ตรงกับที่รับมา
        

    }

    purchaseGame(id){



    }

    listInventory(){
        return this.inventory

    }

    updateGamePrice(id, newPrice){

        const gameUpdate = this.inventory.find((game)=>
        game.id === id)

        if(gameUpdate){
            gameUpdate.price = newPrice //ถ้าตรงก็ update   จะได้ obj ที่ id เท่ากับที่ระบุ
        }

    }

    totalInventoryValue(){

    }

    listGenres(){

        return this.inventory.find((genre) => genre === genre)

    }

    
    


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
 
// Selling a game (assuming the game with ID 2 had its stock increased appropriately before)
// console.log(store.sellGame(2, 1));
