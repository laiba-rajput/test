function validateForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const dob = document.getElementById('dob').value;
    const course = document.getElementById('course').value;
    const address = document.getElementById('address').value;

    // Simple validation check
    if (name === "" || email === "" || phone === "" || dob === "" || course === "" || address === "") {
        alert("Sab fields bharna zaroori hai!");
        return false;
    }

    // Display success message
    document.getElementById('message').innerHTML = "Form successfully submitted!";
    return false;  // To prevent actual form submission
}
