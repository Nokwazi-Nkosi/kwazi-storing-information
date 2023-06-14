function checkIfUserExist() {
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  const userString = localStorage.getItem("users");
  const users = userString ? JSON.parse(userString) : [];

  let loggedInUser = users.find(function (user) {
    return user.email === email && user.password === password;
  });

  if (loggedInUser) {
    alert("Login successful. Welcome, " + loggedInUser.name);
    window.location.href = "table.html";
  } else {
    const existingUser = users.find(function (user) {
      return user.email === email;
    });

    if (existingUser) {
      alert("Incorrect password. Please try again.");

    } else {
      alert("User does not exist. Please register an account.");
      window.location.href= "registerForm.html";
    }

  }

  
}



function populateTableFromLocalStorage() {
  const userString = localStorage.getItem("users");
  const users = userString ? JSON.parse(userString) : [];

  let table = document.getElementById("userTable");

  users.forEach(function (user) {
    let newRow = table.insertRow();



    let emailCell = newRow.insertCell();
    emailCell.innerHTML = user.email;

    let passwordCell = newRow.insertCell();
    passwordCell.innerHTML = user.password;

    let removeCell = newRow.insertCell();
    let removeButton = document.createElement("button");
    removeButton.innerText = "Remove";
    removeButton.addEventListener("click", function() {
      removeUserFromLocalStorage(user);
      table.deleteRow(newRow.rowIndex);
    });
    removeCell.appendChild(removeButton);
  });
}

function removeUserFromLocalStorage(user) {
  const userString = localStorage.getItem("users");
  const users = userString ? JSON.parse(userString) : [];

  const filteredUsers = users.filter(function(u) {
    return u.email !== user.email || u.password !== user.password;
  });

  localStorage.setItem("users", JSON.stringify(filteredUsers));
}



  

  