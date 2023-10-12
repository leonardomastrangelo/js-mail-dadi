// LISTA DI CHI PUO' ACCEDERE
const members = [
    "pippo@prova.test",
    "baudo@prova.test",
    "topolino@prova.test",
    "paperino@prova.test",
    "pluto@prova.test"
]
// VERIFICA SE L'UTENTE PUò ACCEDERE
const button = document.querySelector(".btn-primary")
button.addEventListener("click", function() {
    // catturo il value inserito dall'utente
    let userEmail = document.getElementById("email").value;
    //verifico che il value ritorni correttamente
    console.log(userEmail);
    //valore di controllo
    let presenza = false;
    // ciclo di ricerca nell'array
    for(let i = 0; i <= members.length; i++) {
        let currentEmail = members[i];
        // se l'utente è presente nella lista modifico la variabile "presenza" in 'true'
        if(currentEmail=== userEmail) {
            presenza = true
        }
    }
    // se l'utente è presente nella lista e ha "presenza=true" allora stampo un messaggio di conferma
    const presente = document.querySelector(".alert-success");
    const assente = document.querySelector(".alert-danger");
    if(presenza === true) {
        presente.innerHTML =
        `
        <h2>
        Bentornato <span>${userEmail}</span>
        </h2>
        `
        presente.classList.remove("d-none");
        assente.classList.add("d-none");
    } 
    // altrimenti stampo un messaggio di errore
    else {
        assente.innerHTML = 
        `
        Ciao ${userEmail}, non sei ancora registrato!!
        `
        assente.classList.remove("d-none");
        presente.classList.add("d-none");
    }
}
)

