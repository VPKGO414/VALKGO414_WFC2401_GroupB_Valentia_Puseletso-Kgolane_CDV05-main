// portfolio.js

// Function to open links in new tabs
function openNewTab(url) {
    window.open(url, '_blank');
}

// Add event listeners to the buttons
document.addEventListener('DOMContentLoaded', function() {
    const introButton = document.getElementById('intro-button');
    if (introButton) {
        introButton.addEventListener('click', function() {
            openNewTab('intro.html');
        });
    }

    const projectsButton = document.getElementById('projects-button');
    if (projectsButton) {
        projectsButton.addEventListener('click', function() {
            openNewTab('projects.html');
        });
    }

    const skillsButton = document.getElementById('skills-button');
    if (skillsButton) {
        skillsButton.addEventListener('click', function() {
            openNewTab('skills.html');
        });
    }

    const contactButton = document.getElementById('contact-button');
    if (contactButton) {
        contactButton.addEventListener('click', function() {
            openNewTab('contact.html');
        });
    }
});
