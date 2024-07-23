let menu = document.getElementById("menu");
let openMenu = document.getElementById("open-menu");
openMenu.addEventListener("click", () => {
  menu.classList.toggle("hidden");

  if (menu.classList.contains("hidden")) {
    openMenu.classList = "fa-solid fa-bars text-2xl md:hidden cursor-pointer";
  } else {
    openMenu.classList = "fa-solid fa-xmark text-2xl md:hidden cursor-pointer";
  }
});
localStorage.setItem("prevent", "false");
function checkData() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("pass").value;

  const storedEmail = localStorage.getItem("email");
  const storedPassword = localStorage.getItem("password");

  if (!storedEmail || !storedPassword) {
    Swal.fire({
      icon: "warning",
      title: "Not Signed Up",
      text: "You have not signed up yet. Please sign up first.",
    }).then(() => {
      window.location.href = "signup.html";
    });
  } else if (email === storedEmail && password === storedPassword) {
    Swal.fire({
      icon: "success",
      title: "Sign In Successful!",
      text: "Welcome back!",
    }).then(() => {
      localStorage.setItem("prevent", "true");
      window.location.href = "landing.html";
    });
  } else {
    Swal.fire({
      icon: "error",
      title: "Sign In Failed",
      text: "Email or password is incorrect. Please try again.",
    }).then(() => {
      document.getElementById("email").value = "";
      document.getElementById("pass").value = "";
    });
  }
}

function auth() {
  const prevent = localStorage.getItem("prevent");
  if (prevent == true) {
    window.location.href = "landing.html";
  } else {
    Swal.fire({
      icon: "error",
      title: "you don't have premsion",
      text: "please signin first",
    });
  }
}
