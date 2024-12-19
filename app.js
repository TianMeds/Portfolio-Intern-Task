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
