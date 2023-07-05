var radioButtons = document.getElementsByName("rank");
const buttons = document.querySelectorAll(".button");

buttons[0].classList.add('active');

function handleRankChange(event) {
  for (var i = 0; i < radioButtons.length; i++) {
    var radioButton = radioButtons[i];

    if (radioButton.checked) {
      var label = document.querySelector('label[for="' + radioButton.id + '"]');
      label.classList.add("active");
    } else {
      var label = document.querySelector('label[for="' + radioButton.id + '"]');
      label.classList.remove("active");
    }
  }
}

radioButtons.forEach(function (radioButton) {
  radioButton.addEventListener("change", handleRankChange);
});
