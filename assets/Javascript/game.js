var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'x'];

var anwser;
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guesses = [];




anwser = alphabet[Math.floor(Math.random() * alphabet.length)];
console.log(anwser)



document.onkeypress = function(event) {
    var yourGuess = event.key;
    var includes = guesses.includes(yourGuess);
    guesses.push(yourGuess);

    if(yourGuess < "a" ||  yourGuess > "z" ){
        alert('Lower Case Letters Only! ');
        return 0;
    }
     
    if (includes === true) {
        alert('already guessed');
        return 0;
    }



    if (yourGuess === anwser) {
        win();

    } else {
        guessesLeft--;
    }

    if (guessesLeft == 0) {
        loss();
    
    }


    document.getElementById('wins').innerHTML ="Wins: " + wins;
    document.getElementById('losses').innerHTML = "Losses: " + losses;
    document.getElementById('guessesLeft').innerHTML = "Guesses Left: : " + guessesLeft;
    document.getElementById('guesses').innerHTML = "Your Guesses so far: " + guesses;

    
    function win() {
        wins++;
        reset();
    }

    function loss() {
        losses++;
        reset();
    }

    function reset() {
        anwser = alphabet [Math.floor(Math.random() * alphabet.lenght)];
        console.log(anwser);
        guessesLeft = 9;
        guesses =[];
    }

}

