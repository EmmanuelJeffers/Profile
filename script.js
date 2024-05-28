// Add hover effect to buttons
const buttons = document.querySelectorAll('button, .btn');

buttons.forEach(button => {
    button.addEventListener('mouseenter', function() {
        this.classList.add('hover');
    });

    button.addEventListener('mouseleave', function() {
        this.classList.remove('hover');
    });
});

// Add hover effect to links
const links = document.querySelectorAll('a');

links.forEach(link => {
    link.addEventListener('mouseenter', function() {
        this.classList.add('hover');
    });

    link.addEventListener('mouseleave', function() {
        this.classList.remove('hover');
    });
});