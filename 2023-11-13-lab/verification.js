// Simulate sending a verification request to the server
function sendVerificationRequest(email) {
    // In a real scenario, you would send an HTTP request to your server
    // to handle the verification process and generate a unique verification code or link.
    // This is just a simulation.
    const verificationCode = generateVerificationCode();
    console.log(`Verification code sent to ${email}: ${verificationCode}`);
    return verificationCode;
}

// Simulate generating a random verification code
function generateVerificationCode() {
    return Math.floor(1000 + Math.random() * 9000);
}

// Simulate handling the verification code entered by the user
function verifyEmail(email, enteredCode) {
    // In a real scenario, you would send an HTTP request to your server
    // to validate the entered code. This is just a simulation.
    const serverCode = sendVerificationRequest(email);

    if (enteredCode === serverCode) {
        console.log('Email verified successfully!');
    } else {
        console.log('Invalid verification code. Please try again.');
    }
}

// Simulate user entering the verification code
const userEmail = "anish_shrestha@student.uml.edu"; // Replace with the user's email
const enteredCode = prompt('Enter the verification code received in your email:');
verifyEmail(userEmail, parseInt(enteredCode));
