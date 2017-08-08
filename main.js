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

function digit(val){
  let screen = document.querySelector("#display").innerHTML += val;
  let num1 = [];
  let num2 = [];

  for (i = 0; i < screen.length; i++){
    operator = {
      add: "+",
      subtract: "-",
      multiply: "*",
      divide: "/"
    };

    if (screen ){

    }
  }
}
can you see me?
blah blah
numberTest= parseInt("1293+4567");
numberArray = [numberTest]
console.log(numberArray);

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



/* Note: you can't do the math until you have both numbers */
function total(signs){
  if (signs === "/"){
    return num1 / num2;
  }
  else if (signs === "*"){
    return num1 * num2;
  }
  else if (signs === "-"){
    return num1 - num2;
  }
  else if (signs === "+"){
    return num1 + num2;
  }
}
