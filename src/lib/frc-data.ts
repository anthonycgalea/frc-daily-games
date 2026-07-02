export type EraId = "late2000s" | "early2010s" | "mid2010s" | "late2010s" | "twenties";
export type RegionId =
  | "southeastMichigan"
  | "northwestMichigan"
  | "northernCalifornia"
  | "southernCalifornia"
  | "upperMidwest"
  | "newEngland"
  | "texas"
  | "newYork"
  | "ontario"
  | "greaterEurasia"
  | "midwest"
  | "pacificNorthwest"
  | "newJersey"
  | "florida"
  | "georgia"
  | "indiana"
  | "israel"
  | "pennsylvania"
  | "brazil"
  | "china"
  | "chesapeake"
  | "carolinas"
  | "southeast"
  | "pacific"
  | "centralAmerica"
  | "sunBelt"
  | "rockies"
  | "appalachia"
  | "greatPlains";

export const ERAS: { id: EraId; label: string; years: string }[] = [
  { id: "late2000s", label: "Late 2000s", years: "2007–2009" },
  { id: "early2010s", label: "Early 2010s", years: "2010–2012" },
  { id: "mid2010s", label: "Mid 2010s", years: "2013–2016" },
  { id: "late2010s", label: "Late 2010s", years: "2017–2020" },
  { id: "twenties", label: "2020s", years: "2022–2026" },
];

export const REGIONS: {
  id: RegionId;
  label: string;
  code: string;
  territory: string;
  accent: string;
}[] = [
  {
    id: "southeastMichigan",
    label: "Southeast Michigan",
    code: "SE MI",
    territory: "Southeast Michigan",
    accent: "#0033A0",
  },
  {
    id: "northwestMichigan",
    label: "Northwest Michigan",
    code: "NW MI",
    territory: "Northwest Michigan",
    accent: "#007A33",
  },
  {
    id: "northernCalifornia",
    label: "Northern California",
    code: "NORCAL",
    territory: "Northern California",
    accent: "#FFB81C",
  },
  {
    id: "southernCalifornia",
    label: "Southern California",
    code: "SOCAL",
    territory: "Southern California",
    accent: "#E35205",
  },
  {
    id: "upperMidwest",
    label: "Upper Midwest",
    code: "UP MID",
    territory: "Minnesota, Wisconsin, North Dakota, South Dakota",
    accent: "#005EB8",
  },
  {
    id: "newEngland",
    label: "New England",
    code: "NE",
    territory: "Massachusetts, Connecticut, New Hampshire, Maine, Vermont, Rhode Island",
    accent: "#7C3AED",
  },
  { id: "texas", label: "Texas", code: "TX", territory: "Texas", accent: "#BF0A30" },
  { id: "newYork", label: "New York", code: "NY", territory: "New York", accent: "#1D4ED8" },
  { id: "ontario", label: "Ontario", code: "ON", territory: "Ontario", accent: "#E4002B" },
  {
    id: "greaterEurasia",
    label: "Greater Eurasia",
    code: "EURASIA",
    territory: "Europe + Western Asia",
    accent: "#8B5CF6",
  },
  {
    id: "midwest",
    label: "Midwest",
    code: "MW",
    territory: "Missouri, Illinois, Iowa",
    accent: "#F59E0B",
  },
  {
    id: "pacificNorthwest",
    label: "Pacific Northwest",
    code: "PNW",
    territory: "Washington, Oregon, Alaska",
    accent: "#0F766E",
  },
  { id: "newJersey", label: "New Jersey", code: "NJ", territory: "New Jersey", accent: "#2563EB" },
  { id: "florida", label: "Florida", code: "FL", territory: "Florida", accent: "#F97316" },
  { id: "georgia", label: "Georgia", code: "GA", territory: "Georgia", accent: "#DC2626" },
  { id: "indiana", label: "Indiana", code: "IN", territory: "Indiana", accent: "#B45309" },
  { id: "israel", label: "Israel", code: "ISR", territory: "Israel", accent: "#0EA5E9" },
  {
    id: "pennsylvania",
    label: "Pennsylvania",
    code: "PA",
    territory: "Pennsylvania",
    accent: "#4B5563",
  },
  { id: "brazil", label: "Brazil", code: "BRA", territory: "Brazil", accent: "#16A34A" },
  { id: "china", label: "China", code: "CHN", territory: "China", accent: "#EF4444" },
  {
    id: "chesapeake",
    label: "Chesapeake",
    code: "CHS",
    territory: "Virginia, Maryland, DC, Delaware",
    accent: "#0E7490",
  },
  {
    id: "carolinas",
    label: "Carolinas",
    code: "CAR",
    territory: "North Carolina, South Carolina",
    accent: "#10B981",
  },
  {
    id: "southeast",
    label: "Southeast",
    code: "SE",
    territory: "Louisiana, Tennessee, Mississippi, Alabama, Arkansas",
    accent: "#D97706",
  },
  {
    id: "pacific",
    label: "Pacific",
    code: "PAC",
    territory: "Australia, Chinese Taipei, Hawaii, Japan, Singapore, Philippines",
    accent: "#0891B2",
  },
  {
    id: "centralAmerica",
    label: "Central America",
    code: "C AM",
    territory: "Mexico, Belize, Panama, Honduras",
    accent: "#65A30D",
  },
  {
    id: "sunBelt",
    label: "Sun Belt",
    code: "SUN",
    territory: "Arizona, Nevada, New Mexico",
    accent: "#EA580C",
  },
  {
    id: "rockies",
    label: "Rockies",
    code: "RCK",
    territory: "Colorado, Idaho, Utah, Wyoming, Montana",
    accent: "#78716C",
  },
  {
    id: "appalachia",
    label: "Appalachia",
    code: "APP",
    territory: "Ohio, Kentucky, West Virginia",
    accent: "#92400E",
  },
  {
    id: "greatPlains",
    label: "Great Plains",
    code: "GPL",
    territory: "Oklahoma, Kansas, Nebraska",
    accent: "#CA8A04",
  },
];

export type FrcTeam = {
  number: number;
  name: string;
  city: string;
  region: RegionId;
  eras: EraId[];
  blurb: string;
};

export const TEAMS: FrcTeam[] = [
  // Michigan
  {
    number: 217,
    name: "ThunderChickens",
    city: "Sterling Heights, MI",
    region: "southeastMichigan",
    eras: ["late2000s", "early2010s"],
    blurb: "Innovation Award royalty; the drivetrain gurus of the era.",
  },
  {
    number: 33,
    name: "Killer Bees",
    city: "Auburn Hills, MI",
    region: "southeastMichigan",
    eras: ["late2000s", "early2010s", "mid2010s"],
    blurb: "Chrysler-backed powerhouse with three world titles on the wall.",
  },
  {
    number: 469,
    name: "Las Guerrillas",
    city: "Bloomfield Hills, MI",
    region: "southeastMichigan",
    eras: ["late2000s", "early2010s"],
    blurb: "Ballbot dynasty. Rebound Rumble legends.",
  },
  {
    number: 27,
    name: "Team RUSH",
    city: "Clarkston, MI",
    region: "southeastMichigan",
    eras: ["late2000s", "mid2010s"],
    blurb: "Green-and-white workhorses, defense DNA baked in.",
  },
  {
    number: 2767,
    name: "Stryke Force",
    city: "Kalamazoo, MI",
    region: "southeastMichigan",
    eras: ["mid2010s", "late2010s"],
    blurb: "Consistent Einstein-caliber alliance captains.",
  },
  {
    number: 245,
    name: "Adambots",
    city: "Rochester Hills, MI",
    region: "southeastMichigan",
    eras: ["mid2010s", "late2010s"],
    blurb: "Precision shooters, quiet excellence.",
  },
  {
    number: 302,
    name: "The Dragons",
    city: "Livonia, MI",
    region: "southeastMichigan",
    eras: ["late2010s", "twenties"],
    blurb: "Fast, clean, and always in the mix.",
  },
  {
    number: 3707,
    name: "Brighton TechnoDogs",
    city: "Brighton, MI",
    region: "southeastMichigan",
    eras: ["late2010s", "twenties"],
    blurb: "State-championship regulars with a lethal endgame.",
  },

  // Texas
  {
    number: 148,
    name: "Robowranglers",
    city: "Greenville, TX",
    region: "texas",
    eras: ["late2000s", "early2010s", "mid2010s", "late2010s", "twenties"],
    blurb: "L3Harris dynasty — cowboy hats and world championships.",
  },
  {
    number: 118,
    name: "Robonauts",
    city: "Houston, TX",
    region: "texas",
    eras: ["late2000s", "early2010s", "mid2010s", "late2010s", "twenties"],
    blurb: "NASA JSC crew. Ridiculous mechanisms, every year.",
  },
  {
    number: 624,
    name: "CRyptonite",
    city: "Katy, TX",
    region: "texas",
    eras: ["late2000s", "early2010s", "mid2010s"],
    blurb: "The Katy juggernaut with an unmistakable green.",
  },
  {
    number: 1477,
    name: "Texas Torque",
    city: "The Woodlands, TX",
    region: "texas",
    eras: ["early2010s", "mid2010s", "late2010s"],
    blurb: "ExxonMobil-backed contenders, always dangerous.",
  },
  {
    number: 2848,
    name: "Elysium",
    city: "Frisco, TX",
    region: "texas",
    eras: ["mid2010s", "late2010s"],
    blurb: "North Texas underdogs who over-perform every playoff.",
  },
  {
    number: 2468,
    name: "Team Appreciate",
    city: "Austin, TX",
    region: "texas",
    eras: ["mid2010s", "late2010s", "twenties"],
    blurb: "Austin's clutch scoring machine.",
  },
  {
    number: 3310,
    name: "Black Hawk Robotics",
    city: "Frisco, TX",
    region: "texas",
    eras: ["late2010s", "twenties"],
    blurb: "Deep bag of tricks, deeper playoff runs.",
  },
  {
    number: 6800,
    name: "Vanguard Robotics",
    city: "Houston, TX",
    region: "texas",
    eras: ["twenties"],
    blurb: "New-era rookies-turned-titans.",
  },

  // California
  {
    number: 254,
    name: "The Cheesy Poofs",
    city: "San Jose, CA",
    region: "northernCalifornia",
    eras: ["late2000s", "early2010s", "mid2010s", "late2010s", "twenties"],
    blurb: "The measuring stick. Five world championships and counting.",
  },
  {
    number: 971,
    name: "Spartan Robotics",
    city: "Mountain View, CA",
    region: "northernCalifornia",
    eras: ["late2000s", "early2010s", "mid2010s", "late2010s", "twenties"],
    blurb: "Elegant, over-engineered, terrifying.",
  },
  {
    number: 1678,
    name: "Citrus Circuits",
    city: "Davis, CA",
    region: "northernCalifornia",
    eras: ["early2010s", "mid2010s", "late2010s", "twenties"],
    blurb: "Scouting kings with the robots to match.",
  },
  {
    number: 604,
    name: "Quixilver",
    city: "San Jose, CA",
    region: "northernCalifornia",
    eras: ["late2000s", "early2010s", "mid2010s"],
    blurb: "Silicon Valley perennial — always at Einstein's door.",
  },
  {
    number: 1717,
    name: "D'Penguineers",
    city: "Santa Barbara, CA",
    region: "southernCalifornia",
    eras: ["late2000s", "early2010s"],
    blurb: "Ballbot inventors and Chairman's shortlist.",
  },
  {
    number: 973,
    name: "Greybots",
    city: "Atascadero, CA",
    region: "southernCalifornia",
    eras: ["early2010s", "mid2010s", "late2010s"],
    blurb: "Central-coast underdogs with big-swing designs.",
  },
  {
    number: 8,
    name: "Paly Robotics",
    city: "Palo Alto, CA",
    region: "northernCalifornia",
    eras: ["mid2010s", "late2010s", "twenties"],
    blurb: "Low team number, high-ceiling machines.",
  },
  {
    number: 5104,
    name: "The Breakerbots",
    city: "Los Angeles, CA",
    region: "southernCalifornia",
    eras: ["late2010s", "twenties"],
    blurb: "LA's up-and-comer with playoff bite.",
  },

  // Ontario
  {
    number: 1114,
    name: "Simbotics",
    city: "St. Catharines, ON",
    region: "ontario",
    eras: ["late2000s", "early2010s", "mid2010s", "late2010s"],
    blurb: "The pinnacle. Simbot Seminar, three world titles, immortal.",
  },
  {
    number: 2056,
    name: "OP Robotics",
    city: "Stoney Creek, ON",
    region: "ontario",
    eras: ["late2000s", "early2010s", "mid2010s", "late2010s", "twenties"],
    blurb: "The other Ontario juggernaut. Consistency incarnate.",
  },
  {
    number: 1241,
    name: "Theory6",
    city: "Mississauga, ON",
    region: "ontario",
    eras: ["late2000s", "early2010s", "mid2010s"],
    blurb: "Toronto-area contenders with a flair for the dramatic.",
  },
  {
    number: 1305,
    name: "Ice Cubed",
    city: "Iroquois Falls, ON",
    region: "ontario",
    eras: ["early2010s", "mid2010s", "late2010s"],
    blurb: "Small-town team, massive footprint.",
  },
  {
    number: 4039,
    name: "MakeShift Robotics",
    city: "Toronto, ON",
    region: "ontario",
    eras: ["mid2010s", "late2010s", "twenties"],
    blurb: "MaCS crew — sharp code, sharper mechanisms.",
  },
  {
    number: 6135,
    name: "Arctic Warriors",
    city: "Timmins, ON",
    region: "ontario",
    eras: ["late2010s", "twenties"],
    blurb: "Northern grit with modern polish.",
  },
  {
    number: 5834,
    name: "S.C.R.A.P. Yard",
    city: "Ottawa, ON",
    region: "ontario",
    eras: ["late2010s", "twenties"],
    blurb: "Capital-region contenders with a defense edge.",
  },
  {
    number: 8574,
    name: "Fluid Dynamics",
    city: "Waterloo, ON",
    region: "ontario",
    eras: ["twenties"],
    blurb: "Waterloo-adjacent rookies making immediate noise.",
  },
];

export function teamsFor(region: RegionId, era: EraId): FrcTeam[] {
  return TEAMS.filter((t) => t.region === region && t.eras.includes(era));
}
