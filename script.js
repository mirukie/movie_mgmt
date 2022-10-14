let allMovies = [];

//Define a movie class with parameters title (string), rating (number) and haveWatched (boolean)
class Movie {
    constructor(title, rating, haveWatched) {
        this.title = title;
        this.rating = rating;
        this.haveWatched = haveWatched;
    }
}

//add a movie OBJECT to the allMovies array
let addMovie = (movie) => {
    allMovies[allMovies.length] = movie;
    console.log("A new movie has been added");
}

//iterate through all elements of allMovies array
//print out to console in a correct format
//print out the total number of movies in allMovies array
let printMovies = () => {
    console.log("Printing all movies...");
    let count = 0;
    for (i = 0; i < allMovies.length; i++) {
        let movieData = allMovies[i];
        console.log(movieData.title + ", rating of " + movieData.rating + ", haveWatched: " + movieData.haveWatched);
        ++count;
    }
    console.log("\nYou have " + count + " movies in total.");
}


//print out to console, only the movies that has a rating higher than rating(argument)
//print out the total number of matches
let highRatings = (rating) => {
    console.log("Printing movies that have a rating higher than " + rating + "...");
    let count = 0;
    for (i = 0; i < allMovies.length; i++) {
        let movieData = allMovies[i];
        if (movieData.rating > rating) {
            console.log(movieData.title + " has a rating of " + movieData.rating);
            ++count;
        }
    }
    console.log("\nIn total, there are " + count + " matches.");
}


//Toggle the 'haveWatched' property of the specified movie 
let changeWatched = (title) => {
    for (i = 0; i < allMovies.length; i++) {
        let movieData = allMovies[i];
        if (movieData.title == title) {
            if (movieData.haveWatched == false) {
                movieData.haveWatched = true;
            } else {
                movieData.haveWatched = false;
            }
            console.log("changing the status of the movie...");
        }
    }
}



////////////////////////////////////////////////////////////
//Test code - DO NOT DELETE OR EDIT
let x = new Movie("Spiderman", 3, true);
let y = new Movie("Citizen Kane", 4, false);
let z = new Movie("Zootopia", 4.5, true);

allMovies.push(x,y,z);

console.log("----------------");
console.log("running program......");
console.log("----------------");
printMovies();


let movie1 = new Movie("Parasite", 2, false);


console.log("----------------");
addMovie(movie1);
console.log("----------------");



changeWatched("Spiderman");
console.log("----------------");

printMovies();
console.log("----------------");

changeWatched("Spiderman");
console.log("----------------");

printMovies();
console.log("----------------");

highRatings(3.5);