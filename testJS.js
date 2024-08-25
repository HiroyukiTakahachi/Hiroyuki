document.addEventListener("DOMContentLoaded", function () {
    const userForm = document.getElementById("user-form");
    const userList = document.getElementById("user-list");

    let users = [];

    function renderUsers() {
        userList.innerHTML = "";

        users.forEach((user, index) => {
            const tr = document.createElement("tr");

            tr.innerHTML = `
                <td>${user.name}</td>
                <td>${user.email}</td>
                <td>
                    <button onclick="editUser(${index})">Editar</button>
                    <button onclick="deleteUser(${index})">Excluir</button>
                </td>
            `;

            userList.appendChild(tr);
        });
    }

    function addUser(name, email) {
        users.push({ name, email });
        renderUsers();
    }

    function editUser(index) {
        const user = users[index];
        const newName = prompt("Edite o nome:", user.name);
        const newEmail = prompt("Edite o email:", user.email);

        if (newName && newEmail) {
            users[index] = { name: newName, email: newEmail };
            renderUsers();
        }
    }

    function deleteUser(index) {
        users.splice(index, 1);
        renderUsers();
    }

    // Expondo funções globalmente
    window.editUser = editUser;
    window.deleteUser = deleteUser;

    userForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;

        addUser(name, email);

        // Limpar os campos do formulário
        userForm.reset();
    });

    renderUsers();
});
