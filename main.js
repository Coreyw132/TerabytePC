// Smooth Scroll functionality
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Scroll to top functionality
document.addEventListener('DOMContentLoaded', () => {
    const scrollToTopBtn = document.createElement('button');
    scrollToTopBtn.textContent = '↑';
    scrollToTopBtn.style.position = 'fixed';
    scrollToTopBtn.style.bottom = '20px';
    scrollToTopBtn.style.right = '20px';
    scrollToTopBtn.style.display = 'none';
    scrollToTopBtn.style.zIndex = '1000';
    document.body.appendChild(scrollToTopBtn);

    window.addEventListener('scroll', () => {
        if (window.scrollY > 200) {
            scrollToTopBtn.style.display = 'block';
        } else {
            scrollToTopBtn.style.display = 'none';
        }
    });

    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});

// Dynamic Background Effect on Click
document.addEventListener('click', (e) => {
    const ripple = document.createElement('span');
    ripple.style.position = 'absolute';
    ripple.style.width = '10px';
    ripple.style.height = '10px';
    ripple.style.borderRadius = '50%';
    ripple.style.background = 'radial-gradient(circle, rgba(0, 204, 255, 0.4), transparent)';
    ripple.style.top = `${e.clientY - 4}px`;
    ripple.style.left = `${e.clientX - 4}px`;
    ripple.style.pointerEvents = 'none';
    ripple.style.zIndex = '9999';
    document.body.appendChild(ripple);

    setTimeout(() => ripple.remove(), 640); // Remove after animation
});

document.addEventListener("DOMContentLoaded", () => {
    const svgContainer = document.getElementById("svg-logo");

    fetch("images/Dogtag.svg")
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to fetch the SVG logo!');
            }
            return response.text(); // Use .text() for SVG
        })
        .then(svg => {
            svgContainer.innerHTML = svg; // Insert the SVG into the container

            // Optional: Add a class to the SVG element for easier styling
            const svgElement = svgContainer.querySelector('svg');
            if (svgElement) {
                svgElement.classList.add('logo');
            }
        })
        .catch(error => {
            console.error('Error fetching SVG:', error);
        });
});