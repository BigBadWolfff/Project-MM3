// Function to show or hide the button based on the scroll position
function toggleBackToTopButton() {
    var button = document.getElementById("back-to-top");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        button.style.display = "block";
    } else {
        button.style.display = "none";
    }
}

// Scroll to the top when the button is clicked
document.getElementById("back-to-top").addEventListener("click", function() {
    window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll naar boven met 'smooth' gedrag
});

// Add a scroll event listener to show/hide the button
window.onscroll = function() {
    toggleBackToTopButton();
};
