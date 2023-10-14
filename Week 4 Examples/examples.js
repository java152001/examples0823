// Example 1.1 First Array
//This is your starting array
// const arr = [15, 10, 16, 12, 18, 21, 37];

// function returnFirst(arr) {
//   // return the first item from the array
//   return arr[0];
// }

// function returnLast(arr) {
//   // return the last item of the array
//   return arr[(arr.length - 1)];
//   //return arr[6];
// }

// function getArrayLength(arr) {
//   // return the length of the array
//   return arr.length;
// }

// function incrementByOne(arr) {
//   // arr is an array of integers(numbers), Increment all items in the array by 1
//   // return the array

//   for (let i = 0; i < arr.length; i++) {
//     arr[i]++; // arr[0]++; 16
//               // arr[1]++; 11
//   }

//   return arr;
// }

// function addItemToArray(arr, item) {
//   // add the parameter item to the end of the array arr
//   // return the array

//   arr.push(item);

//   return arr;
// }

// function addItemToFront(arr, item) {
//   // add the parameter item to the front of the array arr
//   // return the array
//   // hint: use the array method .unshift

//   arr.unshift(item);
//   return arr;
// }

// console.log("returnFirst result:" + returnFirst(arr))
// console.log("returnLast result:" + returnLast(arr))
// console.log("getArrayLength result:" + getArrayLength(arr))
// console.log("incrementByOne result:" + incrementByOne(arr))
// console.log("addItemToArray result:" + addItemToArray(arr, 10))
// console.log("addItemToFront result:" + addItemToFront(arr, 10))

// Example 1.2 
// function wordsToSentence(words) {
  
//     return words.join();
//     //return words.toString();
//   }
  
//   //console log results
//   console.log('results', wordsToSentence(['hey','there','Pikachu']));
  
// Example 2.1

// function comparePokemon(object1, object2) {
//     const keys1 = Object.keys(object1);
//     const keys2 = Object.keys(object2);
  
//     if (keys1.length !== keys2.length) {
//       return false;
//     }
  
//     for (let key of keys1) {

//       // object1.key;
//       // object1[key]; //object1["name"]

//       if (object1[key] !== object2[key]) {
//         return false;
//       }
//     }
  
//     return true;
//   }
 
// console.log(comparePokemon({}, {}));
// console.log(comparePokemon({ name: "Pikachu" }, { name: "Pikachu"}));
// console.log(comparePokemon({ name: "Squirtle"}, { otherkey: "Squirtle" }));
//console.log(comparePokemon({ name: "Squirtle", number: 7 }, { otherkey: "Squirtle", type: "Water" }))

// Example 2.2
// function calculator(value1, operator, value2) {
//     switch (operator) {
//       case "+":
//         return value1 + value2;
//         break;
//       case "-":
//         return value1 - value2;
//         break;
//       case "*":
//         return value1 * value2;
//         break;
//       case "/":
//         return value1 / value2;
//         break;
//       default:
//         return `Sorry, operator not supported`;
//     }
//   }
  
//   //uncomment next lines one by one, then check the console for results
//   console.log(calculator(1, "+", 1));
//   console.log(calculator(3, "-", 2));
//   console.log(calculator(3, "*", 2));
//   console.log(calculator(30, "/", 2));
//   console.log(calculator(10, "!", 2));
//   console.log(calculator(5, "/", 0));

// Example 3
// function arrayFlattener(arr) {
//     var newArr = []; //[1] = [2,3] === [1,2,3,4,5]
  
//     for (var i = 0; i < arr.length; i++) {
//       newArr = newArr.concat(arr[i]);
//     }
  
//     return newArr;
//   }
  
//   //uncomment next line one by one, then check the console for results
//   console.log(arrayFlattener([1, [2, 3], 4, 5]));

// Example 4
// var pos = 0;
// let pageWidth = window.innerWidth;

// //console.log(window);
// const pacArray = [
//   ["./PacMan1.png", "./PacMan2.png"],
//   ["./PacMan3.png", "./PacMan4.png"],
// ];
// var direction = 0;
// var focus = 0;

// function Run() {
//   let img = document.getElementById("PacMan");
//   let imgWidth = img.width;
//   focus = (focus + 1) % 2; // 1
//   direction = checkPageBounds(direction, imgWidth, pos, pageWidth);
//   img.src = pacArray[direction][focus];
//   if (direction) {
//     pos -= 50;
//     img.style.left = pos + "px";
//   } else {
//     pos += 50;
//     img.style.left = pos + "px";
//   }
// }

// setInterval(Run, 200);

// function checkPageBounds(direction, imgWidth, pos, pageWidth) {
//   if (direction == 0 && pos + imgWidth > pageWidth) direction = 1;
//   if (direction == 1 && pos < 0) direction = 0;

//   return direction;
// }

// const squirtle = {
//   type: "Water",
//   number: 7,
//   waterGun: function() {
//     return "bleureirueiruer";
//   }
// }

// console.log(window);

// console.log("Squirtle's number is ", squirtle.number);
// console.log("Squirtles type is ", squirtle.type);
// console.log("SQUIRTLE USE WATER GUN ", squirtle.waterGun());