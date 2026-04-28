"use client"

import { useEffect } from "react"
import {
  Baby,
  Footprints,
  Sparkles,
  GraduationCap,
  School,
  Sun,
  Tent,
  HeartHandshake,
} from "lucide-react"

export type ProgramsProps = {
  onNavigate?: (page: string) => void
}

const programSections: {
  id: string
  icon: typeof Baby
  title: string
  age: string
  tagline: string
  paragraphs: string[]
}[] = [
  {
    id: "infant",
    icon: Baby,
    title: "Infant Care",
    age: "Birth–15 Months",
    tagline: "A gentle, joyful start for your baby",
    paragraphs: [
      "Our infant program focuses on building strong, secure relationships while supporting early development through play and care. Using the Frog Street Infant curriculum, our teachers guide babies through sensory-rich experiences like tummy time, mirror play, and baby sign language.",
      "We nurture growth across physical, cognitive, language, and social-emotional development—laying a strong foundation through music, repetition, and loving interaction.",
    ],
  },
  {
    id: "wobbler",
    icon: Footprints,
    title: "Wobbler Care",
    age: "16–23 Months",
    tagline: "Encouraging independence and discovery",
    paragraphs: [
      "This stage is all about movement, curiosity, and early communication. With Frog Street Toddler (Early Stages), children explore their world through hands-on activities that build motor skills and expand vocabulary.",
      "We gently introduce routines and transitions to help children feel confident and comfortable in a classroom setting.",
    ],
  },
  {
    id: "toddler",
    icon: Sparkles,
    title: "Toddler Care",
    age: "2 Years",
    tagline: "Building confidence and social skills",
    paragraphs: [
      "Two-year-olds are learning how to connect, communicate, and express themselves. Our program uses Frog Street Toddler and “The Letter People” to make learning fun and interactive.",
      "We also use the “Brain Smart Start” approach to help children manage big emotions and develop positive social behaviors in a supportive environment.",
    ],
  },
  {
    id: "preschool",
    icon: GraduationCap,
    title: "Preschool",
    age: "3 Years",
    tagline: "Growing curiosity and a love of learning",
    paragraphs: [
      "At this stage, children begin more structured learning while still exploring through play. Using Frog Street Threes, we introduce early math, science, and vocabulary in both group and individual settings.",
      "Our goal is to help children learn how to follow directions, stay engaged, and build confidence as learners.",
    ],
  },
  {
    id: "prek",
    icon: School,
    title: "Pre-K",
    age: "4–5 Years",
    tagline: "Preparing for kindergarten and beyond",
    paragraphs: [
      "Our Pre-K program is designed to help children transition smoothly into school. With the Frog Street Pre-K curriculum, we focus on literacy, STEAM, social studies, and social development.",
      "Aligned with Virginia’s Early Learning and Development Standards, this program includes readiness assessments such as the Virginia Kindergarten Readiness Program (VKRP) and emphasizes phonological awareness and early logic skills to help children feel ready and excited for kindergarten.",
    ],
  },
  {
    id: "before-after",
    icon: Sun,
    title: "Before & After School",
    age: "Ages 5–12",
    tagline: "A safe, supportive space before and after school",
    paragraphs: [
      "Our program offers a balance of homework help, physical activity, and fun group experiences. Using Frog Street AIM (Activities in Motion) and school-age learning modules, children can participate in clubs like art, STEM, and sports while building friendships and independence.",
      "It’s a relaxed, structured environment where kids can unwind, learn, and grow.",
    ],
  },
  {
    id: "summer",
    icon: Tent,
    title: "Summer Camp",
    age: "Ages 5–12",
    tagline: "Adventure, exploration, and fun all summer long",
    paragraphs: [
      "Our summer program uses the Frog Street Summer Excellence curriculum and is packed with exciting weekly themes like “Deep Sea Discovery” and “Space Explorers.”",
      "Children enjoy hands-on activities, group projects, Brain Smart morning meetings, and field trips to local parks, museums, and community spots—bringing learning to life in a fun and engaging way.",
    ],
  },
]

export default function Programs({ onNavigate }: ProgramsProps) {
  useEffect(() => {
    if (typeof sessionStorage === "undefined") return
    if (sessionStorage.getItem("lt-scroll-volunteers") === "1") {
      sessionStorage.removeItem("lt-scroll-volunteers")
      requestAnimationFrame(() => {
        document.getElementById("volunteers")?.scrollIntoView({ behavior: "smooth", block: "start" })
      })
    }
  }, [])

  return (
    <div>
      <section className="relative min-h-[320px] sm:min-h-[380px] bg-gradient-to-br from-[#3D2645] via-[#5A3D6B] to-[#3D2645] overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 flex flex-col justify-center min-h-[320px] sm:min-h-[380px]">
          <div className="text-white max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">Childcare Programs</h1>
            <p className="text-lg sm:text-xl text-white/90">
              Age-specific care and learning—from infants through school age—with trusted Frog Street curricula and a nurturing team.
            </p>
            {onNavigate && (
              <button
                type="button"
                onClick={() => onNavigate("services")}
                className="mt-8 text-[#3D2645] bg-[#F4C430] hover:bg-[#FFD966] font-semibold px-6 py-3 rounded-lg transition-colors"
              >
                Enrollment, schedules &amp; policies →
              </button>
            )}
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0" aria-hidden>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 80" className="w-full">
            <path
              fill="#ffffff"
              fillOpacity="1"
              d="M0,32L48,37.3C96,43,192,53,288,58.7C384,64,480,64,576,56C672,48,768,32,864,29.3C960,27,1056,37,1152,42.7C1248,48,1344,48,1392,48L1440,48L1440,80L1392,80C1344,80,1248,80,1152,80C1056,80,960,80,864,80C768,80,672,80,576,80C480,80,384,80,288,80C192,80,96,80,48,80L0,80Z"
            />
          </svg>
        </div>
      </section>

      <section className="py-14 sm:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {programSections.map((section) => {
            const Icon = section.icon
            return (
              <article
                key={section.id}
                id={section.id}
                className="scroll-mt-36 border-b border-gray-100 pb-16 last:border-0 last:pb-0"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-14 h-14 rounded-full bg-[#3D2645] flex items-center justify-center flex-shrink-0">
                    <Icon size={28} className="text-[#F4C430]" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-wide text-[#F4C430]">{section.age}</p>
                    <h2 className="text-2xl sm:text-3xl font-bold text-[#3D2645]">{section.title}</h2>
                    <p className="text-lg font-medium text-gray-700 mt-1">{section.tagline}</p>
                  </div>
                </div>
                <div className="space-y-4 text-gray-700 text-lg leading-relaxed pl-0 sm:pl-[4.5rem]">
                  {section.paragraphs.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              </article>
            )
          })}
        </div>
      </section>

      <section
        id="volunteers"
        className="scroll-mt-36 py-16 bg-gradient-to-br from-[#F4C430]/15 to-[#3D2645]/5 border-t border-[#F4C430]/30"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-6">
            <HeartHandshake size={36} className="text-[#3D2645]" aria-hidden />
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-[#F4C430]">Ages 13–15</p>
              <h2 className="text-3xl font-bold text-[#3D2645]">Volunteer Opportunities</h2>
            </div>
          </div>
          <p className="text-lg font-medium text-gray-800 mb-4">A great way for teens to learn, lead, and give back</p>
          <p className="text-gray-700 text-lg leading-relaxed mb-8">
            Our volunteer program allows teens to gain hands-on experience working with children in a safe and supervised environment.
          </p>

          <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 mb-8">
            <h3 className="text-xl font-bold text-[#3D2645] mb-4">Volunteers may help with:</h3>
            <ul className="space-y-2 text-gray-700">
              {[
                "Assisting teachers with activities and setup",
                "Organizing classrooms and materials",
                "Reading with children or leading small group play",
                "Modeling positive behavior and teamwork",
              ].map((line) => (
                <li key={line} className="flex gap-2">
                  <span className="text-[#F4C430] font-bold">•</span>
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-[#3D2645] text-white rounded-2xl p-6 sm:p-8 mb-10">
            <h3 className="text-xl font-bold text-[#F4C430] mb-4">All volunteers:</h3>
            <ul className="space-y-3">
              {[
                "Are supervised at all times and remain within sight and sound of staff",
                "Do not count toward state-required staff-to-child ratios",
                "Complete a short orientation and training",
                "Follow a consistent schedule",
                "Require parent/guardian approval",
              ].map((line) => (
                <li key={line} className="flex gap-2">
                  <span>•</span>
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </div>

          <p className="text-lg text-gray-700 mb-10">
            This is a great opportunity to build responsibility, confidence, and leadership skills.
          </p>

          {onNavigate && (
            <div className="flex flex-wrap gap-4 justify-center sm:justify-start">
              <button
                type="button"
                onClick={() => onNavigate("services")}
                className="bg-[#F4C430] text-[#3D2645] px-8 py-3 rounded-lg font-semibold hover:bg-[#FFD966] transition-colors"
              >
                Enrollment &amp; schedules
              </button>
              <button
                type="button"
                onClick={() => onNavigate("contact")}
                className="border-2 border-[#3D2645] text-[#3D2645] px-8 py-3 rounded-lg font-semibold hover:bg-[#3D2645] hover:text-white transition-colors"
              >
                Contact us
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
