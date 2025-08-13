 let menuIcon = document.querySelector('#menu-icon');
        let navbar = document.querySelector('.navbar');

        menuIcon.onclick = () => {
            menuIcon.classList.toggle('bx-x');
            navbar.classList.toggle('active');
        }

        // Close menu when clicking on a link
        document.querySelectorAll('.navbar a').forEach(link => {
            link.addEventListener('click', () => {
                navbar.classList.remove('active');
                menuIcon.classList.remove('bx-x');
            });
        });

        // Form submission
        document.getElementById('contactForm').addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Form submitted successfully! We will contact you soon.');
            this.reset();
        });