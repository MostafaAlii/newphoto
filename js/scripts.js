  $(document).on('click', '[data-toggle="modal"]', function () {
    var image = $(this).data('src');
    $('#modalImage').attr('src', image);
  });

  // Reset the modal image source when the modal is closed
  $('#imageModal').on('hidden.bs.modal', function () {
    $('#modalImage').attr('src', '');
  });

  $(document).ready(function () {
    $("#image-slider").twentytwenty();
});

  $(document).ready(function() {
    // Initialize the Bootstrap Carousel
    $('#testimonialCarousel').carousel();
  });

    // Function to change toggler icon color
    function changeTogglerIconColor() {
        const navbarToggler = document.getElementById("navbarToggler");
        if (window.scrollY > 0) {
            // Change icon color to black
            navbarToggler.classList.add("black-toggler-icon");
        } else {
            // Revert to default color
            navbarToggler.classList.remove("black-toggler-icon");
        }
    }

    // Attach the scroll event listener
    window.addEventListener("scroll", changeTogglerIconColor);

    // Initialize the color based on the initial scroll position
    changeTogglerIconColor();
