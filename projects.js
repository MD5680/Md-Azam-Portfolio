// ============================================
// PROJECT DATA
// ============================================

const projects = [

    {
        title: "Classification of Healthcare Data Using Random Forest",

        description:
            "A machine learning project developed during my internship to classify healthcare data using the Random Forest algorithm. The project included data preprocessing, model training, and performance evaluation.",

        technologies: [
            "Python",
            "Pandas",
            "NumPy",
            "Scikit-learn",
            "Random Forest",
            "Matplotlib"
        ],

        image: "assets/Projects/Healthcare-Project.png",

        github:
            "https://github.com/MD5680/ML_Internship-",

        result:
            "Model Accuracy: 81.43%",

        status:
            "Completed"
    },


    // ============================================
    // E-COMMERCE BUSINESS ANALYTICS
    // ============================================

    {
        title: "E-Commerce Business Analytics",

        description:
            "An end-to-end data engineering and analytics project built with Databricks, PySpark, SQL, and Python. The project includes data ingestion, data quality checks, data exploration, data cleaning, data modeling, fact and dimension tables, gold business tables, and advanced SQL analysis.",

        technologies: [
            "Databricks",
            "PySpark",
            "Python",
            "SQL",
            "Apache Spark",
            "Git",
            "GitHub"
        ],

        image:
            "assets/Projects/ecommerce-business-analytics.png",

        github:
            "https://github.com/MD5680/Ecommerce-Business-Analytics.git",

        result:
            "3-task Databricks Job with task dependencies and Databricks Asset Bundles (YAML).",

        status:
            "Completed"
    }

];


// ============================================
// DISPLAY PROJECTS
// ============================================

function displayProjects() {

    const projectsContainer =
        document.getElementById("projects-container");


    // Check if the container exists

    if (!projectsContainer) {
        console.error("Projects container not found.");
        return;
    }


    // Clear existing content

    projectsContainer.innerHTML = "";


    // Loop through all projects

    projects.forEach((project) => {

        // Create project card

        const projectCard =
            document.createElement("div");

        projectCard.classList.add("project-card");


        // Create technologies HTML

        const technologiesHTML =
            project.technologies
                .map((technology) => {

                    return `<span>${technology}</span>`;

                })
                .join("");


        // Create project card content

        projectCard.innerHTML = `

            <img
                src="${project.image}"
                alt="${project.title}"
            >

            <div class="project-content">

                <h3>
                    ${project.title}
                </h3>


                <p>
                    ${project.description}
                </p>


                <div class="project-technologies">

                    ${technologiesHTML}

                </div>


                <p>
                    <strong>
                        ${project.result}
                    </strong>
                </p>


                <p>
                    Status:
                    <strong>
                        ${project.status}
                    </strong>
                </p>


                <br>


                <a
                    href="${project.github}"
                    target="_blank"
                    class="btn primary-btn"
                >

                    View on GitHub

                </a>

            </div>

        `;


        // Add project card to the website

        projectsContainer.appendChild(projectCard);

    });

}


// ============================================
// RUN FUNCTION
// ============================================

document.addEventListener(
    "DOMContentLoaded",
    displayProjects
);