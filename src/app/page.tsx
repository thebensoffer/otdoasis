import Link from "next/link"
import Image from "next/image"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">

      {/* ── HERO ──────────────────────────────────────────────── */}
      <header className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
        {/* Background image */}
        <Image
          src="https://images.unsplash.com/photo-1559494007-9f5847c49d94?auto=format&fit=crop&w=1920&q=80"
          alt="Desert oasis with palm trees"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />

        {/* Hero content */}
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          {/* Text logo */}
          <div className="mb-8 inline-block">
            <p className="text-white/70 text-xs font-semibold tracking-[0.4em] uppercase mb-1">Welcome to</p>
            <div className="flex items-end justify-center gap-3">
              <span className="text-white/80 text-4xl sm:text-5xl font-extralight tracking-[0.15em] uppercase">OTD</span>
              <span
                className="text-5xl sm:text-7xl font-black tracking-tight leading-none"
                style={{ background: "linear-gradient(135deg, #5eead4, #34d399, #10b981)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
              >
                Oasis
              </span>
            </div>
            <div className="mt-3 h-px w-full bg-gradient-to-r from-transparent via-teal-400/60 to-transparent" />
          </div>

          <p className="text-white/90 text-xl sm:text-2xl font-light leading-relaxed max-w-2xl mx-auto mb-10">
            A safe harbor for those who&rsquo;ve charted their own course
            <span className="text-teal-300"> beyond Orthodox Judaism.</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/resources"
              className="px-8 py-4 bg-teal-500 hover:bg-teal-400 text-white font-semibold rounded-full text-base shadow-lg shadow-teal-500/30 transition-all hover:shadow-teal-400/40 hover:-translate-y-0.5"
            >
              🌿 Explore Resources
            </Link>
            <a
              href="#mission"
              className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-full text-base border border-white/30 backdrop-blur-sm transition-all hover:-translate-y-0.5"
            >
              Our Mission ↓
            </a>
          </div>
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce opacity-60">
          <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
          </svg>
        </div>

        {/* Wave divider */}
        <svg className="absolute bottom-0 w-full text-[#faf9f6]" viewBox="0 0 1440 80" preserveAspectRatio="none">
          <path fill="currentColor" d="M0,80 L0,40 Q360,0 720,40 Q1080,80 1440,40 L1440,80 Z" />
        </svg>
      </header>

      {/* ── MISSION ───────────────────────────────────────────── */}
      <section id="mission" className="bg-[#faf9f6] py-24">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-teal-50 text-teal-700 text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-full mb-6">
            🌴 Our Mission
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
            No one walks<br />this path alone.
          </h2>
          <p className="text-lg leading-relaxed text-gray-600">
            Leaving an insular religious community is one of the most courageous — and isolating — journeys a person can take.
            OTD Oasis exists to make sure you&rsquo;re never without{" "}
            <span className="font-semibold text-teal-700">resources</span>,{" "}
            <span className="font-semibold text-teal-700">community</span>, and a lasting sense of{" "}
            <span className="font-semibold text-teal-700">belonging</span>.
          </p>
          <div className="mt-10 grid sm:grid-cols-3 gap-6 text-left">
            {[
              { icon: "📚", title: "Knowledge", body: "Curated resources, guides, and educational content to help you understand and navigate your journey." },
              { icon: "🤝", title: "Community", body: "Connect with others who understand. Find your people and build the support network you deserve." },
              { icon: "🛟", title: "Support", body: "Mental health resources, crisis lines, and organizations that specialize in religious trauma." },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROJECTS ──────────────────────────────────────────── */}
      <section id="projects" className="bg-white py-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-700 text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-full mb-4">
              🌱 Current Projects
            </div>
            <h2 className="text-4xl font-bold text-gray-900">What we&rsquo;re building</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <a
              href="https://beyondthederech.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block rounded-3xl overflow-hidden border border-gray-200 hover:border-teal-300 shadow-sm hover:shadow-xl transition-all duration-300 p-8 bg-gradient-to-br from-teal-50 to-emerald-50"
            >
              <div className="flex items-start justify-between mb-4">
                <span className="text-4xl">🛤️</span>
                <span className="text-xs bg-teal-100 text-teal-700 px-3 py-1 rounded-full font-medium">Live</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-teal-700 transition-colors">Beyond the Derech</h3>
              <p className="text-gray-600 leading-relaxed mb-5">
                A community-driven platform connecting people who have left Orthodox Judaism. Stories, support, curated resources, and a verified member community.
              </p>
              <span className="inline-flex items-center text-sm font-semibold text-teal-600 group-hover:gap-2 transition-all">
                Visit beyondthederech.com
                <svg className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </a>

            <div className="group relative block rounded-3xl overflow-hidden border border-dashed border-gray-300 shadow-sm p-8 bg-gray-50 flex flex-col justify-center items-center text-center">
              <span className="text-4xl mb-4">🌱</span>
              <h3 className="text-xl font-bold text-gray-500 mb-2">More Coming Soon</h3>
              <p className="text-sm text-gray-400 leading-relaxed max-w-xs">
                We&rsquo;re working on more projects to support the OTD community. Stay tuned.
              </p>
              <a
                href="mailto:info@otdoasis.org"
                className="mt-4 text-xs text-teal-600 hover:underline"
                onClick={(e) => e.stopPropagation()}
              >
                Have an idea? Let us know →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── RESOURCES CTA ─────────────────────────────────────── */}
      <section className="bg-gradient-to-br from-teal-700 via-teal-600 to-emerald-500 py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Need help right now?</h2>
          <p className="text-white/80 text-lg mb-8">
            We&rsquo;ve compiled organizations, communities, and mental health resources for every stage of your journey.
          </p>
          <Link
            href="/resources"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-teal-700 font-bold rounded-full text-base shadow-lg hover:bg-teal-50 transition-colors"
          >
            🌿 Browse All Resources
          </Link>
        </div>
      </section>

      {/* ── FOOTER ────────────────────────────────────────────── */}
      <footer className="bg-gray-950 text-gray-500 py-12">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-3">
              <span className="text-2xl">🌴</span>
              <div>
                <p className="text-white font-bold text-sm leading-none">OTD Oasis</p>
                <p className="text-gray-500 text-xs mt-0.5">A safe harbor for the OTD community</p>
              </div>
            </div>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <Link href="/resources" className="hover:text-white transition-colors">Resources</Link>
              <a href="https://beyondthederech.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Beyond the Derech</a>
              <a href="mailto:info@otdoasis.org" className="hover:text-white transition-colors">info@otdoasis.org</a>
            </div>
          </div>
          <div className="mt-8 pt-6 border-t border-gray-800 text-center text-xs">
            &copy; {new Date().getFullYear()} OTD Oasis. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}
