const rps = (p1, p2) => {
  switch (true) {
    case (p1 === "paper" && p2 === "rock"):
      return "Player 1 won!"
      break;
    case (p1 === "rock" && p2 === "scissors"):
      return "Player 1 won!"
      break;
    case (p1 === "scissors" && p2 === "paper"):
      return "Player 1 won!"
      break;
    case (p1 === p2):
      return "Draw!"
      break;
      
      default:
        return "Player 2 won!"
  }
};