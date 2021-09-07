function login() {
	var username = document.getElementById("username").value;
	var password = document.getElementById("password").value;
	document.getElementById("login form").style.display = "none";
	if (username == "Suraj"  && password == "Suraj") {
		alert ("Welcome " + username + " to our dashboard");
	}
	
}