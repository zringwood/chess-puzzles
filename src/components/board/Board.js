import { Chessboard } from "react-chessboard";
import { useState } from "react";
import { Chess } from "chess.js";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
export default function Board() {
  const [game, setGame] = useState(new Chess());
  const[count,setCount]=useState(0);
  let { id } = useParams();
  const possibleMoves = game.moves();
 const[whiteMovearray,setWhiteMoveArray]=useState([])
const[blackMovearray,setBlackMoveArray]=useState("")
const[moveArray, setMoveArray]=useState([])
  useEffect(() => {
    console.log(id)
    axios.get(`http://localhost:8080/${id}`).then((response) => {
      setWhiteMoveArray((response.data.Moves[count]).split(" ")[1])
      setBlackMoveArray(((response.data.Moves[count]).split(" ")[2]))
     setMoveArray(response.data.Moves)
     console.log(response.data.Moves)
      setGame(new Chess(response.data.FEN));
    });
  }, [id]);
  let truevar = true;
  // function makeAMove(move) {
  //   // const gameCopy = { ...game };
  //   // console.log(gameCopy)
  //   // const result = gameCopy.move(move);
  //   // setGame(gameCopy);
  //   move={from:'b4',to:'a5'};
  //   const result=game.move(move)
  //   return result; // null if the move was illegal, the move object if the move was legal
  // }
  function onDrop(sourceSquare, targetSquare) {
    let gameCopy = new Chess(game.fen());
    let whitepiece = gameCopy.remove(sourceSquare);
    let currentMove = moveArray[count]
    let whiteMovearray =currentMove.split(' ')[1]
    let blackMovearray = currentMove.split(' ')[2]
    console.log(currentMove)
    gameCopy.put(whitepiece, targetSquare);
    let whitepiecemove=whitepiece.type+targetSquare;
    whiteMovearray = whiteMovearray.replace(/[^a-zA-Z0-9 ]/g, '');
    if(whitepiecemove!==whiteMovearray.toLowerCase()){
      return alert("wrong move please try again")
    }
    setGame(gameCopy);
    if(blackMovearray === "1-0"){
      return alert("You won!")
    }
    const finder = (p) => p?.color === 'b' && p?.type === 'k'
    const row = gameCopy.board().find(row => {
      return row.find(finder)
    })
    const piece = row.find(finder)
    let blackpiece = gameCopy.remove(piece.square)
    gameCopy.put(blackpiece, blackMovearray.substring(blackMovearray.length-2));
    setGame(gameCopy);
    setCount(count+1)
  }
  return (
    <div>
      <Chessboard
        id="BasicBoard"
        position={game.fen()}
        arePiecesDraggable={truevar}
        onPieceDrop={onDrop}
      />
    </div>
  );
}