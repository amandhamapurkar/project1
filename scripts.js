
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


document.getElementById('learn-more').addEventListener('click', function() {
    document.getElementById('about').scrollIntoView({
        behavior: 'smooth'
    });
});

document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    document.getElementById('form-message').innerText = `Thank you, ${name}! Your message has been sent.`;
    this.reset();
});
