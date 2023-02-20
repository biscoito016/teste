function carregar() {
  const imagem = document.getElementById("imagem");
  const num = 20;
  const msg = window.document.getElementById("msg");
  const data = new Date();
  const hora = data.getHours();
  msg.innerHTML = `Agora são ${hora} horas.`;

  if (hora >= 0 && hora < 12) {
    imagem.src = src = "manha.jpg";
  } else if (hora > 12 && hora < 18) {
    imagem.src = "tarde.jpg";
  } else {
    imagem.src = "noite.jpg";
  }
}
