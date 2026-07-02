export type EraId = "late2000s" | "early2010s" | "mid2010s" | "late2010s" | "twenties";
export type RegionId = "michigan" | "texas" | "california" | "ontario";

export const ERAS: { id: EraId; label: string; years: string }[] = [
  { id: "late2000s", label: "Late 2000s", years: "2007–2009" },
  { id: "early2010s", label: "Early 2010s", years: "2010–2012" },
  { id: "mid2010s", label: "Mid 2010s", years: "2013–2016" },
  { id: "late2010s", label: "Late 2010s", years: "2017–2020" },
  { id: "twenties", label: "2020s", years: "2022–2026" },
];

export const REGIONS: { id: RegionId; label: string; code: string; accent: string }[] = [
  { id: "michigan", label: "Michigan", code: "MI", accent: "#0033A0" },
  { id: "texas", label: "Texas", code: "TX", accent: "#BF0A30" },
  { id: "california", label: "California", code: "CA", accent: "#FFB81C" },
  { id: "ontario", label: "Ontario", code: "ON", accent: "#E4002B" },
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
  { number: 217, name: "ThunderChickens", city: "Sterling Heights, MI", region: "michigan", eras: ["late2000s", "early2010s"], blurb: "Innovation Award royalty; the drivetrain gurus of the era." },
  { number: 33, name: "Killer Bees", city: "Auburn Hills, MI", region: "michigan", eras: ["late2000s", "early2010s", "mid2010s"], blurb: "Chrysler-backed powerhouse with three world titles on the wall." },
  { number: 469, name: "Las Guerrillas", city: "Bloomfield Hills, MI", region: "michigan", eras: ["late2000s", "early2010s"], blurb: "Ballbot dynasty. Rebound Rumble legends." },
  { number: 27, name: "Team RUSH", city: "Clarkston, MI", region: "michigan", eras: ["late2000s", "mid2010s"], blurb: "Green-and-white workhorses, defense DNA baked in." },
  { number: 2767, name: "Stryke Force", city: "Kalamazoo, MI", region: "michigan", eras: ["mid2010s", "late2010s"], blurb: "Consistent Einstein-caliber alliance captains." },
  { number: 245, name: "Adambots", city: "Rochester Hills, MI", region: "michigan", eras: ["mid2010s", "late2010s"], blurb: "Precision shooters, quiet excellence." },
  { number: 302, name: "The Dragons", city: "Livonia, MI", region: "michigan", eras: ["late2010s", "twenties"], blurb: "Fast, clean, and always in the mix." },
  { number: 3707, name: "Brighton TechnoDogs", city: "Brighton, MI", region: "michigan", eras: ["late2010s", "twenties"], blurb: "State-championship regulars with a lethal endgame." },

  // Texas
  { number: 148, name: "Robowranglers", city: "Greenville, TX", region: "texas", eras: ["late2000s", "early2010s", "mid2010s", "late2010s", "twenties"], blurb: "L3Harris dynasty — cowboy hats and world championships." },
  { number: 118, name: "Robonauts", city: "Houston, TX", region: "texas", eras: ["late2000s", "early2010s", "mid2010s", "late2010s", "twenties"], blurb: "NASA JSC crew. Ridiculous mechanisms, every year." },
  { number: 624, name: "CRyptonite", city: "Katy, TX", region: "texas", eras: ["late2000s", "early2010s", "mid2010s"], blurb: "The Katy juggernaut with an unmistakable green." },
  { number: 1477, name: "Texas Torque", city: "The Woodlands, TX", region: "texas", eras: ["early2010s", "mid2010s", "late2010s"], blurb: "ExxonMobil-backed contenders, always dangerous." },
  { number: 2848, name: "Elysium", city: "Frisco, TX", region: "texas", eras: ["mid2010s", "late2010s"], blurb: "North Texas underdogs who over-perform every playoff." },
  { number: 2468, name: "Team Appreciate", city: "Austin, TX", region: "texas", eras: ["mid2010s", "late2010s", "twenties"], blurb: "Austin's clutch scoring machine." },
  { number: 3310, name: "Black Hawk Robotics", city: "Frisco, TX", region: "texas", eras: ["late2010s", "twenties"], blurb: "Deep bag of tricks, deeper playoff runs." },
  { number: 6800, name: "Vanguard Robotics", city: "Houston, TX", region: "texas", eras: ["twenties"], blurb: "New-era rookies-turned-titans." },

  // California
  { number: 254, name: "The Cheesy Poofs", city: "San Jose, CA", region: "california", eras: ["late2000s", "early2010s", "mid2010s", "late2010s", "twenties"], blurb: "The measuring stick. Five world championships and counting." },
  { number: 971, name: "Spartan Robotics", city: "Mountain View, CA", region: "california", eras: ["late2000s", "early2010s", "mid2010s", "late2010s", "twenties"], blurb: "Elegant, over-engineered, terrifying." },
  { number: 1678, name: "Citrus Circuits", city: "Davis, CA", region: "california", eras: ["early2010s", "mid2010s", "late2010s", "twenties"], blurb: "Scouting kings with the robots to match." },
  { number: 604, name: "Quixilver", city: "San Jose, CA", region: "california", eras: ["late2000s", "early2010s", "mid2010s"], blurb: "Silicon Valley perennial — always at Einstein's door." },
  { number: 1717, name: "D'Penguineers", city: "Santa Barbara, CA", region: "california", eras: ["late2000s", "early2010s"], blurb: "Ballbot inventors and Chairman's shortlist." },
  { number: 973, name: "Greybots", city: "Atascadero, CA", region: "california", eras: ["early2010s", "mid2010s", "late2010s"], blurb: "Central-coast underdogs with big-swing designs." },
  { number: 8, name: "Paly Robotics", city: "Palo Alto, CA", region: "california", eras: ["mid2010s", "late2010s", "twenties"], blurb: "Low team number, high-ceiling machines." },
  { number: 5104, name: "The Breakerbots", city: "Los Angeles, CA", region: "california", eras: ["late2010s", "twenties"], blurb: "LA's up-and-comer with playoff bite." },

  // Ontario
  { number: 1114, name: "Simbotics", city: "St. Catharines, ON", region: "ontario", eras: ["late2000s", "early2010s", "mid2010s", "late2010s"], blurb: "The pinnacle. Simbot Seminar, three world titles, immortal." },
  { number: 2056, name: "OP Robotics", city: "Stoney Creek, ON", region: "ontario", eras: ["late2000s", "early2010s", "mid2010s", "late2010s", "twenties"], blurb: "The other Ontario juggernaut. Consistency incarnate." },
  { number: 1241, name: "Theory6", city: "Mississauga, ON", region: "ontario", eras: ["late2000s", "early2010s", "mid2010s"], blurb: "Toronto-area contenders with a flair for the dramatic." },
  { number: 1305, name: "Ice Cubed", city: "Iroquois Falls, ON", region: "ontario", eras: ["early2010s", "mid2010s", "late2010s"], blurb: "Small-town team, massive footprint." },
  { number: 4039, name: "MakeShift Robotics", city: "Toronto, ON", region: "ontario", eras: ["mid2010s", "late2010s", "twenties"], blurb: "MaCS crew — sharp code, sharper mechanisms." },
  { number: 6135, name: "Arctic Warriors", city: "Timmins, ON", region: "ontario", eras: ["late2010s", "twenties"], blurb: "Northern grit with modern polish." },
  { number: 5834, name: "S.C.R.A.P. Yard", city: "Ottawa, ON", region: "ontario", eras: ["late2010s", "twenties"], blurb: "Capital-region contenders with a defense edge." },
  { number: 8574, name: "Fluid Dynamics", city: "Waterloo, ON", region: "ontario", eras: ["twenties"], blurb: "Waterloo-adjacent rookies making immediate noise." },
];

export function teamsFor(region: RegionId, era: EraId): FrcTeam[] {
  return TEAMS.filter((t) => t.region === region && t.eras.includes(era));
}
