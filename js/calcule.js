const button = document.getElementById('calcule');
const winView = document.getElementById('response-win');
function calcule(){
  let value_point = parseInt(document.getElementById('gold-point').value);
  let radioSelect = document.querySelector('input[type="radio"]:checked');
  let input_point = document.getElementById('gold-point');

  let pt = 0;
  let rank_point = 0;
  let point = 0;

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
    input_point.value = '0';
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

  let win = 0;
  while (pt <= golden_gun){
    pt = point + rank_point + (win * win_point);
    win++;
  }

  winView.classList.add('active');

  setTimeout(()=>{
    winView.innerHTML = win;
  },1500)
}

button.addEventListener('click',calcule);
