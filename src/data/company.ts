import type { OfficialAccount, PaymentMethod, TeamMember } from "@/types";

export const team: TeamMember[] = [
  {
    id: "director",
    name: "Muhammad Tahir Raahi",
    role: "Founder & Managing Director",
    bio: "Started Raahi in 2012 after fifteen years as a group leader taking pilgrims from Lahore. Still leads one Ramadan group every year.",
    languages: ["Urdu", "Punjabi", "English", "Arabic"],
  },
  {
    id: "hamza",
    name: "Hamza Siddiqui",
    role: "Senior Umrah Consultant · Lahore",
    bio: "Your first call for package selection and hotel advice. Has visited every hotel we sell.",
    languages: ["Urdu", "English"],
  },
  {
    id: "maryam",
    name: "Maryam Zafar",
    role: "Consultant for Women & Family Travel",
    bio: "Guides women travelling without a mahram and families with young children through every step.",
    languages: ["Urdu", "English"],
  },
  {
    id: "bilal",
    name: "Bilal Ahmed",
    role: "Group Departures & Operations",
    bio: "Manages masjid and community groups, airport check-ins and Makkah–Madinah transfers.",
    languages: ["Urdu", "Punjabi", "Arabic"],
  },
  {
    id: "faisal",
    name: "Faisal Qureshi",
    role: "Visa & Documentation",
    bio: "Checks every passport and photo before submission so applications are accepted the first time.",
    languages: ["Urdu", "English"],
  },
  {
    id: "abdullah",
    name: "Abdullah Al-Harbi",
    role: "Ground Partner · Makkah & Madinah",
    bio: "Our Saudi-licensed partner's representative who meets every Raahi group at Jeddah and Madinah airports.",
    languages: ["Arabic", "Urdu", "English"],
  },
];

export const milestones = [
  { year: "2012", title: "Raahi founded in Lahore", detail: "A two-desk office in Gulberg and one group of 38 pilgrims in our first Ramadan." },
  { year: "2015", title: "Licensed Umrah operator", detail: "Enrolment with the Ministry of Religious Affairs and our first Saudi ground partner agreement." },
  { year: "2018", title: "Karachi branch opens", detail: "Departures from Karachi and Sialkot added; 2,000 pilgrims served in a single year." },
  { year: "2021", title: "Transparent pricing online", detail: "We published every package price on our website, the first agency in our circle to do so." },
  { year: "2023", title: "Islamabad branch & 24/7 WhatsApp desk", detail: "A dedicated night shift answers pilgrims in Saudi Arabia at any hour." },
  { year: "2026", title: "18,000 pilgrims and counting", detail: "Rated 4.8 on Google by more than 1,200 travellers." },
];

export const paymentMethods: PaymentMethod[] = [
  { id: "bank", name: "Bank transfer", detail: "HBL and Meezan Bank accounts in the company's name", icon: "account_balance" },
  { id: "jazzcash", name: "JazzCash", detail: "Business account, receipt within minutes", icon: "smartphone" },
  { id: "easypaisa", name: "Easypaisa", detail: "Business account, receipt within minutes", icon: "phone_android" },
  { id: "card", name: "Debit / credit card", detail: "Visa, Mastercard and PayPak at any office", icon: "credit_card" },
  { id: "cash", name: "Cash at office", detail: "Receipt issued on the spot", icon: "payments" },
];

export const officialAccounts: OfficialAccount[] = [
  { bank: "Habib Bank Limited (HBL)", title: "Raahi Umrah & Travel (Pvt.) Ltd.", accountNumber: "XXXX-XXXXXXX-XX (placeholder)", iban: "PK00 HABB 0000 0000 0000 0000 (placeholder)" },
  { bank: "Meezan Bank", title: "Raahi Umrah & Travel (Pvt.) Ltd.", accountNumber: "XXXX-XXXXXXX-XX (placeholder)", iban: "PK00 MEZN 0000 0000 0000 0000 (placeholder)" },
  { bank: "JazzCash Business", title: "Raahi Umrah & Travel", accountNumber: "0300 123 4567 (placeholder)", iban: "—" },
  { bank: "Easypaisa Business", title: "Raahi Umrah & Travel", accountNumber: "0300 123 4567 (placeholder)", iban: "—" },
];

export const whyRaahi = [
  {
    icon: "price_check",
    title: "The price you see is the price you pay",
    detail: "Every package lists Quad, Triple and Double prices per person with the date they were last updated. No service charge surprises on the final invoice.",
  },
  {
    icon: "hotel",
    title: "Hotels we have slept in ourselves",
    detail: "Our consultants inspect every hotel we sell. Distance to the Haram is shown in metres and minutes, and 'shuttle' hotels are clearly marked.",
  },
  {
    icon: "verified_user",
    title: "Licensed, registered and on paper",
    detail: "Ministry of Religious Affairs enrolment, Punjab DTS licence and SECP registration. Written booking confirmations and receipts for every rupee.",
  },
  {
    icon: "support_agent",
    title: "A real person, day and night",
    detail: "Named consultants in Pakistan and a Saudi ground partner who meets you at the airport. WhatsApp answered 24/7 while you travel.",
  },
  {
    icon: "elderly",
    title: "Built for families and elders",
    detail: "Walkable hotels, wheelchair arrangements, connecting rooms, child discounts and a relaxed pace on every family package.",
  },
  {
    icon: "school",
    title: "Training before you fly",
    detail: "A step-by-step Umrah session, printed duas and a WhatsApp group with your group leader so first-timers feel confident.",
  },
];

export const howItWorks = [
  { step: "01", title: "Tell us your plan", detail: "Pick a package or send the 2-minute planner: dates, travellers, budget, departure city.", icon: "edit_note" },
  { step: "02", title: "Get a written quote", detail: "A named consultant calls within 30 minutes and sends a quote with hotels, flights and the exact price.", icon: "receipt_long" },
  { step: "03", title: "Confirm with a deposit", detail: "Pay PKR 50,000 per person to an official account. We start your visa the same day.", icon: "lock" },
  { step: "04", title: "Travel with Raahi", detail: "Training session, e-visa, tickets and hotel vouchers delivered. Our team meets you at both ends.", icon: "flight_takeoff" },
];
