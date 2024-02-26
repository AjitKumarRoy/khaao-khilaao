document.addEventListener("DOMContentLoaded", function() {
    // Function to click the next button for a specific carousel
    function clickNextButton(carousel) {
        // Find the next button within the specified carousel
        const nextButton = carousel.querySelector('[data-carousel-next]');
        // Trigger a click event on the next button
        nextButton.click();
    }

    // Find all carousels on the page
    const carousels = document.querySelectorAll('[data-carousel="static"]');
  
    // Set an interval for each carousel to click the next button every 3 seconds
    carousels.forEach(function(carousel) {
        setInterval(function() {
            clickNextButton(carousel);
        }, 3000);
    });
});
