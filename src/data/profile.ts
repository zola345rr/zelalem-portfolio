export type SkillGroup = {
  title: string;
  items: string[];
  wide?: boolean;
};

export type ExperienceItem = {
  role: string;
  organisation: string;
  // Dates and detailed responsibilities are intentionally omitted:
  // they were not supplied, and this site does not invent them.
  note: string;
};

export const profile = {
  name: "Zelalem Addisu",
  greeting: "Hi, I'm Zelalem Addisu",
  headline:
    "Computer Science Graduate | Data Engineering, AI Training & LLM Evaluation",
  introduction:
    "I'm from Ethiopia and live in the United Kingdom. I work in data engineering, AI training and LLM evaluation: preparing and validating the data these systems depend on, and assessing model responses for accuracy, relevance and instruction following.",
  country: "Ethiopia",
  residence: "United Kingdom",
  locationLine:
    "Country: Ethiopia · Residence: United Kingdom · Remote · International",
  contactLocationLine:
    "Ethiopia · Residence: United Kingdom · Remote · International",
  projectsIntro:
    "My work covers data engineering, AI training and LLM evaluation, and data analysis, including AI Response Evaluation & Ranking, Data Annotation & Labelling, Quality Analysis & Review, and Fact-Checking & Research Tasks. The projects below describe what each type of work involves in practice.",
  contactIntro:
    "I'm available for remote work covering data engineering, AI training and LLM evaluation, and data analysis, AI Response Evaluation & Ranking, Data Annotation & Labelling, Quality Analysis & Review, Fact-Checking & Research Tasks — for one-off projects or ongoing work.",
  // Stated once, on the home page only: work is reviewed by Zelalem himself.
  reviewNote: "Reviewed by me personally",
  education: {
    institution: "University of Gondar",
    qualification: "Bachelor's degree in Computer Science",
    years: "2022–2025",
    gpa: "3.4",
  },
  experience: [
    {
      role: "AI Data Trainer and Data Engineering Intern",
      organisation: "Eyoha",
      note: "Dates and detailed responsibilities to be supplied by Zelalem — not added here to avoid inventing them.",
    },
  ] as ExperienceItem[],
  currentWork: "AI Training Data Annotation & Review",
  experienceAreas: [
    "AI Response Evaluation & Ranking",
    "Data Annotation & Labelling",
    "Quality Analysis & Review",
    "Fact-Checking & Research Tasks",
    "AI Training Data Annotation & Review",
  ],
  skills: [
    {
      title: "Programming & tooling",
      items: ["Python", "SQL", "R", "Bash / Linux", "Git"],
    },
    {
      title: "Data engineering",
      items: ["ETL", "Airflow", "PostgreSQL", "Docker", "REST APIs"],
    },
    {
      title: "AI & machine learning",
      items: ["Pandas", "NumPy", "scikit-learn", "PyTorch"],
    },
    {
      title: "Analysis & visualisation",
      items: ["Power BI", "Streamlit"],
    },
    {
      title: "Evaluation & review",
      items: [
        "AI Response Evaluation & Ranking",
        "Data Annotation & Labelling",
        "Quality Analysis & Review",
        "Fact-Checking & Research Tasks",
      ],
      wide: true,
    },
  ] as SkillGroup[],
  workflow: [
    { step: "Collect data", detail: "Gather the data a system will learn from." },
    { step: "Clean & transform (ETL)", detail: "Structure and prepare data so it can be used reliably." },
    { step: "Label for training", detail: "Annotate data to a written brief, with edge cases flagged rather than guessed." },
    { step: "Evaluate the model", detail: "Check responses for accuracy, relevance and instruction following." },
  ],
  contacts: {
    // GitHub and email are intentionally null: no GitHub URL was supplied,
    // and Zelalem's earlier instruction for his portfolio was to show no email.
    github: null as string | null,
    linkedin: "https://www.linkedin.com/in/zelalem-addisu-6265531a9",
    phone: "+251909098940",
    instagram: "https://www.instagram.com/z0la4x",
    instagramHandle: "@z0la4x",
    whatsapp: "https://wa.me/251909098940",
    email: null as string | null,
    // No external CV file is supplied. The footer Download CV button
    // generates the one-page A4 CV in the browser (see CvDownload).
    cvUrl: null as string | null,
  },
};

export type ProjectCategory =
  | "Data engineering and ETL"
  | "AI data training and LLM evaluation"
  | "Data analysis and visualization";

export type ProjectArea = {
  title: string;
  category: ProjectCategory;
  summary: string;
  tags: string[];
};

// Descriptive areas of work, NOT completed project case studies: no clients,
// dates, metrics or results are claimed for any of them.
export const projectAreas: ProjectArea[] = [
  {
    title: "AI Response Evaluation & Ranking",
    category: "AI data training and LLM evaluation",
    summary:
      "Model responses compared side by side and assessed for accuracy, relevance and instruction following, then ranked with a written reason for each ranking.",
    tags: ["LLM evaluation", "Ranking", "Fact-checking"],
  },
  {
    title: "Data Annotation & Labelling",
    category: "AI data training and LLM evaluation",
    summary:
      "Data labelled to a written brief, each item read and classified against the guidelines, with unclear edge cases flagged rather than guessed.",
    tags: ["AI training data", "Labelling", "Quality"],
  },
  {
    title: "Quality Analysis & Review",
    category: "AI data training and LLM evaluation",
    summary:
      "Completed annotation and evaluation work re-checked against the guidelines; anything below standard returned with a clear explanation.",
    tags: ["Review", "Quality analysis"],
  },
  {
    title: "Fact-Checking & Research Tasks",
    category: "AI data training and LLM evaluation",
    summary:
      "Claims verified against reliable sources — names, dates and figures confirmed, unsupported statements followed up, and each check recorded.",
    tags: ["Research", "Fact-checking"],
  },
  {
    title: "Data Engineering & ETL",
    category: "Data engineering and ETL",
    summary:
      "Data collected from source systems, cleaned and transformed, and loaded where it can be used — pipelines built to run reliably.",
    tags: ["ETL", "Data pipelines"],
  },
  {
    title: "Data Analysis & Visualisation",
    category: "Data analysis and visualization",
    summary:
      "Datasets explored to answer specific questions, with findings presented clearly in charts and dashboards.",
    tags: ["Analysis", "Visualisation"],
  },
];

export type Project = {
  slug: string;
  title: string;
  summary: string;
  category: ProjectCategory;
  status: "in progress" | "planned";
  tags: string[];
  problem: string;
  approach: string;
  results: string;
  limitations: string;
  githubUrl: string | null;
  demoUrl: string | null;
};

// No full case studies are published yet. The descriptive project areas
// above are the work on display; add a real case study here only with
// its real details, and leave GitHub/demo URLs empty if none exist.
export const projects: Project[] = [];

export const projectCategories: ProjectCategory[] = [
  "Data engineering and ETL",
  "AI data training and LLM evaluation",
  "Data analysis and visualization",
];

export const cvHeadline =
  "Computer Science Graduate | Data Engineering, AI Training & LLM Evaluation, Data Analysis, AI Response Evaluation & Ranking, Data Annotation & Labelling, Quality Analysis & Review, Fact-Checking & Research Tasks";
