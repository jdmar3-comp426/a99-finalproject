window.addEventListener("load", function() {


  const login = document.getElementById("loginform");
  login.addEventListener("submit", function(event) {
    event.preventDefault();
  
    loginFunction(usernameInput,passwordInput);
  });

  function loginFunction(usernameInput, passwordInput) {
    const dataLoginForm = new FormData(login);
    const infoLoginForm = new URLSearchParams(dataLoginForm);
    
    //const usernameInput = dataLoginForm.get("username");
    //const passwordInput = dataLoginForm.get("password");

    // Takes in the give username and password from the user
    const usernameInput = infoLoginForm.get("username");
    const passwordInput = infoLoginForm.get("password");

    // Opening HTTP Request
    const checkUsername = new XMLHttpRequest();

    // Put in process for checking the username with login function
    checkUsername.open("GET", "http://localhost:5000/app/login/" + usernameInput + "/" + passwordInput);
    
    // Sending above process to be interpreted
    checkUsername.send();


    checkUsername.addEventListener("load", function(event){
      if (checkUsername.status == 404) {
        alert("Username is incorrect.");
      } else {
        const checkPassword = JSON.parse(checkUsername.response).pass;
        if (passwordInput != checkPassword) {
          alert("Password is incorrect.")
        } else {
          alert("Login successful!!")
          window.location.replace('http://localhost:5000/game.html');
        }

      }
    })
      

    /*if (checkUsername.status == 404) {
      alert("Username is incorrect.");
    } else {
      const checkPassword = JSON.parse(checkUsername.response).pass;
      if (passwordInput != checkPassword) {
        alert("Password is incorrect.")
      }
    }*/

  }

})