import { cn } from "@/lib/utils"

export function Logo({
  className,
  variant = "white",
  priority = false,
}: {
  className?: string
  variant?: "white" | "black"
  priority?: boolean
}) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={`/brand/opencoders-logo-${variant}.svg`}
      alt="Opencoders"
      width={1632}
      height={400}
      fetchPriority={priority ? "high" : undefined}
      decoding="async"
      className={cn("h-7 w-auto select-none", className)}
      draggable={false}
    />
  )
}
