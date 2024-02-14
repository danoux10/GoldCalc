const winView = document.getElementById('response-win');
function calcule(){
  let value_point = parseInt(document.getElementById('gold-point').value);
  let radioSelect = document.querySelector('input[type="radio"]:checked');

  // let pt = 0;
  const golden_gun = 3000;
  const win_point = 10;

  const rank_points ={
    'unselect' : 0,
    'bronze' : 300,
    'silver' : 450,
    'gold' : 600,
    'platinum' : 800,
    'diamond' : 1000,
    'master' : 1200,
    'grand-master' : 1500,
  }

  let point = isNaN(value_point) ? 0 : value_point;
  let rank_point = rank_points[radioSelect.value] || 0 ;

  winView.innerHTML = '';

  for (let i = 0; i<3; i++){
    const span = document.createElement('span');
    span.className = (i === 0) ? 'first' : (i === 1) ? 'second' : 'third';
    span.innerHTML = '•';
    winView.appendChild(span);
  }

  let point_total = point + rank_point;
  let restant = golden_gun - point_total;
  let win = restant / win_point;
  let result = Math.ceil(win);

  winView.classList.add('active');

  setTimeout(()=>{
    winView.innerHTML = result;
  },1500)
}
