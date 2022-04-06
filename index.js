// function Modal(btn){
//   var modal = document.getElementById("myModal");
//   var btn = document.getElementById(btn);
//   var span = document.getElementsByClassName("close")[0];
//   btn.onclick = function() {
//     modal.style.display = "block";
//   }
//   span.onclick = function() {
//     modal.style.display = "none";
//   }
//   window.onclick = function(event) {
//     if (event.target == modal) {
//       modal.style.display = "none";
//     }
//   }
// }

function Fibonacci(){
  // var el_down = document.getElementById("GFG_DOWN");
  var num = +document.getElementById("fibo").value;
  var fibo = [];
  fibo[0] = 0;
  fibo[1] = 1;
  for (var i = 2; i < num; i++) {
    fibo[i] = fibo[i-2] + fibo[i-1];
  }
  console.log(`Fibonacci: \n input = ${num} \n output = ${fibo[num-1]}`);
  // el_down.innerHTML = "Fibonacci: input = " + num + " | " + "output = " + fibo[num-1];
  // Modal("fibom");
  return;
}

function Factorial(){
  // var el_down = document.getElementById("GFG_DOWN");
  var num = +document.getElementById("fact").value;
  if (num < 0) {
    console.log('Hey! Esto es una maquina de turing, no es la Matrix.');
    // el_down.innerHTML = "Hey! Esto es una maquina de turing, no es la Matrix.";
    // Modal("factm");
  }
  else if (num === 0) {
    console.log(`Factorial: \n ${num}! = 1`);
    // el_down.innerHTML = "Factorial: " + num + "! = " + fact;
    // Modal("factm");
  }
  else {
    let fact = 1;
    for (i = 1; i <= num; i++) {
        fact *= i;
    }
    console.log(`Factorial: \n ${num}! = ${fact}.`);
    // el_down.innerHTML = "Factorial: " + num + "! = " + fact;
    // Modal("factm");
  }
  return;
}