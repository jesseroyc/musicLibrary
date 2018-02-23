class Library {
  constructor(name, creator) {
  	this.name = name
  	this.creator = creator
  	this.list = [];
  }

  add (Playlist) {
    this.list.push(Playlist);
    console.log(`\nAdded ${Playlist.name} to library list`)
  }

  remove (Playlist) {
    let index = this.list.indexOf(Playlist);
    if(index !== -1) this.list.splice(index, 1);
    console.log(`\nRemoved ${Playlist.name} from library list`)
  }
}

class Playlist {
  constructor(name) {
    this.name = name
  	this.list = []
    this.overallRating = 0
  	this.totalDuration = 0
  }

  add (Track) {
    this.list.push(Track);

      let rating = 0;
      let duration = 0;

      for (var i = 0; i < this.list.length; i++) {
      	rating += this.list[i].rating
      	duration += this.list[i].length
      }
      	

      this.overallRating = rating / this.list.length;
      this.totalDuration = duration / this.list.length;
  }

  remove (Track) {
    let index = this.list.indexOf(Track);
    if(index !== -1) this.list.splice(index, 1);



      let rating = 0;
      let duration = 0;
      
      for (var i = 0; i < this.list.length; i++) {
      	rating += this.list[i].rating
      	duration += this.list[i].length
      }

  
      this.overallRating = rating / this.list.length;
      this.totalDuration = duration / this.list.length;
  }
}

class Track {
  constructor(title, rating, length) {
    this.title = title
    this.rating = (rating <= 5) ? rating : undefined;
    this.length = length
    console.log(`New track available of title '${this.title}', rating '${this.rating}' and length '${this.length}'`);
  }
}


//Driver Code
myLibrary = new Library("sikjams", "jesseroyc");
console.log(`Added ${typeof myLibrary} named myLibrary`);

jamslisted = new Playlist("jamslisted");
console.log(`Added ${typeof jamslisted} named jamslisted`);

jamsunlisted = new Playlist("jamsunlisted");
console.log(`Added ${typeof jamsunlisted} named jamsunlisted`);

jamslistedtwo = new Playlist("jamslistedtwo");
console.log(`Added ${typeof jamslistedtwo} named jamslistedtwo`);

deadmaultrackOne = new Track("someTitleToBeKeptOne", 3, 2)
deadmaultrackTwo = new Track("someTitleNOTToBeKeptTwo", 5, 1)
deadmaultrackThree = new Track("someTitleToBeKeptThree", 1, 3)

jamslisted.add(deadmaultrackOne);
jamsunlisted.add(deadmaultrackTwo);
jamslisted.add(deadmaultrackThree);

myLibrary.add(jamslisted);
myLibrary.add(jamsunlisted);
myLibrary.add(jamslistedtwo);

myLibrary.remove(jamsunlisted);

console.log(myLibrary);
console.log(jamslisted);