var password = "12345";
function passcheck() {
    if (document.getElementById('HELLO YOU').value != password) {
alert('Wrong Password, Try Again');
return false;
}
if (document.getElementById('HELLO YOU').value == password) {
    alert('Correct Password, click OK to enter into the webpage, director!');
}
}