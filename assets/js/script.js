const alternarModal = () => {
    const modal = document.querySelector(".modal");
    const estadoAtual = modal.style.display;
    if (estadoAtual == "block") {
        modal.style.display = "none";
        botaoModal.style.display = "block";
    } else {
        modal.style.display = "block";
        botaoModal.style.display = "none";

    }
}

const botaoModal = document.querySelector("#botaoModal");
botaoModal.addEventListener("click", alternarModal);

window.onclick = (evento) => {
    const modal = document.querySelector(".modal");
    if (evento.target == modal) {
        alternarModal();    
    }
}