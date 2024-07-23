function handleFormSubmit(event) {
  event.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("pass").value;

  localStorage.setItem("email", email);
  localStorage.setItem("password", password);
  window.location.href = "landing.html";
  localStorage.setItem("prevent", "true");
}

function auth() {
  const prevent = localStorage.getItem("prevent");
  console.log(typeof prevent);
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
