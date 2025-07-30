
document.addEventListener('DOMContentLoaded', () => {
    const chessboard = document.getElementById('chessboard');
    const size = 8;
    let queens = [];

    function createBoard() {
        chessboard.innerHTML = '';
        for (let row = 0; row < size; row++) {
            for (let col = 0; col < size; col++) {
                const square = document.createElement('div');
                square.classList.add((row + col) % 2 === 0 ? 'white' : 'black');
                square.dataset.row = row;
                square.dataset.col = col;
                square.addEventListener('click', toggleQueen);
                chessboard.appendChild(square);
            }
        }
    }

    function toggleQueen(event) {
        const row = parseInt(event.target.dataset.row);
        const col = parseInt(event.target.dataset.col);
        const queenIndex = queens.findIndex(q => q.row === row && q.col === col);

        if (queenIndex !== -1) {
            queens.splice(queenIndex, 1);
            event.target.textContent = '';
            event.target.classList.remove('queen');
        } else {
            if (!isSafe(row, col)) {
                alert('No puedes colocar una reina aquí.');
                return;
            }

            event.target.classList.add('queen');
            event.target.textContent = '♛';
            queens.push({ row, col });

            if (queens.length === 8) {
                alert('¡Felicidades! Has colocado las ocho reinas correctamente.');
            }
        }
    }

    function isSafe(row, col) {
        for (const queen of queens) {
            if (queen.row === row || queen.col === col ||
                Math.abs(queen.row - row) === Math.abs(queen.col - col)) {
                return false;
            }
        }
        return true;
    }

    createBoard();
});
