// ========================= script.js =========================

// Button status
let whatsappClicked = false;
let facebookClicked = false;

// Elements
const whatsappBtn = document.getElementById("whatsappBtn");
const facebookBtn = document.getElementById("facebookBtn");

const submitBtn = document.getElementById("submitBtn");

const statusBox = document.getElementById("statusBox");

const form = document.getElementById("registrationForm");

const popup = document.getElementById("popup");

// WhatsApp Click
whatsappBtn.addEventListener("click", () => {

  whatsappClicked = true;

  whatsappBtn.style.opacity = "0.7";

  checkUnlock();

});

// Facebook Click
facebookBtn.addEventListener("click", () => {

  facebookClicked = true;

  facebookBtn.style.opacity = "0.7";

  checkUnlock();

});

// Unlock Submit Button
function checkUnlock(){

  if(whatsappClicked && facebookClicked){

    submitBtn.disabled = false;

    submitBtn.classList.add("active");

    statusBox.innerHTML =
    "✅ Both steps completed. Submit button unlocked.";

    statusBox.style.background = "#eaffea";

    statusBox.style.color = "#008000";

  }

}

// Submit
form.addEventListener("submit", function(e){

  e.preventDefault();

  // Inputs
  const name = document.getElementById("name").value.trim();

  const phone = document.getElementById("phone").value.trim();

  const address = document.getElementById("address").value.trim();

  // Validation
  if(name === "" || phone === "" || address === ""){

    alert("Please fill all fields.");

    return;

  }

  // Phone Validation
  const phoneRegex = /^[0-9+\-\s]{9,15}$/;

  if(!phoneRegex.test(phone)){

    alert("Please enter valid phone number.");

    return;

  }

  // Message
  const message =
`Hello Shakeel Store,

New Registration Details:

Name: ${name}
Phone: ${phone}
Address: ${address}

I joined the WhatsApp group and followed the Facebook page.`;

  // Encode
  const encodedMessage = encodeURIComponent(message);

  // WhatsApp URL
  const whatsappURL =
`https://wa.me/94788350661?text=${encodedMessage}`;

  // Show Popup
  popup.classList.add("show");

  // Redirect
  setTimeout(() => {

    window.open(whatsappURL, "_blank");

    popup.classList.remove("show");

  }, 2000);

});