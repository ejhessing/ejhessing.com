import React from "react";

const Instructions: React.FC = () => {
  return (
    <div className="text-base">
      <p>
        Elemental Chess is a two-player strategy game where each player controls
        a set of pieces representing the four classical elements: fire, water,
        earth, and air. The object of the game is to capture the opponent's
        Elemental Master piece, or to put the opponent in a position where they
        cannot make any legal moves.
      </p>
      <br />
      <h2 className="text-xl underline">Gameplay</h2>
      <br />
      <p>
        Players take turns moving their pieces according to their movement
        rules. Pieces can move either orthogonally (up, down, left, right) or
        diagonally, depending on their element. Players can capture an
        opponent's piece by moving their own piece to the square occupied by the
        opponent's piece. If a player's Elemental Master piece is captured, they
        lose the game.
      </p>
      <br />
      <h2 className="text-xl underline">Elements</h2>
      <br />
      <ul>
        <li>
          Fire - moves horizontally or vertically any number of squares. Cannot
          jump over other pieces.
        </li>
        <li>
          Water - moves diagonally one or two squares. Can jump over other
          pieces.
        </li>
        <li>
          Earth - moves horizontally or vertically any number of squares, or
          diagonally one square. Cannot jump over other pieces.
        </li>
        <li>
          Air - moves horizontally, vertically, or diagonally one or two
          squares. Can jump over other pieces.
        </li>
      </ul>
    </div>
  );
};

export default Instructions;
