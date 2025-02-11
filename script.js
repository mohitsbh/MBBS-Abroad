document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();

    // Retrieve form values
    let name = document.querySelector("[name='name']").value;
    let email = document.querySelector("[name='email']").value;
    let phone = document.querySelector("[name='phone']").value;
    let country = document.querySelector("[name='country']").value;

    // Basic Validation
    if (name === "" || email === "" || phone === "") {
        alert("Please fill out all required fields.");
        return;
    }

    // Optional: You can add more validation like checking for valid email format or phone number

    // Send form data to the server via AJAX (for example, if you don't want to reload the page)
    let formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("phone", phone);
    formData.append("country", country);

    fetch("submit_form.php", {
        method: "POST",
        body: formData
    })
    .then(response => response.text())
    .then(result => {
        alert(result);  // Show result message (Success or Error)
        document.getElementById("contact-form").reset();  // Reset the form fields
    })
    .catch(error => {
        alert("There was an error submitting your form. Please try again later.");
    });
});
