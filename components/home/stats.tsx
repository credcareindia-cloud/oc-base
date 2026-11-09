import { stats } from "@/lib/content"
import { Counter, Reveal } from "@/components/site/motion"

export function Stats() {
  return (
    <section className="border-y border-line">
      <div className="container-x grid grid-cols-2 divide-x divide-line lg:grid-cols-4">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.06} className={`px-4 py-10 sm:px-8 sm:py-14 ${i % 2 === 0 ? "pl-0" : ""} ${i >= 2 ? "border-t border-line lg:border-t-0" : ""}`}>
            <p className="font-display text-4xl font-medium tracking-tight text-paper sm:text-5xl lg:text-6xl">
              <Counter value={s.value} decimals={"decimals" in s ? (s.decimals as number) : 0} suffix={s.suffix} />
            </p>
            <p className="mt-3 text-sm text-mute">{s.label}</p>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
