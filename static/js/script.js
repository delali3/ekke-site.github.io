document.addEventListener("DOMContentLoaded", function() {
    const dynamicText = document.querySelector('.dynamic-text');
    const textOptions = ['IT staff augmentation', 'data analytics', 'FinTech'];
    let currentIndex = 0;

    setInterval(() => {
        dynamicText.textContent = `${textOptions[currentIndex]}`;
        currentIndex = (currentIndex + 1) % textOptions.length;
    }, 3000); // Change text every 3 seconds
});
document.addEventListener("DOMContentLoaded", function() {
    const words = document.querySelectorAll('.dynamic-text b');
    let currentIndex = 0;

    setInterval(() => {
        // Hide the current word
        words[currentIndex].classList.remove('is-visible');

        // Move to the next word
        currentIndex = (currentIndex + 1) % words.length;

        // Show the next word
        words[currentIndex].classList.add('is-visible');
    }, 3000); // Change text every 3 seconds
});

document.addEventListener('DOMContentLoaded', function () {
    function showService(serviceId) {
        var serviceDetails = document.querySelectorAll('.details-block');
        serviceDetails.forEach(function (detail) {
            detail.style.display = 'none';
        });

        var selectedService = document.getElementById(serviceId);
        if (selectedService) {
            selectedService.style.display = 'block';
        }

        var navigationItems = document.querySelectorAll('.navigation-item');
        navigationItems.forEach(function (item) {
            item.classList.remove('active');
        });
        this.classList.add('active');
    }

    var navigationItems = document.querySelectorAll('.navigation-item');
    navigationItems.forEach(function (item) {
        item.addEventListener('click', function() {
            showService.bind(this)(this.dataset.serviceId);
        });
    });
});


// Toggle navigation menu
document.getElementById('nav-toggle').addEventListener('change', function() {
    document.querySelector('.main-nav').style.display = this.checked ? 'flex' : 'none';
});
