export const personalInfo = {
  name: "Rishikesh Kumar",
  role: "Python & Django Backend Developer",
  tagline: "80+ REST APIs · 15 Django Apps · 8 Third-Party Integrations",
  location: "Kolkata, WB 700102, India",
  phone: "+91 6290712466",
  phoneAlt: "+91 8583942422",
  email: "rishikeshkumarssm55@gmail.com",
  emailAlt: "codebyrishi555@gmail.com",
  github: "https://github.com/codebyrishi3075",
  linkedin: "https://www.linkedin.com/in/rishikesh-kumar-209935203/",
  company: "Famunite Health & Lifestyle Pvt. Ltd.",
  companyUrl: "https://www.famunitehealthcare.com",
  started: "March 2026",
  stack: "Python 3.13, Django 4.x, DRF, PostgreSQL, Celery, Redis, AWS S3, Agora",
  bio: "I'm a Python & Django Backend Developer based in Kolkata, India, working as the primary backend engineer on a production-deployed healthcare super-app at Famunite Health & Lifestyle Pvt. Ltd. I designed and built a 15-app DRF backend from schema to deployment — covering doctor consultations, lab testing, medicine delivery, physiotherapy, eye care, dual-mode wallet, and a universal payment system across 6 service types. I set up a full GitHub Actions CI/CD pipeline with automated checks, SSH deployment, health verification, and auto-rollback.",
};

export const stats = [
  { value: 80, label: "REST API Endpoints", suffix: "+" },
  { value: 15, label: "Django Apps Built", suffix: "" },
  { value: 8, label: "Third-Party Integrations", suffix: "" },
  { value: 16, label: "Celery Periodic Tasks", suffix: "" },
];

export const skillCategories = [
  {
    title: "Backend Core",
    icon: "🐍",
    skills: [
      "Python 3.13",
      "Django 4.x",
      "Django REST Framework",
      "Django Channels",
      "Gunicorn ASGI",
    ],
  },
  {
    title: "APIs & Auth",
    icon: "🔐",
    skills: [
      "REST APIs",
      "JWT Auth",
      "Google OAuth 2.0",
      "OTP Verification",
      "Role-Based Access",
      "Rate Limiting",
    ],
  },
  {
    title: "Database & Cache",
    icon: "🗄️",
    skills: [
      "PostgreSQL",
      "Redis",
      "django-redis",
      "Query Optimization",
      "Git / GitHub",
      "Postman",
    ],
  },
  {
    title: "Async & Realtime",
    icon: "⚡",
    skills: [
      "Celery",
      "Celery Beat",
      "Redis Broker",
      "WebSockets",
      "Agora RTC",
      "Background Jobs",
    ],
  },
  {
    title: "Third-Party Integrations",
    icon: "🔗",
    skills: [
      "Razorpay",
      "1mg Medicine API",
      "Twilio SMS",
      "Firebase FCM",
      "Exotel",
      "AWS S3 / boto3",
      "Google OAuth",
    ],
  },
  {
    title: "DevOps & Deployment",
    icon: "🚀",
    skills: [
      "GitHub Actions",
      "Nginx",
      "PM2",
      "Ubuntu VPS",
      "CI/CD Pipeline",
      "Auto-Rollback",
    ],
  },
];

export const projects = [
  {
    id: 1,
    title: "Famunite Healthcare Platform Backend",
    description:
      "Sole backend engineer on a production-deployed healthcare super-app. 15 Django apps, 60+ models, 80+ REST endpoints serving 7 user roles across doctor consultations, lab testing, medicine delivery, physio, eye care, wallets, and memberships.",
    tags: ["Django", "DRF", "PostgreSQL", "Production"],
    links: {
      site: "https://www.famunitehealthcare.com",
    },
    featured: true,
  },
  {
    id: 2,
    title: "Unified Payment & Dual-Mode Wallet System",
    description:
      "Universal Payment model covering 6 service types with swappable gateway abstraction (Razorpay). Dual-mode wallet: POINTS_MODE (admin-gifted credits) and CASHBACK_MODE (earn-from-bookings). Append-only immutable ledgers for financial compliance with full refund pipeline.",
    tags: ["Razorpay", "Wallet", "Webhooks", "Immutable Ledger"],
    links: {},
    featured: true,
  },
  {
    id: 3,
    title: "Multi-Lab Aggregation & Async Infrastructure",
    description:
      "Pincode-based lab routing (ServiceabilityZone + LabTestMapping) — new lab onboarding via admin panel, zero code changes. 16 Celery Beat periodic tasks with retry logic covering OTP cleanup, booking TTL expiry, cashback unlock via 1mg delivery webhooks.",
    tags: ["Celery", "Redis", "1mg API", "Multi-Provider"],
    links: {},
    featured: false,
  },
  {
    id: 4,
    title: "CI/CD Pipeline & Real-Time Consultations",
    description:
      "Full GitHub Actions pipeline with Django checks, SSH deployment, migrations, 15-retry health checks, and auto-rollback. Agora RTC for video token generation. Django Channels + Redis WebSocket layer streaming patient vitals live to doctor screen.",
    tags: ["GitHub Actions", "Agora RTC", "WebSockets", "Exotel"],
    links: {
      github: "https://github.com/codebyrishi3075",
    },
    featured: false,
  },
  {
    id: 5,
    title: "Expense Tracker API (DRF)",
    description:
      "Django REST API with JWT auth, expense management, budget categories, monthly spending tracking. Supports categorization, date-range filtering, pagination, budget vs actual analysis. Dashboard APIs with category-wise and monthly summaries.",
    tags: ["DRF", "JWT", "PostgreSQL", "Dashboard APIs"],
    links: {
      github:
        "https://github.com/codebyrishi3075/SDLC-Group-Project-Expense-Tracked-API-USING-DRF",
    },
    featured: false,
  },
  {
    id: 6,
    title: "Cart Management Django",
    description:
      "Shopping cart web app with session handling, database usage, and dynamic interaction. AJAX-powered cart updates without page reload.",
    tags: ["Django", "AJAX", "Sessions", "SQLite"],
    links: {
      github: "https://github.com/codebyrishi3075/CartManagement-Django",
    },
    featured: false,
  },
];

export const experience = [
  {
    id: 1,
    company: "Famunite Health & Lifestyle Private Limited",
    role: "Python & Django Backend Developer",
    duration: "March 2026 – Present",
    current: true,
    points: [
      "80+ REST API endpoints across 15 Django apps, 60+ database models, 7 user roles deployed on Ubuntu VPS (Nginx + Gunicorn + PM2)",
      "Universal Payment model: 6 service types, swappable Razorpay abstraction, HMAC-SHA256 webhook verification, mixed wallet/gateway mode, immutable audit ledgers",
      "Dual-mode wallet: POINTS_MODE and CASHBACK_MODE with runtime config via SystemConfiguration model",
      "Multi-lab aggregation: pincode routing via ServiceabilityZone + LabTestMapping — zero code for new lab onboarding",
      "8 third-party integrations: Razorpay, 1mg, Twilio, Firebase FCM, Agora RTC, Exotel, AWS S3, Google OAuth 2.0",
      "16 Celery periodic tasks with retry logic for OTP cleanup, booking TTL expiry, cashback unlock",
      "Django Channels + Redis WebSocket layer for real-time vitals streaming to doctor screen",
      "GitHub Actions CI/CD: checks, SSH deploy, migrations, 15-retry health check, auto-rollback in under 60 seconds",
      "Security: HSTS, CORS, CSRF, JWT rotation + blacklist, per-endpoint rate limits, S3 pre-signed URLs",
    ],
  },
  {
    id: 2,
    company: "Webskitters Technology Solutions Pvt. Ltd.",
    role: "Django Backend Developer",
    duration: "January 2026 – March 2026",
    current: false,
    points: [
      "Implemented RESTful APIs for seamless frontend-backend communication",
      "Developed scalable backend systems for high-volume web applications",
      "Architected secure backend systems using latest security practices",
    ],
  },
];

export const education = [
  {
    id: 1,
    degree: "Python Django Developer (Certification)",
    institution: "WebSkitters Academy",
    duration: "August 2025 – March 2026",
    credential: "Python Django Certified",
    type: "certification",
  },
  {
    id: 2,
    degree: "Bachelor of Science — Physics (Hons.)",
    institution: "Veer Kunwar Singh University, Ara, Bihar",
    duration: "2019 – 2022",
    credential: "Total Marks: 953",
    type: "degree",
  },
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];
