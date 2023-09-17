import { navbarBigscreen, navbarSmallscreen } from "./navbar.js";
// -----------for footer------------>>
import footer from "../Product_Page/components/footer/footer.js";
document.getElementById("footer").innerHTML = footer();

let payable = JSON.parse(localStorage.getItem("totalAmount")) || 0;

document.getElementById("kkpaybtn").addEventListener("click", function (e) {
  var options = {
    key: "rzp_test_PuIvwrP2D7FLip",
    amount: payable * 100, // Amount in paise (100 paise = 1 INR)
    currency: "INR",
    name: "Green Paradise",
    description: "Payment for your order",
    image: "../images/logo.png",

    prefill: {
      name: "",
      email: "john@example.com",
      contact: "9876543210",
    },
    theme: {
      color: "green",
    },
  };

  var rzp = new Razorpay(options);

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

let products = JSON.parse(localStorage.getItem("cart")) || [];
// Green-Paradise\HTML\images\5-kg-cow-manure.webp
//let arr = JSON.parse(localStorage.getItem("product_list"))||[];

// console.log(products)

let productContainer = document.getElementById("kkrightcontent");
let itemImg = document.getElementById("itemImg");
let details = document.getElementById("itemDetails");
let totalAmt = document.getElementById("totalAmt");
let totalAmount = 0;

// let no = products.length;

function updateTotalAmount() {
  payable =
    totalAmount + Number(sale.textContent) + Number(delivery.textContent);
  console.log(payable);
  totalAmt.textContent = "Rs. " + payable;

  localStorage.setItem("totalAmount", JSON.stringify(payable));
}

function displayData(products) {
  products.forEach((product, idx) => {
    let container = document.createElement("div");
    let imgdiv = document.createElement("div");
    let img = document.createElement("img");
    img.src = product.img;
    imgdiv.append(img);

    let detailsdiv = document.createElement("div");
    detailsdiv.className = "detailsDiv";
    let divName = document.createElement("h5");
    divName.className = "itemName";
    divName.textContent = product.name;

    let divPrice = document.createElement("p");
    divPrice.className = "itemPrice";
    divPrice.textContent = "Price : " + product.price;
    totalAmount += Number(product.price) * Number(product.qty);

    let quantityBox = document.createElement("div");
    quantityBox.id = "quantityBox";

    let minus = document.createElement("div");
    minus.innerHTML = `<i class="fa-solid fa-minus"></i>`;
    minus.setAttribute("class", "minus");
    minus.onclick = () => {
      if (count == 1) {
        return;
      } else {
        product.qty = Number(product.qty) - 1;
        localStorage.setItem("cart", JSON.stringify(products));
        count--;
        qty.textContent = count;
        totalAmount -= Number(product.price);
        updateTotalAmount();
      }
    };

    let qty = document.createElement("div");
    qty.className = "itemQuantity";
    qty.textContent = Number(product.qty);

    let count = Number(qty.textContent);

    let plus = document.createElement("div");
    plus.innerHTML = `<i class="fa-solid fa-plus"></i>`;
    plus.setAttribute("class", "plus");
    plus.onclick = () => {
      count++;
      qty.textContent = count;
      product.qty = Number(product.qty) + 1;
      localStorage.setItem("cart", JSON.stringify(products));
      totalAmount += Number(product.price);
      updateTotalAmount();
    };

    let deleteItem = document.createElement("div");
    deleteItem.innerHTML = `<i class="fa-solid fa-trash"></i>`;
    deleteItem.setAttribute("class", "delete");
    deleteItem.onclick = () => {
      totalAmount -= Number(product.price) * Number(product.qty);
      updateTotalAmount();
      products.splice(idx, 1);
      localStorage.setItem("cart", JSON.stringify(products));
      container.remove();
    };

    quantityBox.append(minus, qty, plus, deleteItem);

    detailsdiv.append(divName, divPrice, quantityBox);

    container.append(imgdiv, detailsdiv);
    details.append(container);
    // productContainer.append(details);
  });
}

displayData(products);

let sale = document.getElementById("salesPrice");
let delivery = document.getElementById("deliveryCharge");
totalAmt.textContent =
  "Rs. " +
  (totalAmount + Number(sale.textContent) + Number(delivery.textContent));
