function digit(val){
  let numbers = document.getElementsByClassName("num").value;
  document.querySelector("#display").innerHTML = val;
}

function operator(optr){
  let thing = document.getElementsByClassName("signs").value;
  document.querySelector("#display").innerHTML = optr;
}

function equal(all){
  let totalize = document.getElementsByClassName("total").value;
  document.querySelector("#display").innerHTML = all;
}

function clearMe(nuclear){
  let beClear = document.getElementById("clearOut").value;
  document.querySelector("#display").innerHTML = nuclear;
}

function cal(current){
  // let cally = document.querySelector("#display");
  // document.querySelector("#display").innerHTML = current;
  // cally.textContent = digit();
  console.log("working it");
}













// displayValue = [ ];
// operatorSigns= ["+", "-", "*", "/"]
//
// function number(numValue){
//   console.log('yay');
//   // value = document.querySelector("#calculator").value;
//   document.querySelector("#display").innerHTML = numValue;
//   displayValue.push(numValue);
// }
//
// function clear(val){
//   document.getElementById('display').value=val;
// }
//
// function number(val){
//   document.getElementById('display').value+=val;
// }





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

What types of but

// function operator(signs){
//   document.querySelector(".operator").innerHTML = signs;
//   if (signs === "divide"){
//     console.log("I'm here, right?");
//   }
//   else
//   return "I'm screwed";
// }


// /* Note: you can't do the math until you have both numbers */
// function operator(signs){
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

// Don't do the math until you have the whole expression to tell the computer that those strings needed to be "totaled" up to.


// function display(results){
//   console.log("can I result good enough?");
//   document.querySelector("#display").innerHTML = value;
// }
//
// function operator(signs){
//
// }


// function multiplyBy(multy){
//   console.log("Multi-time!");
//   document.querySelector("#multiply").innerHTML
// }
//
// function result(givemenumbers){
//
// }

// operator(yah){
//   if (yah === *){
//     calculate()
//   }
// }
