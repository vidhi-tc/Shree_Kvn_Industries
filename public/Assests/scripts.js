function toggleMenu() {
    const navList = document.querySelector('.nav-list');
    navList.classList.toggle('active');
}
// Updated script remains the same as before

function viewMore(productName) {
    alert(`View more details about ${productName}`);
}

// Placeholder code for slider functionality
let currentSlide = 0;
const slides = document.querySelectorAll('.featured-slider img');
const totalSlides = slides.length;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.display = i === index ? 'block' : 'none';
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
}

// Automatically cycle through slides
setInterval(nextSlide, 3000);




//broucher download 

document.getElementById('brochure-link').addEventListener('click', function (event) {
    event.preventDefault(); // Prevent the default link behavior

    // Step 1: Trigger the file download
    const brochureFileUrl = '../public/Assests/kvn.pdf'; // Replace with your actual file path
    const anchor = document.createElement('a');
    anchor.href = brochureFileUrl;
    anchor.download = 'kvn.pdf'; // Specify the downloaded file name
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);

    // Step 2: Redirect to the brochure.html page
    setTimeout(() => {
        window.location.href = '/pages/broucher.html'; // Replace with your actual HTML file path
    }, 500); // Delay to ensure the download starts
});







  document.addEventListener('DOMContentLoaded', () => {
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('#navbarNav');
    const navLinks = document.querySelectorAll('.nav-link');

    navbarToggler.addEventListener('click', () => {
        if (navbarCollapse.classList.contains('show')) {
            // When collapsing
            navLinks.forEach(link => {
                link.style.color = 'white'; // Default white color
            });
        } else {
            // When expanded
            navLinks.forEach(link => {
                link.style.color = 'black'; // Change to black
            });
        }
    });
});




/*loading java */
document.addEventListener('DOMContentLoaded', () => {
    const loadingScreen = document.getElementById('loading-screen');
    const mainContent = document.getElementById('main-content');
  
    // Simulate loading time and shatter animation
    setTimeout(() => {
      // Hide the loader after animation
      loadingScreen.style.opacity = '0';
      setTimeout(() => {
        loadingScreen.style.display = 'none';
        mainContent.style.display = 'block'; // Show the main content
      }, 500); // Allow fade-out
    }, 3000); // Adjust timing for the shatter animation
  });
  





  /*Conatct api connect */


  
  document.querySelector('.contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission behavior

    // Gather form data
    const name = document.querySelector('input[name="name"]').value;
    const email = document.querySelector('input[name="email"]').value;
    const subject = document.querySelector('input[name="subject"]').value;
    const message = document.querySelector('textarea[name="message"]').value;

    // Construct the API data payload
    const apiData = {
      Name: name,
      Email: email,
      Contact: subject, // Assuming 'subject' maps to 'Contact' in the API
      Message: message,
    };

    // API endpoint
    const apiUrl = 'https://vidhierp.in/service.aspx?ApiVer=1&DeviceId=KRISH_ID&AppId=V01&Lat=0&Lng=0&Control=contactus';

    // Send data to the API
    fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json', // Set content type to JSON
      },
      body: JSON.stringify({ data: apiData }), // Send the payload
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Network response was not ok');
        }
      })
      .then((data) => {
        // Handle successful response
        document.querySelector('.contactForm').innerHTML = 
          `<div class="alert alert-success" role="alert">
            Thank you, ${name}! Your message has been sent successfully.
          </div>`;
      })
      .catch((error) => {
        // Handle errors
        document.querySelector('.contactForm').innerHTML = 
          `<div class="alert alert-danger" role="alert">
            Oops! Something went wrong. Please try again later.
          </div>`;
        console.error('There was a problem with the fetch operation:', error);
      });

    // Clear the form fields
    event.target.reset();
  });

