displayValue = [ ];

operatorSigns= ["+", "-", "*", "/"]

function number(numValue){
  console.log('yay');
  // value = document.querySelector("#calculator").value;
  document.querySelector("#display").innerHTML = numValue;
  displayValue.push(numValue);
}

function operator(signs){
  document.querySelector(".operator").innerHTML = signs;
  if (signs === "divide"){
    console.log("I'm here, right?");
  }
  else
  return "I'm screwed";
}


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
