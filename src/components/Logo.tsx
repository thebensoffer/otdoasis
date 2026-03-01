"use client"

import { useId } from "react"

interface LogoProps {
  /** Rendered width & height in px (square). Default: 32 */
  size?: number
  className?: string
}

/**
 * OTD Oasis palm-tree / oasis logo.
 * Works on both dark (transparent nav over hero) and light backgrounds.
 * Uses a teal → emerald gradient to match the brand palette.
 */
export function Logo({ size = 32, className = "" }: LogoProps) {
  const uid = useId()
  // Replace React's ":r0:" format with a valid CSS ID token
  const gId = `otd-lg-${uid.replace(/:/g, "")}`

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={gId} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#14b8a6" />
          <stop offset="100%" stopColor="#10b981" />
        </linearGradient>
      </defs>

      {/*
        ── TRUNK ──────────────────────────────────────────────────
        Slightly curved, wider at base, tapers toward the crown.
      */}
      <path
        d="M18.5 46 C17.5 36 17 26 19.5 18 L21 18 C22 28 22.5 37 21.5 46 Z"
        fill={`url(#${gId})`}
      />

      {/*
        ── FRONDS ─────────────────────────────────────────────────
        7 leaf-shaped paths, all rotated around the crown point (20, 18).
        Each leaf: thin teardrop that tapers to a tip ~16 px above the crown.
        Drooping outer fronds (≥90°) are slightly more transparent.
      */}
      {/* Leaf base shape as a shared path template */}
      {(
        [
          { angle: 0,    opacity: 1   },   // straight up
          { angle: -38,  opacity: 1   },   // upper-left
          { angle: -76,  opacity: 0.9 },   // left
          { angle: -110, opacity: 0.7 },   // drooping-left
          { angle:  38,  opacity: 1   },   // upper-right
          { angle:  76,  opacity: 0.9 },   // right
          { angle:  110, opacity: 0.7 },   // drooping-right
        ] as const
      ).map(({ angle, opacity }, i) => (
        <path
          key={i}
          // Leaf: from crown upward, curved to one side, tip at ~y=2
          d="M20 18 C18.5 13 17 7 15.5 2 C18 7 21.5 12 20 18 Z"
          fill={`url(#${gId})`}
          opacity={opacity}
          transform={`rotate(${angle} 20 18)`}
        />
      ))}

      {/*
        ── OASIS POOL ─────────────────────────────────────────────
        Two concentric ellipses at the base suggest a desert oasis pool.
      */}
      <ellipse cx="20" cy="46" rx="9"  ry="2"   fill={`url(#${gId})`} opacity="0.35" />
      <ellipse cx="20" cy="46" rx="15" ry="3.5" fill={`url(#${gId})`} opacity="0.15" />
    </svg>
  )
}
