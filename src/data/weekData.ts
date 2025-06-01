import { WeekData } from '../types';

export const weekData: WeekData[] = [
  {
    title: "MLOps & DevOps Foundations",
    goal: "Understand what MLOps is, and set up your tools",
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
    goal: "Train and deploy a simple ML model as an API",
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
    goal: "Learn Kubernetes and deploy your container",
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
    goal: "Add observability to your deployed model",
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
    goal: "Automate deployment and infrastructure setup",
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
    goal: "Build a full project using everything you've learned",
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
    goal: "Apply to jobs and prepare for technical interviews",
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
    goal: "Polish everything and apply like crazy",
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
    ]
  }
];