// ========================= SHAKEEL STORE FAST JS =========================

// Step tracking
let whatsappClicked = false;
let facebookClicked = false;

// Elements
const whatsappBtn = document.getElementById("whatsappBtn");
const facebookBtn = document.getElementById("facebookBtn");
const submitBtn = document.getElementById("submitBtn");
const statusBox = document.getElementById("statusBox");
const form = document.getElementById("registrationForm");

// ========================= CLICK EVENTS =========================

whatsappBtn.addEventListener("click", () => {

  whatsappClicked = true;

  whatsappBtn.innerHTML = "✔ WhatsApp Joined";

  whatsappBtn.style.opacity = "0.7";

  checkUnlock();

});

facebookBtn.addEventListener("click", () => {

  facebookClicked = true;

  facebookBtn.innerHTML = "✔ Facebook Followed";

  facebookBtn.style.opacity = "0.7";

  checkUnlock();

});

// ========================= UNLOCK BUTTON =========================

function checkUnlock(){

  if(whatsappClicked && facebookClicked){

    submitBtn.disabled = false;
    submitBtn.classList.add("active");

    statusBox.innerHTML = "✅ Ready to submit now!";
    statusBox.style.background = "#e8ffe8";
    statusBox.style.color = "#0a7a0a";

  }
}

// ========================= FORM SUBMIT (FAST OPEN) =========================

form.addEventListener("submit", function(e){

  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const address = document.getElementById("address").value.trim();

  // Validation
  if(!name || !phone || !address){
    alert("Please fill all fields");
    return;
  }

  const phoneRegex = /^[0-9+\-\s]{9,15}$/;
  if(!phoneRegex.test(phone)){
    alert("Invalid phone number");
    return;
  }

  if(!whatsappClicked || !facebookClicked){
    alert("Complete WhatsApp & Facebook steps");
    return;
  }

  // ================= MESSAGE =================
  const message =
`🎉 Shakeel Store Grand Opening Registration 🎉

🙏 Thank you for registering!

👤 Name: ${name}
📞 Phone: ${phone}
🏠 Address: ${address}

💚 You have successfully:
✔ Joined WhatsApp Group
✔ Followed Facebook Page

🎁 Stay tuned for amazing opening gifts & offers!

✨ We are happy to welcome you to Shakeel Store family! ✨

😊 Have a great day!`;

  const url =
  `https://wa.me/94788350661?text=${encodeURIComponent(message)}`;

  // ================= INSTANT OPEN =================
  window.location.href = url;

  // reset after redirect (optional safety)
  setTimeout(() => {

    form.reset();

    submitBtn.disabled = true;
    submitBtn.classList.remove("active");

    whatsappClicked = false;
    facebookClicked = false;

    whatsappBtn.innerHTML = "Join WhatsApp Group";
    facebookBtn.innerHTML = "Follow Facebook Page";

    statusBox.innerHTML = "Complete both steps to enable submit";
    statusBox.style.background = "#fff3f3";
    statusBox.style.color = "#c40000";

  }, 1000);

});
