function falar(texto){
document.getElementById("fala").innerText = texto;

let msg = new SpeechSynthesisUtterance(texto);
speechSynthesis.speak(msg);
}

/* SCROLL SUAVE */
function scrollToSection(){
document.getElementById("sobre").scrollIntoView({
behavior:"smooth"
});
}

/* ANIMAÇÃO AO ROLAR */
const observer = new IntersectionObserver(entries => {
entries.forEach(entry => {
if(entry.isIntersecting){
entry.target.classList.add("show");
}
});
});

document.querySelectorAll('.fade').forEach(el => observer.observe(el));
