"use client"

import * as React from "react"
import { useSearchParams } from "next/navigation"
import { motion } from "framer-motion"
import { Mail, MessageCircle, Send } from "lucide-react"
import { serviceOptions } from "@/lib/content"
import { site, whatsappLink } from "@/lib/site"
import { cn } from "@/lib/utils"

type Form = { name: string; company: string; email: string; service: string; message: string }

export function ContactForm() {
  const params = useSearchParams()
  const preset = params.get("service") ?? ""
  const [form, setForm] = React.useState<Form>({ name: "", company: "", email: "", service: preset, message: "" })
  const [touched, setTouched] = React.useState(false)
  const [channel, setChannel] = React.useState<"whatsapp" | "email">("whatsapp")

  React.useEffect(() => {
    if (preset) setForm((f) => ({ ...f, service: preset }))
  }, [preset])

  const valid = form.name.trim().length > 1 && form.service && form.message.trim().length > 5
  const update = (k: keyof Form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }))

  const compose = () =>
    [
      `Hi Opencoders, I'm ${form.name}${form.company ? ` from ${form.company}` : ""}.`,
      `Interested in: ${form.service}.`,
      form.message,
      form.email ? `Email: ${form.email}` : "",
    ]
      .filter(Boolean)
      .join("\n\n")

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    setTouched(true)
    if (!valid) return
    const body = compose()
    if (channel === "whatsapp") {
      window.open(whatsappLink(body), "_blank", "noopener,noreferrer")
    } else {
      window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(`Project enquiry — ${form.service}`)}&body=${encodeURIComponent(body)}`
    }
  }

  const field = "w-full rounded-2xl border border-line bg-ink/60 px-4 py-3.5 text-base text-paper placeholder:text-mute-2 outline-none transition-all focus:border-signal focus:ring-2 focus:ring-signal/30"
  const err = (ok: boolean) => touched && !ok && "border-red-500/60"

  return (
    <form onSubmit={submit} className="card-surface noise rounded-[1.75rem] p-6 sm:p-8" noValidate>
      <div className="mb-6 flex rounded-full border border-line bg-ink/60 p-1">
        {(
          [
            { id: "whatsapp", label: "WhatsApp", Icon: MessageCircle },
            { id: "email", label: "Email", Icon: Mail },
          ] as const
        ).map((c) => (
          <button
            key={c.id}
            type="button"
            onClick={() => setChannel(c.id)}
            className={cn("relative flex flex-1 items-center justify-center gap-2 rounded-full py-2.5 text-sm font-medium transition-colors", channel === c.id ? "text-white" : "text-mute hover:text-paper")}
            aria-pressed={channel === c.id}
          >
            {channel === c.id && <motion.span layoutId="channel" className="absolute inset-0 rounded-full bg-signal" transition={{ type: "spring", stiffness: 350, damping: 30 }} />}
            <c.Icon className="relative h-4 w-4" />
            <span className="relative">Send via {c.label}</span>
          </button>
        ))}
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="mb-1.5 block font-mono text-[11px] uppercase tracking-[0.18em] text-mute">Your name *</span>
          <input className={cn(field, err(form.name.trim().length > 1))} value={form.name} onChange={update("name")} placeholder="Shah Rukh" autoComplete="name" required />
        </label>
        <label className="block">
          <span className="mb-1.5 block font-mono text-[11px] uppercase tracking-[0.18em] text-mute">Company</span>
          <input className={field} value={form.company} onChange={update("company")} placeholder="Al Marwan Contracting" autoComplete="organization" />
        </label>
        <label className="block sm:col-span-2">
          <span className="mb-1.5 block font-mono text-[11px] uppercase tracking-[0.18em] text-mute">Email</span>
          <input className={field} type="email" value={form.email} onChange={update("email")} placeholder="you@company.com" autoComplete="email" />
        </label>
        <label className="block sm:col-span-2">
          <span className="mb-1.5 block font-mono text-[11px] uppercase tracking-[0.18em] text-mute">What do you need? *</span>
          <select className={cn(field, "appearance-none", err(!!form.service))} value={form.service} onChange={update("service")} required>
            <option value="" disabled>
              Select a service or product
            </option>
            {serviceOptions.map((o) => (
              <option key={o} value={o}>
                {o}
              </option>
            ))}
            {preset && !serviceOptions.includes(preset) && <option value={preset}>{preset}</option>}
          </select>
        </label>
        <label className="block sm:col-span-2">
          <span className="mb-1.5 block font-mono text-[11px] uppercase tracking-[0.18em] text-mute">Tell us about it *</span>
          <textarea className={cn(field, "min-h-[140px] resize-y", err(form.message.trim().length > 5))} value={form.message} onChange={update("message")} placeholder="What's slowing you down, what you want to achieve, timelines, budget range…" required />
        </label>
      </div>

      {touched && !valid && <p className="mt-3 text-sm text-red-400">Please add your name, pick a service and write a short message.</p>}

      <button
        type="submit"
        className="group mt-6 flex h-14 w-full items-center justify-center gap-2 rounded-full bg-signal text-base font-medium text-white transition-all hover:bg-signal-2 signal-glow active:scale-[0.99]"
      >
        <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        {channel === "whatsapp" ? "Open WhatsApp with my message" : "Open email with my message"}
      </button>
      <p className="mt-3 text-center text-xs text-mute-2">No forms into the void — your message opens in your own app, so you keep a copy.</p>
    </form>
  )
}
