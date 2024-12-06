document.addEventListener('DOMContentLoaded', () => {
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const phoneInput = document.getElementById('phone');
  const saveButton = document.getElementById('save-user');
  const userTableBody = document.querySelector('#user-table tbody');
  const userDetails = document.getElementById('user-details');
  const detailsName = document.getElementById('details-name');
  const detailsEmail = document.getElementById('details-email');
  const detailsPhone = document.getElementById('details-phone');
  const detailsJson = document.getElementById('details-json');

  let users = JSON.parse(localStorage.getItem('users')) || [];
  let editIndex = null;

  const renderUsers = () => {
    userTableBody.innerHTML = '';
    users.forEach((user, index) => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${user.name}</td>
        <td>${user.email}</td>
        <td>${user.phone}</td>
        <td class="actions">
          <button onclick="viewUser(${index})">View</button>
          <button onclick="editUser(${index})">Edit</button>
          <button onclick="removeUser(${index})">Remove</button>
        </td>
      `;
      userTableBody.appendChild(row);
    });
    localStorage.setItem('users', JSON.stringify(users));
  };

  const resetForm = () => {
    nameInput.value = '';
    emailInput.value = '';
    phoneInput.value = '';
    editIndex = null;
  };

  saveButton.addEventListener('click', () => {
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const phone = phoneInput.value.trim();

    if (!name || !email || !phone) {
      alert('Please fill out all fields.');
      return;
    }

    if (editIndex !== null) {
      users[editIndex] = { name, email, phone };
    } else {
      users.push({ name, email, phone });
    }

    resetForm();
    renderUsers();
  });

  window.viewUser = (index) => {
    const user = users[index];
    detailsName.textContent = user.name;
    detailsEmail.textContent = user.email;
    detailsPhone.textContent = user.phone;
    detailsJson.textContent = JSON.stringify(user, null, 2);
    userDetails.style.display = 'block';
  };

  window.editUser = (index) => {
    const user = users[index];
    nameInput.value = user.name;
    emailInput.value = user.email;
    phoneInput.value = user.phone;
    editIndex = index;
  };

  window.removeUser = (index) => {
    if (confirm('Are you sure you want to delete this user?')) {
      users.splice(index, 1);
      renderUsers();
    }
  };

  renderUsers();
});
