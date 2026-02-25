export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero */}
      <header className="relative bg-gradient-to-br from-teal-700 via-teal-600 to-emerald-500 text-white">
        <div className="max-w-5xl mx-auto px-6 py-28 text-center">
          <h1 className="text-5xl sm:text-6xl font-bold tracking-tight mb-4">
            OTD Oasis
          </h1>
          <p className="text-xl sm:text-2xl font-light max-w-2xl mx-auto leading-relaxed opacity-90">
            A safe harbor for those who&apos;ve charted their own course beyond
            Orthodox Judaism.
          </p>
        </div>
        {/* subtle wave divider */}
        <svg
          className="absolute bottom-0 w-full text-[#faf9f6]"
          viewBox="0 0 1440 60"
          preserveAspectRatio="none"
        >
          <path
            fill="currentColor"
            d="M0,60 L0,30 Q360,0 720,30 Q1080,60 1440,30 L1440,60 Z"
          />
        </svg>
      </header>

      {/* Mission */}
      <section className="max-w-3xl mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl font-semibold text-gray-900 mb-6">
          Our Mission
        </h2>
        <p className="text-lg leading-relaxed text-gray-700">
          Leaving an insular religious community is one of the most courageous
          — and isolating — journeys a person can take. OTD Oasis exists to
          make sure no one walks that path alone. We build and support projects
          that offer{" "}
          <span className="font-medium text-teal-700">resources</span>,{" "}
          <span className="font-medium text-teal-700">community</span>, and a
          lasting sense of{" "}
          <span className="font-medium text-teal-700">belonging</span> to
          people who have left Orthodox Judaism.
        </p>
      </section>

      {/* Current Projects */}
      <section className="bg-white py-20">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-semibold text-gray-900 text-center mb-12">
            Current Projects
          </h2>

          <a
            href="https://beyondthederech.com"
            target="_blank"
            rel="noopener noreferrer"
            className="block max-w-xl mx-auto rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow p-8 group"
          >
            <h3 className="text-2xl font-semibold text-teal-700 group-hover:text-teal-600 transition-colors mb-3">
              Beyond the Derech
            </h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              A community-driven platform connecting people who have left
              Orthodox Judaism. Beyond the Derech provides a space to share
              stories, find support groups, and access curated resources for
              navigating life after leaving.
            </p>
            <span className="inline-flex items-center text-sm font-medium text-teal-600 group-hover:text-teal-500">
              Visit beyondthederech.com
              <svg
                className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-0.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </span>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-auto bg-gray-900 text-gray-400 py-10">
        <div className="max-w-5xl mx-auto px-6 text-center text-sm space-y-2">
          <p>
            <a
              href="mailto:info@otdoasis.org"
              className="hover:text-white transition-colors"
            >
              info@otdoasis.org
            </a>
          </p>
          <p>&copy; {new Date().getFullYear()} OTD Oasis. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
