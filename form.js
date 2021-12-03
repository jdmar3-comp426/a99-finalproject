/*window.addEventListener("load", function() {


  const login = document.getElementById("loginform");
  login.addEventListener("submit", function(event) {
    event.preventDefault();
    loginFunction();
  });

  function loginFunction() {
    const dataLoginForm = new FormData(login);
    const inforLoginForm = new URLSearchParams(dataLoginForm);
    
    const usernameInput = dataLoginForm.get("username");
    const passwordInput = dataLoginForm.get("password");

    const checkUsername = new XMLHttpRequest();
    checkUsername.open("GET", "http://localhost:5000/app/user/" + usernameInput);

  }

})*/