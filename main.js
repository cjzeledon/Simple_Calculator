// let operation = "0";
// let maxlength = 50;

function digit(val){
  document.querySelector("#display").innerHTML += val;
}

function clearMe(nuclear){
  let beClear = document.getElementById("clearOut").value;
  document.querySelector("#display").innerHTML = nuclear;
}

function total(totalize){
  if (totalize === "*"){
    return
  }
}
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
//   if (signs === "divide"){
//     return numValue / numValue;
//   }
//   else if (signs === "*"){
//     return numValue * numValue;
//   }
//   else if (signs === "subtract"){
//     return numValue - numValue;
//   }
//   else if (signs === "addition"){
//     return numValue + numValue;
//   }
// }
