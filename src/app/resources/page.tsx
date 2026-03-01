import type { Metadata } from "next"
import Link from "next/link"
import { Logo } from "@/components/Logo"

export const metadata: Metadata = {
  title: "Resources | OTD Oasis",
  description: "Organizations, communities, mental health support, and educational resources for those who have left or are leaving Orthodox Judaism.",
  openGraph: {
    title: "OTD Oasis Resources",
    description: "Organizations, communities, and support for people leaving Orthodox Judaism.",
    url: "https://otdoasis.org/resources",
  },
}

const resources = [
  {
    category: "Organizations",
    icon: "🏛️",
    items: [
      {
        name: "Footsteps",
        description: "NYC-based organization providing educational, vocational, and social support to individuals who have left or are considering leaving ultra-Orthodox and Hasidic Jewish communities.",
        url: "https://www.footstepsorg.org",
        location: "USA (NYC)",
        services: ["Career support", "Education", "Social events", "Counseling"],
      },
      {
        name: "Hillel and Vayter",
        description: "Israeli organization supporting those who have left the ultra-Orthodox world, providing practical assistance and community.",
        url: "https://www.hillelvayter.org.il",
        location: "Israel",
        services: ["Housing help", "Education", "Legal aid", "Community"],
      },
      {
        name: "Gesher EU",
        description: "UK-based support for people leaving the Charedi community, offering practical help and emotional support.",
        url: "https://geshereu.org.uk",
        location: "UK",
        services: ["Support groups", "Mentoring", "Practical help"],
      },
      {
        name: "Mavar",
        description: "UK charity helping people who are leaving or have left the Charedi or Hasidic community.",
        url: "https://mavar.org",
        location: "UK",
        services: ["Housing", "Education", "Employment", "Counseling"],
      },
      {
        name: "Eshel",
        description: "Support for LGBTQ+ Jews and their families in the Orthodox community.",
        url: "https://eshelonline.org",
        location: "USA",
        services: ["Support groups", "Retreats", "Parent support"],
      },
      {
        name: "ORA — Organization for the Resolution of Agunot",
        description: "Helping women who are trapped in marriages because their husbands refuse to grant a Get (Jewish divorce).",
        url: "https://www.getora.org",
        location: "USA",
        services: ["Legal aid", "Advocacy", "Education"],
      },
    ],
  },
  {
    category: "Online Communities",
    icon: "💬",
    items: [
      {
        name: "Beyond the Derech",
        description: "A verified, private community for people who have left or are leaving Orthodoxy. Stories, support, forum, and more.",
        url: "https://beyondthederech.com",
        location: "Online",
        services: ["Verified community", "Forum", "Stories", "Mentorship"],
      },
      {
        name: "Off The Derech (Facebook)",
        description: "Large online community for people who have left Orthodox Judaism. A safe space for sharing experiences and asking questions.",
        url: "https://www.facebook.com/groups/offthederech",
        location: "Online",
        services: ["Community", "Support", "Discussion"],
      },
      {
        name: "r/exjew (Reddit)",
        description: "Reddit community for former Orthodox and Hasidic Jews to share experiences and support each other.",
        url: "https://www.reddit.com/r/exjew",
        location: "Online",
        services: ["Anonymous support", "Discussion", "Resources"],
      },
      {
        name: "OTD - Frum Dialogue (Facebook)",
        description: "A space for respectful dialogue between those who have left and those still in the Orthodox world.",
        url: "https://www.facebook.com/groups/otdfrumdialogue",
        location: "Online",
        services: ["Dialogue", "Understanding", "Bridge-building"],
      },
    ],
  },
  {
    category: "Educational Resources",
    icon: "📚",
    items: [
      {
        name: "Sefaria",
        description: "Free online library of Jewish texts with translations and commentary. The best tool for verifying sources and reading texts yourself.",
        url: "https://www.sefaria.org",
        location: "Online",
        services: ["Torah", "Talmud", "Commentaries", "Translations"],
      },
      {
        name: "Scrolls & Stones",
        description: "Interactive exploration of 4,000 years of Jewish history through chapters, quizzes, and AI-powered learning.",
        url: "https://scrollsandstones.com",
        location: "Online",
        services: ["History", "Education", "Quizzes", "AI Chat"],
      },
      {
        name: "Beyond the Derech — Chapters",
        description: "In-depth examination of Orthodox Judaism's texts, laws, and practices. With sources, honest analysis, and practical guidance.",
        url: "https://beyondthederech.com/chapters",
        location: "Online",
        services: ["Analysis", "Sources", "Quizzes", "Guides"],
      },
    ],
  },
  {
    category: "Mental Health & Crisis",
    icon: "🛟",
    items: [
      {
        name: "988 Suicide & Crisis Lifeline",
        description: "Free, confidential 24/7 support for people in distress. Call or text 988 from anywhere in the US.",
        url: "https://988lifeline.org",
        location: "USA",
        services: ["24/7 crisis line", "Chat", "Phone", "Free"],
      },
      {
        name: "Crisis Text Line",
        description: "Free, 24/7 crisis support. Text HOME to 741741 to connect with a trained crisis counselor.",
        url: "https://www.crisistextline.org",
        location: "USA",
        services: ["24/7 text support", "Crisis counseling", "Free"],
      },
      {
        name: "Therapy for Religious Trauma",
        description: "Find therapists who specialize in religious trauma syndrome (RTS). Many offer sliding scale fees. Use Psychology Today's filter for 'Religious Issues'.",
        url: "https://www.psychologytoday.com/us/therapists/religious-issues",
        location: "Various",
        services: ["Therapy", "Religious trauma", "Sliding scale"],
      },
      {
        name: "Open Path Collective",
        description: "Affordable therapy from licensed therapists at $30–$80 per session. Great for those without insurance or with limited income.",
        url: "https://openpathcollective.org",
        location: "USA",
        services: ["Affordable therapy", "$30–$80/session", "Licensed therapists"],
      },
    ],
  },
]

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-[#faf9f6]">
      {/* Header */}
      <div className="bg-gradient-to-br from-teal-700 via-teal-600 to-emerald-500 pt-28 pb-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/20 text-white text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-full mb-5 backdrop-blur-sm">
            🌿 Resources
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            You&rsquo;re not alone.
          </h1>
          <p className="text-white/85 text-lg max-w-2xl mx-auto leading-relaxed">
            Organizations, communities, and support resources for every stage of your journey — whether you&rsquo;re questioning, leaving, or rebuilding.
          </p>
        </div>
      </div>

      {/* Wave */}
      <svg className="w-full text-[#faf9f6] -mt-px block" viewBox="0 0 1440 60" preserveAspectRatio="none">
        <path fill="currentColor" d="M0,60 L0,30 Q360,0 720,30 Q1080,60 1440,30 L1440,60 Z" />
      </svg>

      <div className="max-w-5xl mx-auto px-6 py-12">
        {/* Emergency banner */}
        <div className="bg-red-50 border border-red-200 rounded-2xl p-6 mb-14 flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="text-3xl">🚨</div>
          <div className="flex-1">
            <h2 className="font-bold text-red-800 mb-1">In crisis right now?</h2>
            <p className="text-red-600 text-sm">You matter. Please reach out — help is available 24/7, free, and confidential.</p>
          </div>
          <div className="flex gap-3 flex-wrap">
            <a href="tel:988" className="px-5 py-2.5 bg-red-600 text-white rounded-full text-sm font-semibold hover:bg-red-700 transition-colors whitespace-nowrap">
              Call 988
            </a>
            <a href="sms:741741?body=HOME" className="px-5 py-2.5 border border-red-300 text-red-700 rounded-full text-sm font-semibold hover:bg-red-50 transition-colors whitespace-nowrap">
              Text HOME → 741741
            </a>
          </div>
        </div>

        {/* Resource categories */}
        <div className="space-y-16">
          {resources.map((category) => (
            <div key={category.category}>
              <div className="flex items-center gap-3 mb-6">
                <span className="text-2xl">{category.icon}</span>
                <h2 className="text-2xl font-bold text-gray-900">{category.category}</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                {category.items.map((item) => (
                  <a
                    key={item.name}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group bg-white border border-gray-200 hover:border-teal-300 rounded-2xl p-6 hover:shadow-lg transition-all duration-200"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-bold text-gray-900 group-hover:text-teal-700 transition-colors leading-snug pr-2">
                        {item.name}
                      </h3>
                      <span className="flex-shrink-0 text-xs bg-gray-100 text-gray-500 px-2 py-1 rounded-full">
                        {item.location}
                      </span>
                    </div>
                    <p className="text-sm text-gray-500 leading-relaxed mb-4">{item.description}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {item.services.map((service) => (
                        <span key={service} className="text-xs bg-teal-50 text-teal-700 px-2.5 py-0.5 rounded-full">
                          {service}
                        </span>
                      ))}
                    </div>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Suggest a resource */}
        <div className="mt-16 bg-white border border-gray-200 rounded-3xl p-10 text-center">
          <div className="text-4xl mb-4">💡</div>
          <h3 className="text-2xl font-bold text-gray-900 mb-3">Know a resource we should add?</h3>
          <p className="text-gray-500 mb-6 max-w-md mx-auto">
            We&rsquo;re always looking to improve this list. If you know of an organization, community, or resource that helped you — share it with us.
          </p>
          <a
            href="mailto:info@otdoasis.org?subject=Resource Suggestion"
            className="inline-flex items-center gap-2 px-7 py-3 bg-teal-600 text-white rounded-full font-semibold hover:bg-teal-700 transition-colors"
          >
            Suggest a Resource
          </a>
        </div>

        {/* Attribution */}
        <p className="mt-8 text-center text-xs text-gray-400">
          Many resources sourced from{" "}
          <a href="https://beyondthederech.com/resources" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-600">
            beyondthederech.com
          </a>
          , an OTD Oasis project.
        </p>
      </div>

      {/* Footer */}
      <footer className="bg-gray-950 text-gray-500 py-12 mt-16">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-3">
              <Logo size={28} />
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
