function greetGuest() {
    var userName = prompt("Please enter your name: ");

    if (userName !== null && userName !== "") {
      var welcomeMessage = "Hello, " + userName + "! Welcome to The Art of Misdirection.";
      alert(welcomeMessage);
    } else {
      alert("You didn't provide a name. Please try again.");
    }
  }