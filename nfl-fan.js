class NFLFan {
    constructor(name, favoriteTeam) {
      this.name = name;
      this.favoriteTeam = favoriteTeam;
      this.favoritePlayers = [];
    }

    addFavoritePlayer(player) {
      this.favoritePlayers.push(player);
    }

    cheer() {
      console.log(`Go ${this.favoriteTeam}!`);
    }

    displayFavorites() {
      console.log(`${this.name}'s favorite team is ${this.favoriteTeam}.`);
      if (this.favoritePlayers.length > 0) {
        console.log("Favorite players:");
        this.favoritePlayers.forEach(player => console.log(player));
      }
    }
  }


const fan1 = new NFLFan("John", "Patriots");
fan1.addFavoritePlayer("Tom Brady");
fan1.addFavoritePlayer("Julian Edelman");

const fan2 = new NFLFan("Sarah", "Chiefs");
fan2.addFavoritePlayer("Patrick Mahomes");

fan1.cheer(); // Output: Go Patriots!
fan2.displayFavorites();
// Output: Sarah's favorite team is Chiefs.
//         Favorite players:
//         Patrick Mahomes
