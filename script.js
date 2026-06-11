// ==========================
// MENU RESPONSIVO
// ==========================

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// ==========================
// EFEITO DIGITANDO
// ==========================

const text = "Futuro Sustentável";
const typing = document.getElementById("typing");

let i = 0;

function typeWriter(){

    if(i < text.length){

        typing.innerHTML += text.charAt(i);

        i++;

        setTimeout(typeWriter, 120);
    }
}

typeWriter();

// ==========================
// ANIMAÇÃO DOS CARDS
// ==========================

function reveal(){

    const reveals =
    document.querySelectorAll(".reveal");

    reveals.forEach(element => {

        const windowHeight =
        window.innerHeight;

        const revealTop =
        element.getBoundingClientRect().top;

        if(revealTop < windowHeight - 100){

            element.classList.add("active");
        }
    });
}

window.addEventListener("scroll", reveal);

reveal();

// ==========================
// CONTADORES ANIMADOS
// ==========================

const counters =
document.querySelectorAll(".counter");

counters.forEach(counter => {

    const updateCounter = () => {

        const target =
        +counter.getAttribute("data-target");

        const current =
        +counter.innerText;

        const increment = target / 100;

        if(current < target){

            counter.innerText =
            Math.ceil(current + increment);

            setTimeout(updateCounter, 20);
        }
        else{

            counter.innerText = target;
        }
    };

    updateCounter();
});

// ==========================
// FORMULÁRIO
// ==========================

const form =
document.querySelector(".contact-form");

form.addEventListener("submit", (e)=>{

    e.preventDefault();

    alert("Mensagem enviada com sucesso!");
});