// import React from "react";
// import { PieceType } from "../Board/Piece";
// import { BoardState } from "../Board";

// interface RulesProps {
//   boardState: BoardState;
//   setBoardState: React.Dispatch<React.SetStateAction<BoardState>>;
//   currentPlayer: PieceType;
//   setCurrentPlayer: React.Dispatch<React.SetStateAction<PieceType>>;
//   setMessage: React.Dispatch<React.SetStateAction<string>>;
//   setIsGameOver: React.Dispatch<React.SetStateAction<boolean>>;
// }

// // Moves a piece from its current position to a target square
// export const movePiece = (
//   rulesProps: RulesProps,
//   pieceRow: number,
//   pieceCol: number,
//   targetRow: number,
//   targetCol: number
// ) => {
//   const {
//     boardState,
//     setBoardState,
//     currentPlayer,
//     setCurrentPlayer,
//     setMessage,
//     setIsGameOver,
//   } = rulesProps;

//   const piece = boardState[pieceRow][pieceCol];
//   const targetPiece = boardState[targetRow][targetCol];

//   // Check if the move is valid
//   if (
//     !isMoveValid(
//       boardState,
//       currentPlayer,
//       pieceRow,
//       pieceCol,
//       targetRow,
//       targetCol
//     )
//   ) {
//     setMessage("Invalid move!");
//     return;
//   }

//   // Check if the piece can capture the target piece
//   const canCapture = canPieceCapture(
//     boardState,
//     piece,
//     pieceRow,
//     pieceCol,
//     targetRow,
//     targetCol
//   );

//   // Update the board state with the new positions of the pieces
//   const newBoardState = [...boardState];
//   newBoardState[pieceRow][pieceCol] = null;
//   newBoardState[targetRow][targetCol] = piece;

//   // If the piece captured an opponent's piece, remove it from the board
//   if (canCapture) {
//     newBoardState[targetRow][targetCol] = null;
//   }

//   // Set the new board state and switch to the next player's turn
//   setBoardState(newBoardState);
//   checkGameOver(
//     boardState,
//     currentPlayer,
//     setCurrentPlayer,
//     setMessage,
//     setIsGameOver
//   );
// };

// // Checks if a move is valid based on the current game state
// export const isMoveValid = (
//   boardState: BoardState,
//   currentPlayer: PieceType,
//   pieceRow: number,
//   pieceCol: number,
//   targetRow: number,
//   targetCol: number
// ): boolean => {
//   const piece = boardState[pieceRow][pieceCol];
//   const targetPiece = boardState[targetRow][targetCol];

//   // Check that a piece is selected
//   if (!piece) {
//     return false;
//   }

//   // Check that the selected piece belongs to the current player
//   if (piece.type !== currentPlayer) {
//     return false;
//   }

//   // Check that the target square is not occupied by a piece of the same player
//   if (targetPiece && targetPiece.type === currentPlayer) {
//     return false;
//   }

//   // Check that the piece can move to the target square
//   if (
//     !canPieceMove(boardState, piece, pieceRow, pieceCol, targetRow, targetCol)
//   ) {
//     return false;
//   }

//   return true;
// };

// // Checks if a piece can move to a target square based on its movement rules
// export const canPieceMove = (
//   boardState: BoardState,
//   piece: { type: PieceType },
//   pieceRow: number,
//   pieceCol: number,
//   targetRow: number,
//   targetCol: number
// ): boolean => {
//   const dx = targetCol - pieceCol;
//   const dy = targetRow - pieceRow;
//   const distance = Math.sqrt(dx ** 2 + dy ** 2);

//   switch (piece.type) {
//     case "fire":
//       if (dx === 0 && dy !== 0) {
//         // Check that there are no pieces blocking the way
//         const step = dy / Math.abs(dy);
//         for (let row = pieceRow + step; row !== targetRow; row += step) {
//           if (boardState[row][pieceCol]) {
//             return false;
//           }
//         }
//         return true;
//       } else if (dx !== 0 && dy === 0) {
//         // Check that there are no pieces blocking the way
//         const step = dx / Math.abs(dx);
//         for (let col = pieceCol + step; col !== targetCol; col += step) {
//           if (boardState[pieceRow][col]) {
//             return false;
//           }
//         }
//         return true;
//       }
//       break;

//     case "water":
//       if (distance === Math.sqrt(5)) {
//         return true;
//       }
//       break;

//     case "earth":
//       if (dx === 0 && dy !== 0) {
//         // Check that there are no pieces blocking the way
//         const step = dy / Math.abs(dy);
//         for (let row = pieceRow + step; row !== targetRow; row += step) {
//           if (boardState[row][pieceCol]) {
//             return false;
//           }
//         }
//         return true;
//       } else if (dx !== 0 && dy === 0) {
//         // Check that there are no pieces blocking
//         const step = dx / Math.abs(dx);
//         for (let col = pieceCol + step; col !== targetCol; col += step) {
//           if (boardState[pieceRow][col]) {
//             return false;
//           }
//         }
//         return true;
//       } else if (distance === Math.sqrt(2)) {
//         return true;
//       }
//       break;

//     case "air":
//       if (dx === 0 && dy !== 0) {
//         // Check that there are no pieces blocking the way
//         const step = dy / Math.abs(dy);
//         for (let row = pieceRow + step; row !== targetRow; row += step) {
//           if (boardState[row][pieceCol]) {
//             return false;
//           }
//         }
//         return true;
//       } else if (dx !== 0 && dy === 0) {
//         // Check that there are no pieces blocking the way
//         const step = dx / Math.abs(dx);
//         for (let col = pieceCol + step; col !== targetCol; col += step) {
//           if (boardState[pieceRow][col]) {
//             return false;
//           }
//         }
//         return true;
//       } else if (distance === Math.sqrt(5)) {
//         return true;
//       }
//       break;

//     default:
//       return false;
//   }

//   return false;
// };

// // Checks if a piece can capture an opponent's piece on a target square
// export const canPieceCapture = (
//   boardState: BoardState,
//   piece: { type: PieceType },
//   pieceRow: number,
//   pieceCol: number,
//   targetRow: number,
//   targetCol: number
// ): boolean => {
//   const targetPiece = boardState[targetRow][targetCol];

//   // Check that the target square is occupied by an opponent's piece
//   if (!targetPiece || targetPiece.type === piece.type) {
//     return false;
//   }

//   // Check that the piece can move to the target square
//   if (
//     !canPieceMove(boardState, piece, pieceRow, pieceCol, targetRow, targetCol)
//   ) {
//     return false;
//   }

//   return true;
// };

// // Checks if the game is over and displays a message if it is
// export const checkGameOver = (
//   boardState: BoardState,
//   currentPlayer: PieceType,
//   setCurrentPlayer: React.Dispatch<React.SetStateAction<PieceType>>,
//   setMessage: React.Dispatch<React.SetStateAction<string>>,
//   setIsGameOver: React.Dispatch<React.SetStateAction<boolean>>
// ): boolean => {
//   const numPieces = {
//     fire: 0,
//     water: 0,
//     earth: 0,
//     air: 0,
//   };

//   // Count the number of pieces remaining for each player
//   for (const row of boardState) {
//     for (const piece of row) {
//       if (piece) {
//         numPieces[piece.type]++;
//       }
//     }
//   }

//   // Check if any player has lost their Elemental Master piece
//   if (numPieces[currentPlayer] < 2) {
//     setMessage(`${currentPlayer} has lost their Elemental Master piece!`);
//     setIsGameOver(true);
//     return true;
//   } else if (numPieces[currentPlayer === "fire" ? "water" : "fire"] === 0) {
//     setMessage(`${currentPlayer} has won the game!`);
//     setIsGameOver(true);
//     return true;
//   }

//   // Switch to the next player's turn
//   setCurrentPlayer(currentPlayer === "fire" ? "water" : "fire");
//   setMessage(`${currentPlayer}'s turn`);

//   return false;
// };
