import React from "react";

const boxes = [0, 0, 0, 0, 0, 0, 0, 0, 0];

const Box = ({ value }) => {
  if (value === 0) {
    return <div className="h-8 w-8 bg-green-400 shadow-md"> </div>;
  }

  return (
    <div className="h-8 w-8 bg-green-400 shadow-md">
      {value === "x" ? "X" : "O"}}
    </div>
  );
};

const Board = (props) => {
  return (
    <div className="m-12 bg-red-300 grid grid-col-3">
      {boxes.map((value, index) => {
        return <Box value={value} />;
      })}
    </div>
  );
};

export default Board;
