
//Computer functions
let choice=['ROCK', 'PAPER' , 'SCISSOR'];
let selector = Math.floor(Math.random() * choice.length);
computerPlay = (selector, choice[selector]);
let computerSelection = computerPlay;

//Human fuunctions
let playerChoice = window.prompt();
playerChoice = playerChoice.toUpperCase();

//Play round
function playRound(playerMove, computerMove) {

    document.write("You played " +playerChoice);
    document.write("</br> Computer played "+ computerSelection + "</br>" );
    

    if (playerChoice ==computerSelection )
        document.write("</br> Tie game");

    else if (playerChoice ='rock' && computerSelection == 'PAPER')
            document.write("</br> Computer wins ");

    else if (playerChoice ='scissor' && computerSelection == 'PAPER')
            document.write("</br> You win ");           

    else if (playerChoice ='rock' && computerSelection == 'SCISSOR')
            document.write("</br> You win ");

    else if (playerChoice ='paper' && computerSelection == 'SCISSOR')
            document.write("</br> Computer wins ");

    else if (playerChoice ='paper' && computerSelection == 'ROCK')
            document.write("</br> You win ");            

    else if (playerChoice ='scissor' && computerSelection == 'ROCK')
            document.write("</br> Computer wins ");

            
  }



  console.log(playRound(playerChoice, computerSelection));





//   const playerSelection = "rock";
//   const computerSelection = computerPlay();
//   console.log(playRound(playerSelection, computerSelection));

