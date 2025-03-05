// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', () => {
    // Get all the navigation links and sections
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.section');

    // Function to handle smooth scrolling and section visibility
    const handleNavigation = (event) => {
        event.preventDefault();
        
        // Get target section
        const targetId = event.target.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        // Scroll to the target section
        targetSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });

        // Add active class to the clicked nav link
        navLinks.forEach(link => link.classList.remove('active'));
        event.target.classList.add('active');
    };

    // Add event listener to all nav links
    navLinks.forEach(link => link.addEventListener('click', handleNavigation));

    // Function to show sections on scroll with animation
    const showSectionsOnScroll = () => {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const sectionHeight = section.offsetHeight;
            const windowHeight = window.innerHeight;

            if (sectionTop < windowHeight && sectionTop + sectionHeight > 0) {
                section.classList.add('show');
            }
        });
    };

    // Initialize the show sections effect
    showSectionsOnScroll();
    window.addEventListener('scroll', showSectionsOnScroll);
});


// Text changing effect every 3 seconds
let descriptions = ["A Photographer", "A Graphic Designer", "A Video Editor", "A Music Producer", "A Web Developer"];
let descriptionElement = document.getElementById("description");
let index = 0;

function changeDescription() {
    // Add fade-out effect
    descriptionElement.classList.remove('fadeInOut');
    void descriptionElement.offsetWidth; // Trigger reflow to restart animation
    descriptionElement.classList.add('fadeInOut');

    // Update text after fade-out animation
    setTimeout(() => {
        descriptionElement.textContent = descriptions[index];
        index = (index + 1) % descriptions.length;
    }, 500); // Wait for the fade-out to complete before changing the text
}

setInterval(changeDescription, 3500); // Change text every 3.5 seconds (to sync with animation)
