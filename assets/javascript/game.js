
      var letter = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
      var win = 0;
      var guesses = 8;
      var losses = 0;
      var choices = [];
      
      var compLetter = function() {
        return letter[Math.floor(Math.random() * letter.length)];
      };
       
      var letterToCompare = compLetter();
      console.log(letterToCompare);

      document.onkeyup = function(event) {
        var userLetter = String.fromCharCode(event.keyCode).toLowerCase();
      

        if (userLetter == letterToCompare) {
        win++;
        guesses = 8;
        for (i=0; i<8; i++){
            choices.pop();
            };
        } else {
        guesses --;
        choices.push(userLetter);
        }

        if (guesses === 0) {
          guesses = 8;
          losses++;
          for (i=0; i<8; i++){
            choices.pop();
          }
        }

        var html = "<p><center>Guess My Letter!!!</center></p>" +
          "<p><center>You have guessed correctly " + win + " times!</center></p>" +
          "<p><center>You have guessed wrongly " + losses + "</center></p>" +
          "<p><center>You have " + guesses + " guesses left to win!</center></p>" +
          "<p><center>Previous choices: " + choices + "</center></p>";

          document.querySelector('#game').innerHTML = html;
    }