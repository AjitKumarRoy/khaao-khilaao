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



window.onscroll = function () { scrollFunction() };

        function scrollFunction() {
            if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                document.querySelector('.back-to-top').classList.add('show');
            } else {
                document.querySelector('.back-to-top').classList.remove('show');
            }
        }

        // When the user clicks on the button, scroll to the top of the document
        document.querySelector('.back-to-top').addEventListener('click', function () {
            document.body.scrollTop = 0; // For Safari
            document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
        });




