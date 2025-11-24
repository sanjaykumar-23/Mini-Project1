document.getElementById("portfolioForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const about = document.getElementById("about").value;
    const skills = document.getElementById("skills").value.split(",");
    const project1 = document.getElementById("project1").value;
    const project2 = document.getElementById("project2").value;

    let output = `
        <h3>${name}</h3>
        <p><strong>About:</strong> ${about}</p>
        <p><strong>Skills:</strong></p>
        <ul>
            ${skills.map(skill => `<li>${skill.trim()}</li>`).join("")}
        </ul>
        <p><strong>Projects:</strong></p>
        <ul>
            ${project1 ? `<li>${project1}</li>` : ""}
            ${project2 ? `<li>${project2}</li>` : ""}
        </ul>
    `;

    document.getElementById("output").innerHTML = output;
});

const contactForm = document.querySelector(".contact-form");

if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const name = contactForm.querySelector("input[type='text']").value.trim();
        const email = contactForm.querySelector("input[type='email']").value.trim();
        const message = contactForm.querySelector("textarea").value.trim();

        if (!name || !email || !message) {
            alert("All fields are required!");
            return;
        }

        // Basic email check
        if (!email.includes("@gmail.com")) {
            alert("Please enter a valid email!");
            return;
        }

        alert("Message sent successfully!");

        // Clear fields
        contactForm.reset();
    });
}
