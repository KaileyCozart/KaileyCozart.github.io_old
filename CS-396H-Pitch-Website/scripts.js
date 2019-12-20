window.onload = function() {

    // Fade-in Divs

    document.getElementById("fade").className += " appear";

    // User Iterates Through Screenshots

    var button = document.getElementById("screenshotsButton");
    var currentScreenshot = document.getElementById("fade");

    button.onclick = function() {
        if (currentScreenshot.classList.contains("s1")) {
            currentScreenshot.className = "screenshotsDiv appear s2";
        }
        else if (currentScreenshot.classList.contains("s2")) {
            currentScreenshot.className = "screenshotsDiv appear s3";
        }
        else if (currentScreenshot.classList.contains("s3")) {
            currentScreenshot.className = "screenshotsDiv appear s1";
        }
    }
};