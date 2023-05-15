export interface ChessBoard {
  squares: Square[];
}

export interface Square {
  file: File;
  rank: number;
  piece?: Piece;
}

export interface Piece {
  color: PieceColor;
  type: PieceType;
}

export enum PieceColor {
  WHITE,
  BLACK,
}

export enum PieceType {
  PAWN,
  KNIGHT,
  BISHOP,
  ROOK,
  QUEEN,
  KING,
}

export enum File {
  A = 1,
  B,
  C,
  D,
  E,
  F,
  G,
  H,
}

export const STARTING_BOARD: ChessBoard = {
  squares: [
    {
      file: File.A,
      rank: 8,
      piece: {
        color: PieceColor.BLACK,
        type: PieceType.ROOK,
      },
    },
    {
      file: File.B,
      rank: 8,
      piece: {
        color: PieceColor.BLACK,
        type: PieceType.KNIGHT,
      },
    },
    {
      file: File.C,
      rank: 8,
      piece: {
        color: PieceColor.BLACK,
        type: PieceType.BISHOP,
      },
    },
    {
      file: File.D,
      rank: 8,
      piece: {
        color: PieceColor.BLACK,
        type: PieceType.QUEEN,
      },
    },
    {
      file: File.E,
      rank: 8,
      piece: {
        color: PieceColor.BLACK,
        type: PieceType.KING,
      },
    },
    {
      file: File.F,
      rank: 8,
      piece: {
        color: PieceColor.BLACK,
        type: PieceType.BISHOP,
      },
    },
    {
      file: File.G,
      rank: 8,
      piece: {
        color: PieceColor.BLACK,
        type: PieceType.KNIGHT,
      },
    },
    {
      file: File.H,
      rank: 8,
      piece: {
        color: PieceColor.BLACK,
        type: PieceType.ROOK,
      },
    },
    {
      file: File.A,
      rank: 7,
      piece: {
        color: PieceColor.BLACK,
        type: PieceType.PAWN,
      },
    },
    {
      file: File.B,
      rank: 7,
      piece: {
        color: PieceColor.BLACK,
        type: PieceType.PAWN,
      },
    },
    {
      file: File.C,
      rank: 7,
      piece: {
        color: PieceColor.BLACK,
        type: PieceType.PAWN,
      },
    },
    {
      file: File.D,
      rank: 7,
      piece: {
        color: PieceColor.BLACK,
        type: PieceType.PAWN,
      },
    },
    {
      file: File.E,
      rank: 7,
      piece: {
        color: PieceColor.BLACK,
        type: PieceType.PAWN,
      },
    },
    {
      file: File.F,
      rank: 7,
      piece: {
        color: PieceColor.BLACK,
        type: PieceType.PAWN,
      },
    },
    {
      file: File.G,
      rank: 7,
      piece: {
        color: PieceColor.BLACK,
        type: PieceType.PAWN,
      },
    },
    {
      file: File.H,
      rank: 7,
      piece: {
        color: PieceColor.BLACK,
        type: PieceType.PAWN,
      },
    },
    {
      file: File.A,
      rank: 6,
    },
    {
      file: File.B,
      rank: 6,
    },
    {
      file: File.C,
      rank: 6,
    },
    {
      file: File.D,
      rank: 6,
    },
    {
      file: File.E,
      rank: 6,
    },
    {
      file: File.F,
      rank: 6,
    },
    {
      file: File.G,
      rank: 6,
    },
    {
      file: File.H,
      rank: 6,
    },
    {
      file: File.A,
      rank: 5,
    },
    {
      file: File.B,
      rank: 5,
    },
    {
      file: File.C,
      rank: 5,
    },
    {
      file: File.D,
      rank: 5,
    },
    {
      file: File.E,
      rank: 5,
    },
    {
      file: File.F,
      rank: 5,
    },
    {
      file: File.G,
      rank: 5,
    },
    {
      file: File.H,
      rank: 5,
    },
    {
      file: File.A,
      rank: 4,
    },
    {
      file: File.B,
      rank: 4,
    },
    {
      file: File.C,
      rank: 4,
    },
    {
      file: File.D,
      rank: 4,
    },
    {
      file: File.E,
      rank: 4,
    },
    {
      file: File.F,
      rank: 4,
    },
    {
      file: File.G,
      rank: 4,
    },
    {
      file: File.H,
      rank: 4,
    },
    {
      file: File.A,
      rank: 3,
    },
    {
      file: File.B,
      rank: 3,
    },
    {
      file: File.C,
      rank: 3,
    },
    {
      file: File.D,
      rank: 3,
    },
    {
      file: File.E,
      rank: 3,
    },
    {
      file: File.F,
      rank: 3,
    },
    {
      file: File.G,
      rank: 3,
    },
    {
      file: File.H,
      rank: 3,
    },
    {
      file: File.A,
      rank: 2,
      piece: {
        color: PieceColor.WHITE,
        type: PieceType.PAWN,
      },
    },
    {
      file: File.B,
      rank: 2,
      piece: {
        color: PieceColor.WHITE,
        type: PieceType.PAWN,
      },
    },
    {
      file: File.C,
      rank: 2,
      piece: {
        color: PieceColor.WHITE,
        type: PieceType.PAWN,
      },
    },
    {
      file: File.D,
      rank: 2,
      piece: {
        color: PieceColor.WHITE,
        type: PieceType.PAWN,
      },
    },
    {
      file: File.E,
      rank: 2,
      piece: {
        color: PieceColor.WHITE,
        type: PieceType.PAWN,
      },
    },
    {
      file: File.F,
      rank: 2,
      piece: {
        color: PieceColor.WHITE,
        type: PieceType.PAWN,
      },
    },
    {
      file: File.G,
      rank: 2,
      piece: {
        color: PieceColor.WHITE,
        type: PieceType.PAWN,
      },
    },
    {
      file: File.H,
      rank: 2,
      piece: {
        color: PieceColor.WHITE,
        type: PieceType.PAWN,
      },
    },
    {
      file: File.A,
      rank: 1,
      piece: {
        color: PieceColor.WHITE,
        type: PieceType.ROOK,
      },
    },
    {
      file: File.B,
      rank: 1,
      piece: {
        color: PieceColor.WHITE,
        type: PieceType.KNIGHT,
      },
    },
    {
      file: File.C,
      rank: 1,
      piece: {
        color: PieceColor.WHITE,
        type: PieceType.BISHOP,
      },
    },
    {
      file: File.D,
      rank: 1,
      piece: {
        color: PieceColor.WHITE,
        type: PieceType.QUEEN,
      },
    },
    {
      file: File.E,
      rank: 1,
      piece: {
        color: PieceColor.WHITE,
        type: PieceType.KING,
      },
    },
    {
      file: File.F,
      rank: 1,
      piece: {
        color: PieceColor.WHITE,
        type: PieceType.BISHOP,
      },
    },
    {
      file: File.G,
      rank: 1,
      piece: {
        color: PieceColor.WHITE,
        type: PieceType.KNIGHT,
      },
    },
    {
      file: File.H,
      rank: 1,
      piece: {
        color: PieceColor.WHITE,
        type: PieceType.ROOK,
      },
    },
  ],
};
