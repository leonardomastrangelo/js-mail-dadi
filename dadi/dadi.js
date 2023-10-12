// preparo la funzione per estrarre un numero casuale
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}
// catturo i bottoni con una variabile
const btnGenerate = document.querySelector(".btn-primary")
const btnReset = document.querySelector(".btn-secondary")
// creo i div dove inserire la mossa dell'utente e quella del computer
const extContainer = document.querySelector(".container")
const userPlay = document.createElement("div");
const pcPlay = document.createElement("div");

btnGenerate.addEventListener("click", function() {
    // faccio generare due numeri casuali tramite button
    let userNum = getRndInteger(0,10);
    let pcNum = getRndInteger(0,10);
    // stampo la mossa dell'utente
    userPlay.innerHTML = 
    `
    <div class="fw-bold">La tua mossa: </div>
    ${userNum}
    `
    extContainer.append(userPlay);
    // stampo la mossa del pc
    pcPlay.innerHTML = 
    `
    <div class="fw-bold">La mia mossa: </div>
    ${pcNum}
    `
    extContainer.append(pcPlay);

    console.log(userNum, userPlay, pcNum, pcPlay)
    // se il numero dell'utente è maggiore di quello del pc
}
)