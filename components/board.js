import React, { useState } from "react";

const boxes = ["-", "-", "-", "-", "-", "-", "-", "-", "-"];

const isAllEqual = (arr) => arr.every((i) => i === arr[0]);

const isValid = (val) => val === 0 || val === 1;

const getValueAtIndexs = (arr, indexArr) => indexArr.map((i) => arr[i]);

const checkWin = (board) => {
  // each 3 is same
  if (isAllEqual(board.slice(0, 2)) && isValid(board[0])) {
    return board[0];
  }

  if (isAllEqual(board.slice(3, 5)) && isValid(board[3])) {
    return board[3];
  }

  if (isAllEqual(board.slice(6, 8)) && isValid(board[6])) {
    return board[6];
  }

  // each 3rd is same 0,3,6  1,4,7  2,5,8
  if (isAllEqual(getValueAtIndexs(board, [0, 3, 6])) && isValid(board[3])) {
    return board[3];
  }

  if (isAllEqual(getValueAtIndexs(board, [1, 4, 7])) && isValid(board[1])) {
    return board[1];
  }

  if (isAllEqual(getValueAtIndexs(board, [2, 5, 8])) && isValid(board[2])) {
    return board[2];
  }

  // 0, 4, 8
  if (isAllEqual(getValueAtIndexs(board, [0, 4, 8])) && isValid(board[0])) {
    return board[0];
  }
  // 2, 4, 6
  if (isAllEqual(getValueAtIndexs(board, [2, 4, 6])) && isValid(board[2])) {
    return board[2];
  }
  return false;
};

const Box = ({ id, value, onClick }) => {
  if (value === "-") {
    return (
      <div
        className="m-2 w-12 bg-red-400 shadow-md text-center"
        onClick={() => {
          onClick({ id, value });
        }}
      >
        --
      </div>
    );
  }

  if (value === 0) {
    return <div className="m-2 w-12 bg-green-400 shadow-md text-center">O</div>;
  }

  if (value === 1) {
    return <div className="m-2 w-12 bg-blue-400 shadow-md text-center">X</div>;
  }
};

const Board = (props) => {
  const [boxState, setBoxState] = useState(boxes);

  const [player, setPlayer] = useState(0);

  const [winner, setWinner] = useState(null);

  const switchPlayer = () => {
    setPlayer(player === 0 ? 1 : 0);
  };

  const reset = () => {
    setBoxState(boxes);
    setPlayer(0);
    setWinner(null);
  };

  const setBox = (player, box) => {
    let updatedBoxes = [...boxState];
    updatedBoxes[box] = player;

    setBoxState(updatedBoxes);
  };

  const handleOnBoxClick = (box) => {
    setBox(player, box.id);
    let isPlayerWon = checkWin(boxState);
    if (isPlayerWon) {
      setWinner(isPlayerWon);
    }
    switchPlayer();
  };

  return (
    <div>
      {winner === null ? (
        <div className="w-48 bg-blue-200 grid grid-cols-3 grid-flow-row">
          {boxState.map((value, index) => (
            <Box
              value={value}
              id={index}
              key={index}
              onClick={handleOnBoxClick}
            />
          ))}
        </div>
      ) : (
        <div> Player {winner} Won !!! </div>
      )}
      <div class="w-full flex justify-center items-center mt-4">
        <button
          class="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-sm text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
          onClick={reset}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Board;
