"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Target, TrendingUp, Award, CheckCircle } from "lucide-react"

export default function AboutUs() {
  const [currentImage, setCurrentImage] = useState(0)

  const galleryImages = [
    {
      url: "https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=1920",
      caption: "Creative Learning Spaces",
    },
    {
      url: "https://images.pexels.com/photos/8613086/pexels-photo-8613086.jpeg?auto=compress&cs=tinysrgb&w=1920",
      caption: "Hands-On Activities",
    },
    {
      url: "https://images.pexels.com/photos/8613082/pexels-photo-8613082.jpeg?auto=compress&cs=tinysrgb&w=1920",
      caption: "Social Development",
    },
    {
      url: "https://images.pexels.com/photos/8613325/pexels-photo-8613325.jpeg?auto=compress&cs=tinysrgb&w=1920",
      caption: "Exploration Time",
    },
    {
      url: "https://images.pexels.com/photos/8612990/pexels-photo-8612990.jpeg?auto=compress&cs=tinysrgb&w=1920",
      caption: "Daily Adventures",
    },
    {
      url: "https://images.pexels.com/photos/8612992/pexels-photo-8612992.jpeg?auto=compress&cs=tinysrgb&w=1920",
      caption: "Learning Together",
    },
  ]

  const team = [
    {
      name: "Tammy Utt",
      role: "Owner/Director",
      imageUrl: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      name: "Jessica Hall",
      role: "Director/Pre-School Lead Teacher",
      years: "With Liddle Tykes since 2011",
      imageUrl: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      name: "Christian Quintero",
      role: "Bilingual Lead Teacher - PreSchool",
      years: "With Liddle Tykes since 2017",
      imageUrl: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      name: "Candice Newman",
      role: "Program Director",
      years: "With Liddle Tykes since 2018",
      imageUrl: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      name: "Stephanie Anders",
      role: "Assistant Director Lead Teacher - Toddlers",
      imageUrl: "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
  ]

  const programs = [
    "Early exposure to languages",
    "Early music education",
    "Exercise and physical development",
    "Preschool-level academic work - FrogStreet Pre-K",
    "Tutoring with school work",
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % galleryImages.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [galleryImages.length])

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % galleryImages.length)
  }

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + galleryImages.length) % galleryImages.length)
  }

  return (
    <div>
      <section className="relative h-[400px] bg-gradient-to-br from-[#3D2645] via-[#5A3D6B] to-[#3D2645] overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-white">
            <h1 className="text-5xl sm:text-6xl font-bold mb-4">About Us</h1>
            <p className="text-xl sm:text-2xl">
              Educational excellence, unwavering dedication, and outstanding child care
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div className="flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-[#3D2645] rounded-full flex items-center justify-center">
                  <Target size={24} className="text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Our Mission</h2>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our mission is to provide a stimulating environment where children thrive through exploration,
                discovery, and individualized care, fostering a lifelong love of learning and preparing them to reach
                their full potential.
              </p>
            </div>

            <div className="flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-[#3D2645] rounded-full flex items-center justify-center">
                  <TrendingUp size={24} className="text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Our Goal</h2>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our goal is to promote every child's development individually using an appropriate mix of academic and
                recreational activities.
              </p>
              <p className="text-xl font-semibold text-[#3D2645] mt-4 italic">
                Building for the future "One LIDDLE step at a TIME"
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#F4C430]/10 to-[#3D2645]/5 rounded-2xl p-8 sm:p-12 mb-16">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-[#F4C430] rounded-full flex items-center justify-center">
                <Award size={24} className="text-[#3D2645]" />
              </div>
              <h2 className="text-3xl font-bold text-gray-800">Our Philosophy</h2>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              At Liddle Tykes Child Development Center, our focus is on helping children develop their potential through
              a healthy mix of educational and recreational activities. Each child's individuality is nurtured and
              encouraged. Activities are offered which stimulate sensory motor development, language development, and
              social skills.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              It's up to all of us - including the parents - to encourage our kids to bolster their own personal
              development, independence, and creativity. Because this cannot be done without the support of family and
              friends, we support the parents in educating their children in a manner that is consistent with their own
              values and beliefs.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed font-medium">
              Together, we can prepare your child for the wonderful life that lies ahead!
            </p>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Our Programs</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {programs.map((program, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                >
                  <CheckCircle size={24} className="text-[#3D2645] flex-shrink-0 mt-1" />
                  <p className="text-lg text-gray-700">{program}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-16">
            <div className="bg-gradient-to-r from-[#3D2645] to-[#5A3D6B] rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Accreditation & Licensing</h3>
              <p className="text-lg leading-relaxed">
                Liddle Tykes Child Development Center is a state-licensed facility operating under the Virginia
                Department of Education (VDOE). We are also proud participants in the USDA and CACFP food programs,
                ensuring your child receives nutritious meals as part of their daily care.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-[#F4C430]/10 to-[#3D2645]/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-800 mb-4 text-center">Meet Our Team</h2>
          <p className="text-xl text-gray-600 mb-12 text-center">
            Our professional educators are dedicated to your child's development
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="h-64 overflow-hidden bg-gradient-to-br from-[#F4C430] to-[#3D2645]">
                  <img
                    src={member.imageUrl || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{member.name}</h3>
                  <p className="text-[#3D2645] font-medium mb-2">{member.role}</p>
                  {member.years && <p className="text-gray-600 text-sm">{member.years}</p>}
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <p className="text-lg text-gray-700 leading-relaxed">
              In our work, we put great focus on the welfare and education of your child. In order to properly encourage
              your child's personal and academic development, our professional educators follow a unique pedagogic
              approach that combines academic excellence with a free-spirited and playful atmosphere for learning. Our
              teachers regularly participate in educational seminars and always bring new ideas and input to their daily
              tasks. These ideas are passed on to your child in playful exercises and diligent study sessions.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">Our Facility Gallery</h2>

          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <div className="relative h-[600px]">
              {galleryImages.map((image, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-1000 ${
                    index === currentImage ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <img
                    src={image.url || "/placeholder.svg"}
                    alt={image.caption}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-8 left-0 right-0 text-center">
                    <h3 className="text-white text-3xl font-bold">{image.caption}</h3>
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center transition-all shadow-lg hover:scale-110"
            >
              <ChevronLeft size={24} className="text-gray-800" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center transition-all shadow-lg hover:scale-110"
            >
              <ChevronRight size={24} className="text-gray-800" />
            </button>

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {galleryImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImage(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentImage ? "bg-white w-8" : "bg-white/50"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-[#3D2645] to-[#5A3D6B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-8 sm:p-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Teamwork is Important to Us</h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Successful teamwork between parents and educators is important to us because it reflects on the child's
              development. That's why we have a culture of teamwork at Liddle Tykes. There is constant interaction
              between parents and educators as we plan excursions, common activities, and parties.
            </p>

            <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Parent-Teacher Projects:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <CheckCircle size={24} className="text-[#3D2645] flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-gray-800 mb-2">Reading Hour Workgroup</h4>
                  <p className="text-gray-700">
                    Parents of children of all ages read a story to the classroom. Please let us know if you can
                    volunteer your time.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle size={24} className="text-[#3D2645] flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-gray-800 mb-2">Father-Child Day</h4>
                  <p className="text-gray-700">
                    Liddle Tykes hosts a Father-Child Day event with activities planned by our educators and parent
                    working group.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle size={24} className="text-[#3D2645] flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-gray-800 mb-2">Room Parent Program</h4>
                  <p className="text-gray-700">
                    Each month we ask 4 parents to spend an hour each week assisting with art projects and music class,
                    acting as a teacher's aide.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle size={24} className="text-[#3D2645] flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-gray-800 mb-2">Child-Parent Talent Show</h4>
                  <p className="text-gray-700">
                    Once a year Liddle Tykes holds a talent show featuring singing, dancing, skits, and magic acts to
                    showcase your child's talents.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
