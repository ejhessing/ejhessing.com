// import React from "react";
// import { Rect, Circle, Line } from "react-konva";

// interface PieceProps {
//   x: number;
//   y: number;
//   type: string;
//   onClick: () => void;
// }

// export type PieceType =
//   | "fire"
//   | "water"
//   | "earth"
//   | "air"
//   | "player1"
//   | "player2"
//   | "keeper";

// const Piece: React.FC<PieceProps> = ({ x, y, type, onClick }) => {
//   const colors = {
//     fire: "#ff5733",
//     water: "#3399ff",
//     earth: "#966f33",
//     air: "#d9d9d9",
//     player1: "#FFF",
//     player2: "#000",
//     keeper: "#00FF00", //green
//   };

//   // @ts-ignore
//   const elementColor = colors[type];

//   const pieceWidth = 40;
//   const pieceHeight = 40;
//   const pieceRadius = pieceWidth / 2;
//   const pieceOffset = pieceWidth / 6;

//   const pieceShape = (
//     <Rect
//       x={x}
//       y={y}
//       width={pieceWidth}
//       height={pieceHeight}
//       fill={elementColor}
//       stroke="black"
//       strokeWidth={2}
//       cornerRadius={pieceRadius}
//       onClick={onClick}
//     />
//   );

//   return pieceShape;
// };

// export default Piece;
