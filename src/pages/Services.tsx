"use client"

import { useState } from "react"
import {
  Baby,
  Footprints,
  Sparkles,
  GraduationCap,
  School,
  BookOpen,
  Briefcase,
  Sun,
  Clock,
  Utensils,
  Phone,
  AlertTriangle,
  ExternalLink,
} from "lucide-react"

export type ServicesProps = {
  onNavigate?: (page: string) => void
}

export default function Services({ onNavigate }: ServicesProps) {
  const [activeTab, setActiveTab] = useState<
    "enrollment" | "schedule" | "annual" | "involvement"
  >("enrollment")

  const programHighlights = [
    {
      icon: Baby,
      title: "Infant Care",
      subtitle: "Birth–15 months",
      description: "Frog Street Infant, sensory-rich care and loving routines.",
      color: "bg-[#3D2645]",
    },
    {
      icon: Footprints,
      title: "Wobbler Care",
      subtitle: "16–23 months",
      description: "Frog Street Toddler (Early Stages), movement and early communication.",
      color: "bg-[#F4C430]",
    },
    {
      icon: Sparkles,
      title: "Toddler Care",
      subtitle: "2 years",
      description: "Frog Street Toddler, Letter People, Brain Smart Start.",
      color: "bg-[#3D2645]",
    },
    {
      icon: GraduationCap,
      title: "Preschool",
      subtitle: "3 years",
      description: "Frog Street Threes—math, science, vocabulary through play.",
      color: "bg-[#F4C430]",
    },
    {
      icon: School,
      title: "Pre-K",
      subtitle: "4–5 years",
      description: "Frog Street Pre-K, VKRP alignment, school readiness.",
      color: "bg-[#3D2645]",
    },
    {
      icon: Briefcase,
      title: "Before & After School",
      subtitle: "Ages 5–12",
      description: "Homework help, clubs, Frog Street AIM and school-age modules.",
      color: "bg-[#F4C430]",
    },
    {
      icon: Sun,
      title: "Summer Camp",
      subtitle: "Ages 5–12",
      description: "Summer Excellence themes, field trips, Brain Smart mornings.",
      color: "bg-[#3D2645]",
    },
  ]

  const dailySchedule = [
    { time: "6:00–8:00 AM", activity: "Arrival & Free Play" },
    { time: "8:00–8:30 AM", activity: "Breakfast" },
    { time: "8:30–9:30 AM", activity: "Music & Movement" },
    { time: "9:30–10:00 AM", activity: "Learning Time (Frog Street)" },
    { time: "10:00–11:00 AM", activity: "Outdoor Play / Art / Centers" },
    { time: "11:00 AM–12:00 PM", activity: "Lunch" },
    { time: "12:00–2:00 PM", activity: "Nap Time" },
    { time: "2:00–2:30 PM", activity: "Snack" },
    { time: "2:30–3:00 PM", activity: "Learning Time (Frog Street)" },
    { time: "3:00–6:00 PM", activity: "Outdoor Play, Free Play & Pick-Up" },
  ]

  const enrollmentItems = [
    "$100 registration fee",
    "DSS confirmation (if applicable)",
    "Copy of birth certificate",
    "Current immunization records",
    "Recent well-child physical (or physician exemption form if needed)",
    "Completed enrollment packet (printed)",
  ]

  const goToProgramsVolunteers = () => {
    if (!onNavigate) return
    try {
      sessionStorage.setItem("lt-scroll-volunteers", "1")
    } catch {
      /* ignore */
    }
    onNavigate("programs")
  }

  return (
    <div>
      <section className="relative min-h-[360px] bg-gradient-to-br from-[#3D2645] via-[#5A3D6B] to-[#3D2645] overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-[360px] flex flex-col justify-center py-14">
          <div className="text-white">
            <h1 className="text-4xl sm:text-6xl font-bold mb-4">Child Care Services</h1>
            <p className="text-lg sm:text-2xl max-w-2xl">
              Enrollment, schedules, meals, policies, and how we partner with families.
            </p>
            {onNavigate && (
              <button
                type="button"
                onClick={() => onNavigate("programs")}
                className="mt-8 inline-flex items-center gap-2 text-[#3D2645] bg-[#F4C430] hover:bg-[#FFD966] font-semibold px-6 py-3 rounded-lg transition-colors"
              >
                <BookOpen size={20} aria-hidden />
                Explore childcare programs &amp; curricula
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

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-800 mb-3">Programs at a glance</h2>
            <p className="text-gray-600 text-lg">
              Full descriptions of each classroom and curriculum live on our{" "}
              {onNavigate ? (
                <button
                  type="button"
                  onClick={() => onNavigate("programs")}
                  className="text-[#3D2645] font-semibold underline decoration-[#F4C430] underline-offset-2 hover:text-[#5A3D6B]"
                >
                  Programs page
                </button>
              ) : (
                "Programs page"
              )}
              .
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8 mb-8">
            {programHighlights.map((service, index) => {
              const Icon = service.icon
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-t-4 border-[#F4C430]"
                >
                  <div className={`w-14 h-14 ${service.color} rounded-full flex items-center justify-center mb-4`}>
                    <Icon size={28} className={service.color === "bg-[#F4C430]" ? "text-[#3D2645]" : "text-white"} />
                  </div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-[#F4C430] mb-1">{service.subtitle}</p>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-[#F4C430]/10 to-[#3D2645]/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="flex flex-wrap border-b border-gray-200">
              <button
                type="button"
                onClick={() => setActiveTab("enrollment")}
                className={`flex-1 min-w-[140px] px-4 sm:px-6 py-4 text-base sm:text-lg font-semibold transition-colors ${
                  activeTab === "enrollment"
                    ? "bg-[#3D2645] text-white"
                    : "bg-gray-50 text-gray-700 hover:bg-gray-100"
                }`}
              >
                Enrollment
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("schedule")}
                className={`flex-1 min-w-[140px] px-4 sm:px-6 py-4 text-base sm:text-lg font-semibold transition-colors ${
                  activeTab === "schedule"
                    ? "bg-[#3D2645] text-white"
                    : "bg-gray-50 text-gray-700 hover:bg-gray-100"
                }`}
              >
                Schedule &amp; meals
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("annual")}
                className={`flex-1 min-w-[140px] px-4 sm:px-6 py-4 text-base sm:text-lg font-semibold transition-colors ${
                  activeTab === "annual"
                    ? "bg-[#3D2645] text-white"
                    : "bg-gray-50 text-gray-700 hover:bg-gray-100"
                }`}
              >
                Closures
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("involvement")}
                className={`flex-1 min-w-[140px] px-4 sm:px-6 py-4 text-base sm:text-lg font-semibold transition-colors ${
                  activeTab === "involvement"
                    ? "bg-[#3D2645] text-white"
                    : "bg-gray-50 text-gray-700 hover:bg-gray-100"
                }`}
              >
                Family &amp; volunteers
              </button>
            </div>

            <div className="p-8 sm:p-12">
              {activeTab === "enrollment" && (
                <div>
                  <h2 className="text-3xl font-bold text-gray-800 mb-6">Enrollment information</h2>
                  <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                    Once you’re ready to enroll, please schedule an appointment so we can assist with paperwork and
                    tuition details. Pricing varies by age and schedule.
                  </p>

                  <div className="bg-gradient-to-r from-[#3D2645] to-[#5A3D6B] rounded-xl p-8 text-white mb-8">
                    <h3 className="text-2xl font-bold mb-4">Ready to enroll?</h3>
                    <p className="text-lg mb-6">
                      Contact us for a tour and to get started. We’re glad to answer your questions.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <a
                        href="tel:276-236-3421"
                        className="bg-[#F4C430] text-[#3D2645] px-8 py-4 rounded-lg font-semibold hover:bg-[#FFD966] transition-colors inline-flex items-center justify-center gap-2"
                      >
                        <Phone size={20} />
                        <span>Call 276-236-3421</span>
                      </a>
                      <a
                        href="mailto:lddletykesdaycare@yahoo.com"
                        className="bg-transparent border-2 border-[#F4C430] text-[#F4C430] px-8 py-4 rounded-lg font-semibold hover:bg-[#F4C430] hover:text-[#3D2645] transition-colors inline-flex items-center justify-center"
                      >
                        Send email
                      </a>
                    </div>
                  </div>

                  <div id="what-to-bring" className="bg-gray-50 rounded-xl p-8 border border-gray-100">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">Enrollment: What to Bring</h3>
                    <p className="text-gray-700 mb-6">
                      Please bring the following for each child to help ensure safety and a smooth enrollment process.
                    </p>
                    <ul className="space-y-3 text-gray-800">
                      {enrollmentItems.map((item) => (
                        <li key={item} className="flex gap-3">
                          <span className="text-[#3D2645] font-bold">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {activeTab === "schedule" && (
                <div className="space-y-10">
                  <div>
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">Daily schedule</h2>
                    <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mb-8">
                      A balanced day of learning, play, and care. We provide predictable routines with room for
                      flexibility and fun.
                    </p>

                    <div className="bg-gradient-to-br from-[#F4C430]/20 to-[#3D2645]/10 rounded-xl p-6 mb-6">
                      <h3 className="text-xl font-bold text-gray-800 mb-2 flex items-center gap-2">
                        <Clock size={24} className="text-[#3D2645]" />
                        Operating hours
                      </h3>
                      <p className="text-lg text-gray-700">Monday–Friday, 6:00 AM – 6:00 PM</p>
                    </div>

                    <div className="overflow-hidden rounded-xl border-2 border-gray-200 mb-8">
                      <table className="w-full text-left">
                        <thead className="bg-gradient-to-r from-[#3D2645] to-[#5A3D6B] text-white">
                          <tr>
                            <th className="px-4 sm:px-6 py-4 text-base sm:text-lg font-semibold">Time</th>
                            <th className="px-4 sm:px-6 py-4 text-base sm:text-lg font-semibold">Activity</th>
                          </tr>
                        </thead>
                        <tbody>
                          {dailySchedule.map((item, index) => (
                            <tr
                              key={item.time + item.activity}
                              className={`${
                                index % 2 === 0 ? "bg-white" : "bg-gray-50"
                              } hover:bg-[#F4C430]/15 transition-colors`}
                            >
                              <td className="px-4 sm:px-6 py-3 sm:py-4 font-medium text-gray-800 whitespace-nowrap">
                                {item.time}
                              </td>
                              <td className="px-4 sm:px-6 py-3 sm:py-4 text-gray-700">{item.activity}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div className="bg-amber-50 border-l-4 border-[#F4C430] rounded-lg p-6 flex gap-4">
                    <AlertTriangle className="text-[#3D2645] flex-shrink-0 mt-0.5" size={28} aria-hidden />
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Important drop-off policy</h3>
                      <p className="text-gray-800 leading-relaxed">
                        <strong>Cut-off for drop-off is 9:30 AM.</strong> We are unable to accept children after this
                        time unless there is a doctor’s appointment with a note.
                      </p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                      <Utensils className="text-[#3D2645]" size={28} />
                      Meal times
                    </h3>
                    <p className="text-gray-700 mb-4">
                      We participate in USDA and CACFP programs to provide nutritious meals and snacks.
                    </p>
                    <ul className="space-y-2 text-gray-800 text-lg mb-8">
                      <li>
                        <strong>Breakfast:</strong> 8:00–8:30 AM
                      </li>
                      <li>
                        <strong>Lunch:</strong> 11:00 AM–12:00 PM
                      </li>
                      <li>
                        <strong>Snack:</strong> 2:00–2:30 PM
                      </li>
                    </ul>

                    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                      <h4 className="text-lg font-bold text-[#3D2645] mb-4">
                        School-age meal schedule (when school is in session)
                      </h4>
                      <ul className="space-y-2 text-gray-700">
                        <li>
                          <strong>Early breakfast (ages 5–12):</strong> 6:00–7:00 AM
                        </li>
                        <li>
                          <strong>Breakfast:</strong> 8:00–8:30 AM
                        </li>
                        <li>
                          <strong>Lunch:</strong> 11:00–11:30 AM
                        </li>
                        <li>
                          <strong>Snack:</strong> 2:00–2:30 PM
                        </li>
                        <li>
                          <strong>Additional snacks (ages 5–12):</strong> 3:00–3:30 PM and 4:00–4:30 PM
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "annual" && (
                <div>
                  <h2 className="text-3xl font-bold text-gray-800 mb-4">Annual closures</h2>
                  <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                    We follow our regular holiday schedule throughout the year. For any{" "}
                    <strong>additional or unexpected closures</strong>, please check our Facebook page, the WDBJ7
                    website, or call the office—we want you to have the most up-to-date information.
                  </p>

                  <div className="flex flex-wrap gap-4 mb-10">
                    <a
                      href="https://www.facebook.com/liddletykes/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#3D2645] text-white font-semibold hover:bg-[#5A3D6B] transition-colors"
                    >
                      Facebook updates
                      <ExternalLink size={18} aria-hidden />
                    </a>
                    <a
                      href="https://www.wdbj7.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border-2 border-[#3D2645] text-[#3D2645] font-semibold hover:bg-[#3D2645]/5 transition-colors"
                    >
                      WDBJ7 website
                      <ExternalLink size={18} aria-hidden />
                    </a>
                    <a
                      href="tel:276-236-3421"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#F4C430] text-[#3D2645] font-semibold hover:bg-[#FFD966] transition-colors"
                    >
                      <Phone size={18} aria-hidden />
                      Call office
                    </a>
                  </div>

                  <div className="bg-gradient-to-br from-[#F4C430]/20 to-[#3D2645]/10 rounded-xl p-8 mb-8">
                    <h3 className="text-2xl font-bold text-gray-800 mb-6">Holiday closures (examples)</h3>
                    <p className="text-gray-700 mb-4">
                      Specific dates vary by calendar year—confirm with staff or official announcements.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {[
                        "New Year's Day",
                        "Good Friday",
                        "Memorial Day",
                        "Labor Day",
                        "Thanksgiving Day",
                        "Black Friday",
                        "Christmas Eve",
                        "Christmas Day",
                      ].map((holiday, index) => (
                        <div key={index} className="bg-white rounded-lg p-4 shadow-md">
                          <p className="text-lg font-medium text-gray-800">{holiday}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "involvement" && (
                <div className="space-y-10">
                  {onNavigate && (
                    <div className="bg-gradient-to-r from-[#F4C430]/30 to-[#3D2645]/10 rounded-xl p-6 border border-[#F4C430]/40">
                      <h3 className="text-xl font-bold text-[#3D2645] mb-2">Teen volunteers (ages 13–15)</h3>
                      <p className="text-gray-700 mb-4">
                        We offer a structured volunteer program for teens—supervision, training, and meaningful ways to
                        support classrooms. Full details and requirements are on our Programs page.
                      </p>
                      <button
                        type="button"
                        onClick={goToProgramsVolunteers}
                        className="bg-[#3D2645] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#5A3D6B] transition-colors"
                      >
                        Read volunteer program
                      </button>
                    </div>
                  )}

                  <div>
                    <h2 className="text-3xl font-bold text-gray-800 mb-6">Parental involvement</h2>
                    <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                      Teamwork between parents and educators matters to us. We keep families connected through
                      activities, events, and classroom support.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                      <div className="bg-gradient-to-br from-[#F4C430]/30 to-[#3D2645]/10 rounded-xl p-6">
                        <h3 className="text-xl font-bold text-gray-800 mb-4">Reading Hour Workgroup</h3>
                        <p className="text-gray-700">
                          Parents of children of all ages read a story to the classroom. Let us know if you can
                          volunteer your time.
                        </p>
                      </div>

                      <div className="bg-gradient-to-br from-[#3D2645]/20 to-[#F4C430]/10 rounded-xl p-6">
                        <h3 className="text-xl font-bold text-gray-800 mb-4">Father-Child Day</h3>
                        <p className="text-gray-700">
                          A special day of activities planned by educators and members of the parent working group.
                        </p>
                      </div>

                      <div className="bg-gradient-to-br from-[#F4C430]/30 to-[#3D2645]/10 rounded-xl p-6">
                        <h3 className="text-xl font-bold text-gray-800 mb-4">Room Parent Program</h3>
                        <p className="text-gray-700">
                          Each month we invite parents to be honorary room parents—about an hour a week—to assist with
                          art projects, music, and more.
                        </p>
                      </div>

                      <div className="bg-gradient-to-br from-[#3D2645]/20 to-[#F4C430]/10 rounded-xl p-6">
                        <h3 className="text-xl font-bold text-gray-800 mb-4">Child-Parent Talent Show</h3>
                        <p className="text-gray-700">
                          An annual showcase for singing, dancing, skits, and magic—a fun way to celebrate your
                          child’s talents together.
                        </p>
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-[#3D2645] to-[#5A3D6B] rounded-xl p-8 text-white text-center">
                      <h3 className="text-2xl font-bold mb-4">Get involved</h3>
                      <p className="text-lg mb-6">
                        Ask us how you can support your child’s classroom—we’re grateful for partnership beyond the daily
                        routine.
                      </p>
                      <a
                        href="mailto:lddletykesdaycare@yahoo.com"
                        className="bg-[#F4C430] text-[#3D2645] px-8 py-4 rounded-lg font-semibold hover:bg-[#FFD966] transition-colors inline-block"
                      >
                        Contact us
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
