// Event listener for setting session values
document.getElementById("set-session").addEventListener('click', function() {
    var output = document.getElementById('data');
    var output2 = document.getElementById('info');
    // Set values
    sessionStorage.setItem("nickname", "van");
    output.innerHTML = "Session set successfully!";
    output2.innerHTML = "Try to display session value by clicking on the next button!";
});

// Event listener for displaying session values
document.getElementById("display-session").addEventListener('click', function() {
    const ses = sessionStorage.getItem("nickname");
    var output = document.getElementById('data');
    var output2 = document.getElementById('info');
    if (ses) {
        // Display session value
        output.innerHTML = "Session value: " + ses;
        output2.innerHTML = "Session value is deleted when the tab is closed. Try closing and opening the page and click the button again!";
    }
    else {
        output.innerHTML = "Uh oh, no session value detected";
        output2.innerHTML = "Session has not been added";
    }
})

// Event listener for deleting session values
document.getElementById("delete-session").addEventListener('click', function() {
    const ses = sessionStorage.getItem("nickname");
    var output = document.getElementById('data');
    var output2 = document.getElementById('info');
    if (ses) {
        sessionStorage.removeItem("nickname");
        output.innerHTML = "Session removed";
        output2.innerHTML = "Session has been removed successfully";
    }
    else {
        output.innerHTML = "Uh oh, no session value detected";
        output2.innerHTML = "Session has not been added";
    }
})