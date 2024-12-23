// Get the elements that will be animated in the page

const boxContainer = document.querySelector(".boxContainer")
const saluteTextContainer = document.querySelector(".saluteTextContainer")
const authorName = document.querySelector(".name")
const jobTitleContainers = document.querySelectorAll(".jobTitleContainer")
const jobTitles = document.querySelectorAll(".jobTitle")
const jobCompany = document.querySelector(".jobCompany")
const projectsTitle = document.querySelector(".projectsTitle")
const phones = document.querySelectorAll(".phone")
const laptop = document.querySelector(".laptop")

// Add an event listener to handle scrolling this handles the text and images
window.addEventListener("scroll", ()=>{
  let offsetY = window.scrollY
  saluteTextContainer.style.transform= `translateY(${offsetY * 0.1}px)`
  authorName.style.transform= `translateX(${offsetY * 0.1}px)`
  jobTitleContainers[0].style.backgroundPositionY = `${offsetY * 0.5}px`
  jobTitleContainers[1].style.backgroundPositionY = `${-offsetY * 0.5}px`
  jobTitles[0].style.transform = `translateX(calc(200vh - ${offsetY}px))`
  jobCompany.style.transform = `translateX(calc(-300vh + ${offsetY}px))`
  projectsTitle.style.transform = `translateY(calc(400vh - ${offsetY}px))`
  phones[0].style.transform = `translateX(calc(500vh - ${offsetY}px))`
  laptop.style.transform = `translateX(calc(600vh - ${offsetY}px))`
  phones[1].style.transform = `translateX(calc(750vh - ${offsetY}px))`
})



// Error Validation
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  // Input elements
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const messageInput = document.getElementById("message");

  // Error spans
  const nameError = document.getElementById("nameError");
  const emailError = document.getElementById("emailError");
  const messageError = document.getElementById("messageError");

  // Validation patterns
  const namePattern = /^[a-zA-Z\s]+$/; // Only letters and spaces
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Email format

  // Clear previous errors
  nameError.textContent = "";
  emailError.textContent = "";
  messageError.textContent = "";

  let hasError = false;

  // Validate Name
  if (nameInput.value.trim() === "") {
    nameError.textContent = "Name is required.";
    hasError = true;
  } else if (!namePattern.test(nameInput.value)) {
    nameError.textContent = "Name must not contain numbers or special characters.";
    hasError = true;
  }

  // Validate Email
  if (emailInput.value.trim() === "") {
    emailError.textContent = "Email is required.";
    hasError = true;
  } else if (!emailPattern.test(emailInput.value)) {
    emailError.textContent = "Please enter a valid email address.";
    hasError = true;
  }

  // Validate Message
  if (messageInput.value.trim() === "") {
    messageError.textContent = "Message cannot be empty.";
    hasError = true;
  }

  // If no errors, simulate form submission
  if (!hasError) {
    alert("Form submitted successfully!");
    // Uncomment the next line to allow actual submission
    // e.target.submit();
  }
});


// Initialize EmailJS with your user ID
emailjs.init('9Jl4LhOUhbPQRu-A0');

// Listen for the form submit event
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent the default form submission

    // Get the submit button and form message span
    const submitButton = document.getElementById('submitButton');
    const formMessage = document.getElementById('formMessage');

    // Change the button to show loading message
    submitButton.innerText = 'Submitting...';
    submitButton.disabled = true;  // Disable the button to prevent multiple submissions

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Prepare the data to be sent in the email
    const templateParams = {
        name: name,
        email: email,
        message: message
    };

    // Send the email using EmailJS
    emailjs.send('service_h43vmup', 'template_n7wqzll', templateParams)
        .then(function(response) {
            // On success
            console.log('SUCCESS!', response);
            formMessage.textContent = 'Your message has been sent!';
            formMessage.style.color = 'green'; // Success message in green

            // Reset the form after successful submission
            setTimeout(() => {
                formMessage.textContent = '';  // Clear success message
                submitButton.innerText = 'Submit';  // Reset button text
                submitButton.disabled = false;  // Enable the button again
                document.getElementById('contactForm').reset();
            }, 3000);  // After 3 seconds, reset the form

        }, function(error) {
            // On error
            console.log('FAILED...', error);
            formMessage.textContent = 'Something went wrong. Please try again later.';
            formMessage.style.color = 'red'; // Error message in red
            submitButton.innerText = 'Submit';  // Reset button text on error
            submitButton.disabled = false;  // Enable the button again
        });
});


// Intro Animation
let intro = document.querySelector('.intro-container');
let logo1 = document.querySelector('.logo-header');
let logo1Span = document.querySelectorAll('.logo1');

window.addEventListener('DOMContentLoaded', ()=>{

    setTimeout(()=>{

        logo1Span.forEach((span, idx)=>{
            setTimeout(()=>{
                span.classList.add('active');
            },(idx + 1) * 400)
        });

        setTimeout (()=>{
            logo1Span.forEach((span, idx)=>{
                
                setTimeout (()=>{
                    span.classList.remove('active');
                    span.classList.add('fade');
                }, (idx + 1) * 50)
            })
        },2000);

        setTimeout(()=>{
            intro.style.top = '-100vh';
        },2300)
            
    })
})

// Cursor 

var cursor = $(".cursor"),
  follower = $(".cursor-follower");

  var posX = 0,
      posY = 0,
      mouseX = 0,
      mouseY = 0;

  TweenMax.to({}, 0.016, {
      repeat: -1,
      onRepeat: function() {
          posX += (mouseX - posX) / 9;
          posY += (mouseY - posY) / 9;

          TweenMax.set(follower, {
              css: {
                  left: posX - 20,
                  top: posY - 20
              }
          });

          TweenMax.set(cursor, {
              css: {
                  left: mouseX,
                  top: mouseY
              }
          });
      }
  });

  $(document).on("mousemove", function(e) {
      mouseX = e.pageX;
      mouseY = e.pageY;
  });
