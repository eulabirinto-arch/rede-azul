function falar(texto){
document.getElementById("frase").innerText = texto;

let voz = new SpeechSynthesisUtterance(texto);
speechSynthesis.speak(voz);
}
