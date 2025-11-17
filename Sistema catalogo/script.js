// =========================
// CADASTRO
// =========================
function cadastrar() {
  const username = document.getElementById("cad-usuario").value.trim();
  const email = document.getElementById("cad-email").value.trim();
  const senha = document.getElementById("cad-senha").value;
  const confirmar = document.getElementById("cad-confirmar").value;
  const erro = document.getElementById("erro-cadastro");

  erro.textContent = "";

  if (!username || !email || !senha || !confirmar) {
    erro.textContent = "Preencha todos os campos.";
    return;
  }

  // Validação básica de email
  const regexEmail = /\S+@\S+\.\S+/;
  if (!regexEmail.test(email)) {
    erro.textContent = "Digite um email válido.";
    return;
  }

  if (senha.length < 6) {
    erro.textContent = "A senha deve ter pelo menos 6 caracteres.";
    return;
  }

  if (senha !== confirmar) {
    erro.textContent = "As senhas não coincidem.";
    return;
  }

  // Salvando no "banco" localStorage
  const usuario = { username, email, senha };
  localStorage.setItem("usuario", JSON.stringify(usuario));

  alert("Cadastro realizado com sucesso!");
  window.location.href = "login.html";
}

// =========================
// LOGIN
// =========================
function logar() {
  const email = document.getElementById("login-email").value.trim();
  const senha = document.getElementById("login-senha").value;
  const erro = document.getElementById("erro-login");

  erro.textContent = "";

  if (!email || !senha) {
    erro.textContent = "Preencha todos os campos.";
    return;
  }

  const usuarioSalvo = JSON.parse(localStorage.getItem("usuario"));

  if (!usuarioSalvo) {
    erro.textContent = "Nenhum usuário cadastrado.";
    return;
  }

  if (email === usuarioSalvo.email && senha === usuarioSalvo.senha) {
    window.location.href = "home.html"; // ao final, você cria a home
  } else {
    erro.textContent = "Email ou senha incorretos.";
  }
}

function abrirComercio(nome) {
  localStorage.setItem("comercioSelecionado", nome);
  window.location.href = "commerce.html";
}

window.onload = function () {
  const nome = localStorage.getItem("comercioSelecionado");
  const titulo = document.getElementById("nome-comercio");

  if (titulo && nome) {
    titulo.textContent = nome;
  }
};
