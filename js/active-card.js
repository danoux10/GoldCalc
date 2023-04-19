var bronzeCard = document.getElementById('bronze-card');
var silverCard = document.getElementById('silver-card');
var goldCard = document.getElementById('gold-card');
var platinumCard = document.getElementById('platinum-card');
var diamondCard = document.getElementById('diamond-card');
var masterCard = document.getElementById('master-card');
var grandMasterCard = document.getElementById('grand-master-card');
var btnUnselect = document.getElementById('btn-unselect');

var radio = document.getElementsByName('rank');

btnUnselect.classList.add('active');

radio.forEach(function(button){
  button.addEventListener("change",function(){
    const selectedValue = this.value;

    if(selectedValue === 'unselect'){
      btnUnselect.classList.add('active');
    }else{
      btnUnselect.classList.remove('active');
    }

    if(selectedValue === "bronze"){
      bronzeCard.classList.add("active");
    }else{
      bronzeCard.classList.remove("active");
    }

    if(selectedValue === "silver"){
      silverCard.classList.add("active");
    }else{
      silverCard.classList.remove("active");
    }

    if(selectedValue === "gold"){
      goldCard.classList.add("active");
    }else{
      goldCard.classList.remove("active");
    }

    if(selectedValue === "platinum"){
      platinumCard.classList.add("active");
    }else{
      platinumCard.classList.remove("active");
    }

    if(selectedValue === "diamond"){
      diamondCard.classList.add("active");
    }else{
      diamondCard.classList.remove("active");
    }

    if(selectedValue === "master"){
      masterCard.classList.add("active");
    }else{
      masterCard.classList.remove("active");
    }

    if(selectedValue === "grand-master"){
      grandMasterCard.classList.add("active");
    }else{
      grandMasterCard.classList.remove("active");
    }
  })
})