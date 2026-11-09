"use client"

import { motion, useReducedMotion, type Transition } from "framer-motion"

const EASE = [0.2, 0.8, 0.2, 1] as const

type Mode = "view" | "mount"

/** Build animation props for stroke drawing / fading that work on mount or in view */
function useAnim(mode: Mode) {
  const reduce = useReducedMotion()
  const view = mode === "view" ? { viewport: { once: true, margin: "-10% 0px" } } : {}
  const key = mode === "view" ? "whileInView" : "animate"

  const draw = (delay: number, duration = 1) =>
    reduce
      ? {}
      : {
          initial: { pathLength: 0, opacity: 0 },
          [key]: { pathLength: 1, opacity: 1 },
          ...view,
          transition: { pathLength: { duration, delay, ease: EASE }, opacity: { duration: 0.3, delay } } as Transition,
        }
  const fade = (delay: number, y = 6, duration = 0.6) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y },
          [key]: { opacity: 1, y: 0 },
          ...view,
          transition: { duration, delay, ease: EASE } as Transition,
        }
  return { draw, fade, reduce }
}

/* ───────────────────────── Floor plan ─────────────────────────
   A small apartment plan: double-line walls, doors with swings, windows,
   stairs, grid bubbles, a dimension string and room labels. */
export function FloorPlan({ className, mode = "view", delay = 0 }: { className?: string; mode?: Mode; delay?: number }) {
  const { draw, fade } = useAnim(mode)
  const wall = { stroke: "var(--paper-2)", strokeWidth: 3.2, strokeLinecap: "square" as const, strokeLinejoin: "miter" as const }
  const thin = { stroke: "var(--paper-2)", strokeWidth: 1.1, strokeLinecap: "round" as const }
  const faint = { stroke: "var(--mute-2)", strokeWidth: 0.8, strokeLinecap: "round" as const }
  const label = { fill: "var(--mute)", fontFamily: "var(--font-mono), ui-monospace, monospace", fontSize: 6.5, letterSpacing: 1.2 }

  return (
    <svg viewBox="0 0 220 170" className={className} fill="none" aria-hidden>
      {/* grid bubbles + dimension string */}
      {[
        ["A", 24],
        ["B", 104],
        ["C", 196],
      ].map(([l, x], i) => (
        <motion.g key={l} {...fade(delay + 0.1 + i * 0.1)}>
          <circle cx={x} cy={11} r={6} {...faint} />
          <text x={x} y={13.5} textAnchor="middle" {...label} fontSize={6}>
            {l}
          </text>
          <line x1={x} y1={17} x2={x} y2={28} {...faint} strokeDasharray="2 2" />
        </motion.g>
      ))}
      <motion.path d="M24 160 H196" {...faint} {...draw(delay + 0.2, 0.8)} />
      <motion.path d="M24 156 V164 M104 156 V164 M196 156 V164" {...faint} {...draw(delay + 0.4, 0.4)} />
      <motion.text x={64} y={167} textAnchor="middle" {...label} {...fade(delay + 0.9)}>
        6.40
      </motion.text>
      <motion.text x={150} y={167} textAnchor="middle" {...label} {...fade(delay + 1.0)}>
        7.20
      </motion.text>

      {/* exterior walls */}
      <motion.path d="M24 30 H196 V146 H24 Z" {...wall} {...draw(delay + 0.3, 1.4)} />

      {/* interior walls */}
      <motion.path d="M104 30 V74 M104 92 V146" {...wall} strokeWidth={2.2} {...draw(delay + 0.9, 0.8)} />
      <motion.path d="M104 92 H150 M166 92 H196" {...wall} strokeWidth={2.2} {...draw(delay + 1.1, 0.6)} />
      <motion.path d="M24 100 H56 M72 100 H104" {...wall} strokeWidth={2.2} {...draw(delay + 1.2, 0.6)} />
      <motion.path d="M150 92 V146" {...wall} strokeWidth={2.2} {...draw(delay + 1.3, 0.5)} />

      {/* doors: leaf + swing */}
      <motion.path d="M104 74 L120 74 A16 16 0 0 1 104 92" {...thin} stroke="var(--signal)" {...draw(delay + 1.5, 0.6)} />
      <motion.path d="M150 92 L166 92 A16 16 0 0 0 150 108" {...thin} stroke="var(--signal)" {...draw(delay + 1.6, 0.6)} />
      <motion.path d="M56 100 L56 116 A16 16 0 0 1 72 100" {...thin} stroke="var(--signal)" {...draw(delay + 1.7, 0.6)} />
      {/* entrance */}
      <motion.path d="M24 118 L24 134 A16 16 0 0 1 40 118" {...thin} stroke="var(--signal)" {...draw(delay + 1.8, 0.6)} />

      {/* windows (triple line in wall thickness) */}
      {[
        [40, 30, 86, 30],
        [120, 30, 180, 30],
        [196, 48, 196, 76],
        [196, 108, 196, 136],
        [40, 146, 86, 146],
      ].map(([x1, y1, x2, y2], i) => (
        <motion.g key={i} {...fade(delay + 1.3 + i * 0.08, 0, 0.5)}>
          <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="var(--ink)" strokeWidth={3.4} />
          <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="var(--paper-2)" strokeWidth={0.9} />
          <line x1={x1} y1={y1 - 1.3 * (x1 === x2 ? 0 : 1)} x2={x2} y2={y2 - 1.3 * (x1 === x2 ? 0 : 1)} stroke="var(--paper-2)" strokeWidth={0.6} />
          <line x1={x1 - 1.3 * (x1 === x2 ? 1 : 0)} y1={y1} x2={x2 - 1.3 * (x1 === x2 ? 1 : 0)} y2={y2} stroke="var(--paper-2)" strokeWidth={0.6} />
        </motion.g>
      ))}

      {/* stairs */}
      <motion.g {...fade(delay + 1.9, 0, 0.6)}>
        {Array.from({ length: 7 }).map((_, i) => (
          <line key={i} x1={158 + i * 5} y1={100} x2={158 + i * 5} y2={140} {...thin} strokeWidth={0.8} />
        ))}
        <path d="M158 120 H192" {...thin} strokeWidth={0.8} />
        <path d="M186 120 l5 0 l-2.5 -2.5 M191 120 l-2.5 2.5" {...thin} strokeWidth={0.8} />
      </motion.g>

      {/* furniture hints */}
      <motion.g {...fade(delay + 2.0, 0, 0.6)} {...faint}>
        <rect x="36" y="44" width="46" height="30" rx="1.5" /> {/* sofa */}
        <path d="M36 54 H82" />
        <rect x="118" y="106" width="22" height="30" rx="1.5" /> {/* bed */}
        <path d="M118 114 H140" />
        <circle cx="60" cy="124" r="8" /> {/* table */}
      </motion.g>

      {/* labels */}
      <motion.text x="64" y="90" textAnchor="middle" {...label} {...fade(delay + 2.1)}>
        LIVING
      </motion.text>
      <motion.text x="150" y="62" textAnchor="middle" {...label} {...fade(delay + 2.2)}>
        KITCHEN
      </motion.text>
      <motion.text x="128" y="128" textAnchor="middle" {...label} {...fade(delay + 2.3)}>
        BED 01
      </motion.text>
      <motion.text x="64" y="140" textAnchor="middle" {...label} {...fade(delay + 2.4)}>
        DINING
      </motion.text>
    </svg>
  )
}

/* ───────────────────────── Isometric building ─────────────────────────
   Podium + tower, floor plates, glazing mullions and a ground plane. */
export function IsoBuilding({ className, mode = "view", delay = 0 }: { className?: string; mode?: Mode; delay?: number }) {
  const { fade } = useAnim(mode)
  // iso basis: right = (52, 30), left = (-52, 30), up = (0, -1)
  const F = { x: 80, y: 168 } // front-bottom
  const L = { x: 28, y: 138 }
  const R = { x: 132, y: 138 }
  const B = { x: 80, y: 108 }
  const H = 108 // tower height
  const PH = 22 // podium height
  const pt = (p: { x: number; y: number }, h: number) => `${p.x},${p.y - h}`

  const floors = Array.from({ length: 7 }).map((_, i) => PH + 12 + i * 12)
  const mullions = [0.2, 0.4, 0.6, 0.8]

  return (
    <svg viewBox="0 0 160 180" className={className} fill="none" aria-hidden>
      <defs>
        <linearGradient id="iso-left" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#1b1b1f" />
          <stop offset="1" stopColor="#0f0f11" />
        </linearGradient>
        <linearGradient id="iso-right" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#2a2a2f" />
          <stop offset="1" stopColor="#17171a" />
        </linearGradient>
        <linearGradient id="iso-top" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#ff7a47" />
          <stop offset="1" stopColor="#c63d0a" />
        </linearGradient>
      </defs>

      {/* ground plane */}
      <motion.g {...fade(delay, 10, 0.8)}>
        <path d={`M80 182 L8 140 L80 98 L152 140 Z`} fill="rgba(255,255,255,0.02)" stroke="var(--line-2)" strokeWidth="0.8" />
        <path d="M44 161 L116 119 M20 147 L92 105 M68 175 L140 133" stroke="var(--line)" strokeWidth="0.6" />
        <path d="M80 182 L80 98 M8 140 L152 140" stroke="var(--line)" strokeWidth="0.6" />
      </motion.g>

      {/* podium */}
      <motion.g {...fade(delay + 0.4, 14, 0.9)}>
        <path d={`M${pt(L, 0)} L${pt(F, 0)} L${pt(F, PH)} L${pt(L, PH)} Z`} fill="url(#iso-left)" stroke="var(--line-2)" strokeWidth="0.8" />
        <path d={`M${pt(F, 0)} L${pt(R, 0)} L${pt(R, PH)} L${pt(F, PH)} Z`} fill="url(#iso-right)" stroke="var(--line-2)" strokeWidth="0.8" />
        <path d={`M${pt(L, PH)} L${pt(F, PH)} L${pt(R, PH)} L${pt(B, PH)} Z`} fill="#232327" stroke="var(--line-2)" strokeWidth="0.8" />
      </motion.g>

      {/* tower (set back on podium) */}
      {(() => {
        const s = 0.72
        const tl = { x: B.x + (L.x - B.x) * s, y: B.y + (L.y - B.y) * s }
        const tr = { x: B.x + (R.x - B.x) * s, y: B.y + (R.y - B.y) * s }
        const tf = { x: tl.x + (tr.x - tl.x) / 2, y: tl.y + (tr.y - tl.y) / 2 + (F.y - B.y) * s * 0.5 }
        const tb = { x: tf.x, y: tf.y - (F.y - B.y) * s }
        const top = PH + H
        return (
          <motion.g {...fade(delay + 0.8, 26, 1.1)}>
            <path d={`M${pt(tl, PH)} L${pt(tf, PH)} L${pt(tf, top)} L${pt(tl, top)} Z`} fill="url(#iso-left)" stroke="var(--line-2)" strokeWidth="0.8" />
            <path d={`M${pt(tf, PH)} L${pt(tr, PH)} L${pt(tr, top)} L${pt(tf, top)} Z`} fill="url(#iso-right)" stroke="var(--line-2)" strokeWidth="0.8" />
            {/* floor plates */}
            {floors.map((h) => (
              <path key={h} d={`M${pt(tl, h)} L${pt(tf, h)} L${pt(tr, h)}`} stroke="rgba(255,255,255,0.12)" strokeWidth="0.7" />
            ))}
            {/* mullions */}
            {mullions.map((m) => {
              const lx = tl.x + (tf.x - tl.x) * m
              const ly = tl.y + (tf.y - tl.y) * m
              const rx = tf.x + (tr.x - tf.x) * m
              const ry = tf.y + (tr.y - tf.y) * m
              return (
                <g key={m} stroke="rgba(255,255,255,0.07)" strokeWidth="0.6">
                  <line x1={lx} y1={ly - PH} x2={lx} y2={ly - top} />
                  <line x1={rx} y1={ry - PH} x2={rx} y2={ry - top} />
                </g>
              )
            })}
            {/* lit windows */}
            {[
              [0.3, 2],
              [0.5, 4],
              [0.7, 1],
              [0.1, 5],
            ].map(([m, f], i) => {
              const x = tf.x + (tr.x - tf.x) * m
              const y = tf.y + (tr.y - tf.y) * m - (PH + 14 + f * 12)
              return <rect key={i} x={x - 2.2} y={y - 6} width={4.4} height={6} fill="rgba(255,122,71,0.35)" />
            })}
            {/* roof */}
            <path d={`M${pt(tl, top)} L${pt(tf, top)} L${pt(tr, top)} L${pt(tb, top)} Z`} fill="url(#iso-top)" stroke="rgba(255,122,71,0.9)" strokeWidth="0.8" />
            <path d={`M${pt(tl, top)} L${pt(tr, top)}`} stroke="rgba(255,255,255,0.25)" strokeWidth="0.5" />
          </motion.g>
        )
      })()}

      {/* height dimension */}
      <motion.g {...fade(delay + 1.8, 0, 0.6)} stroke="var(--mute-2)" strokeWidth="0.7">
        <line x1="146" y1="138" x2="146" y2="30" strokeDasharray="2 2" />
        <line x1="142" y1="138" x2="150" y2="138" />
        <line x1="142" y1="30" x2="150" y2="30" />
        <text x="152" y="86" fill="var(--mute)" fontSize="6" fontFamily="var(--font-mono), ui-monospace, monospace" stroke="none">
          G+7
        </text>
      </motion.g>
    </svg>
  )
}

/* ───────────────────────── Land map ─────────────────────────
   City map: contours, river, roads, parcel polygons, a selected plot with pin. */
export function LandMap({ className, mode = "view", delay = 0 }: { className?: string; mode?: Mode; delay?: number }) {
  const { draw, fade, reduce } = useAnim(mode)
  const parcel = { fill: "rgba(255,255,255,0.035)", stroke: "var(--line-2)", strokeWidth: 0.8 }
  const key = mode === "view" ? "whileInView" : "animate"
  const view = mode === "view" ? { viewport: { once: true, margin: "-10% 0px" } } : {}

  return (
    <svg viewBox="0 0 320 220" className={className} fill="none" preserveAspectRatio="xMidYMid slice" aria-hidden>
      {/* contours */}
      <motion.g {...fade(delay, 0, 1.2)} stroke="rgba(255,255,255,0.06)" strokeWidth="0.8">
        <path d="M-10 40 C 40 20, 90 60, 140 30 S 230 10, 330 40" />
        <path d="M-10 70 C 50 45, 100 90, 150 60 S 240 40, 330 70" />
        <path d="M-10 190 C 50 170, 110 210, 170 180 S 260 160, 330 190" />
        <path d="M-10 215 C 60 195, 120 230, 180 205 S 270 185, 330 215" />
      </motion.g>

      {/* river */}
      <motion.path
        d="M250 -10 C 236 40, 292 80, 272 125 S 300 190, 262 230"
        stroke="rgba(93,148,196,0.28)"
        strokeWidth="11"
        strokeLinecap="round"
        {...draw(delay + 0.1, 1.4)}
      />
      <motion.path d="M250 -10 C 236 40, 292 80, 272 125 S 300 190, 262 230" stroke="rgba(93,148,196,0.5)" strokeWidth="1" {...draw(delay + 0.1, 1.4)} />

      {/* parcels */}
      <motion.g {...fade(delay + 0.6, 0, 0.9)}>
        <path d="M14 56 L86 48 L90 108 L22 114 Z" {...parcel} />
        <path d="M14 126 L92 120 L96 180 L28 190 Z" {...parcel} />
        <path d="M108 46 L180 40 L184 76 L112 84 Z" {...parcel} />
        <path d="M112 96 L186 88 L190 128 L116 136 Z" {...parcel} />
        <path d="M118 148 L192 140 L196 196 L124 204 Z" {...parcel} />
        <path d="M204 38 L236 36 L244 86 L208 90 Z" {...parcel} />
        <path d="M208 150 L244 146 L248 196 L212 200 Z" {...parcel} />
        {/* sub-divisions */}
        <path d="M50 52 L54 111 M14 85 L88 78" stroke="var(--line)" strokeWidth="0.6" />
        <path d="M144 43 L148 80 M156 146 L160 200 M118 176 L194 168" stroke="var(--line)" strokeWidth="0.6" />
        <path d="M54 123 L58 185" stroke="var(--line)" strokeWidth="0.6" />
      </motion.g>

      {/* roads */}
      <motion.g strokeLinecap="round">
        <motion.path d="M-10 120 C 60 112, 120 126, 200 110 S 280 96, 330 102" stroke="#1f1f24" strokeWidth="9" {...draw(delay + 0.3, 1.4)} />
        <motion.path d="M-10 120 C 60 112, 120 126, 200 110 S 280 96, 330 102" stroke="rgba(255,255,255,0.18)" strokeWidth="0.8" strokeDasharray="5 5" {...draw(delay + 0.5, 1.4)} />
        <motion.path d="M98 -10 C 104 60, 94 140, 106 230" stroke="#1c1c20" strokeWidth="6" {...draw(delay + 0.6, 1.2)} />
        <motion.path d="M196 -10 C 190 60, 202 140, 200 230" stroke="#1c1c20" strokeWidth="6" {...draw(delay + 0.7, 1.2)} />
        <motion.path d="M-10 36 C 80 28, 160 44, 330 22" stroke="#1c1c20" strokeWidth="4.5" {...draw(delay + 0.8, 1.2)} />
        <motion.path d="M-10 198 C 80 190, 160 206, 330 186" stroke="#1c1c20" strokeWidth="4.5" {...draw(delay + 0.9, 1.2)} />
      </motion.g>

      {/* selected parcel */}
      <motion.path
        d="M112 96 L186 88 L190 128 L116 136 Z"
        fill="rgba(255,90,31,0.22)"
        stroke="var(--signal)"
        strokeWidth="1.4"
        strokeDasharray="4 3"
        {...draw(delay + 1.2, 1)}
      />
      <motion.g {...fade(delay + 1.4, 0, 0.5)}>
        <text x="151" y="146" textAnchor="middle" fill="var(--signal)" fontSize="7" fontFamily="var(--font-mono), ui-monospace, monospace" letterSpacing="1">
          0.42 AC · 1,700 m²
        </text>
      </motion.g>

      {/* pin */}
      <motion.g
        initial={reduce ? false : { opacity: 0, y: -26, scale: 0.6 }}
        {...{ [key]: { opacity: 1, y: 0, scale: 1 } }}
        {...view}
        transition={{ delay: delay + 1.6, type: "spring", stiffness: 260, damping: 16 }}
        style={{ transformOrigin: "151px 112px" }}
      >
        <ellipse cx="151" cy="113" rx="6" ry="2" fill="rgba(0,0,0,0.5)" />
        <path d="M151 112 C 145 102, 143 98, 143 94 a8 8 0 0 1 16 0 c0 4 -2 8 -8 18 Z" fill="var(--signal)" stroke="var(--ink)" strokeWidth="1" />
        <circle cx="151" cy="94" r="3" fill="var(--ink)" />
        {!reduce && (
          <motion.circle cx="151" cy="113" r="6" stroke="var(--signal)" strokeWidth="1" animate={{ r: [6, 16], opacity: [0.6, 0] }} transition={{ duration: 1.8, repeat: Infinity, ease: "easeOut", delay: delay + 2 }} />
        )}
      </motion.g>

      {/* compass + scale */}
      <motion.g {...fade(delay + 1.0, 0, 0.6)} stroke="var(--mute-2)" strokeWidth="0.8">
        <circle cx="300" cy="24" r="9" fill="rgba(10,10,11,0.6)" />
        <path d="M300 17 L303 26 L300 24 L297 26 Z" fill="var(--signal)" stroke="none" />
        <text x="300" y="12" textAnchor="middle" fill="var(--mute)" fontSize="6" fontFamily="var(--font-mono), ui-monospace, monospace" stroke="none">
          N
        </text>
        <path d="M14 208 H54 M14 205 V211 M34 206 V210 M54 205 V211" />
        <text x="58" y="211" fill="var(--mute)" fontSize="6" fontFamily="var(--font-mono), ui-monospace, monospace" stroke="none">
          100 m
        </text>
      </motion.g>
    </svg>
  )
}
