

var options = {
    key: 'rzp_test_PuIvwrP2D7FLip', 
    amount: 100 * 50000, // Amount in paise (100 paise = 1 INR)
    currency: 'INR',
    name: 'Green Paradise',
    description: 'Payment for your order',
    image: '../images/logo.png',

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

let products = [
    {img:'./images/5-kg-cow-manure.webp', name:"Lucky Bamboo Plant - 3 Layer", price:'399', category:"Houseplants"},
    {img:"../HTML/images/AtlantisPlanter-PastelBlue.webp", name:'Peace Lily Plant', price:'299', category:"Houseplants"},
    {img:"../HTML/images/AtlantisPlanter-PastelPink.webp", name:'Money Plant Golden', price:'299', category:"Houseplants"},
    {img:'../HTML/images/AtlantisPlanter-Teal_dc150664.webp', name:"Snake Plant - Golden Hahnii", price:'299', category:"Houseplants"},
    {img:"../HTML/images/AtlantisPlanter-Teal.webp", name:'Areca Palm Plant XL', price:'2499', category:"Houseplants"}
];
// Green-Paradise\HTML\images\5-kg-cow-manure.webp

let productContainer = document.getElementById('kkrightcontent');
let itemImg = document.getElementById("itemImg")
let details = document.getElementById("itemDetails")
let totalAmt = document.getElementById("totalAmt");
let totalAmount=0
// let no = products.length;
products.forEach((product) => {
     let container = document.createElement("div");
    let imgdiv = document.createElement("div");
    let img = document.createElement("img");
    img.src= product.img;
    imgdiv.append(img);
   
    let detailsdiv = document.createElement("div");
        let divName = document.createElement("h5");
        divName.className= "itemName";
        divName.textContent = product.name;

        let divPrice = document.createElement("p");
        divPrice.className= "itemPrice";
        divPrice.textContent= "Price : "+product.price;
        totalAmount+=product.price;

        let qty = document.createElement("p");
        qty.className= "itemQuantity";
        qty.textContent= "Quantity : " +2;
        
        // let divPrice = document.createElement("p");
        // divPrice.className= "itemPrice";
        // divPrice.textContent= product.price;
        detailsdiv.append(divName, divPrice, qty);

        container.append(imgdiv, detailsdiv)
        details.append(container)
        // productContainer.append(details);
});

totalAmt.textContent= totalAmount;
