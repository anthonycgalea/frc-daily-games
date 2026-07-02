import { TEAMS } from "../../generated/teams";
import { BEST_SEASONS } from "../../generated/best-seasons";

import type { EraId, RegionId, Team, BestSeason } from "../frc-data";

export interface FrcTeam extends Team {
  season: BestSeason;
}

const lookup = new Map<string, FrcTeam[]>();

for (const season of BEST_SEASONS) {
  const team = TEAMS[season.team];

  if (!team) continue;

  const key = `${season.era}:${team.region}`;

  const arr = lookup.get(key) ?? [];

  arr.push({
    ...team,
    season,
  });

  lookup.set(key, arr);
}

export function teamsFor(region: RegionId, era: EraId): FrcTeam[] {
  return lookup.get(`${era}:${region}`) ?? [];
}
