import React, { useState } from "react";
// import Board from "../../../test/components/Board";
// import { BoardState } from "../../../test/components/Board";
// import { PieceType } from "../../../test/components/Board/Piece";
// import { isMoveValid } from "../../../test/components/Rules";
import Instructions from "./Instructions";

interface AppProps {
  width: number;
  height: number;
}

const App: React.FC<AppProps> = ({ width, height }) => {
  // const [boardState, setBoardState] = useState<BoardState>([
  //   [null, null, null, null, null, null, null],
  //   [null, null, null, null, null, null, null],
  //   [null, null, null, null, null, null, null],
  //   [null, null, null, null, null, null, null],
  //   [null, null, null, null, null, null, null],
  //   [null, null, null, null, null, null, null],
  //   [null, null, null, null, null, null, null],
  // ]);
  // const [currentPlayer, setCurrentPlayer] = useState<PieceType>("fire");
  // const [selectedPiece, setSelectedPiece] = useState<{
  //   row: number;
  //   col: number;
  // } | null>(null);

  // const handlePieceClick = (row: number, col: number) => {
  //   if (!selectedPiece) {
  //     // First click - select piece
  //     if (boardState[row][col]?.type === currentPlayer) {
  //       setSelectedPiece({ row, col });
  //     }
  //   } else {
  //     // Second click - move piece
  //     const targetRow = row;
  //     const targetCol = col;
  //     const isMoveValidResult = isMoveValid(
  //       boardState,
  //       currentPlayer,
  //       selectedPiece.row,
  //       selectedPiece.col,
  //       targetRow,
  //       targetCol
  //     );

  //     if (isMoveValidResult) {
  //       // Update the board state with the new position of the piece
  //       const newBoardState = boardState.map((row) => [...row]);
  //       newBoardState[targetRow][targetCol] =
  //         newBoardState[selectedPiece.row][selectedPiece.col];
  //       newBoardState[selectedPiece.row][selectedPiece.col] = null;
  //       setBoardState(newBoardState);

  //       // Switch to the next player's turn
  //       setCurrentPlayer(currentPlayer === "fire" ? "water" : "fire");
  //     }

  //     setSelectedPiece(null);
  //   }
  // };

  return (
    <div className="flex justify-center items-center h-screen flex-col m-20">
      <div className="text-2xl">Memory Maze</div>
      <br />
      <br />
      <div>
        The objective of the game is to navigate through a randomly generated
        maze and reach the finish point. You will be scored based on the time it
        takes to complete the maze and the number of moves.
        <br />
        <br />
        <button
          className="rounded-lg text-2xl border-white border-2 w-full flex justify-center"
          onClick={() =>
            window.open("https://zingy-twilight-1fc18b.netlify.app", "_blank")
          }
        >
          Click here to play
        </button>
      </div>
      <br />
      <br />
      <br />
      <br />

      <div className="text-2xl">Elemental Chess - WIP</div>
      <br />
      <br />
      <Instructions />
      {/* <div className="m-20">
        <Board
          boardState={boardState}
          width={width}
          height={height}
          onPieceClick={handlePieceClick}
        />
      </div> */}
    </div>
  );
};

export default App;
