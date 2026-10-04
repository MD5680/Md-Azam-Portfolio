const projects = [
    {
        title: "Machine Learning – Healthcare Data Analysis",
        role: "Machine Learning",
        description:
            "Analyzed healthcare data to support outcome prediction through data preprocessing, feature engineering, and classification.",
        technologies: [
            "Python",
            "Pandas",
            "NumPy",
            "Scikit-learn",
            "Matplotlib",
            "Seaborn"
        ],
        image: "assets/Projects/Healthcare-Project.png",
        github: "https://github.com/MD5680/ML_Internship-",
        status: "Completed"
    },

    {
        title: "E-Commerce Business Analytics",
        role: "Data Engineering & Analytics",
        description:
            "Built a data pipeline to ingest, validate, transform, and model e-commerce data for business analytics and reporting.",
        technologies: [
            "Databricks",
            "PySpark",
            "SQL",
            "Git",
            "GitHub"
        ],
        image: "assets/Projects/ecommerce-business-analytics.png",
        github: "#",
        status: "Completed"
    },

    {
        title: "Student–LSA Matching Database Architecture",
        role: "Database Structure Architect — HabotConnect IT Services",
        description:
            "Designed and implemented a normalized PostgreSQL database for student–LSA matching, session management, and payout reporting, including ERD relationships, primary/foreign keys, data-integrity constraints, lineage tracking, and SQL queries.",
        technologies: [
            "PostgreSQL",
            "SQL",
            "ERD",
            "Database Design",
            "Data Modeling"
        ],
        image: "assets/Projects/student-lsa-database.png",
        github: "#",
        status: "Completed"
    }
];


const projectsContainer = document.getElementById("projects-container");

if (projectsContainer) {
    projects.forEach((project) => {
        const projectCard = document.createElement("article");

        projectCard.className = "project-card";

        projectCard.innerHTML = `
            <div class="project-image">
                <img src="${project.image}" alt="${project.title}">
            </div>

            <div class="project-content">
                <p class="project-status">${project.status}</p>

                <h3>${project.title}</h3>

                <p class="project-role">
                    <strong>Role:</strong> ${project.role}
                </p>

                <p class="project-description">
                    ${project.description}
                </p>

                <div class="project-technologies">
                    ${project.technologies
                        .map((tech) => `<span>${tech}</span>`)
                        .join("")}
                </div>

                <div class="project-links">
                    ${
                        project.github !== "#"
                            ? `<a href="${project.github}" target="_blank" rel="noopener noreferrer">View on GitHub →</a>`
                            : `<span class="project-link-disabled">GitHub link coming soon</span>`
                    }
                </div>
            </div>
        `;

        projectsContainer.appendChild(projectCard);
    });
}