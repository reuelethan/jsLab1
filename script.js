let age = 52;

let name = "hcivokcuC hctiM";

let detroitGC = 1;

let lifeEvents = ["I Went To GrandCirus!", "I Wore A Shirt", "I am 52", "I am a Baller", ];

let birthday = "January 42.";

detroitGC = "GrandCircus Detroit Campus";

if (name.length === 0) {
    console.log("Name is required.");
} else if (name.length < 2) {
    console.log("Name must be at least two characters.");
}

if (isNaN(age) || age === null) {
    console.log("Age is required.");
} else if (age < 0) {
    console.log("Age must not be negative.");
} else {
    console.log("Hello my name is " + name + ". I am a student at " + detroitGC + ". I am currently " + age + " years old. My birthday is on " + birthday);

}
for (i = )