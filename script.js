// Initialize EmailJS with your User ID
(function() {
    emailjs.init('K_3X452lh7FSch2ge');  // Replace 'YOUR_USER_ID' with your actual EmailJS User ID
})();

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Prepare the parameters to send to EmailJS
    const templateParams = {
        from_name: name,
        from_email: email,
        message_html: message
    };

    // Use EmailJS to send the email
    emailjs.send('service_0dotow8', 'template_p9839hl', templateParams)
    .then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
        alert('Message sent successfully!');
        document.getElementById('contact-form').reset();
    }, function(error) {
        console.log('FAILED...', error);
        alert('Message failed to send, please try again.');
    });
});
