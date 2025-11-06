"use client"

import { useState } from "react"
import { Baby, Users, BookOpen, Briefcase, Sun, Clock, Utensils, Phone } from "lucide-react"

export default function Services() {
  const [activeTab, setActiveTab] = useState<"enrollment" | "schedule" | "annual" | "involvement">("enrollment")

  const services = [
    {
      icon: Baby,
      title: "Infant Care",
      description: "Nurturing care for infants from birth",
      color: "bg-[#3D2645]",
    },
    {
      icon: Users,
      title: "Toddler Care",
      description: "Engaging activities for growing toddlers",
      color: "bg-[#F4C430]",
    },
    {
      icon: BookOpen,
      title: "Preschool",
      description: "FrogStreet Curriculum for academic readiness",
      color: "bg-[#3D2645]",
    },
    {
      icon: Briefcase,
      title: "Before & After School",
      description: "Includes snack, homework assistance, and tutoring",
      color: "bg-[#F4C430]",
    },
    {
      icon: Sun,
      title: "Summer Camp",
      description: "Fun and educational summer programs",
      color: "bg-[#3D2645]",
    },
  ]

  const dailySchedule = [
    { time: "6:00 AM - 9:00 AM", activity: "Arrival & Free Play" },
    { time: "8:00 AM - 8:30 AM", activity: "Breakfast" },
    { time: "9:00 AM - 11:30 AM", activity: "Educational Programs" },
    { time: "11:30 AM - 12:45 PM", activity: "Lunch" },
    { time: "12:00 PM - 2:00 PM", activity: "Nap Time" },
    { time: "2:30 PM - 3:30 PM", activity: "PM Snack & Free Play" },
    { time: "3:30 PM - 4:00 PM", activity: "After School Activities" },
    { time: "4:00 PM - 6:00 PM", activity: "Pick-up Time" },
  ]

  return (
    <div>
      <section className="relative h-[400px] bg-gradient-to-br from-[#3D2645] via-[#5A3D6B] to-[#3D2645] overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-white">
            <h1 className="text-5xl sm:text-6xl font-bold mb-4">Child Care Services</h1>
            <p className="text-xl sm:text-2xl">
              Comprehensive programs designed for your child's growth and development
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
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
          <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-t-4 border-[#F4C430]"
              >
                <div className={`w-16 h-16 ${service.color} rounded-full flex items-center justify-center mb-4`}>
                  <service.icon
                    size={32}
                    className={service.color === "bg-[#F4C430]" ? "text-[#3D2645]" : "text-white"}
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3">{service.title}</h3>
                <p className="text-gray-600 text-lg">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-[#F4C430]/10 to-[#3D2645]/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="flex flex-wrap border-b border-gray-200">
              <button
                onClick={() => setActiveTab("enrollment")}
                className={`flex-1 px-6 py-4 text-lg font-semibold transition-colors ${
                  activeTab === "enrollment" ? "bg-[#3D2645] text-white" : "bg-gray-50 text-gray-700 hover:bg-gray-100"
                }`}
              >
                Enrollment
              </button>
              <button
                onClick={() => setActiveTab("schedule")}
                className={`flex-1 px-6 py-4 text-lg font-semibold transition-colors ${
                  activeTab === "schedule" ? "bg-[#3D2645] text-white" : "bg-gray-50 text-gray-700 hover:bg-gray-100"
                }`}
              >
                Daily Schedule
              </button>
              <button
                onClick={() => setActiveTab("annual")}
                className={`flex-1 px-6 py-4 text-lg font-semibold transition-colors ${
                  activeTab === "annual" ? "bg-[#3D2645] text-white" : "bg-gray-50 text-gray-700 hover:bg-gray-100"
                }`}
              >
                Annual Schedule
              </button>
              <button
                onClick={() => setActiveTab("involvement")}
                className={`flex-1 px-6 py-4 text-lg font-semibold transition-colors ${
                  activeTab === "involvement" ? "bg-[#3D2645] text-white" : "bg-gray-50 text-gray-700 hover:bg-gray-100"
                }`}
              >
                Parental Involvement
              </button>
            </div>

            <div className="p-8 sm:p-12">
              {activeTab === "enrollment" && (
                <div>
                  <h2 className="text-3xl font-bold text-gray-800 mb-6">Enrollment Information</h2>
                  <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                    Once you are ready to enroll your child with us, please set up an appointment so we can best assist
                    you. We will be glad to take the time to inform you about everything you need to know, including the
                    relevant paperwork. Pricing will vary depending on the age of your child and hours needed.
                  </p>

                  <div className="bg-gradient-to-r from-[#3D2645] to-[#5A3D6B] rounded-xl p-8 text-white mb-8">
                    <h3 className="text-2xl font-bold mb-4">Ready to Enroll?</h3>
                    <p className="text-lg mb-6">
                      Contact us today to schedule an appointment and tour our facility. We're here to answer all your
                      questions and help you get started.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <a
                        href="tel:276-236-3421"
                        className="bg-[#F4C430] text-[#3D2645] px-8 py-4 rounded-lg font-semibold hover:bg-[#FFD966] transition-colors inline-flex items-center justify-center gap-2"
                      >
                        <Phone size={20} />
                        <span>Call: 276-236-3421</span>
                      </a>
                      <a
                        href="mailto:lddletykesdaycare@yahoo.com"
                        className="bg-transparent border-2 border-[#F4C430] text-[#F4C430] px-8 py-4 rounded-lg font-semibold hover:bg-[#F4C430] hover:text-[#3D2645] transition-colors inline-flex items-center justify-center"
                      >
                        Send Email
                      </a>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-gray-50 rounded-lg p-6">
                      <h4 className="text-xl font-bold text-gray-800 mb-4">What to Bring</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start gap-2">
                          <span className="text-[#3D2645]">•</span>
                          <span>Child's immunization records</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#3D2645]">•</span>
                          <span>Emergency contact information</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#3D2645]">•</span>
                          <span>Any allergy or medical information</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#3D2645]">•</span>
                          <span>Proof of residency</span>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-gray-50 rounded-lg p-6">
                      <h4 className="text-xl font-bold text-gray-800 mb-4">Age Groups We Serve</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start gap-2">
                          <span className="text-[#3D2645]">•</span>
                          <span>Infants (birth and up)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#3D2645]">•</span>
                          <span>Toddlers</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#3D2645]">•</span>
                          <span>Preschool</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#3D2645]">•</span>
                          <span>School-age (up to 12 years)</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "schedule" && (
                <div>
                  <h2 className="text-3xl font-bold text-gray-800 mb-6">Daily Schedule</h2>
                  <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                    A daily schedule gives children the stability and security they need early on in life. We strive to
                    provide a stable framework that adds structure to our daily lives while leaving plenty of room for
                    spontaneous and additional activities.
                  </p>

                  <div className="bg-gradient-to-br from-[#F4C430]/20 to-[#3D2645]/10 rounded-xl p-6 mb-8">
                    <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                      <Clock size={24} className="text-[#3D2645]" />
                      Operating Hours
                    </h3>
                    <p className="text-lg text-gray-700">
                      We provide child care Monday through Friday, 6:00 AM - 6:00 PM
                    </p>
                  </div>

                  <div className="overflow-hidden rounded-xl border-2 border-gray-200">
                    <table className="w-full">
                      <thead className="bg-gradient-to-r from-[#3D2645] to-[#5A3D6B] text-white">
                        <tr>
                          <th className="px-6 py-4 text-left text-lg font-semibold">Time</th>
                          <th className="px-6 py-4 text-left text-lg font-semibold">Activity</th>
                        </tr>
                      </thead>
                      <tbody>
                        {dailySchedule.map((item, index) => (
                          <tr
                            key={index}
                            className={`${
                              index % 2 === 0 ? "bg-white" : "bg-gray-50"
                            } hover:bg-[#F4C430]/20 transition-colors`}
                          >
                            <td className="px-6 py-4 font-medium text-gray-700">{item.time}</td>
                            <td className="px-6 py-4 text-gray-700">{item.activity}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <div className="mt-8 bg-[#F4C430]/20 border-l-4 border-[#F4C430] rounded-lg p-6">
                    <h4 className="text-xl font-bold text-gray-800 mb-3 flex items-center gap-2">
                      <Utensils size={24} className="text-[#3D2645]" />
                      Meals & Nutrition
                    </h4>
                    <p className="text-gray-700 mb-2">
                      We participate in the USDA and CACFP food programs to provide nutritious meals and snacks
                      throughout the day.
                    </p>
                    <p className="text-gray-700 font-medium">
                      Key Meal Times: Breakfast (8:00-8:30 AM), Lunch (11:30 AM-12:45 PM), PM Snack (2:30-3:30 PM)
                    </p>
                  </div>
                </div>
              )}

              {activeTab === "annual" && (
                <div>
                  <h2 className="text-3xl font-bold text-gray-800 mb-6">Annual Schedule</h2>
                  <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                    Please note the following holidays when our facility will be closed. We encourage families to plan
                    ahead for these dates.
                  </p>

                  <div className="bg-gradient-to-br from-[#F4C430]/20 to-[#3D2645]/10 rounded-xl p-8">
                    <h3 className="text-2xl font-bold text-gray-800 mb-6">Holiday Closures</h3>
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

                  <div className="mt-8 bg-[#F4C430]/20 border-l-4 border-[#F4C430] rounded-lg p-6">
                    <p className="text-gray-700">
                      For specific dates and any additional closures, please contact our office. We will provide advance
                      notice for any schedule changes.
                    </p>
                  </div>
                </div>
              )}

              {activeTab === "involvement" && (
                <div>
                  <h2 className="text-3xl font-bold text-gray-800 mb-6">Parental Involvement</h2>
                  <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                    Successful teamwork between parents and educators is important to us because it reflects on the
                    child's development. That's why we have a culture of teamwork at Liddle Tykes. There is constant
                    interaction between parents and educators as we plan excursions, common activities, and parties.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-gradient-to-br from-[#F4C430]/30 to-[#3D2645]/10 rounded-xl p-6">
                      <h3 className="text-xl font-bold text-gray-800 mb-4">Reading Hour Workgroup</h3>
                      <p className="text-gray-700">
                        Parents of children of all ages read a story to the classroom. Please let us know if you can
                        volunteer your time.
                      </p>
                    </div>

                    <div className="bg-gradient-to-br from-[#3D2645]/20 to-[#F4C430]/10 rounded-xl p-6">
                      <h3 className="text-xl font-bold text-gray-800 mb-4">Father-Child Day</h3>
                      <p className="text-gray-700">
                        Liddle Tykes hosts a Father-Child Day event. The day's activities are planned by our educators
                        and members of the parent working group.
                      </p>
                    </div>

                    <div className="bg-gradient-to-br from-[#F4C430]/30 to-[#3D2645]/10 rounded-xl p-6">
                      <h3 className="text-xl font-bold text-gray-800 mb-4">Room Parent Program</h3>
                      <p className="text-gray-700">
                        Each month we ask 4 parents to become honorary room parents to spend an hour each week inside
                        the classroom to assist in art projects, music class, etc.
                      </p>
                    </div>

                    <div className="bg-gradient-to-br from-[#3D2645]/20 to-[#F4C430]/10 rounded-xl p-6">
                      <h3 className="text-xl font-bold text-gray-800 mb-4">Child-Parent Talent Show</h3>
                      <p className="text-gray-700">
                        Once a year Liddle Tykes holds a student-parent talent show featuring singing, dancing, skits,
                        and magic acts to showcase your child's many talents.
                      </p>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-[#3D2645] to-[#5A3D6B] rounded-xl p-8 text-white text-center">
                    <h3 className="text-2xl font-bold mb-4">Get Involved!</h3>
                    <p className="text-lg mb-6">
                      We're always grateful for support above and beyond the call of duty. Contact us to find out what
                      you can do to be part of your child's educational journey.
                    </p>
                    <a
                      href="mailto:lddletykesdaycare@yahoo.com"
                      className="bg-[#F4C430] text-[#3D2645] px-8 py-4 rounded-lg font-semibold hover:bg-[#FFD966] transition-colors inline-block"
                    >
                      Contact Us Today
                    </a>
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
