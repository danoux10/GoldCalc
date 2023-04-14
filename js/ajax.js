const formCal = document.getElementById('calc');
const response = document.getElementById('response-win');

function Async(event){
  event.preventDefault();

  var xhr = new XMLHttpRequest();
  var data = new FormData(this);

  xhr.open('POST',"controller/calcul.php");
  xhr.send(data);

  xhr.onreadystatechange = function(){
    if(xhr.readyState == 4 && xhr.status == 200){
      var result = JSON.parse(this.responseText);
      response.innerHTML = result.win;
    }else if(xhr.readyState == 4){
      console.log('error');
    }
  }
  return false;
}

formCal.addEventListener('submit', Async);