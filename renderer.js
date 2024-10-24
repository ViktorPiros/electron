const addUserBtn = document.getElementById('addUserBtn');
const usersTableBody = document.querySelector('#usersTable tbody');
const addUserForm = document.getElementById('addUserForm');
const submitUserBtn = document.getElementById('submitUserBtn');
const cancelBtn = document.getElementById('cancelBtn');

let users = [];

addUserBtn.addEventListener('click', () => {
    addUserForm.style.display = 'block';
});

submitUserBtn.addEventListener('click', () => {
    const nameInput = document.getElementById('name');
    const ageInput = document.getElementById('age');

    const newUser = {
        name: nameInput.value,
        age: ageInput.value,
    };

    users.push(newUser);
    updateTable();
    
    nameInput.value = '';
    ageInput.value = '';
    addUserForm.style.display = 'none';
});

cancelBtn.addEventListener('click', () => {
    addUserForm.style.display = 'none';
});

function updateTable() {
    usersTableBody.innerHTML = '';
    
    users.forEach(user => {
        const row = document.createElement('tr');
        
        const nameCell = document.createElement('td');
        nameCell.textContent = user.name;
        
        const ageCell = document.createElement('td');
        ageCell.textContent = user.age;
        
        row.appendChild(nameCell);
        row.appendChild(ageCell);
        
        usersTableBody.appendChild(row);
    });
}