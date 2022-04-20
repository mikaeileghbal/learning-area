export default LoginController;

function LoginController(model) {
  this.model = model;
}

LoginController.prototype.login = function (username, password, rememberme) {
  this.model.UserName = username;
  this.model.Password = password;
  this.model.RememberMe = rememberme;
  if (this.checkPassword(username, password)) {
    this.model.LoginSuccessful = true;
  } else {
    this.model.LoginSuccessful = false;
    this.model.LoginErrorMessage = "Incorrect username or password";
  }
};

LoginController.prototype.checkPassword = function (username, password) {
  return true;
};
