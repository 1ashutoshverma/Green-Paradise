let navbar_bigscreen = document.getElementById("navbar_bigscreen_container");
let navbar_smallscreen = document.getElementById("navbar_smallscreen_container");


function navbarBigscreen() {
  navbar_bigscreen.innerHTML = `<div id="navbar_bigscreen">
    <div id="first_bigscreen">
      <a href="index.html">Green paradise</a>
    </div>
    <div id="middle_bigscreen">
      <a href="#">Catalog</a>
      <a href="#">Sale</a>
      <a href="#">Delivery and payment</a>
      <a href="#">Contact</a>
    </div>
    <div id="last_bigscreen">
      <div id="search_bigscreen">
        <div><input type="text" placeholder="Search products...." /></div>
        <div class="icon_bigscreen">
          <img src="./Images/navbar_images/search-icon.svg" alt="" />
        </div>
      </div>
    
      <div id="login1_bigscreen" class="login_form"><a href="#" style="text-decoration:none; color:#486e00">Login</a></div>
      <div id="login2_bigscreen">
        <div class="icon_bigscreen">
          <img src="./Images/navbar_images/human-icon.svg" alt="" />
        </div>
        <div class="icon_bigscreen">
          <img src="./Images/navbar_images/arrow-icon.svg" alt="" />
        </div>
      </div>
      <div id="cart_bigscreen">
        <div class="icon_bigscreen">
          <img src="./Images/navbar_images/bucket-icon.svg" alt="" />
        </div>
        <div>0</div>
      </div>
    </div>
    </div>
    
    <div id="dropdowns_bigscreen">
    <div>
      <div id="search_bigscreen_dropdown">
        <div>hello</div>
        <div>hello</div>
      </div>
      <div id="login2_bigscreen_dropdown">
        <div id="user_dropdown_bigscreen" class="dropdowns_user_bigscreen">
          Ashutosh Verma
        </div>
        <div id="cart_dropdown_bigscreen" class="dropdowns_user_bigscreen">
          Cart
        </div>
        <div
          id="logout_dropdown_bigscreen"
          class="dropdowns_user_bigscreen"
        >
          Logout
        </div>
      </div>
    </div>
    </div>`;
}

function navbarSmallscreen() {
  navbar_smallscreen.innerHTML = ` <div id="navbar_smallscreen">
    <div id="first_smallscreen">
      <a href="./index.html">Green Paradise</a>
    </div>

    <div id="second_smallscreen">
      <div id="search_smallscreen">
        <div class="icon_bigscreen">
          <img src="./Images/navbar_images/search-icon.svg" alt="" />
        </div>
      </div>

      <div id="login1_smallscreen"><a href="#" style="text-decoration:none; color:#486e00">Login</a></div>

      <div id="login2_smallscreen">
        <div class="icon_bigscreen">
          <img src="./Images/navbar_images/human-icon.svg" alt="" />
        </div>
      </div>

      <a href="#" style="text-decoration:none">
        <div id="cart_smallscreen">
          <div class="icon_bigscreen">
            <img src="./Images/navbar_images/bucket-icon.svg" alt="" />
          </div>
          <div>0</div>
        </div>
      </a>
    </div>
    <div id="third_smallscreen">
      <div class="icon_bigscreen">
        <img src="./Images/navbar_images/list-icon.svg" alt="" />
      </div>
    </div>
  </div>

  <!-- drop downs for small screen -->
  <div id="dropdowns_small_screen">
    <div>
      <input type="text" placeholder="Search..." />
    </div>
    <div id="search_result_smallscreen">
      <div>Product1</div>
      <div>Product1</div>
      <div>Product1</div>
    </div>
  </div>
  <div id="humburger_icon_menu">
    <div>
      <div>
        <a href="./index.html">UserName</a>
        <a href="#">Cart</a>
      </div>
      <div>
        <a href="#">Catalog</a>
        <a href="#">Sale</a>
        <a href="#">Delivery and Payment</a>
        <a href="#">Contact</a>
        <a href="#">About us</a>
      </div>
      <div>
        <a href="./index.html">Logout</a>
      </div>
    </div>
  </div>`;
}
// navbarBigscreen();
// navbarSmallscreen();

//------------------------Big screen functionality -------------------------->>
document.getElementById("login2_bigscreen").addEventListener("click", () => {
  let menu = document.getElementById("login2_bigscreen_dropdown");
  let display = window.getComputedStyle(menu).display;

  if (display === "none" || display === "") {
    menu.style.display = "flex";
  } else {
    menu.style.display = "none";
  }
  document.getElementById("dropdowns_small_screen").style.display = "";
});
document
  .getElementById("user_dropdown_bigscreen")
  .addEventListener("click", () => {
    window.location = "./index.html";
  });
//----------------------- Small Screen FUnctionality ------------------------->>
//humbuger icon open and close
document.getElementById("third_smallscreen").addEventListener("click", () => {
  let menu = document.getElementById("humburger_icon_menu");
  let display = window.getComputedStyle(menu).display;

  if (display === "none" || display === "") {
    menu.style.display = "flex";
  } else {
    menu.style.display = "none";
  }
  document.getElementById("dropdowns_small_screen").style.display = "";
});

//Login open and close
document.getElementById("login2_smallscreen").addEventListener("click", () => {
  let menu = document.getElementById("humburger_icon_menu");
  let display = window.getComputedStyle(menu).display;

  if (display === "none" || display === "") {
    menu.style.display = "flex";
  } else {
    menu.style.display = "none";
  }
  //display for search
  document.getElementById("dropdowns_small_screen").style.display = "";
});

//Search open and close
document.getElementById("search_smallscreen").addEventListener("click", () => {
  let menu = document.getElementById("dropdowns_small_screen");
  let display = window.getComputedStyle(menu).display;
  console.log(display);
  if (display === "none" || display === "") {
    menu.style.display = "block";
  } else {
    menu.style.display = "none";
  }
  document.getElementById("humburger_icon_menu").style.display = "";
});

//Search functionality add product here by creating a div and append it
let add_searched_product = document.getElementById("search_result_smallscreen");

