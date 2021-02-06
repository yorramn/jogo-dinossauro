"use strict";
const dino = document.querySelector(".dino");
const back = document.querySelector(".container");
let posicao = 0;
let status = false;
let nivel = 20;
function action (event) {
   if (event.keyCode === 32) {
       if (!status) {
        jump();
       }
   }
}
function jump(){
    status = true;
    let up = setInterval(() => {
        if (posicao >= 150) {
            clearInterval(up);
            let down = setInterval(() => {
                if (posicao <=0) {
                    clearInterval(down);
                    status = false;
                } else {
                    posicao -= 20;
                    dino.style.bottom = posicao +   "px";
                }
            }, 20);
        } else {
            posicao += 20;
            dino.style.bottom = posicao + "px";
        }    
    }, 20);
}

function criarCacto() {

    const cacto = document.createElement("div");
    let cactoPos = 1000; 
    let randomPos = Math.round(Math.random() * 6000)
    
    cacto.classList.add("cacto");
    cacto.style.left = 1000 + "px";
    back.appendChild(cacto);
    
    let esquerda = setInterval(() => {
        if (cactoPos < -30) {
            clearInterval(esquerda);
            back.removeChild(cacto);
        } else if (cactoPos > 0 && cactoPos < 50 && posicao < 60) {
            clearInterval(esquerda);
            cactoPos = 0;
            back.removeChild(cacto); 
            document.body.innerHTML = `
            <section class="err">
            <h1>Fim de jogo</h1>
            <h2>Obrigado por jogar</h2>
            </section>
            `;
        }else{
            cactoPos -= 10;
            cacto.style.left = cactoPos + "px";
        }
        
    }, nivel);  
    setTimeout(criarCacto, randomPos);
}
criarCacto();
document.addEventListener("keyup", action);