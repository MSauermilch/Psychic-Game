
      var letter = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
      var win = 0;
      var guesses = 8;
      var losses = 0;
      var choices = [];
      
      var compLetter = function() {
        var result = letter[Math.floor(Math.random() * letter.length)];
        console.log("new letter: " + result);
        return result;
      };
       
      var letterToCompare = compLetter();
      console.log(letterToCompare);

      function reset() {
        guesses = 8;
        for (i=0; i<8; i++){
            choices.pop();
            };
      }
      
      document.onkeyup = function(event) {
        var userLetter = String.fromCharCode(event.keyCode).toLowerCase();
      

        if (userLetter === letterToCompare) {
          letterToCompare = compLetter();
          win++;
         reset();
        } else {
          guesses--;
          choices.push(userLetter);
        }

        if (guesses === 0) {
          letterToCompare = compLetter();
          guesses = 8;
          losses++;
          
          for (i=0; i<8; i++){
            choices.pop();
          }
        }

        var html = "<p><center>Guess My Letter!!!</center></p>" +
          "<br></br>" +
          "<p><center>You have guessed correctly " + win + " times!</center></p>" +
          "<br></br>" +
          "<p><center>You have guessed wrongly " + losses + "</center></p>" +
          "<br></br>" +
          "<p><center>You have " + guesses + " guesses left to win!</center></p>" +
          "<br></br>" +
          "<p><center>Previous choices: " + choices + "</center></p>" +
          "<br></br>";

          document.querySelector('#game').innerHTML = html;
    }