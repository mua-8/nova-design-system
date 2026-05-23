export function AuroraBg() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden -z-10">
      <div className="absolute inset-0 grid-pattern opacity-60" />
      <div
        className="absolute -top-40 -left-32 h-[40rem] w-[40rem] rounded-full opacity-50 blur-3xl animate-float-orb"
        style={{ background: "radial-gradient(circle, oklch(0.65 0.22 265 / 0.55), transparent 70%)" }}
      />
      <div
        className="absolute top-20 -right-32 h-[36rem] w-[36rem] rounded-full opacity-50 blur-3xl animate-float-orb"
        style={{
          background: "radial-gradient(circle, oklch(0.62 0.25 295 / 0.55), transparent 70%)",
          animationDelay: "-8s",
        }}
      />
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[28rem] w-[60rem] opacity-30 blur-3xl"
        style={{ background: "radial-gradient(ellipse, oklch(0.78 0.18 200 / 0.4), transparent 70%)" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />
    </div>
  );
}
