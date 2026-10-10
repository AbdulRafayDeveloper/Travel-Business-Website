import type { FaqGroup, FaqItem } from "@/types";

export const faqGroups: FaqGroup[] = [
  {
    id: "packages",
    title: "Packages and pricing",
    icon: "confirmation_number",
    items: [
      {
        q: "Are the prices on the website final?",
        a: "Yes. The price you see for Quad, Triple or Double sharing is what you pay for that package on the dates shown. It covers visa processing, flights, hotels and the transfers listed on the package. We update prices on the date printed under each package, and we do not add service charges at the end.",
      },
      {
        q: "What is the difference between Quad, Triple and Double sharing?",
        a: "It is simply how many people share one hotel room. Quad means four beds in a room, which is the cheapest per person. Triple means three. Double means two. Most families pick Quad or Triple so they can stay together. Couples usually pick Double.",
      },
      {
        q: "Can I change the hotel or the number of nights?",
        a: "Yes. Every package can be adjusted. Tell your consultant which hotel, how many nights or which departure city you prefer, and you will get a revised written quote within a few hours.",
      },
      {
        q: "Do children and infants pay the full price?",
        a: "Children aged 2 to 11 who share their parents' room get a discount, shown on each package page. Infants under 2 pay only the infant air fare and the visa fee. Both need their own passport.",
      },
      {
        q: "Why is Ramadan more expensive?",
        a: "Hotel rates in Makkah and Madinah rise three to five times in Ramadan, especially in the last ten nights, and airlines raise their fares too. We confirm Ramadan seats early because they sell out months ahead.",
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
        a: "No travel agency issues visas. Umrah visas come from the Kingdom of Saudi Arabia through its official systems. What we do is prepare your application, submit it through a Saudi licensed Umrah operator, follow it up and send you the e-visa. Approval, fees and timing are decided by the Saudi authorities.",
      },
      {
        q: "Which documents do I need?",
        a: "A passport valid for at least six months from your travel date with two blank pages, a recent photo on a white background, a copy of your CNIC (or B-form for children), a polio vaccination card, and any vaccination certificate required at the time of travel. Your consultant will confirm the current list with you before you pay.",
      },
      {
        q: "How long does the visa take?",
        a: "Most Umrah visas are issued within 2 to 7 working days once we have your complete documents and your payment. We suggest starting at least four weeks before you travel, and earlier for Ramadan.",
      },
      {
        q: "Can women travel without a mahram?",
        a: "Yes. Under the current Saudi rules, women of any age can perform Umrah without a mahram. Many of our women travellers go with sisters or friends. We make sure the hotel has a ladies' prayer area and we share the latest guidelines before you leave.",
      },
      {
        q: "What if my visa is refused?",
        a: "Refusals are rare when the documents are complete. If it does happen, the Saudi visa fee cannot be refunded, but we refund everything else apart from any airline charges that cannot be recovered. We tell you about those charges before you book.",
      },
    ],
  },
  {
    id: "booking",
    title: "Booking and payment",
    icon: "payments",
    items: [
      {
        q: "How do I book?",
        a: "Choose a package or fill in the Plan Your Umrah form. A consultant calls you back, confirms availability in writing and sends you a booking form. You pay a deposit to one of our official bank accounts, JazzCash or Easypaisa, and you get a receipt and a booking number the same day.",
      },
      {
        q: "How much deposit is required?",
        a: "PKR 50,000 per person confirms your booking and starts the visa process. The balance is due 21 days before departure. If you are travelling within three weeks, the full amount is due at booking.",
      },
      {
        q: "Can I pay in instalments?",
        a: "Yes. If your departure is more than two months away, you can pay the deposit now and split the rest into two or three payments. The final payment is due 21 days before departure. Instalments cost nothing extra.",
      },
      {
        q: "Which payment methods do you accept?",
        a: "Bank transfer or deposit to our official HBL and Meezan Bank accounts, JazzCash, Easypaisa, and debit or credit cards at our offices. Please only pay to the accounts listed on our Payment Safety page, and always collect a receipt.",
      },
      {
        q: "What is your cancellation policy?",
        a: "Before the visa is submitted, you get a full refund minus PKR 5,000 for processing. After the visa is issued, the visa fee and airline charges cannot be refunded, but the rest is returned. Within 14 days of departure, hotel nights may also be lost. The full terms are on our Refund Policy page.",
      },
    ],
  },
  {
    id: "travel",
    title: "Travel and hotels",
    icon: "flight_takeoff",
    items: [
      {
        q: "Which airlines do you use?",
        a: "Saudia, PIA, Airblue, flynas, flyJinnah, Air Arabia and Qatar Airways, depending on the package and your departure city. The airline for your date is named on the package and in your booking confirmation.",
      },
      {
        q: "How far are the hotels from the Haram?",
        a: "Every hotel on our website shows the walking distance in metres and minutes. Hotels marked 'shuttle' are further away, but they include a free bus to the Haram that runs around the clock.",
      },
      {
        q: "Is food included?",
        a: "Only where the package says so. Standard packages and above usually include breakfast, and the Ramadan package includes Sehri and Iftar. There are plenty of Pakistani restaurants near both Harams, and a meal costs around SAR 15 to 25.",
      },
      {
        q: "Do you provide Umrah training?",
        a: "Yes. Every booking includes a training session before you leave, either at our office or online, a printed step by step guide with duas, and a WhatsApp group with your group leader.",
      },
      {
        q: "Can elderly or disabled pilgrims travel with you?",
        a: "Of course. We suggest hotels within 300 metres of the Haram, arrange wheelchair help at the airports, and can book wheelchair services inside the Haram. Just tell us about any medical needs when you book.",
      },
    ],
  },
];

export const allFaqs: FaqItem[] = faqGroups.flatMap((g) => g.items);

export const homeFaqs: FaqItem[] = [faqGroups[0].items[0], faqGroups[1].items[0], faqGroups[2].items[1], faqGroups[3].items[1]];
