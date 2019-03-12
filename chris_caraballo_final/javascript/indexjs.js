		
// this is the modal code

var modal = document.getElementById('signin');


var button = document.getElementById("modbutton");


var span = document.getElementsByClassName("close")[0];


button.onclick = function() {
    modal.style.display = "block";
}


span.onclick = function() {
    modal.style.display = "none";
}
