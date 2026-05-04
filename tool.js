function generateProposal() {
  let name = document.getElementById("clientName").value;
  let job = document.getElementById("jobTitle").value;
  let desc = document.getElementById("jobDesc").value;
  let skills = document.getElementById("skills").value;

  let proposal = `
Hi ${name || "there"},

I just saw your job "${job}" and it caught my attention.

I have strong experience in ${skills}, and I can confidently help you with this project.

Based on your description:
"${desc}"

I understand your requirements and can deliver high-quality results within time.

Why choose me?
✔ Fast delivery  
✔ Clean & professional work  
✔ 100% client satisfaction  

Let’s discuss your project in detail.

Looking forward to working with you.

Best regards,  
Mudasar
  `;

  document.getElementById("output").innerText = proposal;
}