function falar(texto){
document.getElementById("fala").innerText = texto;

let msg = new SpeechSynthesisUtterance(texto);
speechSynthesis.speak(msg);
}

function scrollToSection(){
document.getElementById("sobre").scrollIntoView({
behavior:"smooth"
});
}
