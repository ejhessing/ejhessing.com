import React from "react";
import { Stage, Layer, Rect, Image } from "react-konva";
import fireImg from "../assets/fire.png";
import waterImg from "../assets/water.png";
import earthImg from "../assets/earth.png";
import airImg from "../assets/air.png";
import Piece, { PieceType } from "./Piece";

interface BoardProps {
  width: number;
  height: number;
  onPieceClick: (piece: { type: string }) => void;
}

export type BoardState = Array<Array<null | { type: PieceType }>>;

export const Board = ({ width, height, onPieceClick }: BoardProps) => {
  const handlePieceClick = (piece: any) => {
    onPieceClick(piece);
  };

  const board: BoardState = [
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
  ];

  const numCols = board[0].length;
  const numRows = board.length;
  const cellSize = Math.min(width, height) / numRows;

  // Player 1
  board[0][0] = { type: "earth" };
  board[0][1] = { type: "earth" };
  board[0][2] = { type: "earth" };
  board[0][4] = { type: "water" };
  board[0][5] = { type: "water" };
  board[0][6] = { type: "water" };
  board[1][0] = { type: "fire" };
  board[1][1] = { type: "fire" };
  board[1][2] = { type: "fire" };
  board[1][4] = { type: "air" };
  board[1][5] = { type: "air" };
  board[1][6] = { type: "air" };
  board[0][3] = { type: "player1" };
  board[1][3] = { type: "keeper" };

  // Player 2 - opposite side of board
  board[6][4] = { type: "earth" };
  board[6][5] = { type: "earth" };
  board[6][6] = { type: "earth" };
  board[6][0] = { type: "water" };
  board[6][1] = { type: "water" };
  board[6][2] = { type: "water" };
  board[5][4] = { type: "fire" };
  board[5][5] = { type: "fire" };
  board[5][6] = { type: "fire" };
  board[5][0] = { type: "air" };
  board[5][1] = { type: "air" };
  board[5][2] = { type: "air" };
  board[6][3] = { type: "player2" };
  board[5][3] = { type: "keeper" };

  const pieces = [];
  console.log({ numCols, numRows, cellSize });
  // Loop through board and add pieces to pieces array
  for (let row = 0; row < numRows; row++) {
    for (let col = 0; col < numCols; col++) {
      console.log({ row, col });
      const piece = board[row][col];
      console.log({ piece });
      if (piece) {
        const x = col * cellSize + cellSize / 2 - 20;
        const y = row * cellSize + cellSize / 2 - 20;
        pieces.push(
          <Piece
            key={`${row}-${col}`}
            x={x}
            y={y}
            type={piece.type}
            onClick={() => handlePieceClick(piece)}
          />
        );
      }
    }
  }
  console.log({ pieces });
  return (
    <Stage width={width} height={height}>
      <Layer>
        {/* Create grid of squares */}
        {Array.from({ length: numRows }).map((_, row) =>
          Array.from({ length: numCols }).map((_, col) => (
            <Rect
              key={`${row}-${col}`}
              x={col * cellSize}
              y={row * cellSize}
              width={cellSize}
              height={cellSize}
              fill={row % 2 === col % 2 ? "#b58863" : "#f0d9b5"}
              stroke="#af8763"
              strokeWidth={2}
            />
          ))
        )}
        {pieces}
      </Layer>
    </Stage>
  );
};

export default Board;
