const projects = [
    {
        title: "E-Commerce Data Engineering Pipeline",
        role: "Data Engineering",
        description:
            "Built an end-to-end E-Commerce Data Engineering pipeline using Python, SQL, Pandas, and Snowflake to process, validate, clean, transform, and analyze customer, order, product, and order-item datasets. Implemented a structured RAW → STAGING → ANALYTICS data warehouse architecture in Snowflake and created analytical datasets for business reporting.",
        technologies: [
            "Python",
            "SQL",
            "Pandas",
            "Snowflake",
            "Git",
            "GitHub",
            "VS Code"
        ],
        features: [
            "Built an end-to-end ETL/ELT data pipeline.",
            "Performed data profiling, validation, cleaning, and transformation using Python.",
            "Loaded 99K+ orders and 112K+ order items into Snowflake.",
            "Designed RAW, STAGING, and ANALYTICS warehouse layers.",
            "Created SALES_DATA, ORDER_SUMMARY, CUSTOMER_SUMMARY, and CATEGORY_SUMMARY analytical tables.",
            "Implemented data quality and reconciliation checks.",
            "Used write_pandas() for efficient DataFrame-to-Snowflake loading.",
            "Managed the project using Git and GitHub."
        ],
        image: "assets/Projects/snowflake-ecommerce.png",
        github: "#",
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
    },

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
    }
];


const projectsContainer = document.getElementById("projects-container");

if (projectsContainer) {

    projects.forEach((project) => {

        const projectCard = document.createElement("article");

        projectCard.className = "project-card";


        const featuresHTML = project.features
            ? `
                <div class="project-features">
                    <h4>Key Features</h4>
                    <ul>
                        ${project.features
                            .map((feature) => `<li>${feature}</li>`)
                            .join("")}
                    </ul>
                </div>
            `
            : "";


        const imageHTML = project.image
            ? `
                <div class="project-image">
                    <img src="${project.image}" alt="${project.title}">
                </div>
            `
            : "";


        projectCard.innerHTML = `

            ${imageHTML}

            <div class="project-content">

                <p class="project-status">
                    ${project.status}
                </p>


                <h3>
                    ${project.title}
                </h3>


                <p class="project-role">
                    <strong>Role:</strong> ${project.role}
                </p>


                <p class="project-description">
                    ${project.description}
                </p>


                ${featuresHTML}


                <div class="project-technologies">

                    ${project.technologies
                        .map((tech) => `<span>${tech}</span>`)
                        .join("")}

                </div>


                <div class="project-links">

                    ${
                        project.github !== "#"
                            ? `
                                <a href="${project.github}"
                                   target="_blank"
                                   rel="noopener noreferrer">

                                    View on GitHub →

                                </a>
                              `
                            : `
                                <span class="project-link-disabled">
                                    GitHub link coming soon
                                </span>
                              `
                    }

                </div>

            </div>
        `;


        projectsContainer.appendChild(projectCard);

    });
}