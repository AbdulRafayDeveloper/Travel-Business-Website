/**
 * Every photo on the site is registered here. Files live in public/images/umrah/
 * (sourced from Pexels / Unsplash, see manifest.json there; no attribution required).
 */
const BASE = "/images/umrah";

export const siteImages = {
  homeHero: { src: `${BASE}/home-hero.jpg`, alt: "Pilgrims gathered around the Kaaba in Masjid al-Haram at night", width: 2000, height: 1500 },
  packagesHero: { src: `${BASE}/packages-hero.jpg`, alt: "Masjid an-Nabawi in Madinah with its minarets at dusk", width: 2000, height: 1333 },
  makkahNight: { src: `${BASE}/makkah-night.jpg`, alt: "Makkah Clock Tower lit up at night", width: 2000, height: 1334 },
  madinahCourtyard: { src: `${BASE}/madinah-courtyard.jpg`, alt: "Courtyard of Masjid an-Nabawi with umbrellas open", width: 2000, height: 1333 },
  visaHero: { src: `${BASE}/visa-hero.jpg`, alt: "Passport and boarding passes ready for travel", width: 2000, height: 1333 },
  aboutHero: { src: `${BASE}/about-hero.jpg`, alt: "Pilgrims in white ihram walking in Masjid al-Haram", width: 2000, height: 1500 },
  guideHero: { src: `${BASE}/guide-hero.jpg`, alt: "Prayer beads resting on an open book", width: 2000, height: 1309 },
  hotelsHero: { src: `${BASE}/hotels-hero.jpg`, alt: "Hotel towers of Abraj Al Bait beside the minarets of Masjid al-Haram", width: 2000, height: 1500 },
  tawaf: { src: `${BASE}/tawaf.jpg`, alt: "Aerial view of pilgrims performing Tawaf around the Kaaba", width: 1400, height: 1051 },
  greenDome: { src: `${BASE}/green-dome.jpg`, alt: "Minaret of Masjid an-Nabawi against a clear sky", width: 1400, height: 933 },
  haramInterior: { src: `${BASE}/haram-interior.jpg`, alt: "Interior arches and chandeliers of Masjid an-Nabawi", width: 1400, height: 949 },
  hotelRoom: { src: `${BASE}/hotel-room.jpg`, alt: "Clean modern hotel bedroom with a large window", width: 1400, height: 1050 },
  hotelLobby: { src: `${BASE}/hotel-lobby.jpg`, alt: "Elegant hotel reception lobby", width: 1400, height: 934 },
  airplane: { src: `${BASE}/airplane.jpg`, alt: "Airplane wing above white clouds", width: 1400, height: 928 },
  coachBus: { src: `${BASE}/coach-bus.jpg`, alt: "White tour coach driving on a desert highway", width: 1400, height: 933 },
  familyTravel: { src: `${BASE}/family-travel.jpg`, alt: "Father and child holding hands at an airport window", width: 1400, height: 1050 },
  qubaMosque: { src: `${BASE}/quba-mosque.jpg`, alt: "Masjid Quba surrounded by palm trees in Madinah", width: 1400, height: 933 },
  uhud: { src: `${BASE}/uhud.jpg`, alt: "Madinah skyline at sunset with mountains behind", width: 1400, height: 1400 },
  jabalNur: { src: `${BASE}/jabal-nur.jpg`, alt: "Jabal al-Nour with the Cave of Hira in Makkah", width: 1400, height: 933 },
  dates: { src: `${BASE}/dates.jpg`, alt: "Bowl of Ajwa dates", width: 1400, height: 933 },
  duaHands: { src: `${BASE}/dua-hands.jpg`, alt: "Hands raised in dua", width: 1400, height: 933 },
  ihram: { src: `${BASE}/ihram.jpg`, alt: "Pilgrims in ihram facing the Kaaba", width: 1400, height: 1050 },
  madinahNight: { src: `${BASE}/madinah-night.jpg`, alt: "Masjid an-Nabawi illuminated at night", width: 1400, height: 934 },
  zamzam: { src: `${BASE}/zamzam.jpg`, alt: "Open Quran with tasbih and dates", width: 1400, height: 933 },
} as const;

export type SiteImage = (typeof siteImages)[keyof typeof siteImages];
