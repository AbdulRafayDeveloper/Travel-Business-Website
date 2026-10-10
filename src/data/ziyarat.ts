import type { ZiyaratSite } from "@/types";

const IMG = "/images/umrah";

export const ziyaratSites: ZiyaratSite[] = [
  {
    id: "jabal-nur",
    city: "Makkah",
    name: "Jabal al-Nour and the Cave of Hira",
    blurb: "The mountain where the first revelation came to the Prophet ﷺ. You see it from the base. The climb is optional and steep.",
    image: `${IMG}/jabal-nur.jpg`,
  },
  {
    id: "mina-arafat",
    city: "Makkah",
    name: "Mina, Muzdalifah and Arafat",
    blurb: "A drive through the Hajj sites. You see the Jamarat bridge and can stand at Jabal ar-Rahmah on the plain of Arafat.",
    image: `${IMG}/coach-bus.jpg`,
  },
  {
    id: "masjid-aisha",
    city: "Makkah",
    name: "Masjid Aisha (Taneem)",
    blurb: "The nearest Miqat once you are in Makkah. Our transport stops here if you want to enter ihram for a second Umrah.",
    image: `${IMG}/ihram.jpg`,
  },
  {
    id: "jabal-thawr",
    city: "Makkah",
    name: "Jabal Thawr",
    blurb: "The cave where the Prophet ﷺ and Abu Bakr رضي الله عنه took shelter during the Hijrah.",
    image: `${IMG}/about-hero.jpg`,
  },
  {
    id: "masjid-quba",
    city: "Madinah",
    name: "Masjid Quba",
    blurb: "The first mosque built in Islam. A hadith tells us two rak'ahs here carry the reward of an Umrah.",
    image: `${IMG}/quba-mosque.jpg`,
  },
  {
    id: "masjid-qiblatain",
    city: "Madinah",
    name: "Masjid Qiblatain",
    blurb: "The mosque where the direction of prayer changed from Jerusalem to Makkah in the middle of a congregational prayer.",
    image: `${IMG}/madinah-courtyard.jpg`,
  },
  {
    id: "uhud",
    city: "Madinah",
    name: "Mount Uhud and the Martyrs' Cemetery",
    blurb: "The site of the Battle of Uhud and the resting place of Hazrat Hamza رضي الله عنه and seventy companions.",
    image: `${IMG}/uhud.jpg`,
  },
  {
    id: "seven-mosques",
    city: "Madinah",
    name: "The Seven Mosques (Khandaq)",
    blurb: "Small mosques that mark where the Muslims stood during the Battle of the Trench.",
    image: `${IMG}/green-dome.jpg`,
  },
  {
    id: "jannat-al-baqi",
    city: "Madinah",
    name: "Jannat al-Baqi",
    blurb: "The cemetery next to Masjid an-Nabawi where many companions and members of the Prophet's ﷺ family are buried. It opens after Fajr and after Asr.",
    image: `${IMG}/madinah-night.jpg`,
  },
  {
    id: "date-market",
    city: "Madinah",
    name: "Madinah Date Market",
    blurb: "Buy Ajwa and Sukkari dates straight from the growers. Our guide shows you what a fair price looks like.",
    image: `${IMG}/dates.jpg`,
  },
];

export const makkahZiyarat = ziyaratSites.filter((z) => z.city === "Makkah");
export const madinahZiyarat = ziyaratSites.filter((z) => z.city === "Madinah");
