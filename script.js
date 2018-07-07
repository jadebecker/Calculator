//initialisation
let operate = 0;
let nb1 = 0;
let nb2 = 0;
let txt = document.querySelector('#para');

// fonctions calcul
function add (num1, num2){
  let result = num1 + num2;
  return result;
}
function multiply (num1, num2){
  let result = num1 * num2;
  return result;
}
function divide (num1, num2) {
  let result = num1 / num2;
  return result;
}
function substract (num1, num2) {
  let result = num1 - num2;
  return result;
}

//choix operation
document.querySelector('#add').onclick = function () {
  operate = 1;
  nb1 = +txt.textContent;
  txt.textContent = "";
};
document.querySelector('#multiply').onclick = function (){
  operate = 2;
  nb1 = +txt.textContent;
  txt.textContent = "";
};
document.querySelector('#divide').onclick = function (){
  operate = 3;
  nb1 = +txt.textContent;
  txt.textContent = "";
};
document.querySelector('#substract').onclick = function (){
  operate = 4;
  nb1 = +txt.textContent;
  txt.textContent = "";
};

//choix nb
document.querySelector('#zero').onclick = function (){
  txt.textContent += 0;
};
document.querySelector('#one').onclick = function (){
  txt.textContent += 1;
};
document.querySelector('#two').onclick = function (){
  txt.textContent += 2;
};
document.querySelector('#three').onclick = function (){
  txt.textContent += 3;
};
document.querySelector('#four').onclick = function (){
  txt.textContent += 4;
};
document.querySelector('#five').onclick = function (){
  txt.textContent += 5;
};
document.querySelector('#six').onclick = function () {
  txt.textContent += 6;
};
document.querySelector('#seven').onclick = function () {
  txt.textContent += 7;
};
document.querySelector('#eight').onclick = function (){
  txt.textContent += 8;
};
document.querySelector('#nine').onclick = function (){
  txt.textContent += 9;
};


// resultat operation
document.querySelector('#equal').onclick = function () {
  let result;
  if (operate === 1) {
    nb2 = +txt.textContent;
    txt.textContent = "";
    result = add(nb1,nb2);
  }
  else if (operate === 2) {
    nb2 = +txt.textContent;
    txt.textContent = "";
    result = multiply(nb1,nb2);
  }
  else if (operate === 3) {
    nb2 = +txt.textContent;
    txt.textContent = "";
    result = divide(nb1,nb2);
  }
  else if (operate === 4) {
    nb2 = +txt.textContent;
    txt.textContent = "";
    result = substract(nb1,nb2);
  }
  txt.textContent = result;
}

document.querySelector('#clear').onclick = function () {
txt.textContent = "";
nb1 = 0;
nb2 = 0;
}
