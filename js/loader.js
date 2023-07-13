const loader = document.getElementById('loader');
function load(){
  loader.classList.add('');
  loader.classList.remove('');
  loader.classList.toggle('');
  loader.classList.contains('');
}
window.addEventListener('load',function(){
  loader.classList.add('hidden');
});