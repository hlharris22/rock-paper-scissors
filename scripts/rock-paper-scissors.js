module.exports = { computerPlay };
function computerPlay() {
  const handOptions = ['Rock', 'Paper', 'Scissors'];
  return handOptions[Math.floor(Math.random() * 3)];
}

// function playRPS(playerSelection, computerSelection) {
//   const playerSelect = playerSelection.toLowerCase();
//   const computerSelect = computerSelection.toLowerCase();

//   if (playerSelect === computerSelect) {
//     return 'Tie!';
//   }
//   if (playerSelect === 'rock') {
//     if (computerSelect === 'paper') {
//       return 'The computer wins! Paper beats Rock!';
//     }
//     if (computerSelect === 'scissors') {
//       return 'The player wins! Rock beats Scissors!';
//     }
//   } else if (playerSelect === 'paper') {
//     if (computerSelect === 'rock') {
//       return 'The player wins! Paper beats Rock!';
//     }
//     if (computerSelect === 'scissors') {
//       return 'The computer wins! Scissors beats Paper!';
//     }
//   } else if (playerSelect === 'scissors') {
//     if (computerSelect === 'rock') {
//       return 'The computer wins! Rock beats Scissors!';
//     }
//     if (computerSelect === 'paper') {
//       return 'The player wins! Scissors beats Paper!';
//     }
//   }
// }

// function game() {
//   const handOptions = ['Rock', 'Paper', 'Scissors'];
//   for (let i = 0; i < 5; i++) {
//     let playerSelection;
//     do {
//       playerSelection = window.prompt(`Select ${handOptions.join(', ')}`);
//     } while (
//       !handOptions.includes(
//         playerSelection.charAt(0).toUpperCase() +
//           playerSelection.slice(1).toLowerCase()
//       )
//     );
//     let computerChoice = computerPlay();
//     console.log(
//       `The player selected ${playerSelection}, and the computer selected ${computerChoice}`
//     );
//     console.log(playRPS(playerSelection, computerChoice));
//   }
// }

// game();
