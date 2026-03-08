document.getElementById("bookingForm").addEventListener("submit", function(e){

e.preventDefault();

let name = document.getElementById("name").value;
let venue = document.getElementById("venue").value;
let catering = document.getElementById("catering").value;

let booking = {
name:name,
venue:venue,
catering:catering
};

let bookings = JSON.parse(localStorage.getItem("bookings")) || [];

bookings.push(booking);

localStorage.setItem("bookings", JSON.stringify(bookings));

alert("Booking Successful");

});
