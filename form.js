function add() {
  let input = document.getElementById("input");
  let email = document.getElementById("email");
  let password = document.getElementById("password");

  if (!input || !email || !password) {
    alert("please fill the blanks");
  }


  const tablebody = document.querySelector("#datatable tbody");

  const tr = document.createElement("tr");

  tr.innerHTML = `
      <td>${input}</td>
      <td>${email}</td>
      <td>${password}</td>
      <td class="actions">
        <button onclick="edit(this)">Edit</button>
        <button onclick="delet(this)">Delete</button>
      </td>
    `;

  tablebody.appendChild(tr);

  document.getElementById("input");
  document.getElementById("email");
  document.getElementById("password");
}

function delet() {
  remove();
}

function editRow(btn) {
  let nameCell = btn.parentElement.parentElement.children[0];
  let emailCell = btn.parentElement.parentElement.children[1];
  let passwordCell = btn.parentElement.parentElement.children[2];

  let newName = prompt("Edit Name", nameCell.textContent);
  let newEmail = prompt("Edit Email", emailCell.textContent);
  let newPassword = prompt("Edit Password", passwordCell.textContent);

  if (newName && newEmail && newPassword) {
    nameCell.textContent = newName;
    emailCell.textContent = newEmail;
    passwordCell.textContent = newPassword;
  }
}
