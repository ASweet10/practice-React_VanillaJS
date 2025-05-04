//Learn JavaScript - Full Course for Beginners
// https://www.youtube.com/watch?v=PkZNo7MFNFg

var myString = "Mary had a little";
var secondString =" Lamb";
var finalString = myString + secondString;

let a = 8;
let b = 7;
let sum = a + b;

let hugeString = finalString + " whose fleece was white as snow";

let hugeStringLength = hugeString.length;

var firstName = "Aaron";
firstLetterOfName = firstName[0];
lastLetterOfName = firstName[firstName.length - 1];

function madLib (verb, noun, adjective, nounTwo) {
    var result = ("Today I " + verb + " to the " + noun + ". I saw a " + adjective + " " + nounTwo + ".");
    return result;
}


var myNestedArray = [["the universe", 42], [1, 2, 47, "daywalker lives"], [4, 3, 2, 1]];
var dayWalker = myNestedArray[1][3];

myNestedArray.push(["vampire", "bloodsucka", "bat", "fangs"]);
var vampireArray = myNestedArray[3];
myNestedArray.pop(vampireArray);

var myArray = ["Homer", "Simpson", 42, ["cat"]];
myArray.shift(); //Deletes first array element
myArray.unshift("James"); //Add new element at index 0


var val = 3;
function testVal(val) {
    if(val === 3){
        return "both are numbers, true";
    }
    // === No Type conversion, must both be same type
    // 3 === 3 (true, both numbers)
    // 3 === '3' (false, one number one string)
    //
    // == Attempts to convert to same type
    // 3 == 3 (true)
    // 3 == '3' (true)
}

function testSize(val) {
    var hordeSize;
    if(val > 0 && val < 5){
        hordeSize = "Few";
    } else if(val > 4 && val < 10) {
        hordeSize = "Several";
    } else if(val > 99 && val < 250) {
        hordeSize = "Throng";
    }
    return ("There is/are a " + hordeSize.toUpperCase() + " of skellies");
}

var golfNames = ["Hole-in-one", "Eagle", "Birdie", "Par"];
function golfScore(par, strokes) {
    if(strokes == 1){
        return golfNames[0];
    } else if(strokes <= par - 2) {
        return golfNames[1]; 
    } else if(strokes == par - 1) {
        return golfNames[2]; 
    } else if(strokes == par) {
        return golfNames[3]; 
    }else {
        return "You stink hit up a driving range";
    }
}

/*------------------------------------------------------------------------*/

//JS Object
var myDog = {
    "name": "Rusty",
    "legs": 4,
    "breed": "Doberman",
    "tails": 1,
    "friends": ["literally everyone"]
};
var dogsBreed = myDog["breed"];    // Access property
myDog.name = "Doogie Schnauzer";    // Change property
myDog["bark"] = "woof-woof";    // Add property
delete myDog.tails;    // Delete property

/*------------------------------------------------------------------------*/

function phoneticLookup(value) {
    result = "";

    var lookupTable = {
        "alpha": "Adams",
        "bravo": "Bananas",
        "charlie": "Coffee"
    }
    return result = lookupTable[value];
}

//Use hasOwnProperty to check if a property exists, i.e. "bark"
function checkObj(propertyToCheck) {
    if(myDog.hasOwnProperty(propertyToCheck)){
        return myDog[propertyToCheck];
    } else {
        return propertyToCheck + " Not found";
    }
}

/*------------------------------------------------------------------------*/

//Access nested objects
var myBirdsNest = {
    "mother": {
        "description": {
            "bodyColor": "red",
            "wingColor": "black"
        },
        "details": {
            "species": "robin"
        }
    }
}
var motherBirdsWingDescription = myBirdsNest.mother["description"];
//Returns {color: 'red', wings: 'black'}. 2 "sub-properties" to choose from
var motherBirdWingColor = myBirdsNest.mother.description['wingColor'];
//Returns "black"

/*------------------------------------------------------------------------*/

//Nested arrays
var plants = [
    {
        type: "flowers",
        plantList: [
            "rose", "tulip", "dandelion"
        ]
    },
    {
        type: "cacti",
        cactusList: [
            "saguaro", "pricklyPear", "peyote"
        ]
    }
];
var secondCacti = plants[1].cactusList[1];

/*------------------------------------------------------------------------*/

var collection = {
    "12": {
        "artist": "Ace of Base",
        "tracks": [
            "the sign", "all that she wants"
        ],
        "album": "happy nation"
    },
    "13": {
        "artist": "Led Zeppelin",
        "tracks": [
            "In the Light", "The Rover"
        ],
        "album": "Physical Graffiti"
    }
}

/*------------------------------------------------------------------------*/

function updateCollection(id, property, newValue){
    if(newValue === ""){
        delete collection[id][property];
    } else if(property === "tracks"){
        //If tracks already exists, set it equal to itself. Othewrise, create new array
        collection[id][property] = collection[id][property] || [];
        collection[id][property].push(newValue);
    } else {
        collection[id][property] = newValue;
    }

    return collection;
}
updateCollection(13, "tracks", "custard pie");

/*------------------------------------------------------------------------*/

var whileArray = [];    //Output: [0, 1, 2, 3, 4]
var i = 0;
while(i < 5){
    whileArray.push(i);
    i++;
}
for(var i = 10; i > 0; i-= 2) {    //Output: [10, 8, 6, 4, 2]
    whileArray.push(i);
}

/*------------------------------------------------------------------------*/

function randomFraction () {
    return Math.random();
}
function randomWholeNum() {
    var randBetween0and9 = Math.floor(Math.random() * 10);
}
/*------------------------------------------------------------------------*/

function convertStringToInt(string){
    return parseInt(string);
}
/*------------------------------------------------------------------------*/

function checkSign(number) {
    result = number > 0 ? "positive" : number < 0 ? "negative" : "zero";
    // same as
    if(number > 0){
        result = "positive";
    } else if(number < 0) {
        result = "negative";
    } else {
        result = "zero";
    }
    return result;
}
/*------------------------------------------------------------------------*/

function freezeObj(){
    const MATH_CONSTANTS = {
        PI: 3.14,
        GRAVITY: -9.8
    }
};
Object.freeze(freezeObj); //Prevents data mutation
/*------------------------------------------------------------------------*/

const newSum = (function() {
    return function newSum(...args){ //REST operator, creates array from arguments
        //Same as
        // const args = [x, y, z]

    }
})();
/*------------------------------------------------------------------------*/
//TEMPLATE LITERALS
const person = {
    name: "Flash Gordon",
    age: "33?"
};
const greeting = `Hello, my name is ${person.name}! I am ${person.age} years old!`;

/*------------------------------------------------------------------------*/

console.log(greeting);