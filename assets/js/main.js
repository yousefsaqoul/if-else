

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
        const letzteResult = (Number(nummer1.value) + Number(nummer2.value))* 5 //wenn die nummer gleich ist dann rechnet mit 5mal 
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






// -----------------luft Qualität
const luftQualityResult = document.getElementById('luftQualityResult')
const luftQualityRange = document.getElementById('luftQuality')
const luftBg = document.getElementById('luft')
function luft(){
    if (luftQuality.value <= 3 ){
        luftQualityResult.innerHTML = "Schlecht"
        luftBg.style.background = "yellow"

    } else if (luftQuality.value >= 3 && luftQuality.value <= 7){ 
        luftQualityResult.innerHTML = "good"
        luftBg.style.background = "green"

        

    } else if (luftQuality.value > 7 ){
        luftQualityResult.innerHTML = "super"
        luftBg.style.background = "blue"


    }


}



// ----------------------anas code 

const airQuality = document.getElementById("air-quality")
const quality = document.getElementById("quality")
const concern = document.getElementById("concern")
const effect = document.getElementById("effect")

function checkAirQuality() {
    airQuality.innerHTML = quality.value
    if (quality.value <= 50) {
        document.body.style.background = "green"
        concern.innerHTML = "Good"
        effect.innerHTML = "Little or no risk"
    } else if (quality.value > 50 && quality.value <= 100) {
        document.body.style.background = "gold"
        concern.innerHTML = "Moderate "
        effect.innerHTML = "Acceptable quality"
    } else if (quality.value > 100 && quality.value <= 150) {
        document.body.style.background = "orange"
        concern.innerHTML = "Unhealthy for sensitive groups "
        effect.innerHTML = "Generable publics not likely affected"
    }
}




function checkAge() {
    let age = document.getElementById("age").value
    let resultCheck = document.getElementById('result-check')
    console.log(age)
    if (age >= 18) {
        resultCheck.innerHTML = "volljährig"
    } else {
        resultCheck.innerHTML = "minderjärig"
    }
}




//Morgen, Tag,Abends, Nachts
// function guten(time) {
//     if (time < 10) {
//         console.log('Morgen')
//     } else if (time < 16) {
//         console.log('Tag')
//     } else if (time < 20) {
//         console.log('Abend');
//     } else {
//         console.log('Nacht');
//     }
// }
// guten(8)
// guten(11)
// guten(18)
// guten(22)

// if (true || false) {
//     console.log('true');
// } else {
//     console.log('false');
// }





