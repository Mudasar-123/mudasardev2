
  function scrollToContact() {
    document.getElementById("contact").scrollIntoView({
      behavior: "smooth"
    });
  }
function sendMessage() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let subject = document.getElementById("subject").value;
    let message = document.getElementById("message").value;

    if (!name || !email || !message) {
        alert("Please fill required fields");
        return;
    }

    let whatsappMessage = `
Name: ${name}
Email: ${email}
Subject: ${subject}
Message: ${message}
    `;

    let url = "https://wa.me/923098624009?text=" + encodeURIComponent(whatsappMessage);

    window.open(url, "_blank");
}