
// Hassan Digital Solutions

console.log("Welcome to Hassan Digital Solutions!");

function welcomeMessage() {
  alert("Welcome to Hassan Digital Solutions!");
}
document.getElementById("bookingForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const name = document.getElementById("customerName").value;
  const service = document.getElementById("service").value;
  const details = document.getElementById("details").value;

  const message = `New Booking Request

Name: ${name}
Service: ${service}
Details: ${details}`;

  const whatsappURL = "https://wa.me/2347038682870?text=" + encodeURIComponent(message);

  window.open(whatsappURL, "_blank");
});
