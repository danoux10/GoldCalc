const button = document.getElementById('calcule');
const winView = document.getElementById('response-win');
function calcule(){
  let value_point = parseInt(document.getElementById('gold-point').value);
  let radioSelect = document.querySelector('input[type="radio"]:checked');
  let input_point = document.getElementById('gold-point');

  // let pt = 0;
  let rank_point=0;
  let point= 0;

  const golden_gun = 3000;

  const win_point = 25;
  const draw_point = 5;

  const bronze_point = 300;
  const silver_point = 450;
  const gold_point = 600;
  const platinum_point = 800;
  const diamond_point = 1000;
  const master_point = 1200;
  const grand_master_point = 1500;

  if(isNaN(value_point)) {
    point = 0;
  }
  if(!isNaN(value_point)){
    point = value_point;
  }

  if(radioSelect.value == 'unselect'){
    rank_point = 0;
  }

  if(radioSelect.value == 'bronze'){
    rank_point = bronze_point;
  }

  if(radioSelect.value == 'silver'){
    rank_point = silver_point;
  }

  if(radioSelect.value == 'gold'){
    rank_point = gold_point;
  }

  if(radioSelect.value == 'platinum'){
    rank_point = platinum_point;
  }

  if(radioSelect.value == 'diamond'){
    rank_point = diamond_point;
  }

  if(radioSelect.value == 'master'){
    rank_point = master_point;
  }

  if(radioSelect.value == 'grand_master'){
    rank_point = grand_master_point;
  }

  winView.innerHTML = '';

  var first = document.createElement("span");
  first.className = "first";
  first.innerHTML = "•";

  var second = document.createElement("span");
  second.className = "second";
  second.innerHTML = "•";

  var third = document.createElement("span");
  third.className = "third";
  third.innerHTML = "•";

  // Ajout des balises span à l'élément body
  winView.appendChild(first);
  winView.appendChild(second);
  winView.appendChild(third);

  let point_total = point + rank_point;
  let restant = golden_gun - point_total;
  let win = restant / 25;
  let result = Math.ceil(win);

  winView.classList.add('active');

  setTimeout(()=>{
    winView.innerHTML = result;
  },1500)
}

button.addEventListener('click',calcule);
