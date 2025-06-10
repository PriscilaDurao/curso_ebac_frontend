document
  .getElementById("formulario")
  .addEventListener("submit", function (event) {
    event.preventDefault(); 

    const campoA = Number(document.getElementById("campoA").value);
    const campoB = Number(document.getElementById("campoB").value);
    const mensagem = document.getElementById("mensagem");

    if (campoB > campoA) {
      mensagem.textContent = "✅ Muito bem! O número B é maior que o número A.";
      mensagem.style.color = "green";
    } else {
      mensagem.textContent =
        "❌ Erro: o número B precisa ser maior que o número A.";
      mensagem.style.color = "red";
    }
  });
