import type { FaqGroup, FaqItem } from "@/types";

export const faqGroups: FaqGroup[] = [
  {
    id: "packages",
    title: "Packages & pricing",
    icon: "confirmation_number",
    items: [
      {
        q: "Are the prices on the website final?",
        a: "Yes. The per-person price shown for Quad, Triple or Double sharing is what you pay for that package on the dates shown. It includes visa processing, flights, hotels and transfers listed on the package. We update prices on the date printed under each package and we do not add service charges at the end.",
      },
      {
        q: "What is the difference between Quad, Triple and Double sharing?",
        a: "It is the number of people sharing one hotel room. Quad means four beds in a room (cheapest per person), Triple means three, and Double means two. Families usually choose Quad or Triple so they stay together; couples choose Double.",
      },
      {
        q: "Can I change the hotel or number of nights?",
        a: "Yes. Every package can be customised. Tell your consultant the hotel, nights or departure city you prefer and you will receive a revised written quote within a few hours.",
      },
      {
        q: "Do children and infants pay the full price?",
        a: "Children aged 2 to 11 sharing their parents' room receive a discount shown on the package page. Infants under 2 pay only the infant air fare and visa fee. Both need their own passport.",
      },
      {
        q: "Why is Ramadan more expensive?",
        a: "Hotel rates in Makkah and Madinah rise three to five times in Ramadan, especially in the last ten nights, and airlines increase fares. We confirm Ramadan seats early because they sell out months in advance.",
      },
    ],
  },
  {
    id: "visa",
    title: "Umrah visa",
    icon: "badge",
    items: [
      {
        q: "Does Raahi issue the Umrah visa?",
        a: "No agency issues visas. Umrah visas are issued by the Kingdom of Saudi Arabia through its official systems. Raahi prepares and submits your application through a Saudi-licensed Umrah operator, follows it up and delivers the e-visa to you. Approval, fees and timelines are decided by Saudi authorities.",
      },
      {
        q: "Which documents do I need?",
        a: "A passport valid for at least six months from your travel date with two blank pages, a recent white-background photograph, a copy of your CNIC (B-form for children), a polio vaccination card, and any vaccination certificate required at the time of travel. Your consultant will confirm the current list before you pay.",
      },
      {
        q: "How long does the visa take?",
        a: "Most Umrah visas are issued within 2 to 7 working days after complete documents and payment are received. We advise starting at least four weeks before travel, and earlier for Ramadan.",
      },
      {
        q: "Can women travel without a mahram?",
        a: "Yes. Under current Saudi rules women of any age may perform Umrah without a mahram. Many of our women travellers go with sisters or friends. We make sure the hotel has a ladies' prayer area and share the current guidelines before departure.",
      },
      {
        q: "What if my visa is refused?",
        a: "Refusals are rare when documents are complete. If a visa is refused, the Saudi visa fee is non-refundable, but Raahi refunds everything else except any non-refundable airline charges, and we tell you about these before you book.",
      },
    ],
  },
  {
    id: "booking",
    title: "Booking & payment",
    icon: "payments",
    items: [
      {
        q: "How do I book?",
        a: "Choose a package or submit the Plan Your Umrah form. A consultant calls you back, confirms availability in writing and sends a booking form. You pay a deposit to one of our official bank accounts, JazzCash or Easypaisa, and receive a receipt and booking number the same day.",
      },
      {
        q: "How much deposit is required?",
        a: "PKR 50,000 per person to confirm a booking and start visa processing. The balance is due 21 days before departure, or immediately for departures within three weeks.",
      },
      {
        q: "Can I pay in instalments?",
        a: "Yes. For departures more than two months away you can pay the deposit now and split the balance into two or three instalments, with the final payment 21 days before departure. There is no extra charge for instalments.",
      },
      {
        q: "Which payment methods do you accept?",
        a: "Bank transfer or deposit to our official accounts (HBL, Meezan Bank), JazzCash, Easypaisa, and debit or credit card at our offices. Please only pay to the accounts listed on our Payment Safety page and always collect a receipt.",
      },
      {
        q: "What is your cancellation policy?",
        a: "Before visa submission: full refund minus PKR 5,000 processing. After visa issuance: visa fee and airline charges are non-refundable, the rest is refunded. Within 14 days of departure: hotel nights may also be non-refundable. Full terms are on the Refund Policy page.",
      },
    ],
  },
  {
    id: "travel",
    title: "Travel & hotels",
    icon: "flight_takeoff",
    items: [
      {
        q: "Which airlines do you use?",
        a: "Saudia, PIA, Airblue, flynas, flyJinnah, Air Arabia and Qatar Airways depending on the package and departure city. The airline for your departure is named on the package and in your booking confirmation.",
      },
      {
        q: "How far are the hotels from the Haram?",
        a: "Every hotel on our website shows the walking distance in metres and minutes. Hotels marked 'shuttle' are further away but include a free bus to the Haram around the clock.",
      },
      {
        q: "Is food included?",
        a: "Only where the package says so. Standard and above packages usually include breakfast, and the Ramadan package includes Sehri and Iftar. Pakistani restaurants are plentiful near both Harams and a meal costs around SAR 15 to 25.",
      },
      {
        q: "Do you provide Umrah training?",
        a: "Yes. Every booking includes a pre-departure training session at our office or online, a printed step-by-step guide with duas, and a WhatsApp group with your group leader.",
      },
      {
        q: "Can elderly or disabled pilgrims travel with you?",
        a: "Absolutely. We recommend hotels within 300 metres of the Haram, arrange wheelchair assistance at airports and can book wheelchair services inside the Haram. Tell us about any medical needs when booking.",
      },
    ],
  },
];

export const allFaqs: FaqItem[] = faqGroups.flatMap((g) => g.items);

export const homeFaqs: FaqItem[] = [faqGroups[0].items[0], faqGroups[1].items[0], faqGroups[2].items[1], faqGroups[3].items[1]];
