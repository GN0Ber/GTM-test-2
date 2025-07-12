function login(event) {
    event.preventDefault();
    const user = document.getElementById("username").value;
    const pass = document.getElementById("password").value;
    fetch("../data/users.json")
        .then(res => res.json())
        .then(data => {
            const found = data.users.find(u => u.username === user && u.password === pass);
            if (found) {
                window.location.href = "minha_conta.html";
            } else {
                alert("Usuário ou senha incorretos.");
            }
        });
}