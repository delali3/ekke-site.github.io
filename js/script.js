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

function showService(serviceId) {
    // Remove 'show' class from all service details and 'active' from tabs
    document.querySelectorAll('.service-detail').forEach(function(service) {
        service.classList.remove('show');
    });
    document.querySelectorAll('.tab').forEach(function(tab) {
        tab.classList.remove('active');
    });

    // Add 'show' class to the selected service
    document.getElementById(serviceId).classList.add('show');

    // Add 'active' class to the clicked tab
    document.querySelector('.tab[onclick="showService(\'' + serviceId + '\')"]').classList.add('active');
}

// Initialize the first tab as active
showService('dedicated-team');

function showTestimonial(testimonialId) {
    // Hide all testimonials
    document.querySelectorAll('.testimonial-detail').forEach(function(detail) {
        detail.classList.remove('show');
    });

    // Remove active class from all tabs
    document.querySelectorAll('.testimonial-tabs .testimonial-tab').forEach(function(tab) {
        tab.classList.remove('active');
    });

    // Show the selected testimonial
    document.getElementById(testimonialId).classList.add('show');

    // Add active class to the clicked tab
    document.querySelector('.testimonial-tabs .testimonial-tab[onclick="showTestimonial(\'' + testimonialId + '\')"]').classList.add('active');
}

// Initialize the first testimonial as active
showTestimonial('testimonial1');
