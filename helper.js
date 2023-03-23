document.addEventListener('DOMContentLoaded', function() {
    function checkAnswers() {
        var answer1 = document.getElementById("answer1").value.toLowerCase();
        var answer3 = document.getElementById("answer3").value.toLowerCase();
      
        var entanglementCheckboxes = document.getElementsByClassName("entanglement-checkbox");
        var entanglementCorrect = false;
        for (var i = 0; i < entanglementCheckboxes.length; i++) {
          if (entanglementCheckboxes[i].checked && entanglementCheckboxes[i].value === "correct") {
            entanglementCorrect = true;
            break;
          }
        }
      
        var score = 0;
        if (answer1 === "superposition") {
          score++;
        }
        if (entanglementCorrect) {
          score++;
        }
        if (answer3 === "photons") {
          score++;
        }
        if (document.querySelector('input[name="group4"]:checked').value === "correct") {
          score++;
        }
        if (document.querySelector('input[name="group5"]:checked').value === "correct") {
          score++;
        }
        if (document.querySelector('input[name="group6"]:checked').value === "correct") {
          score++;
        }
        alert(`You got ${score}/6 answers correct!`);
      }
      
      
    const submitButton = document.querySelector('button[type="submit"]');
    submitButton.addEventListener('click', checkAnswers);
  });
  