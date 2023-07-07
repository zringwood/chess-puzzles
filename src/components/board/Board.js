import { Chessboard } from "react-chessboard";
import { useState } from "react";
import { Chess } from 'chess.js'
export default function Board() {
    const [game, setGame] = useState(new Chess());
    const possibleMoves = game.moves();
    console.log(possibleMoves);
  return (
    <div>
      <Chessboard id="BasicBoard" />
    </div>
  );
}