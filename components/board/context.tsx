"use client";

import { useState, createContext, useContext } from "react";
import { ChessBoard, STARTING_BOARD } from "./board";

export const useChessboardController = () => {
  const [board, setBoard] = useState<ChessBoard>(STARTING_BOARD);
  const [selectedSquare, setSelectedSquare] = useState<string | null>(null);
  return {
    board,
    selectedSquare,
    setSelectedSquare,
  };
};

const ChessBoardContext = createContext<
  ReturnType<typeof useChessboardController>
>({
  board: { squares: [] },
  selectedSquare: null,
  setSelectedSquare: () => {},
});

interface Props {
  children?: React.ReactNode;
}

export const ChessBoardProvider: React.FC<Props> = ({ children }) => {
  return (
    <ChessBoardContext.Provider value={useChessboardController()}>
      {children}
    </ChessBoardContext.Provider>
  );
};

export const useChessBoard = () => useContext(ChessBoardContext);
