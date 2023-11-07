const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

// Example email addresses to test
const emailAddresses = [
    'user@example.com',
    'john.doe12345@gmail.com',
    'invalid.email@com',
    'missingat.com',
    'anish_shrestha@student.uml.edu',
    'ase@google'
  ];

emailAddresses.forEach((email) => {
    if (emailRegex.test(email)) {
      console.log()
      console.log(`${email} is a well-formatted email address.`);
      console.log('True')

    } else {
      console.log()
      console.log(`${email} is not a well-formatted email address.`);
      console.log('False')

    }
  });

const phoneNumberRegex = /(?:\(\d{3}\)|\d{3})[-. ]?\d{3}[-. ]?\d{4}\b/;

// Test phone numbers
const phoneNumbers = [
  '555-123-4567',
  '555.123.4567',
  '123-456-7890',
  '(999) 123-4567',
  '123 456 7890',
  '1234567890',
  '555-1234-5678', // Invalid: Extra digit in central office code
  '555-123-567', // Invalid: Too few digits in subscriber number
  '555123567s'
];

phoneNumbers.forEach((phoneNumber) => {
  if (phoneNumberRegex.test(phoneNumber)) {
    console.log()
    console.log(`${phoneNumber} is a well-formatted phone number.`);
    console.log('True')

  } else {
    console.log()
    console.log(`${phoneNumber} is not a well-formatted phone number.`);
    console.log('False')

  }
});


//URLS


const urlRegex = /\b(?:https?:\/\/|www\.)[a-zA-Z0-9.-]+\.(?:com|org|edu|[a-z]{2,})\S*\b/;

// Test URLs
const urls = [
  'https://www.example.com',
  'http://subdomain.example.com/path/page.html',
  'ftp://invalid-url.com', // Invalid: Non-http(s) URL scheme
  'https://invali d.com',   // Invalid: Space in URL
  'http://',               // Invalid: Incomplete URL
  'www.google.com/index.html', // valid.
  'http://www.google.net/index.html',
  'http://www.google.net/index.html',
  'https://www.google.com.np/index.html',
  'http://www.google.mil',
  'www.google.net',
  'www.google'
];

urls.forEach((url) => {
  if (urlRegex.test(url)) {
    console.log()
    console.log(`${url} is a well-formatted URL.`);
    console.log('True')
  } else {
    console.log()
    console.log(`${url} is not a well-formatted URL.`);
    console.log('False')

  }
});

 