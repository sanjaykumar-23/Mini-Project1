// Portfolio builder script
const form = document.getElementById("portfolioForm");
const output = document.getElementById("output");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const about = document.getElementById("about").value;
    const skills = document.getElementById("skills").value.split(",");
    const project1 = document.getElementById("project1").value;
    const project2 = document.getElementById("project2").value;

    output.innerHTML = `
        <div class="portfolio">
            <h2>${name}</h2>
            <p>${about}</p>
            <h3>Skills</h3>
            <ul>${skills.map(skill => `<li>${skill.trim()}</li>`).join('')}</ul>
            <h3>Projects</h3>
            <ul>
                ${project1 ? `<li>${project1}</li>` : ''}
                ${project2 ? `<li>${project2}</li>` : ''}
            </ul>
        </div>
    `;
});
