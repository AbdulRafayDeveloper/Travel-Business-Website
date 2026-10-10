import type { ZiyaratSite } from "@/types";

const IMG = "/images/umrah";

export const ziyaratSites: ZiyaratSite[] = [
  {
    id: "jabal-nur",
    city: "Makkah",
    name: "Jabal al-Nour & Cave of Hira",
    blurb: "The mountain where the first revelation came to the Prophet ﷺ. Viewed from the base; the climb is optional and steep.",
    image: `${IMG}/jabal-nur.jpg`,
  },
  {
    id: "mina-arafat",
    city: "Makkah",
    name: "Mina, Muzdalifah & Arafat",
    blurb: "Drive through the Hajj sites, see the Jamarat bridge and stand at Jabal ar-Rahmah on the plain of Arafat.",
    image: `${IMG}/coach-bus.jpg`,
  },
  {
    id: "masjid-aisha",
    city: "Makkah",
    name: "Masjid Aisha (Taneem)",
    blurb: "The nearest Miqat for pilgrims already in Makkah. Our transport stops here if you wish to enter ihram for a second Umrah.",
    image: `${IMG}/ihram.jpg`,
  },
  {
    id: "jabal-thawr",
    city: "Makkah",
    name: "Jabal Thawr",
    blurb: "The cave where the Prophet ﷺ and Abu Bakr رضي الله عنه took refuge during the Hijrah.",
    image: `${IMG}/about-hero.jpg`,
  },
  {
    id: "masjid-quba",
    city: "Madinah",
    name: "Masjid Quba",
    blurb: "The first mosque built in Islam. Two rak'ahs here are rewarded like an Umrah, according to a hadith.",
    image: `${IMG}/quba-mosque.jpg`,
  },
  {
    id: "masjid-qiblatain",
    city: "Madinah",
    name: "Masjid Qiblatain",
    blurb: "Where the direction of prayer was changed from Jerusalem to Makkah during a congregational prayer.",
    image: `${IMG}/madinah-courtyard.jpg`,
  },
  {
    id: "uhud",
    city: "Madinah",
    name: "Mount Uhud & the Martyrs' Cemetery",
    blurb: "Site of the Battle of Uhud and the resting place of Hazrat Hamza رضي الله عنه and seventy companions.",
    image: `${IMG}/uhud.jpg`,
  },
  {
    id: "seven-mosques",
    city: "Madinah",
    name: "The Seven Mosques (Khandaq)",
    blurb: "Small mosques marking the positions of the Muslims during the Battle of the Trench.",
    image: `${IMG}/green-dome.jpg`,
  },
  {
    id: "jannat-al-baqi",
    city: "Madinah",
    name: "Jannat al-Baqi",
    blurb: "The cemetery beside Masjid an-Nabawi where many companions and family members of the Prophet ﷺ are buried. Open after Fajr and Asr.",
    image: `${IMG}/madinah-night.jpg`,
  },
  {
    id: "date-market",
    city: "Madinah",
    name: "Madinah Date Market",
    blurb: "Buy Ajwa and Sukkari dates directly from growers; our guide shows you fair prices.",
    image: `${IMG}/dates.jpg`,
  },
];

export const makkahZiyarat = ziyaratSites.filter((z) => z.city === "Makkah");
export const madinahZiyarat = ziyaratSites.filter((z) => z.city === "Madinah");
