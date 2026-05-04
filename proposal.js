function generateProposal() {
    let job = document.getElementById("jobInput").value.trim();
    let tone = document.getElementById("tone").value;

    if (job === "") {
        alert("Enter job description");
        return;
    }

    let intro = "";

    if (tone === "professional") {
        intro = "Hi,\n\nI have carefully reviewed your project and understand your requirements.";
    }

    if (tone === "friendly") {
        intro = "Hey! 😊\n\nI just read your project and it looks really interesting.";
    }

    if (tone === "confident") {
        intro = "Hello,\n\nI am confident that I can deliver exactly what you're looking for.";
    }

    let proposal = `${intro}

Based on your job description:
"${job}"

I have relevant experience and can provide high-quality work with clean and efficient results.

Why choose me?
✔ Fast delivery  
✔ Professional communication  
✔ Client satisfaction  

Let’s discuss your project further.

Best regards,  
Mudasar`;

    document.getElementById("output").innerText = proposal;
}

function copyText() {
    let text = document.getElementById("output").innerText;

    if (text.trim() === "") {
        alert("Nothing to copy");
        return;
    }

    navigator.clipboard.writeText(text);
    alert("Copied!");
}

function goHome() {
    window.location.href = "index.html";
}