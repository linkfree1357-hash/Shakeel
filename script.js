// ========================= SHAKEEL STORE JS =========================

// Step tracking
let whatsappClicked = false;
let facebookClicked = false;

// Elements
const whatsappBtn = document.getElementById("whatsappBtn");
const facebookBtn = document.getElementById("facebookBtn");
const submitBtn = document.getElementById("submitBtn");
const statusBox = document.getElementById("statusBox");
const form = document.getElementById("registrationForm");
const popup = document.getElementById("popup");

// ========================= WHATSAPP CLICK =========================
whatsappBtn.addEventListener("click", () => {

  whatsappClicked = true;

  whatsappBtn.style.opacity = "0.7";

  whatsappBtn.innerHTML = "✔ WhatsApp Group Joined";

  checkUnlock();

});

// ========================= FACEBOOK CLICK =========================
facebookBtn.addEventListener("click", () => {

  facebookClicked = true;

  facebookBtn.style.opacity = "0.7";

  facebookBtn.innerHTML = "✔ Facebook Followed";

  checkUnlock();

});

// ========================= UNLOCK SUBMIT =========================
function checkUnlock(){

  if(whatsappClicked && facebookClicked){

    submitBtn.disabled = false;
    submitBtn.classList.add("active");

    statusBox.innerHTML =
    "✅ All steps completed! You can now submit your registration.";

    statusBox.style.background = "#e8ffe8";
    statusBox.style.color = "#0a7a0a";
    statusBox.style.fontWeight = "600";

  }
}

// ========================= FORM SUBMIT =========================
form.addEventListener("submit", function(e){

  e.preventDefault();

  // Get values
  const name = document.getElementById("name").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const address = document.getElementById("address").value.trim();

  // ================= VALIDATION =================
  if(!name || !phone || !address){
    alert("⚠ Please fill all fields!");
    return;
  }

  const phoneRegex = /^[0-9+\-\s]{9,15}$/;

  if(!phoneRegex.test(phone)){
    alert("⚠ Please enter valid phone number!");
    return;
  }

  if(!whatsappClicked || !facebookClicked){
    alert("⚠ Please complete WhatsApp & Facebook steps!");
    return;
  }

  // ================= WHATSAPP MESSAGE =================
  const message =
`🎉 Shakeel Store Grand Opening Registration 🎉

🙏 Thank you for registering with us!

👤 Name: ${name}
📞 Phone: ${phone}
🏠 Address: ${address}

💚 You have successfully:
✔ Joined WhatsApp Group
✔ Followed Facebook Page

🎁 Stay tuned for amazing opening gifts & offers!

✨ We are happy to welcome you to Shakeel Store family! ✨

😊 Have a great day!`;

  const encodedMessage = encodeURIComponent(message);

  const whatsappURL =
  `https://wa.me/94788350661?text=${encodedMessage}`;

  // ================= POPUP =================
  popup.classList.add("show");

  // ================= REDIRECT =================
  setTimeout(() => {

    window.open(whatsappURL, "_blank");

    popup.classList.remove("show");

    // RESET FORM
    form.reset();

    submitBtn.disabled = true;
    submitBtn.classList.remove("active");

    whatsappClicked = false;
    facebookClicked = false;

    whatsappBtn.style.opacity = "1";
    facebookBtn.style.opacity = "1";

    whatsappBtn.innerHTML = `<i class="fa-brands fa-whatsapp"></i> Join WhatsApp Group`;
    facebookBtn.innerHTML = `<i class="fa-brands fa-facebook-f"></i> Follow Facebook Page`;

    statusBox.innerHTML = "Complete both steps to unlock submit button";
    statusBox.style.background = "#fff3f3";
    statusBox.style.color = "#c40000";

  }, 2000);

});
