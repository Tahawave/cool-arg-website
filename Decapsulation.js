var password = "james_manipulation_destruction_532";
function passcheck() {
if (document.getElementById('manipulation').value != password) {
alert('Wrong Password, Try Again');
return false;
}
if (document.getElementById('manipulation').value == password) {
alert('Correct Password, click OK to enter into the webpage, director!');
}
}
