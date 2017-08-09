// array1 = [12];
// array2 = [10];
//
// sum = array1[0] + array2[0];
//
// console.log(sum); This gives the sum of 22.
// Perhaps I can use the idea of pushing the first set of numbers into an array and the other set of numbers into another array and combine the two of them together with an operator (whether it is multiply, minus, add or divide).

function clearMe(nuclear){
  let beClear = document.getElementById("clearOut").value;
  document.querySelector("#display").innerHTML = nuclear;
}


let numbers = [];
let ops = [];

function digit(val){
  let screen = document.querySelector("#display");
  screen.innerHTML += val;
  // let NumsDrop = screen.split(/\d/);
  // let OpsDrop = screen.split(/[-=*/]/);
  //
  // for (let i = 0; i < NumsDrop.length; i++){
  //   if (NumsDrop[i] !== " "){
  //     ops.push(NumsDrop[i]);
  //   }
  // }
  //
  // for (let i = 0; i < OpsDrop.length; i++){
  //   if (OpsDrop[i] !== " "){
  //     numbers.push(OpsDrop[i]);
  //   }
  // }
  // console.log(ops);
  // console.log(numbers);
  // return screen;
}

// function calculate(total){
//
// }
  // while (ops.length > 0){
  //   let operator = ops.shift();
  //   let
  // }





  // // sample numbers
  // let numbers = [11, 23, 45];
  //
  // // sample operators between the numbers
  // let ops = ['+', '-', '*'];
  //
  // // while we still have operators to process...
  // while (ops.length > 0) {
  //   // taking the first number from the ops array.
  //   // op will be "+"
  //   let op = ops.shift();
  //
  //   // taking the first number from "numbers"
  //   // num1 will be "11";
  //   let num1 = numbers.shift();
  //
  //   // taking the first number from numbers AGAIN
  //   // num2 will be "23"
  //   let num2 = numbers.shift();
  //
  //   if (op === '+') {
  //       // splice puts num1 + num2 into the array
  //       // at element 0, removing 0 elements in the
  //       // process
  //       numbers.splice(0, 0, num1 + num2);
  //   } else if (op === '-') {
  //       numbers.splice(0, 0, num1 - num2);
  //   }
  // }
  //
  // console.log(numbers[0]);
  // to get all the numbers in an array:
  // "1+23-45/3".split(/[-=*/]/);

  // to get all the OPERATORS in an array:
  // "1+23-45/3".split(/\d/);
  // remove all empty string elements in the array






/*Things to do list:
1. Create a display area for numbers
2. Create buttons for numbers 0 to 9
3. Create a dot button, a decimal
4. Create a button that clears digits
5. Create a "calculate" button which is the = sign
6. Determine how to create a max length of the digits added to the display area

- Variables to Create
  - current --> numbers being displayed
  - operation
  - maxlength



// /* Note: you can't do the math until you have both numbers */
// function total(signs){
//   if (signs === "/"){
//     return num1 / num2;
//   }
//   else if (signs === "*"){
//     return num1 * num2;
//   }
//   else if (signs === "-"){
//     return num1 - num2;
//   }
//   else if (signs === "+"){
//     return num1 + num2;
//   }
// }
