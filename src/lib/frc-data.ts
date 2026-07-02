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
  {
    id: "texas",
    label: "Texas",
    code: "TX",
    territory: "Texas",
    accent: "#BF0A30",
  },
  {
    id: "newYork",
    label: "New York",
    code: "NY",
    territory: "New York",
    accent: "#1D4ED8",
  },
  {
    id: "ontario",
    label: "Ontario",
    code: "ON",
    territory: "Ontario",
    accent: "#E4002B",
  },
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
  {
    id: "newJersey",
    label: "New Jersey",
    code: "NJ",
    territory: "New Jersey",
    accent: "#2563EB",
  },
  {
    id: "florida",
    label: "Florida",
    code: "FL",
    territory: "Florida",
    accent: "#F97316",
  },
  {
    id: "georgia",
    label: "Georgia",
    code: "GA",
    territory: "Georgia",
    accent: "#DC2626",
  },
  {
    id: "indiana",
    label: "Indiana",
    code: "IN",
    territory: "Indiana",
    accent: "#B45309",
  },
  {
    id: "israel",
    label: "Israel",
    code: "ISR",
    territory: "Israel",
    accent: "#0EA5E9",
  },
  {
    id: "pennsylvania",
    label: "Pennsylvania",
    code: "PA",
    territory: "Pennsylvania",
    accent: "#4B5563",
  },
  {
    id: "brazil",
    label: "Brazil",
    code: "BRA",
    territory: "Brazil",
    accent: "#16A34A",
  },
  {
    id: "china",
    label: "China",
    code: "CHN",
    territory: "China",
    accent: "#EF4444",
  },
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
    territory: "Mexico, Belize",
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

export interface Team {
  number: number;
  name: string;
  city: string;
  region: RegionId;
}

export interface BestSeason {
  team: number;
  era: EraId;
  year: number;
  rank: number;
  norm_epa: number;
  epa_percentile: number;
  winrate: number;
  composite_score: number;
}
