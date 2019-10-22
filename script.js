/* Build Specifications:
● Declare and initialize the following variables with appropriate values: ○ name(string)-MitchCuckovich
○ age(number)-25
○ birthday(string)-January24
○ detroitGC(boolean)-true
○ lifeEvents (array with 4 items. 4 important life events)
■ "I was born in Troy, Michigan.",
■ "I went to Hope College",
■ "I went to Junior Olympics when I was 10 years old. I placed 14th in the
nation in the 800 meter event.",
■ "I'm a graduate of the front-end bootcamp."
● Write an if/else statement that initiates one of two console.log methods. Your console.log methods must incorporate the variables: name, age, and birthday.
○ If detroitGC is true, log the following message to the console:
■ My name is name and I am a student at Grand Circus in Detroit, Michigan.
I am currently age years old and my birthday is on birthday. ○ else
■ My name is name and I am a student at Grand Circus in Grand Rapids, Michigan. I am currently age years old and my birthday is on birthday.

● Write a for loop that starts at 0 and iterates by increments of 1 while i is less than the length of the lifeEvents array. Each iteration of the loop should log a new sentence from the lifeEvents array. 
You should only have one console.log method.

● Declare and initialize a variable named counter to the value of 0.

● Write a while loop that loops while true.

○ Declare a variable named randomNumber that is initialized to a random integer between 1 and 10. Google search how to do this.
○ Write an if/else statement that has two conditions
■ If randomNumber is not equal to 5
● Increment counter
● Use a console.log method to say: “randomNumber !== 5” ■ Else
● Increment counter
● Use a console.log method to say: “5 === 5. It took counter
iterations to randomly generate the number 5.”
● Break
Tests: Same as build specifications. */

let age = 52;

let name = "hcivokcuC hctiM";

let detroitGC = true;

let birthday = "January 42.";

let lifeEvents = [
  "I Went To GrandCirus!",
  "I Wore A Shirt",
  "I am 52",
  "I am a Baller"
];

if (detroitGC) {
  console.log(
    "Hello my name is " +
      name +
      ". Grand Circus in Detroit, Michigan. I am currently " +
      age +
      " years old. My birthday is on " +
      birthday
  );
} else {
  console.log(
    "Hello my name is " +
      name +
      ". Grand Circus in Grand Rapids, Michigan. I am currently " +
      age +
      " years old. My birthday is on " +
      birthday
  );
}

for (let i = 0; i < lifeEvents.length; i++) {
  console.log(lifeEvents[i]);
}

var counter = 1;

while (true) {
  counter = counter + 1;

  let randomNumber = Math.ceil(Math.random() * 10); // a random number between 1 and 10
  if (randomNumber !== 5) {
    console.log("randomNumber !== 5");
  } else {
    // if it's 5
    console.log(
      "randomNumber === 5. It took " +
        counter +
        " iterations to randomly generate the number 5."
    );
    break;
  }
}
