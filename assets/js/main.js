

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
        const letzteResult = Number(nummer1.value) + Number(nummer2.value)* 5 //wenn die nummer gleich ist dann rechnet mit 5mal 
        ergebnisse.innerHTML = letzteResult;
    } else if (nummer1.value !== nummer2.value) {                         //wenn die nummer nicht  gleich ist dann rechnet zusammen
        const letzteResult = Number(nummer1.value) + Number(nummer2.value) 
        ergebnisse.innerHTML = letzteResult;
    }
}

//--------------------- --------------------------------
const myNachricht = document.getElementById('my-nachricht')
const letzteNachricht = document.getElementById('myspan')
const Nachricht = document.getElementById('myNachricht')

function myButton() {
  
    if ( myNachricht.value.length > 0 ) {letzteNachricht.innerHTML = myNachricht.value}
    else {letzteNachricht.innerHTML = 'gib Bitte Ihre Nachricht an'}
}