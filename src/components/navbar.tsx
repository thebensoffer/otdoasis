"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Logo } from "@/components/Logo"

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()
  const isHome = pathname === "/"

  useEffect(() => {
    if (!isHome) { setScrolled(true); return }
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [isHome])

  const links = [
    { href: "/", label: "Home" },
    { href: "/resources", label: "Resources" },
    { href: "/#projects", label: "Projects" },
    { href: "mailto:info@otdoasis.org", label: "Contact", external: true },
  ]

  const navBg = scrolled
    ? "bg-white/95 backdrop-blur-md shadow-sm"
    : "bg-transparent"
  const textColor = scrolled ? "text-gray-800" : "text-white"
  const logoColor = scrolled ? "text-teal-700" : "text-white"

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBg}`}>
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className={`flex items-center gap-2.5 font-bold text-xl ${logoColor} transition-colors`}>
          <Logo size={30} />
          <span>
            <span className="font-light tracking-widest text-sm uppercase opacity-80">OTD</span>
            <span className="block font-extrabold tracking-tight leading-none -mt-1">Oasis</span>
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-6">
          {links.map((l) =>
            l.external ? (
              <a key={l.label} href={l.href} className={`text-sm font-medium hover:opacity-70 transition-opacity ${textColor}`}>
                {l.label}
              </a>
            ) : (
              <Link key={l.label} href={l.href} className={`text-sm font-medium hover:opacity-70 transition-opacity ${textColor}`}>
                {l.label}
              </Link>
            )
          )}
          <Link
            href="/resources"
            className={`text-sm font-semibold px-4 py-2 rounded-full transition-all ${
              scrolled
                ? "bg-teal-600 text-white hover:bg-teal-700"
                : "bg-white/20 text-white border border-white/40 hover:bg-white/30"
            }`}
          >
            Find Help →
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className={`md:hidden p-2 ${textColor}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
          ) : (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
          {links.map((l) =>
            l.external ? (
              <a key={l.label} href={l.href} className="block px-6 py-3 text-sm text-gray-700 hover:bg-gray-50" onClick={() => setMenuOpen(false)}>
                {l.label}
              </a>
            ) : (
              <Link key={l.label} href={l.href} className="block px-6 py-3 text-sm text-gray-700 hover:bg-gray-50" onClick={() => setMenuOpen(false)}>
                {l.label}
              </Link>
            )
          )}
          <div className="px-6 py-4">
            <Link href="/resources" className="block text-center py-2.5 bg-teal-600 text-white rounded-full text-sm font-semibold" onClick={() => setMenuOpen(false)}>
              Find Help →
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
