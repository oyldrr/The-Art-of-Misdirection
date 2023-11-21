function greetGuest() {
  var userName = prompt("Please enter your name: ");

  if (userName !== null && userName !== "") {
    var welcomeMessage = "Hello, " + userName + "! Welcome to The Art of Misdirection.";
    alert(welcomeMessage);
  } else {
    alert("You didn't provide a name. Please try again.");
  }
}

isOpened = false;

// Navbar turn on and turn off funcionality
function openNav() {
  if (isOpened == false) {
    document.getElementById("mySidenav").style.height = "100%";
    document.getElementById("mySidenav").style.opacity = "1";
    isOpened = true;
  }

  else {
    document.getElementById("mySidenav").style.height = "0";
    document.getElementById("mySidenav").style.opacity = "0";

    isOpened = false;
  }
}