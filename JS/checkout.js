var options = {
    key: 'rzp_test_PuIvwrP2D7FLip', 
    amount: 100*50000, // Amount in paise (100 paise = 1 INR)
    currency: 'INR',
    name: 'Your Company Name',
    description: 'Payment for your order',
    image: 'your_logo_url.png', 
   
    handler: function(response) {
        
        alert('Payment successful: ' + response.razorpay_payment_id);
    },
    prefill: {
        name: 'John Doe',
        email: 'john@example.com',
        contact: '9876543210'
    }
};

var rzp = new Razorpay(options);

document.getElementById('rzp-button').addEventListener('click', function(e) {
    rzp.open();
    e.preventDefault();
});
