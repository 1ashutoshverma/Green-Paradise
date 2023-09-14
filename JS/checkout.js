var options = {
    key: 'rzp_test_PuIvwrP2D7FLip', 
    amount: 100 * 50000, // Amount in paise (100 paise = 1 INR)
    currency: 'INR',
    name: 'Green Paradise',
    description: 'Payment for your order',
    image: '../images/logo.png',
   
    handler: function(response) {
        if (response.razorpay_payment_id) {
           
            window.location.href = 'your_homepage_url.html'; 
        } else {
           
            alert('Payment failed or canceled.');
        }
    },
    prefill: {
        name: '',
        email: 'john@example.com',
        contact: '9876543210'
    }
};

var rzp = new Razorpay(options);

document.getElementById('kkpaybtn').addEventListener('click', function(e) {
    rzp.open();
    e.preventDefault();
});


document.getElementById("kkcont").addEventListener("click", () => {
    let menu = document.getElementById("kkdelivery");
    // let display = window.getComputedStyle(menu).display;
    menu.style.display = "block";

    let menu2 = document.getElementById("kkpersonalInfoCont");
    menu2.style.display = "none";
   
  });

  document.getElementById("kkbackbtn").addEventListener("click", () => {
    let menu = document.getElementById("kkdelivery");
    // let display = window.getComputedStyle(menu).display;
    menu.style.display = "";

    let menu2 = document.getElementById("kkpersonalInfoCont");
    menu2.style.display = "block";
   
  });