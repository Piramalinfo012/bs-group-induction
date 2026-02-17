
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
    description: "Welcome! Our HR team will help you with registration and check your documents. You will also get your Welcome Kit and Employee Handbook."
  },
  { 
    time: "10:30 – 11:00", 
    session: "Introduction", 
    conductedBy: "HR",
    description: "Meet your new team members. This is a friendly session to share who you are and what you do."
  },
  { 
    time: "11:00 – 12:00", 
    session: "About Our Company", 
    conductedBy: "Senior Management",
    description: "Learn about B. S. Sponge. We will share our story, from where we started to where we are now, and our future goals."
  },
  { 
    time: "12:00 – 12:30", 
    session: "How We Work", 
    conductedBy: "HR",
    description: "Understand our company structure. We will show you the different departments like Sales, Production, and IT, and how we all work together."
  },
  { 
    time: "12:30 – 01:30", 
    session: "Lunch Break", 
    conductedBy: "—",
    description: "It's time for lunch. Enjoy a meal at the canteen and chat with your colleagues.",
    isBreak: true
  },
  { 
    time: "01:30 – 02:30", 
    session: "HR Rules & Policies", 
    conductedBy: "HR",
    description: "We will explain important rules like attendance, leave types (Casual, Medical, etc.), and how to maintain good conduct at work."
  },
  { 
    time: "02:30 – 03:15", 
    session: "Salary & Benefits", 
    conductedBy: "HR",
    description: "Learn about your salary, PF, insurance, and other benefits like help with children's education."
  },
  { 
    time: "03:15 – 03:30", 
    session: "Tea Break", 
    conductedBy: "—",
    description: "Take a short break. Have some tea or coffee and recharge.",
    isBreak: true
  },
  { 
    time: "03:30 – 04:30", 
    session: "IT & Computer Access", 
    conductedBy: "IT Team",
    description: "Our IT team will set up your email and system login. They will also explain how to keep data safe and get technical support."
  },
  { 
    time: "04:30 – 05:00", 
    session: "Q&A and Closing", 
    conductedBy: "HR",
    description: "Any questions? Ask us anything about today. We will also ask for your feedback to improve."
  }
];

export const DEPARTMENTS = [
  { name: "Sales & Marketing", description: "Getting customers and selling our products.", icon: "TrendingUp" },
  { name: "Finance & Accounts", description: "Managing money and budgets.", icon: "CreditCard" },
  { name: "HR & Admin", description: "Taking care of employees and office.", icon: "Users" },
  { name: "Production", description: "Making our steel products.", icon: "Factory" },
  { name: "Quality Control", description: "Checking product quality properly.", icon: "ShieldCheck" },
  { name: "Maintenance", description: "Fixing machines and equipment.", icon: "Activity" },
  { name: "IT & Systems", description: "Managing computers and software.", icon: "Laptop" },
  { name: "Safety (EHS)", description: "Keeping everyone safe at work.", icon: "HardHat" }
];

export const INDUCTION_DATA: InductionData = {
  companyName: "B. S. Sponge Private Limited",
  tagline: "Building Strength together.",
  mdMessage: {
    name: "Mr. Ashish Agrawal",
    title: "Managing Director",
    text: "At BS Group, we build the future. Every employee is important. Together, we want to be the best in the steel industry."
  },
  timeline: [
    { year: "2000", event: "Started in Raigarh." },
    { year: "2015", event: "Used new German technology." },
    { year: "2023", event: "Increased production capacity." },
    { year: "2024", event: "Started making Steel Pipes." },
    { year: "2026", event: "Planning global growth." }
  ],
  vision: "To be a top steel maker in India, known for good technology and green practices.",
  mission: "To make high-quality steel and improve infrastructure while protecting the environment.",
  businessVerticals: [
    { title: "Sponge Iron", description: "Main material for making steel.", icon: "factory" },
    { title: "BS TMX Bars", description: "Strong bars for construction.", icon: "activity" },
    { title: "BS Pipes", description: "Pipes for industrial use.", icon: "pipe" },
    { title: "Ferro Alloys", description: "Material for special steel.", icon: "layers" }
  ],
  policies: {
    codeOfConduct: {
      dos: [
        "Follow rules & instructions.",
        "Keep company secrets safe.",
        "Look neat & clean.",
        "Use computers carefully."
      ],
      donts: [
        "No alcohol/drugs on duty.",
        "Don't share private papers.",
        "Don't misuse company items.",
        "No other business work."
      ]
    },
    attendance: {
      guidelines: [
        "90% monthly attendance needed.",
        "15 mins late allowed.",
        "Max 4 Late-ins per month.",
        "2 hours short leave monthly."
      ],
      timing: {
        corporate: "09:00 AM to 06:30 PM",
        breakfast: "15 mins (11:00 AM)",
        lunch: "45 mins (01:30 PM)"
      }
    },
    leave: {
      casual: ["12 Days per year", "Calculated from joining"],
      marriage: ["5 Days for your marriage", "Tell 15 days before"],
      bereavement: ["10 Days for parent loss"],
      encashment: {
        criteria: ["CLs & Coffs only", "End of March"],
        formula: "Based on salary"
      }
    },
    travel: {
      guidelines: ["Manager approval needed", "Stay in Company Guest House", "Give bills in 7 days"],
      allowances: [
        { grade: "Grade I", lodging: "₹3000", boarding: "₹1200", travel: "Air/AC Train", conveyance: "Taxi/Auto" },
        { grade: "Grade II", lodging: "₹2000", boarding: "₹1000", travel: "Air/AC Train", conveyance: "Taxi/Auto" }
      ]
    },
    insurance: {
      core: ["Accident Cover", "Disability Cover", "Injury Cover"],
      medical: ["Hospital Cover: ₹2 Lakhs", "Ambulance: ₹2000"],
      exclusions: ["Self-harm", "Illegal acts", "Risky behavior"]
    },
    childEducation: {
      eligibility: "Salary <= ₹30,000/month",
      benefit: "50% of school fees back",
      limit: "₹5,000 per child/month",
      applicability: "Max 2 children"
    }
  }
};
