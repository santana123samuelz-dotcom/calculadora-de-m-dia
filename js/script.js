const form = document.getElementById("gradeForm");

const nota1Input = document.getElementById("nota1");
const nota2Input = document.getElementById("nota2");
const nota3Input = document.getElementById("nota3");

const resultado = document.getElementById("resultado");
const mediaElement = document.getElementById("media");
const statusElement = document.getElementById("status");
const messageElement = document.getElementById("message");
const resultIcon = document.getElementById("resultIcon");

form.addEventListener("submit", function (event) {

    // Impede o formulário de recarregar a página
    event.preventDefault();

    // Converte os valores dos inputs de texto para números
    const nota1 = Number(nota1Input.value);
    const nota2 = Number(nota2Input.value);
    const nota3 = Number(nota3Input.value);

    // Calcula a média aritmética
    const media = (nota1 + nota2 + nota3) / 3;

    // Exibe a média com uma casa decimal
    mediaElement.textContent = media.toFixed(1).replace(".", ",");

    // Remove classes anteriores
    resultado.classList.remove("approved", "recovery", "hidden");

    // Verifica a situação do aluno
    if (media >= 7) {

        resultado.classList.add("approved");

        resultIcon.textContent = "✓";
        statusElement.textContent = "Você foi aprovado!";

        messageElement.textContent =
            "Parabéns! Sua média atingiu a nota mínima necessária.";

    } else {

        resultado.classList.add("recovery");

        resultIcon.textContent = "!";
        statusElement.textContent = "Você está de recuperação.";

        messageElement.textContent =
            "Sua média ficou abaixo de 7,0. É hora de reforçar os estudos!";
    }
});