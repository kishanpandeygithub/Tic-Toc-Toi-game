let turn = "O";
let turn_count = 0;

let winner = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
];

//array for storing ans 
let board_array = new Array(9).fill("E");




//finding the winner of the game
function winnerFind() {
    for (let [index0, index1, index2] of winner) {
        if (board_array[index0] != 'E' && board_array[index0] === board_array[index1] && board_array[index1] === board_array[index2]) {
            return 1;
        }
    }
    return 0;
}


const printer = (event) => {
    const element = event.target;
    turn_count++;
    if (board_array[element.id] === 'E') {

        if (turn === 'O') {
            element.innerHTML = 'O';
            board_array[element.id] = 'O';
            if (winnerFind()) {
                let res = document.querySelector(".result");
                res.innerHTML = "Winner is O";
                board.removeEventListener("click", printer);
                return;
            }
            turn = "X";
        }
        else {
            element.innerHTML = 'X';
            board_array[element.id] = 'X';
            if (winnerFind()) {
                let res = document.querySelector(".result");
                res.innerHTML = "Winner is X";
                board.removeEventListener("click", printer);
                return;
            }
            turn = "O";
        }

    }
    if (turn_count == 9) {
        document.querySelector(".result").innerHTML = "Match is Draw";
    }

}

const board = document.querySelector(".box");
board.addEventListener("click", printer);


const btn = document.querySelector("button");
btn.addEventListener('click', () => {
    const cell = document.getElementsByClassName("inner-box");
    Array.from(cell).forEach((value) => {
        value.innerHTML = "";
    })
    turn = "O";
    turn_count = 0;
    board_array = new Array(9).fill("E");
    let res = document.querySelector(".result");
    res.innerHTML = "";
    board.addEventListener("click", printer);
})