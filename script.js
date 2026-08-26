console.log("IRONVAULT FITNESS loaded successfully!");

const joinButtons = document.querySelectorAll(".btn, .nav-btn");

joinButtons.forEach(button => {
    button.addEventListener("click", function () {
        console.log("JOIN NOW clicked");
    });
});
