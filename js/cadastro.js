function register(event) {
    event.preventDefault();
    const user = document.getElementById("newUsername").value;
    const pass = document.getElementById("newPassword").value;
    let data = { users: [{ username: user, password: pass }] };
    // Simulação apenas, não salva no arquivo real
    alert("Usuário cadastrado! Faça o login.");
    window.location.href = "login.html";
}