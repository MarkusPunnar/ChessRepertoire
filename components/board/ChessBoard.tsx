"use client";

import * as React from "react";
import groupBy from "lodash.groupby";
import BoardRow from "./BoardRow";
import { useChessBoard } from "./context";

const ChessBoard: React.FC<{}> = () => {
  const { board } = useChessBoard();
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
