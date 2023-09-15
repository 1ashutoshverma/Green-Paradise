let navbar_bigscreen = document.getElementById("navbar_bigscreen_container");
let navbar_smallscreen = document.getElementById(
  "navbar_smallscreen_container"
);

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

let login_screen = document.getElementById("popup_login");
function loginScreen() {
  login_screen.innerHTML = ` <div class="parent">
  <div>
    <h2>Green paradise</h2>
    <div id="closing_login">
      <img src="./Images/navbar_images/cross-svgrepo-com.svg" alt="" />
    </div>
  </div>
  <h5 id="login" class="h2" tabindex="-1">Welcome back! Sign in with</h5>
  <div id="images">
    <img
      id="fb"
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRztMLZ5RO6EhrIJrzmBK2Kh2tLmsroesf87g&usqp=CAU"
      alt=""
    />
    <img
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNwtv-SfCJADd7ibbG64VkJgYgGHf_68mojA&usqp=CAU"
      alt=""
    />
  </div>
  <form id="form1" class="form">
    <div class="child">
      <!-- <label for="email">* Email address</label> -->
      <input type="email" id="email1" placeholder="Email" class = "email" required="" />
    </div>

    <div class="child">
      <!-- <label for="password">* Password</label> -->
      <input
        type="password"
        id="password1"
        class = "password"
        placeholder="Password"
        required=""
      />
    </div>

    <div class="child">
      <button type="submit" id="signin_button">SIGN IN</button>
    </div>
  </form>
  <a href="" style="margin-top: 10px; text-decoration: none; color: black"
    >FORGOT YOUR PASSWORD?</a
  ><br />
  <p id="go_to_from_login" class="buttons_log">Sign up</p>
</div>`;
}

let signup_screen = document.getElementById("popup_signup");

function signupScreen() {
  signup_screen.innerHTML = `<div class="parent">
  <div>
    <h2>Create an email account</h2>
    <div id="closing_signup">
      <img src="./Images/navbar_images/cross-svgrepo-com.svg" alt="" />
    </div>
  </div>

  <form id="form2" class="form">
    <div class="child">
      <label for="username">* Full Name</label>
      <input type="text" id="username" required />
    </div>

    <div class="child">
      <label for="email">* Email address</label>
      <input type="email" id="email2"  class = "email"required />
    </div>

    <div class="child">
      <label for="password">* Password</label>
      <input type="password" required />
    </div>

    <div class="child">
      <label for="confirmpassword">* Confirm Password</label>
      <input type="password" id="confirmpassword"  class = "password" required />
    </div>

    <div class="child">
      <label for="phone">Cell Phone Number<span>(Optional)</span></label>
      <input type="number" id="number" />
    </div>

    <div class="child">
      <button type="submit" id="signup_by_email">CONTINUE</button>
    </div>
    <p id="go_to_from_sign_up" class="buttons_log">Login</p>
  </form>
</div>`;
}

navbarBigscreen();
navbarSmallscreen();
loginScreen();
signupScreen();

//------------------------Big screen functionality -------------------------->>
document.getElementById("login2_bigscreen").addEventListener("click", () => {
  let menu = document.getElementById("login2_bigscreen_dropdown");
  let display = window.getComputedStyle(menu).display;

  if (display === "none" || display === "") {
    menu.style.display = "flex";
  } else {
    menu.style.display = "none";
  }
});
document
  .getElementById("user_dropdown_bigscreen")
  .addEventListener("click", () => {
    window.location = "./index.html";
  });

// --------------------login and signup buttons ----------------------->>
document.getElementById("login1_bigscreen").addEventListener("click", () => {
  let menu = document.getElementById("popup_login");
  menu.style.display = "flex";
});
document.getElementById("closing_login").addEventListener("click", () => {
  let menu = document.getElementById("popup_login");
  menu.style.display = "";
});

document.getElementById("go_to_from_sign_up").addEventListener("click", () => {
  let menu = document.getElementById("popup_signup");
  let menu2 = document.getElementById("popup_login");
  menu.style.display = "";
  menu2.style.display = "block";
});
document.getElementById("closing_signup").addEventListener("click", () => {
  let menu = document.getElementById("popup_signup");
  menu.style.display = "";
});
document.getElementById("go_to_from_login").addEventListener("click", () => {
  let menu = document.getElementById("popup_signup");
  let menu2 = document.getElementById("popup_login");
  menu2.style.display = "";
  menu.style.display = "block";
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
});

document.getElementById("login1_smallscreen").addEventListener("click", () => {
  let menu = document.getElementById("popup_login");
  menu.style.display = "flex";
});

//before that check of something is present in the user data
let userData = JSON.parse(localStorage.getItem("userData")) || {};

if (
  userData.login_status == "" ||
  userData.login_status == null ||
  userData.login_status == undefined ||
  userData.login_status == "loggedOut"
) {
  document.getElementById("login1_bigscreen").style.display = "flex";
  document.getElementById("login2_bigscreen").style.display = "";
  document.getElementById("login1_smallscreen").style.display = "flex";
  document.getElementById("login2_smallscreen").style.display = "";
} else {
  document.getElementById("user_dropdown_bigscreen").innerText =
    userData.username;
  document.getElementById("login1_bigscreen").style.display = "";
  document.getElementById("login2_bigscreen").style.display = "flex";
  document.getElementById("login1_smallscreen").style.display = "";
  document.getElementById("login2_smallscreen").style.display = "flex";
}

//to touch any where in the body all droupdowns should be gone

// document.querySelector("body").addEventListener("click", () => {
//   document.getElementById("login2_bigscreen_dropdown").style.display = "";
// });

// ------------------------- Login and signup functionality ------------------->>

// Import the functions you need from the SDKs you need

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-analytics.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signOut,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
} from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAyhLvPLl1z0fJyGgzVwXo5m0mYO60W47U",
  authDomain: "green-paradise-75c72.firebaseapp.com",
  projectId: "green-paradise-75c72",
  storageBucket: "green-paradise-75c72.appspot.com",
  messagingSenderId: "647348363237",
  appId: "1:647348363237:web:49295771dad6b05469190c",
  measurementId: "G-NGTCGYYT5G",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();
//-------------------------SignUp------------------------------>>
let signup_by_email = document.getElementById("signup_by_email");
signup_by_email.addEventListener("click", () => {
  let email = document.getElementById("email2").value;
  let password = document.getElementById("confirmpassword").value;
  let username = document.getElementById("username").value;
  console.log(username);
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;

      userData = {
        username: username,
        login_status: "loggedIn",
      };
      signup_screen.style.display = "";
      document.getElementById("user_dropdown_bigscreen").innerText =
        userData.username;
      document.getElementById("login1_bigscreen").style.display = "";
      document.getElementById("login2_bigscreen").style.display = "flex";
      document.getElementById("login1_smallscreen").style.display = "";
      document.getElementById("login2_smallscreen").style.display = "flex";

      localStorage.setItem("userData", JSON.stringify(userData));
      console.log(user);
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert("credentials are wrong!");
      // ..
    });
});

//--------------------------------Login------------------------>>
let signin_button = document.getElementById("signin_button");
signin_button.addEventListener("click", () => {
  let email = document.getElementById("email1").value;
  let password = document.getElementById("password1").value;
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;

      let name = userData.username;

      userData = {
        username: name,
        login_status: "loggedIn",
      };
      login_screen.style.display = "";
      document.getElementById("user_dropdown_bigscreen").innerText =
        userData.username;
      document.getElementById("login1_bigscreen").style.display = "";
      document.getElementById("login2_bigscreen").style.display = "flex";
      document.getElementById("login1_smallscreen").style.display = "";
      document.getElementById("login2_smallscreen").style.display = "flex";
      localStorage.setItem("userData", JSON.stringify(userData));
      console.log(user);
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert("credentials are wrong!");
    });
});

// ---------------------logout-------------------->>
let logout_bigscreen = document.getElementById("logout_dropdown_bigscreen");

logout_bigscreen.addEventListener("click", () => {
  console.log("clicked");
  signOut(auth)
    .then(() => {
      // Sign-out successful.
      console.log("logout done");
      userData = {
        login_status: "loggedOut",
      };
      document.getElementById("login2_bigscreen_dropdown").style.display = "";
      document.getElementById("login1_bigscreen").style.display = "flex";
      document.getElementById("login2_bigscreen").style.display = "";
      document.getElementById("login1_smallscreen").style.display = "flex";
      document.getElementById("login2_smallscreen").style.display = "";
      localStorage.setItem("userData", JSON.stringify(userData));
    })
    .catch((error) => {
      // An error happened.
      console.log(error);
    });
});

// -------------------------google-------------------->>>

const provider = new GoogleAuthProvider();

//Search functionality add product here by creating a div and append it
let add_searched_product = document.getElementById("search_result_smallscreen");

export { navbarBigscreen, navbarSmallscreen, loginScreen, signupScreen };
