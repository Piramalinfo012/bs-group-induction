
import { InductionData } from './types';

export interface OrientationSlot {
  time: string;
  session: string;
  conductedBy: string;
  description: string;
  isBreak?: boolean;
}

export const INDUCTION_FLOW_DAY_1: OrientationSlot[] = [
  { 
    time: "10:00 – 10:30", 
    session: "Welcome & Registration", 
    conductedBy: "HR Team",
    description: "Your official journey begins! Our HR team will assist you with the onboarding registration, document verification (ID, Education, Experience), and issue your personalized Welcome Kit including the Employee Handbook."
  },
  { 
    time: "10:30 – 11:00", 
    session: "Introduction of New Employees", 
    conductedBy: "HR",
    description: "A chance to meet your future collaborators. We foster a culture of transparency; this ice-breaking session allows everyone to share their aspirations, background, and unique skills with the team."
  },
  { 
    time: "11:00 – 12:00", 
    session: "About the Company", 
    conductedBy: "Senior Management",
    description: "Experience the legacy of B. S. Sponge Private Limited. We'll cover our evolution from a vision in 2000 to reaching 345,000 TPA capacity in 2023. Understanding our 'History, Vision, Mission, and Values' is key to alignment."
  },
  { 
    time: "12:00 – 12:30", 
    session: "Organization Structure", 
    conductedBy: "HR",
    description: "Learn how we operate. We'll explain the hierarchy of BS Group, key reporting lines, and how our 8+ specialized departments (Sales, Finance, Production, HR, IT, etc.) work together like a well-oiled machine."
  },
  { 
    time: "12:30 – 01:30", 
    session: "Lunch Break", 
    conductedBy: "—",
    description: "Time for nourishment and networking. Join us at the canteen for a curated meal where you can interact with colleagues across different departments in a relaxed environment.",
    isBreak: true
  },
  { 
    time: "01:30 – 02:30", 
    session: "HR Policies", 
    conductedBy: "HR",
    description: "Knowledge is power. We deep-dive into the Attendance Policy (90% target), Leave Policy (Casual, Marriage, Bereavement), and our ethical Code of Conduct to ensure a disciplined and professional workspace."
  },
  { 
    time: "02:30 – 03:15", 
    session: "Compensation & Benefits", 
    conductedBy: "HR",
    description: "We care for you. Detailed walkthrough of the payroll process, EPF & ESIC benefits, Group Insurance (up to ₹2 Lakh coverage), and special allowances like Child Education reimbursement for eligible employees."
  },
  { 
    time: "03:15 – 03:30", 
    session: "Tea Break", 
    conductedBy: "—",
    description: "A quick refreshment break. Grab a cup of tea or coffee to stay energized for the technical and digital orientation sessions coming up.",
    isBreak: true
  },
  { 
    time: "03:30 – 04:30", 
    session: "IT Systems & Tools", 
    conductedBy: "IT Team",
    description: "Get connected. Our IT experts will help you set up your official Email ID, ERP login, and brief you on data security, digital resource usage, and internal ticketing for technical support."
  },
  { 
    time: "04:30 – 05:00", 
    session: "Q&A and Wrap-up", 
    conductedBy: "HR",
    description: "Clarify any doubts. This open session is for you to ask questions about today's modules. We'll wrap up with a quick feedback form to help us improve your onboarding experience."
  }
];

export const DEPARTMENTS = [
  { name: "Sales & Marketing", description: "Driving growth and client relationships.", icon: "TrendingUp" },
  { name: "Finance & Accounts", description: "Precision in budgeting and financial health.", icon: "CreditCard" },
  { name: "HR & Admin", description: "Nurturing talent and workplace culture.", icon: "Users" },
  { name: "Production", description: "Heart of our manufacturing excellence.", icon: "Factory" },
  { name: "Quality Control", description: "Ensuring zero-defect steel production.", icon: "ShieldCheck" },
  { name: "Maintenance", description: "Keeping our massive infrastructure running.", icon: "Activity" },
  { name: "IT & Systems", description: "Digital backbone of our operations.", icon: "Laptop" },
  { name: "Safety (EHS)", description: "Environment, Health, and Safety first.", icon: "HardHat" }
];

export const INDUCTION_DATA: InductionData = {
  companyName: "B. S. Sponge Private Limited",
  tagline: "Making Strength. Building Future.",
  mdMessage: {
    name: "Mr. Ashish Agrawal",
    title: "Managing Director",
    text: "At BS Group, we don't just produce steel; we forge foundations for the future. Every employee is a pillar of our strength, and together we aim to redefine technical excellence in the global power and steel division."
  },
  timeline: [
    { year: "2000", event: "Founded in Taraimal, Raigarh." },
    { year: "2015", event: "Integrated German Thermex technology for TMT bars." },
    { year: "2023", event: "Reached 345,000 TPA capacity and Ferro Alloys launch." },
    { year: "2024", event: "Entered the Steel Pipe industry with BS Pipes." },
    { year: "2026", event: "Vision 2026: Global Expansion & Sustainability Drive." }
  ],
  vision: "To be the leading steel manufacturer in India and beyond, recognized for our cutting-edge technology, sustainability, and ability to drive progress.",
  mission: "To deliver unparalleled quality and innovation in steel production, enhancing infrastructure and industry standards while committing to sustainable practices.",
  businessVerticals: [
    { title: "Sponge Iron", description: "Primary raw material for steel-making.", icon: "factory" },
    { title: "BS TMX Bars", description: "Premium high-strength construction bars.", icon: "activity" },
    { title: "BS Pipes", description: "Precision-engineered industrial piping.", icon: "pipe" },
    { title: "Ferro Alloys", description: "Critical additive for advanced metallurgy.", icon: "layers" }
  ],
  policies: {
    codeOfConduct: {
      dos: [
        "Follow company regulations & lawful instructions.",
        "Maintain strict confidentiality during/after service.",
        "Maintain neat appearance & personal hygiene.",
        "Use company digital resources responsibly."
      ],
      donts: [
        "Don't consume intoxicants on duty.",
        "Don't disclose sensitive institutional documents.",
        "Don't misuse company assets or resources.",
        "Don't engage in private trade without approval."
      ]
    },
    attendance: {
      guidelines: [
        "90% minimum monthly attendance required.",
        "15 minutes late relaxation allowed (Buffer).",
        "Max 4 Late-In entries per month allowed.",
        "2 hours leave during office hours allowed/month."
      ],
      timing: {
        corporate: "09:00 AM to 06:30 PM",
        breakfast: "15m (11:00 AM Slot)",
        lunch: "45m (01:30 PM Slot)"
      }
    },
    leave: {
      casual: ["12 Days per financial year", "Pro-rata basis joining month"],
      marriage: ["5 Days for self-marriage", "15 days prior notice"],
      bereavement: ["10 Days for death of parent"],
      encashment: {
        criteria: ["CLs & Coffs only", "Cut-off Mar 31st"],
        formula: "Eligible Days × (Salary / 30)"
      }
    },
    travel: {
      guidelines: ["Prior HOD approval is mandatory", "Use CPA (Company Accommodation)", "Submit bills within 7 days"],
      allowances: [
        { grade: "Grade I", lodging: "₹3000", boarding: "₹1200", travel: "Air/AC Train", conveyance: "Taxi/Auto" },
        { grade: "Grade II", lodging: "₹2000", boarding: "₹1000", travel: "Air/AC Train", conveyance: "Taxi/Auto" }
      ]
    },
    insurance: {
      core: ["Accidental Death", "Permanent Total Disability", "Temporary Total Disablement"],
      medical: ["Accidental Hospitalization: ₹2L", "Ambulance: ₹2K"],
      exclusions: ["Suicide/Self-harm", "Radioactivity risks", "Criminal acts"]
    },
    childEducation: {
      eligibility: "Employees earning ≤ ₹30,000/month",
      benefit: "50% academic fees reimbursement",
      limit: "₹5,000 per child/month",
      applicability: "Extended to max 2 children"
    }
  }
};
