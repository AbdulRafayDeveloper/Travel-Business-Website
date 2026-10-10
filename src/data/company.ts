import type { OfficialAccount, PaymentMethod, TeamMember } from "@/types";

export const team: TeamMember[] = [
  {
    id: "director",
    name: "Muhammad Tahir Raahi",
    role: "Founder and Managing Director",
    bio: "Started Raahi in 2012 after fifteen years as a group leader taking pilgrims from Lahore. He still leads one Ramadan group every year.",
    languages: ["Urdu", "Punjabi", "English", "Arabic"],
  },
  {
    id: "hamza",
    name: "Hamza Siddiqui",
    role: "Senior Umrah Consultant, Lahore",
    bio: "Your first call for choosing a package and picking a hotel. He has stayed in every hotel we sell.",
    languages: ["Urdu", "English"],
  },
  {
    id: "maryam",
    name: "Maryam Zafar",
    role: "Consultant for Women and Family Travel",
    bio: "Helps women travelling without a mahram and families with young children through every step.",
    languages: ["Urdu", "English"],
  },
  {
    id: "bilal",
    name: "Bilal Ahmed",
    role: "Group Departures and Operations",
    bio: "Looks after masjid and community groups, airport check-ins and the Makkah to Madinah transfers.",
    languages: ["Urdu", "Punjabi", "Arabic"],
  },
  {
    id: "faisal",
    name: "Faisal Qureshi",
    role: "Visa and Documentation",
    bio: "Checks every passport and photo before it goes in, so your application is accepted the first time.",
    languages: ["Urdu", "English"],
  },
  {
    id: "abdullah",
    name: "Abdullah Al-Harbi",
    role: "Ground Partner, Makkah and Madinah",
    bio: "Works for our Saudi licensed partner and meets every Raahi group at Jeddah and Madinah airports.",
    languages: ["Arabic", "Urdu", "English"],
  },
];

export const milestones = [
  { year: "2012", title: "Raahi opens in Lahore", detail: "Two desks in Gulberg and one group of 38 pilgrims in our first Ramadan." },
  { year: "2015", title: "Licensed as an Umrah operator", detail: "Enrolled with the Ministry of Religious Affairs and signed our first Saudi ground partner." },
  { year: "2018", title: "Karachi branch opens", detail: "Departures from Karachi and Sialkot added. We served 2,000 pilgrims in a single year." },
  { year: "2021", title: "Prices published online", detail: "We put every package price on the website, the first agency in our circle to do so." },
  { year: "2023", title: "Islamabad branch and a 24 hour WhatsApp desk", detail: "A night shift now answers pilgrims in Saudi Arabia at any hour." },
  { year: "2026", title: "18,000 pilgrims and counting", detail: "Rated 4.8 on Google by more than 1,200 travellers." },
];

export const paymentMethods: PaymentMethod[] = [
  { id: "bank", name: "Bank transfer", detail: "HBL and Meezan Bank accounts in the company name", icon: "account_balance" },
  { id: "jazzcash", name: "JazzCash", detail: "Business account, receipt within minutes", icon: "smartphone" },
  { id: "easypaisa", name: "Easypaisa", detail: "Business account, receipt within minutes", icon: "phone_android" },
  { id: "card", name: "Debit or credit card", detail: "Visa, Mastercard and PayPak at any office", icon: "credit_card" },
  { id: "cash", name: "Cash at the office", detail: "Receipt issued on the spot", icon: "payments" },
];

export const officialAccounts: OfficialAccount[] = [
  { bank: "Habib Bank Limited (HBL)", title: "Raahi Umrah & Travel (Pvt.) Ltd.", accountNumber: "XXXX-XXXXXXX-XX (placeholder)", iban: "PK00 HABB 0000 0000 0000 0000 (placeholder)" },
  { bank: "Meezan Bank", title: "Raahi Umrah & Travel (Pvt.) Ltd.", accountNumber: "XXXX-XXXXXXX-XX (placeholder)", iban: "PK00 MEZN 0000 0000 0000 0000 (placeholder)" },
  { bank: "JazzCash Business", title: "Raahi Umrah & Travel", accountNumber: "0300 123 4567 (placeholder)", iban: "Not applicable" },
  { bank: "Easypaisa Business", title: "Raahi Umrah & Travel", accountNumber: "0300 123 4567 (placeholder)", iban: "Not applicable" },
];

export const whyRaahi = [
  {
    icon: "price_check",
    title: "The price you see is the price you pay",
    detail: "Every package lists Quad, Triple and Double prices per person, with the date they were last checked. There are no service charges waiting for you on the final invoice.",
  },
  {
    icon: "hotel",
    title: "Hotels we have slept in ourselves",
    detail: "Our consultants visit every hotel we sell. The distance to the Haram is shown in metres and minutes, and shuttle hotels are clearly marked as such.",
  },
  {
    icon: "verified_user",
    title: "Licensed, registered and on paper",
    detail: "We hold a Ministry of Religious Affairs enrolment, a Punjab DTS licence and an SECP registration. You get a written confirmation and a receipt for every rupee.",
  },
  {
    icon: "support_agent",
    title: "A real person, day and night",
    detail: "You deal with named consultants in Pakistan and a Saudi ground partner who meets you at the airport. WhatsApp is answered around the clock while you travel.",
  },
  {
    icon: "elderly",
    title: "Built for families and elders",
    detail: "Walkable hotels, wheelchair arrangements, connecting rooms, child discounts and a relaxed pace on every family package.",
  },
  {
    icon: "school",
    title: "Training before you fly",
    detail: "A step by step Umrah session, printed duas and a WhatsApp group with your group leader, so first-timers feel ready.",
  },
];

export const howItWorks = [
  { step: "01", title: "Tell us your plan", detail: "Pick a package or send the two minute planner with your dates, travellers, budget and departure city.", icon: "edit_note" },
  { step: "02", title: "Get a written quote", detail: "A named consultant calls you within 30 minutes and sends a quote with the hotels, flights and the exact price.", icon: "receipt_long" },
  { step: "03", title: "Confirm with a deposit", detail: "Pay PKR 50,000 per person to an official account. We start your visa the same day.", icon: "lock" },
  { step: "04", title: "Travel with Raahi", detail: "You get your training session, e-visa, tickets and hotel vouchers. Our team meets you at both ends.", icon: "flight_takeoff" },
];
