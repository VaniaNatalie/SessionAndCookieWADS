// Import Cookies from js cookie module (syntax from documentation)
import Cookies from "/node_modules/js-cookie/dist/js.cookie.mjs";

// Event listener for adding cookie 
document.getElementById('set-cookie').addEventListener('click',function() {
    var output = document.getElementById('data');
    var output2 = document.getElementById('info');
    // Set a cookie value that has a max age of 3 days
    Cookies.set("nickname", "van", {expires: 3});
    // Display cookie value
    output.innerHTML = "Cookie set successfully";
    output2.innerHTML = "Try to display cookie value by clicking on the next button!";
});

// Event listener for displaying cookie
document.getElementById('display-cookie').addEventListener('click',function() {
    var cookie = Cookies.get("nickname");
    var output = document.getElementById('data');
    var output2 = document.getElementById('info');
    // If cookie exist
    if (cookie) {
        // Display cookie value
        output.innerHTML = "Cookie value: " + cookie;
        output2.innerHTML = "Cookie will be stored in browser until max age (3 days). Try closing and opening the page and click the button again!";
    }
    // If cookie doesn't exist
    else {
        output.innerHTML = "Uh oh cookie doesn't exist!";
        output2.innerHTML = "Try adding a cookie and click the button again!";
    }
});

// Event listener for delete button
document.getElementById('delete-cookie').addEventListener('click',function() {
    var cookie = Cookies.get("nickname");
    var output = document.getElementById('data');
    var output2 = document.getElementById('info');
    // If cookie exist
    if (cookie) {
        // Delete cookie value
        Cookies.remove("nickname");
        output.innerHTML = "Cookies removed";
        output2.innerHTML = "Cookie has been removed successfully";
    }
    // If cookie doesn't exist
    else {
        output.innerHTML = "Uh oh cookie doesn't exist!";
        output2.innerHTML = "Try adding a cookie and click the button again!";
    }
});