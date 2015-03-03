function usrNameValid (){
	var check = document.getElementById("userBox").value;
	var regExUser = /[a-zA-z]/
	if (regExUser.test("check") ){
		alert("Username should consist of alphabetical characters only");
		return false;
			}
	else {
	return true;
	}
}

function passLengthCheck () {
	var password = document.getElementById("passBox").text;
	
	var passLength = document.getElementById("passBox").Length;
	var regExPass
	if (passLength < 8 && regExPass.test("password") && passLength < 16 {
		alert("Your password needs to be at least 8 characters long");
		return false;
}

