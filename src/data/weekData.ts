import { WeekData } from '../types';

export const weekData: WeekData[] = [
  {
    title: "MLOps & DevOps Foundations",
    intro: "Week 1 establishes the core tools and practices that form the backbone of modern software development. These foundational skills are essential for any MLOps role, as they enable you to version control your code, containerize applications, and automate deployments. This knowledge will be used throughout your career to manage and deploy ML systems at scale.",
    goal: "Understand what MLOps is, and set up your tools",
    reflection: "By mastering Git, Docker, and CI/CD this week, you've built the foundation for modern software development. These tools are the building blocks that enable collaboration, reproducibility, and automation in ML systems. You now understand how to track changes, package applications, and automate deployments - skills that will be essential throughout your MLOps journey.",
    days: {
      "Mon": [
        "Learn what MLOps and DevOps mean (YouTube + madewithml.com overview)",
        "Install Git, VS Code, Python, Docker"
      ],
      "Tue": [
        "Learn Git basics (init, add, commit, push, pull)",
        "Create a GitHub repo and push your first project",
        "Set up Python virtual environments (venv)"
      ],
      "Wed": [
        "Learn what Docker is and why it's used",
        "Create your first Dockerfile with a Hello World Flask API",
        "Build and run the Docker container locally"
      ],
      "Thu": [
        "Understand environment configs (.env files, secrets)",
        "Push Docker app to GitHub",
        "Learn file structure for clean projects"
      ],
      "Fri": [
        "Learn CI/CD basics",
        "Create a GitHub Actions workflow to auto-build Docker image on push"
      ],
      "Sat-Sun": [
        "Journal what you learned this week",
        "Review Git, Docker, CI/CD",
        "Take a rest day or reinforce concepts"
      ]
    },
    deliverables: [
      "First GitHub repository",
      "Working Docker container",
      "Basic CI/CD workflow",
      "Learning journal"
    ],
    skills: ["Git", "Docker", "CI/CD", "Python", "Command Line"],
    resources: {
      documentation: [
        "Git Official Documentation",
        "Docker Getting Started Guide",
        "GitHub Actions Documentation",
        "Python Virtual Environments Guide"
      ],
      tutorials: [
        "Git & GitHub Crash Course (YouTube)",
        "Docker for Beginners (Docker Labs)",
        "CI/CD Pipeline Tutorial (GitHub)",
        "Python Development Setup Guide"
      ],
      tools: [
        "Git (Version Control)",
        "VS Code (Code Editor)",
        "Docker Desktop",
        "Python 3.8+"
      ]
    },
    prerequisites: [
      "Basic command line knowledge",
      "Python fundamentals",
      "Understanding of web APIs",
      "GitHub account"
    ],
    outcomes: [
      "Ability to use Git for version control",
      "Understanding of containerization with Docker",
      "Basic CI/CD pipeline setup",
      "Clean project structure practices"
    ],
    tips: [
      "Start with simple Git commands and gradually build complexity",
      "Use Docker Hub to explore existing containers",
      "Keep your first CI/CD pipeline simple",
      "Document everything you learn in your journal"
    ]
  },
  {
    title: "Serve a Model via API",
    intro: "Week 2 bridges the gap between data science and production engineering. You'll learn how to take a trained model and make it accessible to the world through an API. This is a critical skill in MLOps, as it represents the transition from experimental notebooks to production-ready systems that can serve predictions at scale.",
    goal: "Train and deploy a simple ML model as an API",
    reflection: "This week you've transformed ML models from static files into living, breathing services. You now understand how to wrap models in APIs, containerize them, and set up automated testing. These skills bridge the gap between data science and production engineering, enabling you to deploy models that can serve real-world predictions at scale.",
    days: {
      "Mon": [
        "Train a simple Scikit-learn model on Iris or Titanic dataset",
        "Save it as model.pkl"
      ],
      "Tue": [
        "Build a Flask or FastAPI app that loads model.pkl and predicts",
        "Test API locally"
      ],
      "Wed": [
        "Dockerize the API",
        "Make sure it works inside a container"
      ],
      "Thu": [
        "Expose the container to localhost (port mapping)",
        "Learn about curl/Postman testing"
      ],
      "Fri": [
        "Add GitHub Actions CI/CD to your project",
        "Trigger image build and test on push"
      ],
      "Sat-Sun": [
        "Polish README.md (include screenshots, how-to-run steps)",
        "Write a blog post or LinkedIn post about your project"
      ]
    },
    deliverables: [
      "Working ML API with endpoints",
      "Docker container with ML model",
      "CI/CD pipeline for the ML model",
      "Public blog post"
    ],
    skills: ["Scikit-learn", "Flask/FastAPI", "API Design", "Containerization", "ML Deployment"],
    resources: {
      documentation: [
        "Scikit-learn User Guide",
        "FastAPI Documentation",
        "Flask Documentation",
        "Docker Compose Guide"
      ],
      tutorials: [
        "Build an ML API with FastAPI",
        "Containerizing ML Models",
        "API Testing with Postman",
        "Writing Technical Blog Posts"
      ],
      tools: [
        "Scikit-learn",
        "FastAPI/Flask",
        "Postman",
        "Docker Compose"
      ]
    },
    prerequisites: [
      "Week 1 completion",
      "Basic ML knowledge",
      "Python web frameworks familiarity",
      "REST API concepts"
    ],
    outcomes: [
      "Deploy ML models via API",
      "Handle API requests/responses",
      "Containerize ML applications",
      "Write technical documentation"
    ],
    tips: [
      "Start with a simple model before adding complexity",
      "Use FastAPI for automatic API documentation",
      "Test your API thoroughly with different inputs",
      "Document API endpoints clearly in README"
    ]
  },
  {
    title: "Kubernetes & Cloud Basics",
    intro: "Week 3 introduces you to the world of container orchestration and cloud infrastructure. Kubernetes is the industry standard for deploying and managing containerized applications at scale. Understanding how to deploy ML systems to the cloud and manage them with Kubernetes is crucial for handling production ML workloads.",
    goal: "Learn Kubernetes and deploy your container",
    reflection: "You've now entered the world of container orchestration and cloud infrastructure. With Kubernetes knowledge, you can manage and scale ML applications across clusters of machines. This is essential for production ML systems that need high availability, scalability, and efficient resource management. Your Docker skills from earlier weeks now extend to managing entire clusters of containers.",
    days: {
      "Mon": [
        "Learn K8s terms: pod, deployment, service, ingress",
        "Install Minikube locally"
      ],
      "Tue": [
        "Write a basic deployment.yaml and service.yaml",
        "Deploy your Docker app to Minikube"
      ],
      "Wed": [
        "Learn kubectl basics (apply, describe, logs, exec)",
        "Debug a failing pod"
      ],
      "Thu": [
        "Learn about cloud VMs (Oracle, AWS, etc.)",
        "Set up a VPS and install Docker/Kubernetes (or K3s)"
      ],
      "Fri": [
        "Deploy your model API on your cloud server",
        "Share link with friends/testers"
      ],
      "Sat-Sun": [
        "Reflect, review notes",
        "Polish code and infra files"
      ]
    },
    deliverables: [
      "Working Kubernetes deployment",
      "Public endpoint for your API",
      "Infrastructure documentation",
      "Basic cloud setup"
    ],
    skills: ["Kubernetes", "Cloud Infrastructure", "YAML", "Networking", "Debugging"],
    resources: {
      documentation: [
        "Kubernetes Concepts Guide",
        "Minikube Documentation",
        "kubectl Command Guide",
        "Cloud Provider Docs"
      ],
      tutorials: [
        "Kubernetes for Beginners",
        "Deploy to K8s Step-by-Step",
        "Cloud Server Setup Guide",
        "K8s Debugging Patterns"
      ],
      tools: [
        "Minikube",
        "kubectl",
        "K3s",
        "Cloud Provider CLI"
      ]
    },
    prerequisites: [
      "Docker containerization",
      "Basic networking knowledge",
      "Linux fundamentals",
      "YAML syntax"
    ],
    outcomes: [
      "Deploy apps to Kubernetes",
      "Manage K8s resources",
      "Debug container issues",
      "Cloud infrastructure setup"
    ],
    tips: [
      "Use Minikube for local learning",
      "Keep resource requests modest",
      "Master kubectl commands",
      "Document deployment steps"
    ]
  },
  {
    title: "Monitoring, Logs & Model Tracking",
    intro: "Week 4 focuses on the operational aspects of ML systems. In production, it's crucial to monitor model performance, track data drift, and maintain system health. These observability skills are what separate hobbyist ML projects from professional MLOps implementations.",
    goal: "Add observability to your deployed model",
    reflection: "This week has equipped you with the observability skills needed for production ML systems. You now understand how to monitor model performance, track experiments, and maintain system health. These skills are crucial for detecting issues early, ensuring model reliability, and maintaining high-quality ML services in production.",
    days: {
      "Mon": [
        "Learn about monitoring in ML (why it's needed)",
        "Understand tools: Prometheus, Grafana, MLflow"
      ],
      "Tue": [
        "Add logging to your Flask app (requests, exceptions)",
        "Format logs as JSON"
      ],
      "Wed": [
        "Learn how Docker logs work",
        "Connect logs to a file or external system"
      ],
      "Thu": [
        "Install MLflow or Weights & Biases locally",
        "Track basic training metrics"
      ],
      "Fri": [
        "Add model version tracking to your training code",
        "Tag versions and store artifacts"
      ],
      "Sat-Sun": [
        "Build a small dashboard with Streamlit or Gradio to show your model usage",
        "Post your insights online"
      ]
    },
    deliverables: [
      "Monitored ML application",
      "Dashboard for metrics",
      "Version-tracked models",
      "Structured logging"
    ],
    skills: ["Monitoring", "MLflow", "Observability", "Dashboarding", "DevOps"],
    resources: {
      documentation: [
        "Prometheus Documentation",
        "Grafana Tutorials",
        "MLflow Tracking Guide",
        "Python Logging Best Practices"
      ],
      tutorials: [
        "Setting up Prometheus & Grafana",
        "MLflow Quick Start",
        "Logging in Production",
        "Building ML Dashboards"
      ],
      tools: [
        "Prometheus",
        "Grafana",
        "MLflow",
        "Streamlit"
      ]
    },
    prerequisites: [
      "Working ML API",
      "Basic metrics knowledge",
      "Python logging concepts",
      "Dashboard design basics"
    ],
    outcomes: [
      "Monitor ML systems",
      "Track model performance",
      "Implement logging",
      "Create dashboards"
    ],
    tips: [
      "Start with basic metrics",
      "Use structured logging",
      "Keep dashboards simple",
      "Automate metric collection"
    ]
  },
  {
    title: "Infrastructure as Code",
    intro: "Week 5 teaches you how to automate infrastructure setup using code. This is essential for reproducible deployments and scaling ML systems. Infrastructure as Code (IaC) ensures your environments are consistent and can be version controlled, a crucial practice in professional MLOps.",
    goal: "Automate deployment and infrastructure setup",
    reflection: "You've learned to treat infrastructure as code, enabling reproducible and automated deployments. This is crucial for maintaining consistent environments across development and production. Your ability to version control infrastructure, manage secrets, and automate deployments makes you valuable in modern ML teams where infrastructure reliability is as important as the models themselves.",
    days: {
      "Mon": [
        "Learn about Terraform (basics, syntax)",
        "Install Terraform and apply a simple example (provision EC2 or VPS)"
      ],
      "Tue": [
        "Define infra for a model-serving project using Terraform",
        "Deploy Docker + model container on cloud via Terraform"
      ],
      "Wed": [
        "Read about secrets managers (AWS SSM, Hashicorp Vault)",
        "Store a secret in environment config securely"
      ],
      "Thu": [
        "Learn about automated backups, data persistence in infra",
        "Add to your project if applicable"
      ],
      "Fri": [
        "Write infrastructure documentation",
        "Refactor folder structure to be job-ready"
      ],
      "Sat-Sun": [
        "Review and consolidate Terraform, infra scripts",
        "Add to GitHub portfolio"
      ]
    },
    deliverables: [
      "Infrastructure as Code (IaC) setup",
      "Automated deployment",
      "Secure secrets management",
      "Comprehensive documentation"
    ],
    skills: ["Terraform", "IaC", "Security", "Documentation", "Cloud Architecture"],
    resources: {
      documentation: [
        "Terraform Documentation",
        "AWS/Cloud Provider Guides",
        "HashiCorp Vault Docs",
        "Infrastructure Patterns"
      ],
      tutorials: [
        "Terraform Getting Started",
        "IaC Best Practices",
        "Secrets Management",
        "Cloud Architecture Patterns"
      ],
      tools: [
        "Terraform",
        "HashiCorp Vault",
        "Cloud CLI tools",
        "Documentation tools"
      ]
    },
    prerequisites: [
      "Cloud platform basics",
      "Security fundamentals",
      "Version control mastery",
      "Documentation skills"
    ],
    outcomes: [
      "Automate infrastructure",
      "Manage secrets securely",
      "Document architecture",
      "Deploy with IaC"
    ],
    tips: [
      "Version control your Terraform files",
      "Use modules for reusability",
      "Never commit secrets",
      "Document all variables"
    ]
  },
  {
    title: "Project Week (Portfolio Build)",
    intro: "Week 6 is where you bring everything together in a real-world project. This is your opportunity to demonstrate your MLOps skills by building a complete system that showcases automated training, deployment, monitoring, and infrastructure management. This project will be a key piece in your portfolio for job applications.",
    goal: "Build a full project using everything you've learned",
    reflection: "This week represents the culmination of your technical learning. You've built a complete MLOps project that demonstrates your ability to create production-ready ML systems. This project showcases your skills in model deployment, monitoring, infrastructure management, and automation - exactly what employers look for in MLOps engineers.",
    days: {
      "Mon-Wed": [
        "Choose a project: Personal GPT AI email responder, Medium article summarizer with ML model, or Resume/job-matcher using NLP",
        "Build the model (or reuse)",
        "Wrap in an API",
        "Dockerize"
      ],
      "Thu-Fri": [
        "Add CI/CD",
        "Deploy to VPS or cloud",
        "Add monitoring",
        "Push to GitHub"
      ],
      "Sat-Sun": [
        "Write README, portfolio description, blog post",
        "Ask for feedback"
      ]
    },
    deliverables: [
      "Complete end-to-end MLOps project",
      "GitHub repository with documentation",
      "Live demo",
      "Technical blog post"
    ],
    skills: ["Project Planning", "System Design", "End-to-End Implementation", "Documentation"],
    resources: {
      documentation: [
        "System Design Patterns",
        "ML Project Structure",
        "Documentation Templates",
        "Portfolio Examples"
      ],
      tutorials: [
        "Building ML Projects",
        "Writing Technical Blogs",
        "Portfolio Presentation",
        "Project Architecture"
      ],
      tools: [
        "Project management tools",
        "Documentation generators",
        "Blogging platforms",
        "Portfolio templates"
      ]
    },
    prerequisites: [
      "All previous weeks completed",
      "Project planning skills",
      "Technical writing ability",
      "Time management"
    ],
    outcomes: [
      "Complete MLOps project",
      "Professional documentation",
      "Online presence",
      "Portfolio piece"
    ],
    tips: [
      "Choose a realistic scope",
      "Focus on clean code",
      "Document as you build",
      "Get early feedback"
    ]
  },
  {
    title: "Resume & Job Prep",
    intro: "Week 7 shifts focus to presenting your skills to potential employers. Your technical abilities are now solid, so it's time to package them effectively. This week helps you translate your projects and knowledge into a compelling story that resonates with hiring managers in the MLOps space.",
    goal: "Apply to jobs and prepare for technical interviews",
    reflection: "You've learned to present your technical skills in a way that resonates with employers. Your resume, portfolio, and interview preparation now effectively communicate your MLOps expertise. You understand how to discuss your projects professionally and demonstrate your value to potential employers.",
    days: {
      "Mon": [
        "Write or update your MLOps-focused resume",
        "Add your project links and GitHub"
      ],
      "Tue": [
        "Setup job alerts on LinkedIn, Wellfound, Otta",
        "Start tracking applications"
      ],
      "Wed": [
        "Practice Docker, Kubernetes interview questions (read 10 daily)"
      ],
      "Thu": [
        "Build a Notion or spreadsheet tracker for jobs",
        "Reach out to 3 recruiters"
      ],
      "Fri": [
        "Take one mock interview with ChatGPT or a friend"
      ],
      "Sat-Sun": [
        "Reflect: where are you strong/weak?",
        "Refactor portfolio projects if needed"
      ]
    },
    deliverables: [
      "MLOps-focused resume",
      "Job application strategy",
      "Interview preparation",
      "Network connections"
    ],
    skills: ["Resume Writing", "Interview Skills", "Networking", "Self-assessment"],
    resources: {
      documentation: [
        "Resume Templates",
        "Interview Guides",
        "MLOps Job Descriptions",
        "Networking Strategies"
      ],
      tutorials: [
        "Technical Interview Prep",
        "Resume Writing Guide",
        "LinkedIn Optimization",
        "Job Search Strategy"
      ],
      tools: [
        "Resume builders",
        "Job tracking tools",
        "LinkedIn Premium",
        "Interview prep platforms"
      ]
    },
    prerequisites: [
      "Complete portfolio",
      "Basic interview skills",
      "LinkedIn profile",
      "Communication skills"
    ],
    outcomes: [
      "Professional resume",
      "Interview readiness",
      "Job search strategy",
      "Network growth"
    ],
    tips: [
      "Tailor resume per job",
      "Practice mock interviews",
      "Track all applications",
      "Follow up regularly"
    ]
  },
  {
    title: "Final Polish & Apply",
    intro: "Week 8 is the launch pad for your MLOps career. With your skills sharp and portfolio polished, it's time to actively pursue opportunities. This week focuses on presenting yourself professionally and beginning your job search with confidence, knowing you have the skills to back up your applications.",
    goal: "Polish everything and apply like crazy",
    reflection: "You've reached the final milestone in your MLOps journey. Your portfolio, online presence, and job application strategy are now refined and professional. You're ready to enter the job market with confidence, backed by real technical skills and practical experience in building and deploying ML systems.",
    days: {
      "Mon-Wed": [
        "Polish GitHub READMEs",
        "Post one blog post and one LinkedIn summary",
        "Apply to 10–15 jobs"
      ],
      "Thu-Sun": [
        "Try a freelance job on Upwork or use your skills for a nonprofit",
        "Reach out to past contacts",
        "Keep track of application progress"
      ]
    },
    deliverables: [
      "Polished portfolio",
      "Multiple job applications",
      "Professional online presence",
      "Real-world experience"
    ],
    skills: ["Job Search", "Professional Networking", "Portfolio Presentation", "Career Strategy"],
    resources: {
      documentation: [
        "Job Application Best Practices",
        "Freelancing Guides",
        "Portfolio Optimization",
        "Follow-up Templates"
      ],
      tutorials: [
        "Effective Job Applications",
        "Freelancing Success",
        "Portfolio Presentation",
        "Interview Success Stories"
      ],
      tools: [
        "Job application trackers",
        "Freelance platforms",
        "Portfolio hosting",
        "Networking tools"
      ]
    },
    prerequisites: [
      "Complete portfolio",
      "Job search strategy",
      "Online presence",
      "Application materials"
    ],
    outcomes: [
      "Job applications submitted",
      "Freelance experience",
      "Professional network",
      "Career momentum"
    ],
    tips: [
      "Quality over quantity",
      "Follow up consistently",
      "Stay organized",
      "Keep learning"
    ],
    portfolioGuide: {
      title: "Your MLOps Portfolio Checklist",
      description: "By the end of this course, you should have the following projects in your GitHub portfolio:",
      projects: [
        {
          name: "Basic ML Model API",
          skills: ["FastAPI/Flask", "Docker", "CI/CD"],
          description: "A simple ML model (like Iris classifier) wrapped in a REST API and containerized."
        },
        {
          name: "MLOps Pipeline Project",
          skills: ["MLflow", "Monitoring", "Kubernetes"],
          description: "Complete ML system with training pipeline, monitoring, and deployment automation."
        },
        {
          name: "Infrastructure as Code Demo",
          skills: ["Terraform", "Cloud Infrastructure", "Security"],
          description: "Example of automated cloud infrastructure setup for ML workloads."
        },
        {
          name: "Production ML Application",
          skills: ["Full Stack", "ML Engineering", "DevOps"],
          description: "Real-world application (like the email responder or article summarizer) showcasing end-to-end MLOps."
        },
        {
          name: "Monitoring Dashboard",
          skills: ["Data Visualization", "Metrics", "Frontend"],
          description: "Custom dashboard for ML model monitoring and performance tracking."
        }
      ],
      tips: [
        "Each project should have a professional README with setup instructions",
        "Include architecture diagrams and documentation",
        "Demonstrate best practices in code organization",
        "Show testing and monitoring implementations",
        "Highlight security considerations and proper secret management"
      ]
    }
  }
];