
const nameInput = document.getElementById("nameInput");
const phoneInput = document.getElementById("phoneInput");
const addButton = document.getElementById("addContactButton");
const contactList = document.getElementById("contactList");
function addContact() {
    const name = nameInput.value.trim();
    const phone = phoneInput.value.trim();

    if (!name || !phone) {
        alert("Por favor, introduce tanto el nombre como el número de teléfono.");
        return;
    }

    const li = document.createElement("li");
    li.textContent = `${name} - ${phone} `;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Eliminar";
    deleteButton.className = "delete-button";
    deleteButton.addEventListener("click", () => {
        contactList.removeChild(li);
    });

    li.appendChild(deleteButton);

    contactList.appendChild(li);

    nameInput.value = "";
    phoneInput.value = "";
}
addButton.addEventListener("click", addContact);
