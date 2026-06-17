// Theme toggle
const toggleBtn = document.getElementById("themeToggle");

toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("light");
});


// Project filter
function filterProjects(category) {
    const projects = document.querySelectorAll(".project-card");

    projects.forEach(project => {

        if (category === "all") {
            project.style.display = "block";
        } 
        else {
            if (project.classList.contains(category)) {
                project.style.display = "block";
            } 
            else {
                project.style.display = "none";
            }
        }

    });
}
