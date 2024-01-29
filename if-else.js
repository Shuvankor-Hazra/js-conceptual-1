let abc = 30;
// equal----
// if (abc === 30) {
//     console.log('True, equal to 30');
// } else {
//     console.log('False, not equal to 30');
// }

let abcd = 30;
// not equal----
if (abcd !== 30) {
  console.log("True, not equal to 30");
} else {
  console.log("False, equal to 30");
}

// if else Ladders-------
let temperature = 20;

if (temperature > 30) {
  console.log("It's a hot day!");
} else if (temperature > 20) {
  console.log("It's a worm day!");
} else if (temperature > 10) {
  console.log("It's a cool day!");
} else {
  console.log("It's a coolest day!");
}

/*
if (condition) {
  if (condition) {
  } else {
  }
} else if (condition) {
  if (condition) {
  } else {
  }
} else if (condition) {
  if (condition) {
  }
} else {
}
*/

let hour = 20;

if (hour >= 6 && hour < 12) {
  console.log("Good morning");
} else if (hour >= 12 && hour < 18) {
  console.log("Good afternoon");
} else if (hour >= 18 && hour < 21) {
  console.log("Good evening");
} else {
  console.log("Good night");
}



// logical or

let x = 7;
// x er man jodi 5 er choto hoy othoba 10 er boro hoy tahole true hoba----

if (x > 5 || x < 10){
    console.log("True");
} else{
    console.log("False");
}















