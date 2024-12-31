// Handle Form Submission
const form = document.getElementById("message-form");

form.addEventListener("submit", (e) => {
    e.preventDefault(); // Prevent page reload
    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const email = document.getElementById("email").value;
    const course = document.getElementById("course").value;
    const message = document.getElementById("message").value;

    if (name && phone && email && course) {
        alert(`Thank you for contacting us, ${name}!`);
        form.reset();
    } else {
        alert("Please fill in all required fields!");
    }
});
