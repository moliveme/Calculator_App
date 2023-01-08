// a)
// if you have a function inside an object, the function is called a method. 
// if you call 'this' from inside of the method, 'this' refers to the object
// for example, the constant 'video' is the object, and play and stop are methods:

const video = {
    title: 'a',
    play() {
        console.log(this);
    }
};

video.play();

video.stop = function() {
    console.log(this);
};

video.stop();

// b)
// if you call 'this' from inside of a regular function, 'this' refers to the window object or something

function playVid() {
    console.log(this);
}

playVid();

// c)
// what is a contructor? a function using which objects can be instantiated.
// conventionally, constructor functions start with a capital letter
// same as b), lets have a function call this. but,
// instead of calling the function, let's instantiate a new object using the constructor
// then, 'this' refers to the object newly instantiated rather than referring to the window 

function Video(title) {
    this.title = title;
    console.log(this);
}

const v = new Video('mrinal minecraft edit');

// d)
// when you have a regular function inside a method, 'this' doesn't refer to the object anymore
// for example, code below says that 'this.title' is undefined because
// 'this' refers to window object

const song = {

    title: "4U",
    genre: ['rap', 'pop', 'sad rap'],
    
    showGenres() {
        this.genre.forEach(function(genre) {
            console.log(this.title, genre);
        });
    }
};

song.showGenres();

// one fix for this is to pass 'this' into the  regular function call:

const song2 = {

    title: "4U",
    genre: ['rap', 'pop', 'sad rap'],
    
    showGenres() {
        this.genre.forEach(function(genre) {
            console.log(this.title, genre);
        }, this);
    }
};

song2.showGenres();