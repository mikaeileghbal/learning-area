export default LoginModel;

const LoginModel = function (username, password, rememberme) {
  this.UserName = username;
  this.Password = password;
  this.RemembrMe = rememberme;
  this.LoginSuccessful = false;
  this.LoginErrorMessage = "";
};
