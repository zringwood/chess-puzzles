//Server imports 
const express = require('express');
const app = express();
const port = process.env.PORT || process.argv[2] || 8080;
const { v4: uuidv4 } = require('uuid');
// const cors = require('cors');

app.get("/", (req, res) => {
    res.sendStatus(200);
})
//This route takes in PGN data as a raw string and returns a JSON object containing the proper data. 
app.post("/:pgn", (req, res) => {
    pgn = req.params;
    if(pgn)
    return res.sendStatus(200)
    return res.status(404).send("Invalid PGN")
})
app.listen(port, () =>{
    console.log(`Server listening on port ${port}`);
});
//Takes a game in PGN notation and returns an object containing the PGN data. 
function getGameState(pgn){

}