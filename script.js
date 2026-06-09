const cells = document.querySelectorAll(".cell");
const statusText = document.getElementById("status");

let currentPlayer = "X";
let gameActive = true;

let board = [
    "", "", "",
    "", "", "",
    "", "", ""
];

const winningCombinations = [
    [0,1,2],
    [3,4,5],
    [6,7,8],

    [0,3,6],
    [1,4,7],
    [2,5,8],

    [0,4,8],
    [2,4,6]
];

cells.forEach(cell => {
    cell.addEventListener("click", handleClick);
});

function handleClick() {

    const index = this.dataset.index;

    if(board[index] !== "" || !gameActive) {
        return;
    }

    board[index] = currentPlayer;

    this.textContent = currentPlayer;

    if(currentPlayer === "X") {
        this.classList.add("x");
    } else {
        this.classList.add("o");
    }

    checkWinner();

    if(gameActive) {

        currentPlayer =
            currentPlayer === "X"
            ? "O"
            : "X";

        statusText.textContent =
            `Player ${currentPlayer}'s Turn`;
    }
}

function checkWinner() {

    for(let combo of winningCombinations) {

        let a = board[combo[0]];
        let b = board[combo[1]];
        let c = board[combo[2]];

        if(a === "" || b === "" || c === "") {
            continue;
        }

        if(a === b && b === c) {

            statusText.textContent =
                `Player ${a} Wins!`;

            gameActive = false;

            return;
        }
    }

    if(!board.includes("")) {

        statusText.textContent =
            "It's a Draw!";

        gameActive = false;
    }
}

function resetGame() {

    board = [
        "", "", "",
        "", "", "",
        "", "", ""
    ];

    currentPlayer = "X";

    gameActive = true;

    statusText.textContent =
        "Player X's Turn";

    cells.forEach(cell => {

        cell.textContent = "";

        cell.classList.remove("x");
        cell.classList.remove("o");
    });
}