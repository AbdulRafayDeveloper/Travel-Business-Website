import type { Guide } from "@/types";

const IMG = "/images/umrah";

export const guides: Guide[] = [
  {
    slug: "how-to-perform-umrah-step-by-step",
    title: "How to perform Umrah: a step-by-step guide for first-time pilgrims",
    excerpt: "Ihram, Tawaf, Sa'i and Halq explained in plain language, with the common mistakes our group leaders see every week.",
    readMinutes: 9,
    image: `${IMG}/tawaf.jpg`,
    category: "Rituals",
    publishedOn: "2026-02-10",
    updatedOn: "2026-09-28",
    sections: [
      {
        heading: "Before you leave Pakistan",
        paragraphs: [
          "Umrah has four parts: entering the state of ihram at or before the Miqat, Tawaf around the Kaaba, Sa'i between Safa and Marwa, and cutting the hair (Halq or Taqsir). Everything else, including ziyarat and extra prayers, is additional worship, not part of the Umrah itself.",
          "Learn the Talbiyah and the intention (niyyah) before you travel. Our pre-departure session covers this, and the printed guide you receive has the Arabic text with Urdu transliteration. Practise wearing the ihram towels at home so you are comfortable on the plane.",
        ],
      },
      {
        heading: "Step 1 · Ihram at the Miqat",
        paragraphs: [
          "Flights from Pakistan to Jeddah cross the Miqat (Yalamlam or Qarn al-Manazil) about 25 to 40 minutes before landing. Most pilgrims shower and change into ihram at the airport in Pakistan, then make the intention and say the Talbiyah when the pilot or crew announce the Miqat.",
          "If you fly to Madinah first, you will enter ihram later at Masjid Dhul Hulaifah (Abyar Ali) on the way to Makkah. Our coach stops there for about 30 minutes.",
        ],
        bullets: [
          "Men: two white unstitched sheets, no underwear, open-heel sandals.",
          "Women: ordinary modest clothing of any colour; the face is not covered with a niqab touching the face.",
          "Avoid perfume, cutting nails or hair, and arguments once in ihram.",
        ],
      },
      {
        heading: "Step 2 · Tawaf",
        paragraphs: [
          "Enter Masjid al-Haram with the right foot, make dua on seeing the Kaaba, then begin at the Black Stone line (a green light marks it). Seven anti-clockwise circuits, with the Kaaba on your left, make one Tawaf. Men uncover the right shoulder (Idtiba) during Tawaf only.",
          "There is no fixed dua for Tawaf. Recite what you know, ask for what you need, and recite 'Rabbana atina fid-dunya hasanah...' between the Yemeni corner and the Black Stone. After Tawaf, pray two rak'ahs behind Maqam Ibrahim if there is space, otherwise anywhere in the mosque, and drink Zamzam.",
        ],
      },
      {
        heading: "Step 3 · Sa'i",
        paragraphs: [
          "Walk to Safa, face the Kaaba, make dua, and walk to Marwa. Safa to Marwa is one lap; Marwa back to Safa is the second. Seven laps end at Marwa. Men jog lightly between the green lights; women walk normally.",
          "The Sa'i gallery is air-conditioned and has wheelchair lanes. Elderly pilgrims can hire a wheelchair with a pusher at the official counters; our group leader will show you where.",
        ],
      },
      {
        heading: "Step 4 · Halq or Taqsir",
        paragraphs: [
          "Men shave the head (Halq, preferred) or trim hair evenly from the whole head (Taqsir). Women cut a fingertip's length from the end of their hair. Barbers near the Marwa exit charge SAR 10 to 20. Your Umrah is now complete and ihram restrictions end.",
        ],
      },
      {
        heading: "Mistakes we see most often",
        paragraphs: ["Our group leaders correct these every week. Knowing them in advance saves you stress."],
        bullets: [
          "Starting Tawaf from the wrong corner or losing count. Use the counter beads from your travel pack.",
          "Men keeping the right shoulder uncovered during prayer. Cover it before the two rak'ahs.",
          "Rushing Sa'i while fasting or dehydrated. Drink Zamzam first; there is no time limit.",
          "Trimming only a few strands. Taqsir must cover the whole head for men.",
          "Leaving ihram intentions until landing. Decide and prepare before the Miqat announcement.",
        ],
      },
    ],
  },
  {
    slug: "umrah-packing-checklist-pakistan",
    title: "Umrah packing checklist for Pakistani pilgrims",
    excerpt: "What to carry, what to leave, and what you can buy cheaply in Makkah and Madinah. Includes documents, medicines and mobile data.",
    readMinutes: 6,
    image: `${IMG}/visa-hero.jpg`,
    category: "Preparation",
    publishedOn: "2026-03-05",
    updatedOn: "2026-09-15",
    sections: [
      {
        heading: "Documents (keep copies on your phone too)",
        paragraphs: ["Carry originals in a waist pouch and photos of everything in your phone and on WhatsApp with a family member."],
        bullets: [
          "Passport with Umrah e-visa printout",
          "Return ticket and hotel vouchers from your Raahi travel pack",
          "CNIC and polio vaccination card (checked at Pakistani airports)",
          "Printed copy of your group leader's and hotel's numbers",
          "Nikah nama or FRC if family members have different surnames",
        ],
      },
      {
        heading: "Clothing",
        paragraphs: [
          "Men need two sets of ihram (one spare), a belt or ihram pouch with zip, open-heeled sandals and simple shalwar kameez for Madinah. Women should pack loose abayas or long shalwar kameez, comfortable scarves and walking shoes; everything is widely available near both Harams if you forget something.",
          "Makkah stays warm all year; Madinah is cool from December to February, so pack a light sweater for Fajr in winter.",
        ],
      },
      {
        heading: "Medicines and health",
        paragraphs: [
          "Bring your regular prescriptions in original boxes with a doctor's letter if they include controlled drugs. Add Panadol, ORS sachets, a basic antibiotic prescribed by your doctor, Vaseline for chafing, and blister plasters. Masks help against the dust and the common 'Umrah cough'.",
        ],
      },
      {
        heading: "Phone, money and small items",
        paragraphs: [
          "Buy a Saudi SIM (STC, Mobily or Zain) at Jeddah airport or ask our representative; around SAR 60 buys enough data for two weeks. Carry some Saudi Riyals in cash for taxis and food; ATMs with Pakistani cards work but charge fees.",
        ],
        bullets: [
          "Universal travel adapter (Saudi uses UK-style three-pin plugs)",
          "Small spray bottle for wudu on long transfers",
          "Tasbih counter and a pocket dua book",
          "Foldable prayer mat and a small bag for shoes inside the Haram",
          "Empty Zamzam bottle (5-litre Zamzam is sold at the airport for return journeys)",
        ],
      },
    ],
  },
  {
    slug: "umrah-with-elderly-parents-and-children",
    title: "Umrah with elderly parents and young children: what to plan differently",
    excerpt: "Hotel choice, wheelchair services, pacing the day, and how to keep children safe in the crowds, from families who have done it.",
    readMinutes: 7,
    image: `${IMG}/family-travel.jpg`,
    category: "Families",
    publishedOn: "2026-04-12",
    updatedOn: "2026-10-01",
    sections: [
      {
        heading: "Choose the hotel by distance, not by stars",
        paragraphs: [
          "For parents over 65 or children under 6, a 3-star hotel 200 metres from the Haram beats a 5-star hotel with a shuttle. Walking 20 minutes in the heat five times a day is exhausting; shuttles are crowded after prayers. Our Family and Premium packages are built around walkable hotels for exactly this reason.",
          "Ask for a lower floor or a hotel with enough lifts. In Madinah the Central Zone is flat and easy; in Makkah, Ajyad and the Clock Tower side avoid the hill climb that hotels on the Misfalah side involve.",
        ],
      },
      {
        heading: "Wheelchairs and assistance",
        paragraphs: [
          "At Pakistani and Saudi airports, wheelchair assistance is free but must be requested with the airline booking; tell your Raahi consultant and we add it. Inside Masjid al-Haram, official wheelchair pushers charge a fixed fee for Tawaf and Sa'i, and electric carts are available on the upper floors. In Madinah, the mosque provides free wheelchairs at Gate 10 and Gate 24.",
        ],
      },
      {
        heading: "Pace the days",
        paragraphs: [
          "Plan one main act of worship per day with elders. Perform Umrah the morning after arrival rather than on the night you land. Use the quiet hours after Isha and before Fajr for Tawaf, when the mataf is cooler and less crowded. Ziyarat tours are long, so skip them for the frailest travellers and let them rest in the hotel.",
        ],
      },
      {
        heading: "Keeping children safe",
        paragraphs: ["Crowds separate families within seconds. These habits, used by our group leaders, work."],
        bullets: [
          "Write the hotel name and a parent's Saudi number on a wristband or inside the child's clothing.",
          "Agree a meeting point (a numbered gate) before every prayer.",
          "Let one parent pray while the other sits with children in the outer courtyard, then swap.",
          "Carry snacks and water; children dehydrate faster than adults in Makkah.",
          "Strollers are allowed in the courtyards but not on the mataf during peak hours.",
        ],
      },
      {
        heading: "What Raahi does for family bookings",
        paragraphs: [
          "Connecting or quad rooms, child discounts, infant cots on request, wheelchair requests added to flights, a consultant (Maryam) who specialises in family and women's travel, and a ziyarat schedule that returns to the hotel before Zuhr.",
        ],
      },
    ],
  },
  {
    slug: "makkah-ziyarat-places-to-visit",
    title: "Ziyarat in Makkah: the historic places worth visiting and how to get there",
    excerpt: "Jabal al-Nour, Jabal Thawr, Mina, Arafat and Masjid Aisha. What each site means and practical tips for the half-day tour.",
    readMinutes: 6,
    image: `${IMG}/jabal-nur.jpg`,
    category: "Ziyarat",
    publishedOn: "2026-05-20",
    updatedOn: "2026-09-20",
    sections: [
      {
        heading: "How the tour works",
        paragraphs: [
          "Our Makkah ziyarat is a guided half-day coach tour, usually on your second or third morning after Fajr breakfast. It covers the sites below in about four hours and returns before Zuhr. Ziyarat is optional and not part of Umrah; those who prefer to stay in the Haram may do so.",
        ],
      },
      {
        heading: "Jabal al-Nour and the Cave of Hira",
        paragraphs: [
          "About 4 km north-east of the Haram, this is the mountain where the first verses of Surah Al-Alaq were revealed. The climb takes 45 to 90 minutes on a steep path and is not advised for elderly pilgrims or in summer heat; most groups view it from the base, where a new visitor centre explains the history.",
        ],
      },
      {
        heading: "Jabal Thawr",
        paragraphs: [
          "South of Makkah, the cave where the Prophet ﷺ and Abu Bakr رضي الله عنه hid for three nights during the migration to Madinah. The coach stops at a viewpoint; the climb is longer and harder than Hira.",
        ],
      },
      {
        heading: "Mina, Muzdalifah and Arafat",
        paragraphs: [
          "The coach drives through the tent city of Mina and past the Jamarat bridge, then across Muzdalifah to Arafat, where you can stand at Jabal ar-Rahmah. Outside Hajj season these sites are quiet, which makes it easy to picture the day of Arafah. Masjid Nimrah and the boundary markers of Arafat are pointed out by the guide.",
        ],
      },
      {
        heading: "Masjid Aisha (Taneem)",
        paragraphs: [
          "The closest Miqat for those already in Makkah, about 7 km from the Haram. If you plan a second Umrah, tell your group leader a day before; the coach stops here on the way back so you can enter ihram, and taxis back to the Haram cost around SAR 20.",
        ],
      },
    ],
  },
  {
    slug: "madinah-ziyarat-places-to-visit",
    title: "Ziyarat in Madinah: Quba, Qiblatain, Uhud and the Seven Mosques",
    excerpt: "The Madinah tour explained, plus how to book Riyadh ul-Jannah in the Nusuk app and when Jannat al-Baqi is open.",
    readMinutes: 6,
    image: `${IMG}/quba-mosque.jpg`,
    category: "Ziyarat",
    publishedOn: "2026-05-27",
    updatedOn: "2026-09-22",
    sections: [
      {
        heading: "Riyadh ul-Jannah and the Rawdah",
        paragraphs: [
          "Praying in Riyadh ul-Jannah (the area between the Prophet's ﷺ house and his pulpit) now requires a free time slot booked in the Nusuk app. Slots open a few days ahead and go quickly. Our consultant helps you create the account before departure and books slots for the group. Women have separate timings, usually after Fajr and after Isha.",
          "Visiting the Prophet's ﷺ grave to offer salam does not need a slot; walk through with the flow and keep your voice low.",
        ],
      },
      {
        heading: "Masjid Quba",
        paragraphs: [
          "The first mosque in Islam, 3 km south of Masjid an-Nabawi. The Prophet ﷺ said that praying two rak'ahs here after performing wudu at home equals the reward of an Umrah. Our tour arrives in time to pray.",
        ],
      },
      {
        heading: "Masjid Qiblatain",
        paragraphs: [
          "The mosque of the two qiblas, where the companions turned from Jerusalem to Makkah mid-prayer when the verse of Surah Al-Baqarah was revealed. The old mihrab direction is marked inside.",
        ],
      },
      {
        heading: "Mount Uhud and the martyrs",
        paragraphs: [
          "Five kilometres north of the city, the site of the Battle of Uhud. The martyrs' cemetery holds Hazrat Hamza رضي الله عنه and around seventy companions. There is a viewing area and a small market for dates and souvenirs; be fair but firm with prices.",
        ],
      },
      {
        heading: "The Seven Mosques and Jannat al-Baqi",
        paragraphs: [
          "The Seven Mosques mark the positions held during the Battle of the Trench (Khandaq); only a few remain open. Jannat al-Baqi, the cemetery beside the Prophet's Mosque, is open to men after Fajr and after Asr; women may make dua from the outside.",
          "The Madinah date market near Masjid Quba is the best place to buy Ajwa, Sukkari and Mabroom dates at farm prices. Our guide shows you the fair rate per kilogram before you shop.",
        ],
      },
    ],
  },
  {
    slug: "best-time-for-umrah-and-what-it-costs",
    title: "Best time for Umrah from Pakistan and what it really costs in 2026–27",
    excerpt: "Month-by-month weather, crowd levels and price ranges, and the four things that change the price of any Umrah package.",
    readMinutes: 8,
    image: `${IMG}/makkah-night.jpg`,
    category: "Planning",
    publishedOn: "2026-06-15",
    updatedOn: "2026-10-05",
    sections: [
      {
        heading: "Season by season",
        paragraphs: [
          "Umrah is open almost all year; the Saudi Umrah season closes only for a few weeks around Hajj (roughly mid Dhul Qadah to mid Muharram). Prices and crowds follow a predictable pattern that Pakistani families can plan around.",
        ],
        bullets: [
          "October to February: pleasant weather (Makkah 20–32°C, Madinah 10–25°C), moderate crowds, best value. December school holidays are busier.",
          "Rajab and Shaban: rising demand before Ramadan; Shab-e-Barat departures sell out early.",
          "Ramadan: highest spiritual reward and highest prices, three to five times normal hotel rates in the last ten nights. Book four to six months ahead.",
          "Shawwal after Eid: good prices and lighter crowds for about six weeks.",
          "Summer (May to September): 40°C+ in Makkah, lowest hotel prices, suitable for younger pilgrims who can pray at night.",
        ],
      },
      {
        heading: "What a package actually costs",
        paragraphs: [
          "In October 2026 a complete 10 to 12 night package from Lahore, Karachi or Islamabad ranges from about PKR 165,000 per person in Quad sharing at a 3-star shuttle hotel to PKR 495,000 per person in Double sharing at 5-star hotels beside the Haram. Ramadan packages run from PKR 465,000. These prices include visa, return flight, hotels and transfers.",
          "Flights make up 35 to 45 percent of an economy package, hotels 40 to 50 percent, and visa, insurance, transport and ziyarat the remainder. Flight prices move weekly; hotel rates are fixed by season.",
        ],
      },
      {
        heading: "The four things that change the price",
        paragraphs: [],
        bullets: [
          "Room sharing: Quad is cheapest; Double can cost 30 percent more per person.",
          "Distance to the Haram: the same star rating can double in price within 300 metres of the mosque.",
          "Dates: Ramadan, Shab-e-Barat, Eid holidays and December push both flights and hotels up.",
          "Departure city and airline: direct Saudia or PIA flights cost more than one-stop flights on budget carriers.",
        ],
      },
      {
        heading: "What a suspiciously cheap quote usually leaves out",
        paragraphs: ["If a quote is far below the market, ask these questions in writing before paying anything."],
        bullets: [
          "Is the Saudi visa fee and medical insurance included?",
          "Is the hotel named, and how far is it from the Haram in metres?",
          "Are airport transfers and the Makkah–Madinah transfer included, and are they private or shared?",
          "Is the price per person in Quad, or is it a 'from' price that nobody actually pays?",
          "Is the agency licensed, and will you receive a receipt into a company bank account?",
        ],
      },
    ],
  },
];

export const guidesBySlug: Record<string, Guide> = Object.fromEntries(guides.map((g) => [g.slug, g]));

export function getGuide(slug: string): Guide | undefined {
  return guidesBySlug[slug];
}
