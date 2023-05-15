import * as React from "react";
import { File, Square } from "./board";
import ChessSquare from "./Square";
import FlexBreak from "../FlexBreak";

interface Props {
  rowSquares: Square[];
}

const BoardRow: React.FC<Props> = (props: Props) => {
  const { rowSquares } = props;
  return (
    <div>
      {rowSquares.map((square) => (
        <ChessSquare
          key={`${File[square.file]}${square.rank}`}
          square={square}
        />
      ))}
      <FlexBreak />
    </div>
  );
};

export default BoardRow;
