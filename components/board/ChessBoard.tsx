"use client";

import * as React from "react";
import { ChessBoard, STARTING_BOARD } from "./board";
import groupBy from "lodash.groupby";
import BoardRow from "./BoardRow";

const ChessBoard: React.FC<{}> = () => {
  const [board, setBoard] = React.useState<ChessBoard>(STARTING_BOARD);
  const squaresByFile = groupBy(board.squares, "file");
  return (
    <>
      {Object.keys(squaresByFile)
        .sort()
        .map((file) => (
          <BoardRow key={file} rowSquares={squaresByFile[file]} />
        ))}
    </>
  );
};

export default ChessBoard;
