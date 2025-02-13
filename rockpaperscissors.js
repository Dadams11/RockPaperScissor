// rockpaperscissors.js
function playGame() {
    let wins = 0;
    let losses = 0;
    let ties = 0;
    const choices = ['R', 'P', 'S'];

    while (true) {
        let userChoice = prompt("Enter R for Rock, P for Paper, or S for Scissors:").toUpperCase();
        
        if (!choices.includes(userChoice)) {
            alert("Invalid choice! Please enter R, P, or S.");
            continue;
        }
        
        let computerChoice = choices[Math.floor(Math.random() * choices.length)];
        alert(`Computer chose: ${computerChoice}`);

        if (userChoice === computerChoice) {
            ties++;
            alert("It's a tie!");
        } else if (
            (userChoice === 'R' && computerChoice === 'S') ||
            (userChoice === 'P' && computerChoice === 'R') ||
            (userChoice === 'S' && computerChoice === 'P')
        ) {
            wins++;
            alert("You win!");
        } else {
            losses++;
            alert("You lose!");
        }

        alert(`Score:\nWins: ${wins}\nLosses: ${losses}\nTies: ${ties}`);

        let playAgain = confirm("Do you want to play again?");
        if (!playAgain) {
            alert("Thanks for playing!");
            break;
        }
    }
}

playGame();
