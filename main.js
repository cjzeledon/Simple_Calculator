function clearMe(nuclear){
  let beClear = document.getElementById("clearOut").value;
  document.querySelector("#display").innerHTML = nuclear;
}

function digit(value){
  let screen = document.querySelector("#display");
  screen.innerHTML += value;
}

function calculate(){
  let answer = DigtoNums("12+4*5-90");
  let solveIt = SolveEquation(answer);
  // let giveResults = ShowResult(solveIt);
}

let numbers = [];
let ops = [];

function DigtoNums(convert){
  // let numbers = [];
  // let ops = [];

  let NumsDrop = convert.split(/\d/);
  let OpsDrop = convert.split(/[-=+*/]/);

  for (let i = 0; i < NumsDrop.length; i++){
    if (NumsDrop[i] !== ""){
      ops.push(NumsDrop[i]);
    }
  }

  for (let j = 0; j < OpsDrop.length; j++){
    if (OpsDrop[j] !== ""){
      numbers.push(parseFloat(OpsDrop[j]));
    }
  }

  // console.log(numbers);
  // console.log(ops);
}


function SolveEquation(answer) {
  // while we still have operators to process...
  while (ops.length > 0) {
    // taking the first number from the ops array.
    // op will be "+"
    let op = ops.shift();

    // taking the first number from "numbers"
    // num1 will be "11";
    let num1 = numbers.shift();

    // taking the first number from numbers AGAIN
    // num2 will be "23"
    let num2 = numbers.shift();

    if (op === '+') {
        // splice puts num1 + num2 into the array
        // at element 0, removing 0 elements in the
        // process
        numbers.splice(0, 0, num1 + num2);
    } else if (op === '-') {
        numbers.splice(0, 0, num1 - num2);
    } else if (op === '*') {
        numbers.splice(0, 0, num1 * num2);
    } else if (op === '/') {
        numbers.splice(0, 0, num1 / num2);
    }
  }
}

function giveResults(){
  console.log("Give me a moment!");
}
