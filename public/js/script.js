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


function showService(serviceName) {
    // Hide all service details
    var serviceDetails = document.getElementsByClassName('service-detail');
    for (var i = 0; i < serviceDetails.length; i++) {
        serviceDetails[i].classList.remove('show');
    }

    // Show the service detail corresponding to the clicked tab
    var selectedService = document.getElementById(serviceName);
    if (selectedService) {
        selectedService.classList.add('show');
    }

    // Update active state for tabs as before
    var tabs = document.getElementsByClassName('tab');
    for (var i = 0; i < tabs.length; i++) {
        tabs[i].classList.remove('active');
    }
    var activeTab = document.querySelector('[onclick="showService(\'' + serviceName + '\')"]');
    if (activeTab) {
        activeTab.classList.add('active');
    }
}
