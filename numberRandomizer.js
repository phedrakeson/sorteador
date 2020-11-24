const form = document.querySelector('form');
let [ sortear ] = document.getElementsByName('sortear');
let [ min ] = document.getElementsByName('min');
let [ max ] = document.getElementsByName('max');
let result = document.getElementById('result');

function execSubmit(e) {
  e.preventDefault();
  result.textContent = ''
  for(var i=0; i<+sortear.value; i++){
    let value = randomizer(+min.value, +max.value);
    const numberElement = document.createElement("span");
    numberElement.textContent = value;
    result.appendChild(numberElement);
  }

}

function randomizer(min, max) {
  let random = Math.random() * (max - min + 1) + min;
  return random.toFixed();
}



form.addEventListener('submit', execSubmit)