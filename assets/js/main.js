

// age age yousef geschrieben
const myage = document.getElementById('vol')
function youAge(){
    if (myage.value >= 18 ){
        document.getElementById('yourAge').innerHTML = 'ja du kansst Shisha rauchenlcome'
    } else { document.getElementById('yourAge').innerHTML = 'nein du darfst kein Shisha rauche'}

} 

// ----------------------------------------------------------------



function myResult() {
    const nummer1 = document.getElementById("nummer1") //erste input
    const nummer2 = document.getElementById("nummer2") //zweite input
    const ergebnisse = document.getElementById("result22") //leer h1 um ergebnisse zu zeigen


    if (nummer1.value == nummer2.value) {
        const letzteResult = Number(nummer1.value) + Number(nummer2.value)* 5
        ergebnisse.innerHTML = letzteResult;
    } else if (nummer1.value !== nummer2.value) {
        const letzteResult = Number(nummer1.value) + Number(nummer2.value) 
        ergebnisse.innerHTML = letzteResult;
    }
}


// const letzteNachricht = document.getElementById('myspan')
// const Nachricht = document.getElementById('myNachricht')

// function myNachricht() {
//     if (Nachricht.value == true) { letzteNachricht.innerHTMl = myNachricht.value

//     }
// }