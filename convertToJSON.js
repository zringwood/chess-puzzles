//Temp file, used to convert txt data to JSON
let fileName = "Mate en Dos.pgn";

async function loadFile(){
let file = await fetch("C:/Users/zacha/Documents/Bootcamp Files/pair-programming/Mate en Dos.pgn").then((response) => {
    console.log("Reached")
}).catch((response) => {
    console.log(response)
})
    return file
}
loadFile();