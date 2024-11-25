// Contact form handling
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent the default form submission

    // Display thank you message
    document.getElementById('formMessage').classList.remove('hidden');
    
    // Reset the form fields
    document.getElementById('contactForm').reset();
});