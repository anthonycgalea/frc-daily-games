import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { ERAS, REGIONS, type EraId, type RegionId } from "@/lib/frc-data";

import { teamsFor, type FrcTeam } from "@/lib/generated";

export const Route = createFileRoute("/")({
  component: Index,
});

type Slot = {
  round: number;
  region: RegionId | null;
  era: EraId | null;
  pick: FrcTeam | null;
};

const ROUNDS = 3;
const CAPTAIN_LABELS = ["Captain", "Alliance Pick 1", "Alliance Pick 2"];

function randomOf<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

function emptySlot(round: number): Slot {
  return { round, region: null, era: null, pick: null };
}

function randomEraAndRegion(): Pick<Slot, "era" | "region"> {
  const era = randomOf(ERAS).id;
  const eligibleRegions = REGIONS.filter((region) => teamsFor(region.id, era).length > 0);

  return {
    era,
    region: randomOf(eligibleRegions).id,
  };
}

function Index() {
  const [slots, setSlots] = useState<Slot[]>([]);
  const [activeIdx, setActiveIdx] = useState(0);
  const [spinning, setSpinning] = useState(false);
  const [started, setStarted] = useState(false);

  const started_ = started && slots.length > 0;
  const active = slots[activeIdx];
  const complete = started_ && slots.every((s) => s.pick);

  const start = () => {
    const initial: Slot[] = Array.from({ length: ROUNDS }, (_, i) => emptySlot(i + 1));
    setSlots(initial);
    setActiveIdx(0);
    setStarted(true);
    reroll(0, initial);
  };

  const reroll = (idx: number, base = slots) => {
    setSpinning(true);
    const ticks = 18;
    let i = 0;
    const interval = window.setInterval(() => {
      i++;
      setSlots((prev) => {
        const src = i === 1 ? base : prev;
        const next = src.slice();
        next[idx] = {
          ...next[idx],
          ...randomEraAndRegion(),
          pick: null,
        };
        return next;
      });
      if (i >= ticks) {
        window.clearInterval(interval);
        setSpinning(false);
      }
    }, 55);
  };

  const pick = (team: FrcTeam) => {
    const pickedSlots = slots.slice();
    pickedSlots[activeIdx] = { ...pickedSlots[activeIdx], pick: team };
    setSlots(pickedSlots);

    const nextIdx = activeIdx + 1;
    if (nextIdx < pickedSlots.length) {
      setActiveIdx(nextIdx);
      // Fresh randomization for the next round, preserving the just-locked pick.
      reroll(nextIdx, pickedSlots);
    }
  };

  const reset = () => {
    setSlots([]);
    setActiveIdx(0);
    setStarted(false);
  };

  const options = useMemo(
    () => (active && active.region && active.era ? teamsFor(active.region, active.era) : []),
    [active],
  );

  return (
    <div className="min-h-screen">
      <Header />
      <main className="mx-auto max-w-6xl px-5 pb-24 pt-8 md:pt-14">
        {!started_ && <Hero onStart={start} />}
        {started_ && !complete && (
          <DraftBoard
            slots={slots}
            activeIdx={activeIdx}
            onSelectSlot={setActiveIdx}
            onReroll={() => reroll(activeIdx)}
            spinning={spinning}
            options={options}
            onPick={pick}
          />
        )}
        {complete && <FinalRoster slots={slots} onReset={reset} />}
      </main>
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="border-b border-border/70 bg-background/70 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <div className="flex items-center gap-3">
          <div className="grid h-9 w-11 place-items-center bg-primary font-mono text-sm font-bold text-primary-foreground">
            10<span className="mx-[1px] opacity-70">–</span>0
          </div>
          <div className="leading-tight">
            <div className="font-display text-2xl tracking-wider">TEN &amp; OH</div>
            <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              FRC All-Era Alliance Draft
            </div>
          </div>
        </div>
        <div className="hidden items-center gap-2 md:flex">
          <span className="tag-chip">EST. 2026</span>
          <span className="tag-chip text-primary">v0.1 · BETA</span>
        </div>
      </div>
      <div className="hazard-stripes h-1.5 w-full opacity-70" />
    </header>
  );
}

function Hero({ onStart }: { onStart: () => void }) {
  return (
    <section className="relative">
      <div className="mt-6 grid gap-10 md:mt-10 md:grid-cols-[1.2fr_1fr]">
        <div>
          <div className="mb-4 inline-flex items-center gap-2">
            <span className="tag-chip">A GAME FOR THE STANDS</span>
            <span className="tag-chip text-accent">3 PICKS · 1 ALLIANCE</span>
          </div>
          <h1 className="font-display text-[clamp(3rem,10vw,7.5rem)] leading-[0.85] tracking-tight">
            CAN YOU GO
            <br />
            <span className="text-primary">10-0</span>
            <span className="text-muted-foreground">?</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground">
            Spin a random <span className="text-foreground">region</span> and{" "}
            <span className="text-foreground">era</span>. Pick one legendary FIRST Robotics
            Competition team from that slice of history. Do it three times. Build the alliance no
            one can beat.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <button
              onClick={onStart}
              className="group relative inline-flex items-center gap-3 bg-primary px-7 py-4 font-display text-2xl tracking-widest text-primary-foreground transition hover:brightness-110"
            >
              START THE DRAFT
              <span className="font-mono text-sm">→</span>
              <span className="absolute -bottom-1 left-0 h-1 w-full bg-accent" />
            </button>
          </div>
        </div>

        <aside className="panel-metal relative overflow-hidden p-5">
          <div className="mb-4 flex items-center justify-between">
            <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              SPIN MATRIX
            </div>
            <div className="tag-chip text-accent">LIVE</div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <div className="mb-2 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                Regions
              </div>
              <ul className="space-y-1.5">
                {REGIONS.map((r) => (
                  <li
                    key={r.id}
                    className="flex items-center justify-between border-l-2 border-primary/70 bg-background/50 px-2 py-1.5"
                  >
                    <span className="font-display text-lg tracking-wide">{r.label}</span>
                    <span className="font-mono text-xs text-muted-foreground">{r.code}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className="mb-2 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                Eras
              </div>
              <ul className="space-y-1.5">
                {ERAS.map((e) => (
                  <li
                    key={e.id}
                    className="flex items-center justify-between border-l-2 border-accent/70 bg-background/50 px-2 py-1.5"
                  >
                    <span className="font-display text-lg tracking-wide">{e.label}</span>
                    <span className="font-mono text-xs text-muted-foreground">{e.years}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="hazard-stripes mt-5 h-2 opacity-70" />
        </aside>
      </div>

      <section className="mt-20">
        <div className="mb-6 flex items-end justify-between">
          <h2 className="font-display text-4xl tracking-wide">HOW IT WORKS</h2>
          <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
            003 STEPS
          </div>
        </div>
        <ol className="grid gap-4 md:grid-cols-3">
          {[
            ["01", "Spin", "Each of the 3 rounds locks in one region and one era at random."],
            ["02", "Pick", "Draft one FRC team from that region and era to fill your alliance."],
            [
              "03",
              "Reveal",
              "See your all-time three-team alliance. Share it. Try to go 3-0 again.",
            ],
          ].map(([n, t, d]) => (
            <li key={n} className="panel-metal p-5">
              <div className="font-mono text-xs text-primary">{n}</div>
              <div className="mt-2 font-display text-3xl tracking-wide">{t}</div>
              <p className="mt-2 text-sm text-muted-foreground">{d}</p>
            </li>
          ))}
        </ol>
      </section>
    </section>
  );
}

function DraftBoard({
  slots,
  activeIdx,
  onSelectSlot,
  onReroll,
  spinning,
  options,
  onPick,
}: {
  slots: Slot[];
  activeIdx: number;
  onSelectSlot: (i: number) => void;
  onReroll: () => void;
  spinning: boolean;
  options: FrcTeam[];
  onPick: (t: FrcTeam) => void;
}) {
  const active = slots[activeIdx];
  return (
    <section>
      <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
        <div>
          <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
            DRAFT IN PROGRESS
          </div>
          <h2 className="font-display text-5xl tracking-wide">
            {CAPTAIN_LABELS[activeIdx]?.toUpperCase() ?? `PICK ${activeIdx + 1}`}
            <span className="ml-3 font-mono text-sm text-muted-foreground">
              {activeIdx + 1} / {ROUNDS}
            </span>
          </h2>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={onReroll}
            disabled={spinning || !!active.pick}
            className="border border-border bg-secondary px-4 py-2 font-mono text-xs uppercase tracking-widest text-secondary-foreground transition hover:border-primary disabled:opacity-40"
          >
            ↻ Re-spin
          </button>
        </div>
      </div>

      {/* Slot strip */}
      <div className="mb-8 grid grid-cols-3 gap-3">
        {slots.map((s, i) => (
          <SlotCard
            key={i}
            slot={s}
            index={i}
            active={i === activeIdx}
            locked={i > activeIdx}
            onClick={() => {
              if (i <= activeIdx) onSelectSlot(i);
            }}
          />
        ))}
      </div>

      {/* Big spin readout for active slot */}
      <div className="panel-metal mb-8 overflow-hidden">
        <div className="hazard-stripes h-1.5" />
        <div className="grid gap-0 md:grid-cols-2">
          <SpinPanel
            label="REGION"
            value={active.region ? REGIONS.find((r) => r.id === active.region)!.label : "—"}
            sub={active.region ? REGIONS.find((r) => r.id === active.region)!.code : ""}
            spinning={spinning}
            color="primary"
          />
          <SpinPanel
            label="ERA"
            value={active.era ? ERAS.find((e) => e.id === active.era)!.label : "—"}
            sub={active.era ? ERAS.find((e) => e.id === active.era)!.years : ""}
            spinning={spinning}
            color="accent"
          />
        </div>
      </div>

      {/* Pool */}
      <div className="mb-4 flex items-baseline justify-between">
        <h3 className="font-display text-2xl tracking-wide">
          PICK YOUR TEAM
          <span className="ml-2 font-mono text-xs text-muted-foreground">
            {spinning ? "…" : `${options.length} available`}
          </span>
        </h3>
        <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
          One selection locks the round
        </div>
      </div>

      {spinning ? (
        <div className="grid gap-3 md:grid-cols-2">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="panel-metal h-28 animate-pulse opacity-40" />
          ))}
        </div>
      ) : options.length === 0 ? (
        <div className="panel-metal p-8 text-center">
          <div className="font-display text-3xl tracking-wide text-accent">NO TEAMS ON RECORD</div>
          <p className="mt-2 text-sm text-muted-foreground">
            This region + era combo isn't stocked yet. Re-spin to draw again.
          </p>
          <button
            onClick={onReroll}
            className="mt-5 bg-primary px-5 py-2 font-mono text-xs uppercase tracking-widest text-primary-foreground"
          >
            ↻ Re-spin round
          </button>
        </div>
      ) : (
        <div className="grid gap-3 md:grid-cols-2">
          {options.map((t) => (
            <TeamCard key={t.number} team={t} onPick={() => onPick(t)} />
          ))}
        </div>
      )}
    </section>
  );
}

function SlotCard({
  slot,
  index,
  active,
  locked,
  onClick,
}: {
  slot: Slot;
  index: number;
  active: boolean;
  locked: boolean;
  onClick: () => void;
}) {
  const region = slot.region ? REGIONS.find((r) => r.id === slot.region)! : null;
  const era = slot.era ? ERAS.find((e) => e.id === slot.era)! : null;
  const label = CAPTAIN_LABELS[index] ?? `Pick ${index + 1}`;
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={locked}
      className={`panel-metal group relative overflow-hidden p-3 text-left transition ${
        active
          ? "outline outline-2 outline-offset-2 outline-primary"
          : locked
            ? "cursor-not-allowed opacity-50"
            : "opacity-80 hover:opacity-100"
      }`}
    >
      <div className="flex items-center justify-between gap-2">
        <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
          {label}
        </div>
        {slot.pick ? (
          <span className="tag-chip" style={{ color: "var(--color-signal)" }}>
            LOCKED
          </span>
        ) : active ? (
          <span className="tag-chip text-primary">ON THE CLOCK</span>
        ) : (
          <span className="tag-chip">UPCOMING</span>
        )}
      </div>
      {slot.pick ? (
        <div className="mt-2">
          <div className="font-display text-3xl leading-none tracking-wide">
            <span className="text-primary">{slot.pick.number}</span> <span>{slot.pick.name}</span>
          </div>
          <div className="mt-1 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
            {region?.label} · {era?.label}
          </div>
        </div>
      ) : locked || !region || !era ? (
        <div className="mt-2 flex items-baseline gap-2">
          <div className="font-display text-2xl leading-none tracking-wide text-muted-foreground">
            ??? <span className="text-muted-foreground/60">×</span> ???
          </div>
        </div>
      ) : (
        <div className="mt-2 flex flex-wrap items-baseline gap-x-3 gap-y-1">
          <div className="font-display text-2xl leading-none tracking-wide">{region.label}</div>
          <div className="font-mono text-xs text-muted-foreground">×</div>
          <div className="font-display text-2xl leading-none tracking-wide text-accent">
            {era.label}
          </div>
        </div>
      )}
    </button>
  );
}

function SpinPanel({
  label,
  value,
  sub,
  spinning,
  color,
}: {
  label: string;
  value: string;
  sub: string;
  spinning: boolean;
  color: "primary" | "accent";
}) {
  const c = color === "primary" ? "text-primary" : "text-accent";
  return (
    <div className="relative overflow-hidden border-border p-6 md:p-8 md:[&:first-child]:border-r">
      <div className="flex items-center justify-between">
        <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
          {label}
        </div>
        <div
          className={`font-mono text-[10px] ${spinning ? "text-accent" : "text-muted-foreground"}`}
        >
          {spinning ? "◐ SPINNING" : "◉ LOCKED"}
        </div>
      </div>
      <div
        className={`mt-3 font-display text-[clamp(2.5rem,7vw,5rem)] leading-none tracking-wide ${c} ${
          spinning ? "blur-[1px]" : ""
        }`}
      >
        {value}
      </div>
      <div className="mt-1 font-mono text-sm text-muted-foreground">{sub}</div>
    </div>
  );
}

function TeamCard({ team, onPick }: { team: FrcTeam; onPick: () => void }) {
  return (
    <button
      onClick={onPick}
      className="panel-metal group relative overflow-hidden p-4 text-left transition hover:-translate-y-0.5 hover:outline hover:outline-2 hover:outline-primary"
    >
      <div className="flex items-start gap-4">
        <div className="min-w-[64px] shrink-0 border border-border bg-background/60 px-2 py-1 text-center">
          <div className="font-mono text-[9px] uppercase tracking-widest text-muted-foreground">
            TEAM
          </div>
          <div className="font-display text-3xl leading-none text-primary">{team.number}</div>
        </div>
        <div className="min-w-0 flex-1">
          <div className="font-display text-2xl tracking-wide">{team.name}</div>
          <div className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
            {team.city}
          </div>
          <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">{`${team.season.year} • #${team.season.rank} EPA`}</p>
        </div>
        <div className="hidden self-center font-mono text-xs text-primary opacity-0 transition group-hover:opacity-100 md:block">
          DRAFT →
        </div>
      </div>
    </button>
  );
}

function FinalRoster({ slots, onReset }: { slots: Slot[]; onReset: () => void }) {
  return (
    <section>
      <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
        <div>
          <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent">
            ALLIANCE LOCKED · PROJECTED 10-0
          </div>
          <h2 className="font-display text-6xl tracking-wide">YOUR ALLIANCE</h2>
        </div>
        <button
          onClick={onReset}
          className="bg-primary px-5 py-3 font-display text-xl tracking-widest text-primary-foreground hover:brightness-110"
        >
          DRAFT AGAIN
        </button>
      </div>

      <div className="hazard-stripes mb-6 h-2 opacity-70" />

      <div className="grid gap-4 md:grid-cols-3">
        {slots.map((s, i) => {
          const t = s.pick!;
          const region = REGIONS.find((r) => r.id === s.region)!;
          const era = ERAS.find((e) => e.id === s.era)!;
          const role = CAPTAIN_LABELS[i] ?? `Pick ${i + 1}`;
          return (
            <article key={i} className="panel-metal relative overflow-hidden p-5">
              <div className="mb-3 flex items-center justify-between gap-2">
                <span className="tag-chip">{role}</span>
                <span className="tag-chip text-accent">
                  {region.code} · {era.years}
                </span>
              </div>
              <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                Team
              </div>
              <div className="font-display text-6xl leading-none text-primary">{t.number}</div>
              <div className="mt-1 font-display text-3xl leading-tight tracking-wide">{t.name}</div>
              <div className="mt-1 font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                {t.city}
              </div>
              <p className="mt-3 text-sm text-muted-foreground">{`${t.season.year} best season · #${t.season.rank} EPA · ${Math.round(t.season.winrate * 100)}% win rate`}</p>
              <div className="mt-4 border-t border-border pt-3 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                {region.label} · {era.label}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border/70">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-2 px-5 py-6 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
        <div>10-0 · An unofficial FRC fan project. Not affiliated with FIRST®.</div>
        <div>Regions: 29 FRC areas · Eras: 2007–2026</div>
      </div>
    </footer>
  );
}
