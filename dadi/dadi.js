// preparo la funzione per estrarre un numero casuale
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}
// catturo i bottoni con una variabile
const btnGenerate = document.querySelector(".btn-primary")
const btnReset = document.querySelector(".btn-secondary")
// creo i div dove inserire mosse, vittoria/sconfitta/pareggio
const extContainer = document.querySelector(".container")
const userPlay = document.createElement("div");
const pcPlay = document.createElement("div");
const victory = document.createElement("div");
const loss = document.createElement("div");
const pair = document.createElement("div");

btnGenerate.addEventListener("click", function() {
    // faccio generare due numeri casuali tramite button
    let userNum = getRndInteger(0,10);
    let pcNum = getRndInteger(0,10);
    // stampo la mossa dell'utente
    userPlay.innerHTML = 
    `
    <div class="fw-bold fs-4 pb-3">La tua mossa: </div>
    <div class="fs-1 big-circle bg-ball-user">${userNum}</div>
    `
    userPlay.classList.add("d-flex", "flex-column", "w-50", "text-center", "py-5", "bg-user","rounded-5", "mb-4", "align-items-center")
    extContainer.append(userPlay);
    // stampo la mossa del pc
    pcPlay.innerHTML = 
    `
    <div class="fw-bold fs-4 pb-3">La mia mossa: </div>
    <div class="fs-1 big-circle bg-ball-pc">${pcNum}</div>
    `
    pcPlay.classList.add("d-flex", "flex-column", "w-50", "text-center", "py-5", "bg-pc", "rounded-5", "align-items-center")
    extContainer.append(pcPlay);
    // se il numero dell'utente è maggiore di quello del pc allora stampo "vittoria"
    if(userNum > pcNum) {
        victory.innerHTML = 
        `
        <div>Hai vinto!</div>
        `
        extContainer.append(victory);
        loss.remove();
        pair.remove();
        victory.classList.add("result", "bg-success")
    } 
    // se il numero dell'utente è minore del pc allora stampo "sconfitta"
    else if(userNum < pcNum){
        loss.innerHTML = 
        `
        <div>Hai perso...</div>
        `
        extContainer.append(loss);
        victory.remove();
        pair.remove();
        loss.classList.add("result", "bg-danger")
    }
    // se il numero dell'utente è pari del pc allora stampo "pareggio"
    else if(userNum === pcNum){
        pair.innerHTML = 
        `
        <div>Pareggio!</div>
        `
        extContainer.append(pair);
        victory.remove();
        loss.remove();
        pair.classList.add("result", "bg-secondary")
    }
}
)