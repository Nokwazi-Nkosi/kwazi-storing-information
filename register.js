

  let users = [];

  function register() {
    let username = document.getElementById("name").value;
    let lastName = document.getElementById("surname").value;
    let emailAddress = document.getElementById("email").value;
    let pass = document.getElementById("password").value;
    let confPass = document.getElementById("confPass").value;
  
    if (username === "" || lastName === "") {
      alert("Please fill up this field");
      return;
    } else if (!emailAddress.includes("@")) {
      alert("Email address must contain @");
      return;
    } else if (pass !== confPass) {
      alert("Passwords must match");
      return;
    }
  
  
    let storedUsers = localStorage.getItem("users");
    users = storedUsers ? JSON.parse(storedUsers) : [];
  
    let existingUser = users.find(function (user) {
      return user.email === emailAddress;
    });
  
    if (existingUser) {
      alert("User already exists. Please log in instead.");
      return;
    }


  
    const user = {
      name: username,
      surname: lastName,
      email: emailAddress,
      password: pass,
      confirmPassword: confPass,
    };
  
    users.push(user);
    localStorage.setItem("users", JSON.stringify(users));
  
    alert("Now you can log in");
  
    // Redirect to another page
    window.location.href = "login.html";
  }
  
 




  
 