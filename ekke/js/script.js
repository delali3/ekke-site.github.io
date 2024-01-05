const slider = document.querySelector(".slider");
const slides = document.querySelectorAll(".slide");
let currentIndex = 0;

function updateSlider() {
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    updateSlider();
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateSlider();
}

document.getElementById("sliderBtn").addEventListener("click", nextSlide);



// Function to scroll smoothly to the top
function scrollToTop() {
    const currentPosition = document.documentElement.scrollTop || document.body.scrollTop;
    if (currentPosition > 0) {
        window.requestAnimationFrame(scrollToTop);
        window.scrollTo(0, currentPosition - currentPosition / 8);
    }
}

// Scroll to the top of the document smoothly when the button is clicked
scrollToTopBtn.addEventListener('click', () => {
    scrollToTop();
});



window.addEventListener('scroll', reveal);

function reveal() {
    console.log("hi");
    var reveals = document.querySelectorAll('.animate');

    for(var i = 0; i < reveals.length; i++){

        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint =150;

        if (revealtop < windowheight - revealpoint) {
            reveals[i].classList.add('active');
        }else{
            reveals[i].classList.remove('active');
        }
    }
}