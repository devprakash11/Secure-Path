// Form submission handling
      document.querySelector('.contact-form form').addEventListener('submit', function(e) {
          e.preventDefault();
          
          // Get form values
          const name = document.getElementById('name').value;
          const email = document.getElementById('email').value;
          const subject = document.getElementById('subject').value;
          const message = document.getElementById('message').value;
          
          // Simple validation
          if(name && email && subject && message) {
              // Show success message
              alert('Thank you for your message! We will get back to you soon.');
              
              // Reset form
              this.reset();
          } else {
              alert('Please fill in all fields.');
          }
      });