import * as React from "react";
import { File, PieceColor, PieceType, Square } from "./board";
import Image from "next/image";
import blackPawn from "../../public/pawn-b.svg";
import whitePawn from "../../public/pawn-w.svg";
import blackKnight from "../../public/knight-b.svg";
import whiteKnight from "../../public/knight-w.svg";
import blackBishop from "../../public/bishop-b.svg";
import whiteBishop from "../../public/bishop-w.svg";
import blackRook from "../../public/rook-b.svg";
import whiteRook from "../../public/rook-w.svg";
import blackQueen from "../../public/queen-b.svg";
import whiteQueen from "../../public/queen-w.svg";
import blackKing from "../../public/king-b.svg";
import whiteKing from "../../public/king-w.svg";

interface Props {
  square: Square;
}

const ChessSquare: React.FC<Props> = (props: Props) => {
  const { square } = props;
  const { file, rank, piece } = square;

  const getColorClass = (): string => {
    if ((file + rank) % 2 == 1) {
      return "bg-[#eeeed2]";
    }
    return "bg-[#769656]";
  };

  const getPieceImage = (): React.ReactNode => {
    if (!piece) {
      return null;
    }
    const { color, type } = piece;
    switch (color) {
      case PieceColor.BLACK: {
        switch (type) {
          case PieceType.PAWN: {
            return <Image src={blackPawn} alt="Black pawn" priority />;
          }
          case PieceType.KNIGHT: {
            return <Image src={blackKnight} alt="Black knight" priority />;
          }
          case PieceType.BISHOP: {
            return <Image src={blackBishop} alt="Black bishop" priority />;
          }
          case PieceType.ROOK: {
            return <Image src={blackRook} alt="Black rook" priority />;
          }
          case PieceType.QUEEN: {
            return <Image src={blackQueen} alt="Black queen" priority />;
          }
          case PieceType.KING: {
            return <Image src={blackKing} alt="Black king" priority />;
          }
        }
      }
      case PieceColor.WHITE: {
        switch (type) {
          case PieceType.PAWN: {
            return <Image src={whitePawn} alt="White pawn" priority />;
          }
          case PieceType.KNIGHT: {
            return <Image src={whiteKnight} alt="White knight" priority />;
          }
          case PieceType.BISHOP: {
            return <Image src={whiteBishop} alt="White bishop" priority />;
          }
          case PieceType.ROOK: {
            return <Image src={whiteRook} alt="White rook" priority />;
          }
          case PieceType.QUEEN: {
            return <Image src={whiteQueen} alt="White queen" priority />;
          }
          case PieceType.KING: {
            return <Image src={whiteKing} alt="White king" priority />;
          }
        }
      }
    }
  };

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    console.log(`${File[file]}${rank}`);
  };

  return (
    <div className={`w-24 h-24 ${getColorClass()}`} onClick={handleClick}>
      {getPieceImage()}
    </div>
  );
};

export default ChessSquare;
