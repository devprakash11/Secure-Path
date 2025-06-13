// Toggle between login and signup forms
        document.getElementById('signup-tab').addEventListener('click', function() {
            document.getElementById('login-form').style.display = 'none';
            document.getElementById('signup-form').style.display = 'block';
            document.getElementById('login-tab').classList.remove('active');
            this.classList.add('active');
        });
        
        document.getElementById('login-tab').addEventListener('click', function() {
            document.getElementById('signup-form').style.display = 'none';
            document.getElementById('login-form').style.display = 'block';
            document.getElementById('signup-tab').classList.remove('active');
            this.classList.add('active');
        });
        
        document.getElementById('show-signup').addEventListener('click', function(e) {
            e.preventDefault();
            document.getElementById('login-form').style.display = 'none';
            document.getElementById('signup-form').style.display = 'block';
            document.getElementById('login-tab').classList.remove('active');
            document.getElementById('signup-tab').classList.add('active');
        });
        
        document.getElementById('show-login').addEventListener('click', function(e) {
            e.preventDefault();
            document.getElementById('signup-form').style.display = 'none';
            document.getElementById('login-form').style.display = 'block';
            document.getElementById('signup-tab').classList.remove('active');
            document.getElementById('login-tab').classList.add('active');
        });
        
        // Password toggle functionality
        document.querySelectorAll('.password-toggle').forEach(toggle => {
            toggle.addEventListener('click', function() {
                const input = this.previousElementSibling;
                if (input.type === 'password') {
                    input.type = 'text';
                    this.classList.remove('fa-eye');
                    this.classList.add('fa-eye-slash');
                } else {
                    input.type = 'password';
                    this.classList.remove('fa-eye-slash');
                    this.classList.add('fa-eye');
                }
            });
        });
        
        // Mobile menu toggle
        document.getElementById('hamburger-menu').addEventListener('click', function() {
            document.getElementById('nav-menu').classList.add('active');
        });
        
        document.getElementById('close-menu').addEventListener('click', function() {
            document.getElementById('nav-menu').classList.remove('active');
        });
        
        // Form submission
        document.querySelectorAll('.auth-form').forEach(form => {
            form.addEventListener('submit', function(e) {
                e.preventDefault();
                alert('Form submitted successfully!');
                // In a real implementation, you would handle form submission with AJAX or backend processing
            });
        });
        
        // Scroll to top button
        const scrollToTopBtn = document.getElementById('scrollToTopBtn');
        
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                scrollToTopBtn.style.display = 'block';
            } else {
                scrollToTopBtn.style.display = 'none';
            }
        });
        
        scrollToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
