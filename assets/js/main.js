
// 1. Arrays mit Objekten über die drei Kartentypen
const suspectsArray = [
    {
        firstName:"Jacob",
        lastName:"Green",
        occupation:"Entrepreneur",
        age:45,
        description:"He has a lot of connections",
        image:"https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
        color: "green"
    },
    {
        firstName:"Doctor",
        lastName:"Orchid",
        occupation:"Scientist",
        age:26,
        description:"PhD in plant toxicology. Adopted daughter of Mr. Boddy",
        image: "http://www.radiotimes.com/uploads/images/Original/111967.jpg",
        color:"white",
    },
    {
        firstName:"Victor",
        lastName:"Plum",
        occupation:"Designer",
        age:22,
        description:"Billionaire video game designer",
        image:"https://66.media.tumblr.com/ee7155882178f73b3781603f0908617c/tumblr_phhxc7EhPJ1w5fh03_540.jpg",
        color: "purple"
    },
    {
        firstName:"Kasandra",
        lastName:"Scarlet",
        occupation:"Actress",
        age:31,
        description: "She is an A-list movie start with a dark past",
        image:"https://static.standard.co.uk/s3fs-public/thumbnails/image/2016/07/04/10/cluedo-miss-scarlett.jpg",
        color: "red"
    },
    {
        firstName:"Eleanor",
        lastName:"Peacock",
        occupation:"Socialité",
        age:36,
        description:"She is from a wealthy family and uses her status and money to earn popularity",
        image:"https://pm1.narvii.com/6722/3bd0d86d367315d9e81a12390c17343a27d8a4d9_hq.jpg",
        color:"blue"
    },
    {
        firstName:"Jack",
        lastName:"Mustard",
        occupation:"Retired Football player",
        age:62,
        description:"He is a former football player who tries to get by on his former glory",
        image:"https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/07/04/08/unspecified-3.jpg",
        color:"yellow"
    }
]

const weapons = [
    {
        name:"rope",
        weight:10,
    },
    {
        name:"knife",
        weight:8,
    },
    {
        name:"candlestick",
        weight:2,
    },
    {
        name:"dumbbell",
        weight:30,
    },
    {
        name:"poison",
        weight:2,
    },
    {
        name:"axe",
        weight:15,
    },
    {
        name:"bat",
        weight:13,
    },
    {
        name:"trophy",
        weight:25,
    },
    {
        name:"pistol",
        weight:20,
    },
]

const rooms = ["Dining Room", "Conservatory", "Kitchen", "Study", "Library", "Billard Room", "Lounge", "Ballroom", "Hall", "Spa", "Living Room", "Observatory", "Theater", "Guest House", "Patio"]


// console.log(suspectsArray);
console.log(weapons.length);
// console.log(rooms);

// document.getElementById("res").innerHTML = suspectsArray[0].firstName + suspectsArray[0].lastName+ '<img src="'+suspectsArray[5].image+'">';
// document.getElementById("res").innerHTML += "<br>"+ weapons[1].name;
// document.getElementById("res").innerHTML += "<br>"+rooms;



// Funktion selectedRandom --> Zufallsprinzip ein Element aus einem "Kartenstapel"(Array) auszuwählen.
// Die Funktion soll ein Array als Argument erwarten und ein zufälliges Element aus dem Array zurückgeben
function selectRandom(arr) {
    return Math.floor(Math.random() * arr.length);  
}


// 3. Function pickMystery
function pickMystery() {
     return {suspect: suspectsArray[selectRandom(suspectsArray)],
            weapons: weapons[selectRandom(weapons)], 
            room: rooms[selectRandom(rooms)]};
}

let reveal= pickMystery();

// 4. Reveal the mystery
// function revealMystery
// -> einziges Argument ein Objekt 
function revealMystery() {
    document.getElementById("res").innerHTML = `<img src="${reveal.suspect.image}" alt="killer img"><h2>${reveal.suspect.firstName}  ${reveal.suspect.lastName} killed Mr. Boddy using the ${reveal.weapons.name} in the ${reveal.room} </h2> `
}




