const form = document.getElementById("contactForm");
const response = document.getElementById("response");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();

  response.textContent =
    `Thank you, ${name}! Your demo form was submitted.`;

  response.style.color = "green";
  form.reset();
});