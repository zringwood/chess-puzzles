
export default function Rules(){
    return (
        <>
            <p>
            The chessboard: Chess is played on a square board consisting of 64 squares of alternating colors, typically black and white.<br /><br />
The pieces: Each player begins with 16 pieces, consisting of one king, one queen, two rooks, two knights, two bishops, and eight pawns.<br /><br />
Piece movement: Each piece has its own unique way of moving:<br /><br />
The king can move one square in any direction.<br />
The queen can move any number of squares in any direction (vertically, horizontally, or diagonally).<br />
Rooks move any number of squares horizontally or vertically.<br />
Knights move in an L-shape pattern: two squares in one direction (horizontally or vertically) and then one square perpendicular to it.<br />
Bishops move any number of squares diagonally.<br />
Pawns can move forward one square, but on their first move, they have the option to move two squares forward. Pawns capture diagonally and can promote to any other piece upon reaching the opposite end of the board.<br /><br />
Objective: The goal of chess is to checkmate your opponent's king. Checkmate occurs when the king is under attack (in "check") and cannot escape capture on the next move.<br /><br />
The start of the game: The pieces are placed on the board as follows:<br /><br />
The rooks occupy the corners.<br />
The knights are placed next to the rooks.<br />
The bishops are placed next to the knights.<br />
The queen starts on her own color.<br />
The king is placed next to the queen.<br />
The pawns occupy the second row (for white) or the seventh row (for black).<br /><br />
Gameplay: Players take turns moving their pieces. The white player moves first, and then the players alternate turns.<br /><br />
Capturing: When a piece moves to a square occupied by an opponent's piece, the opponent's piece is captured and removed from the board.<br /><br />
Special moves:<br /><br />
Castling: Once per game, a king can perform a special move called castling with one of the rooks. This move involves moving the king two squares towards the rook, and then the rook moves to the square next to the king.<br />
En passant: If a pawn moves two squares forward from its starting position and lands beside an opponent's pawn, the opponent has the option to capture the pawn "en passant" on the next move, as if it had only moved one square forward.<br /><br />
Check and checkmate:<br /><br />
Check: When a player's king is under immediate threat of capture by the opponent's pieces, it is in "check." The player must move their king out of check, block the check, or capture the attacking piece.<br />
Checkmate: If a player's king is in check, and there is no legal move to remove the check, it is checkmate, and the game ends. The player who checkmates their opponent wins the game.<br /><br />
Stalemate and draw: If a player has no legal moves but is not in check, it is a stalemate, and the game ends in a draw. There are also other ways to end a game in a draw, such as by agreement between the players or by a specific rule (e.g., threefold repetition or the fifty-move rule).
            </p>
        </>
    )
}
