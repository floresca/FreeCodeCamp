//Setup
var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["Javascript", "Gaming", "Foxes"]
    }
];


function lookUpProfile(firstName, prop){
// Only change code below this line
  for (var a = 0; a < contacts.length; a++){
    if (contacts[a].firstName === firstName){
      if (contacts[a].hasOwnProperty(prop)) {
        return contacts[a][prop];
    } else {
            return "No such property";
        }
    } 
  } return "No such contact";
// Only change code above this line
} 

// Change these values to test your function
lookUpProfile("Harry", "likes");