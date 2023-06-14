function populateTable(users) {
    const tableBody = document.querySelector("#userTable tbody");
  
    // Clear existing table rows
    tableBody.innerHTML = "";
  
    users.forEach(function (user) {
      const row = document.createElement("tr");
  
      const nameCell = document.createElement("td");
      nameCell.textContent = user.name;
      row.appendChild(nameCell);
  
      const emailCell = document.createElement("td");
      emailCell.textContent = user.email;
      row.appendChild(emailCell);
  
      tableBody.appendChild(row);
    });
  }