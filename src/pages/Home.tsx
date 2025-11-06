"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Heart, Users, BookOpen, Award } from "lucide-react"

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlay, setIsAutoPlay] = useState(true)

  const heroSlides = [
    {
      title: "Welcome to Liddle Tykes",
      tagline: "Child Development Center",
      subtitle: "Building Futures, One LIDDLE Step at a Time",
      description: "A state-licensed childcare center where your child thrives in a safe, nurturing environment.",
      image: "https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=1920",
      bgColor: "from-[#3D2645] to-[#5A3D6B]",
    },
    {
      title: "Learning Through Play",
      subtitle: "Engaging Activities for Every Age",
      description: "Our experienced team creates stimulating environments where children learn, grow, and have fun.",
      image: "https://images.pexels.com/photos/8613086/pexels-photo-8613086.jpeg?auto=compress&cs=tinysrgb&w=1920",
      bgColor: "from-[#5A3D6B] to-[#3D2645]",
    },
    {
      title: "Building Friendships",
      subtitle: "Social Development & Emotional Growth",
      description: "We foster meaningful connections and help children develop confidence and social skills.",
      image: "https://images.pexels.com/photos/8613082/pexels-photo-8613082.jpeg?auto=compress&cs=tinysrgb&w=1920",
      bgColor: "from-[#3D2645] to-[#5A3D6B]",
    },
    {
      title: "Exploring Together",
      subtitle: "Curiosity & Discovery",
      description: "Every day is an adventure where children explore, question, and discover the world around them.",
      image: "https://images.pexels.com/photos/8613325/pexels-photo-8613325.jpeg?auto=compress&cs=tinysrgb&w=1920",
      bgColor: "from-[#5A3D6B] to-[#3D2645]",
    },
  ]

  const lifeSlides = [
    {
      url: "https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=1920",
      caption: "Learning Through Play",
    },
    {
      url: "https://images.pexels.com/photos/8613086/pexels-photo-8613086.jpeg?auto=compress&cs=tinysrgb&w=1920",
      caption: "Creative Activities",
    },
    {
      url: "https://images.pexels.com/photos/8613082/pexels-photo-8613082.jpeg?auto=compress&cs=tinysrgb&w=1920",
      caption: "Building Friendships",
    },
    {
      url: "https://images.pexels.com/photos/8613325/pexels-photo-8613325.jpeg?auto=compress&cs=tinysrgb&w=1920",
      caption: "Exploring Together",
    },
    {
      url: "https://images.pexels.com/photos/8612990/pexels-photo-8612990.jpeg?auto=compress&cs=tinysrgb&w=1920",
      caption: "Growing Every Day",
    },
  ]

  const features = [
    {
      icon: Heart,
      title: "Safe & Nurturing",
      description: "A secure environment where children feel loved and supported",
      color: "bg-[#3D2645]",
    },
    {
      icon: Users,
      title: "Experienced Team",
      description: "Dedicated professionals committed to your child's development",
      color: "bg-[#F4C430]",
    },
    {
      icon: BookOpen,
      title: "Educational Programs",
      description: "Engaging activities that foster learning and growth",
      color: "bg-[#3D2645]",
    },
    {
      icon: Award,
      title: "State Licensed",
      description: "Operating under the Virginia Department of Education",
      color: "bg-[#F4C430]",
    },
  ]

  useEffect(() => {
    if (!isAutoPlay) return
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [isAutoPlay, heroSlides.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    setIsAutoPlay(false)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)
    setIsAutoPlay(false)
  }

  return (
    <div>
      <section className="relative h-screen bg-black overflow-hidden">
        {/* Background images with fade transition */}
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <img src={slide.image || "/placeholder.svg"} alt={slide.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
          </div>
        ))}

        {/* Content overlay */}
        <div className="relative h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-2xl">
              <div
                className={`transition-all duration-1000 ${
                  currentSlide === currentSlide ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                <div className="mb-4 flex items-center gap-3">
                  <div className="w-12 h-1 bg-[#F4C430] rounded-full" />
                  <span className="text-[#F4C430] font-semibold text-sm tracking-widest uppercase">Liddle Tykes</span>
                </div>

                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight">
                  {heroSlides[currentSlide].title}
                </h1>

                {heroSlides[currentSlide].tagline && (
                  <p className="text-xl sm:text-2xl text-[#F4C430] font-semibold mb-4 tracking-wide">
                    {heroSlides[currentSlide].tagline}
                  </p>
                )}

                <h2 className="text-2xl sm:text-3xl text-[#F4C430] font-semibold mb-6">
                  {heroSlides[currentSlide].subtitle}
                </h2>

                <p className="text-lg sm:text-xl text-gray-200 mb-8 leading-relaxed max-w-xl">
                  {heroSlides[currentSlide].description}
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="tel:276-236-3421"
                    className="bg-[#F4C430] text-[#3D2645] px-8 py-4 rounded-lg font-semibold hover:bg-white transition-all duration-300 hover:shadow-2xl inline-flex items-center justify-center gap-2 shadow-lg hover:scale-105 cursor-pointer"
                  >
                    Call Us Today
                  </a>
                  <a
                    href="#about"
                    className="bg-transparent border-2 border-[#F4C430] text-[#F4C430] px-8 py-4 rounded-lg font-semibold hover:bg-[#F4C430] hover:text-[#3D2645] transition-all duration-300 inline-flex items-center justify-center shadow-lg hover:scale-105 cursor-pointer"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 w-14 h-14 bg-white/20 hover:bg-white/40 rounded-full flex items-center justify-center transition-all shadow-lg hover:scale-110 backdrop-blur-sm z-10 cursor-pointer"
        >
          <ChevronLeft size={28} className="text-white" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 w-14 h-14 bg-white/20 hover:bg-white/40 rounded-full flex items-center justify-center transition-all shadow-lg hover:scale-110 backdrop-blur-sm z-10 cursor-pointer"
        >
          <ChevronRight size={28} className="text-white" />
        </button>

        {/* Slide indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-10">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentSlide(index)
                setIsAutoPlay(false)
              }}
              className={`transition-all duration-300 rounded-full cursor-pointer ${
                index === currentSlide ? "bg-[#F4C430] w-10 h-3" : "bg-white/40 w-3 h-3 hover:bg-white/60"
              }`}
            />
          ))}
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-t-4 border-[#F4C430]"
              >
                <div
                  className={`w-16 h-16 ${feature.color} rounded-full flex items-center justify-center mb-4 mx-auto`}
                >
                  <feature.icon
                    size={32}
                    className={feature.color === "bg-[#F4C430]" ? "text-[#3D2645]" : "text-white"}
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">{feature.title}</h3>
                <p className="text-gray-600 text-center">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-[#F4C430]/10 to-[#3D2645]/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#3D2645] mb-4">Life at Liddle Tykes</h2>
            <p className="text-xl text-gray-600">Creating memories and building futures every day</p>
          </div>

          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <div className="relative h-[500px]">
              {lifeSlides.map((slide, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-1000 ${
                    index === currentSlide ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <img
                    src={slide.url || "/placeholder.svg"}
                    alt={slide.caption}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-8 left-0 right-0 text-center">
                    <h3 className="text-white text-3xl font-bold">{slide.caption}</h3>
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center transition-all shadow-lg hover:scale-110 cursor-pointer"
            >
              <ChevronLeft size={24} className="text-gray-800" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center transition-all shadow-lg hover:scale-110 cursor-pointer"
            >
              <ChevronRight size={24} className="text-gray-800" />
            </button>

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {lifeSlides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all cursor-pointer ${
                    index === currentSlide ? "bg-white w-8" : "bg-white/50"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-[#3D2645] to-[#5A3D6B] rounded-2xl shadow-xl p-8 sm:p-12 text-white text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to Join Our Family?</h2>
            <p className="text-xl mb-8">Contact us today to schedule a tour and see our facility!</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:276-236-3421"
                className="bg-[#F4C430] text-[#3D2645] px-8 py-4 rounded-lg font-semibold hover:bg-white transition-colors inline-flex items-center justify-center gap-2 shadow-lg cursor-pointer"
              >
                <span>Call Us: 276-236-3421</span>
              </a>
              <a
                href="mailto:lddletykesdaycare@yahoo.com"
                className="bg-transparent border-2 border-[#F4C430] text-[#F4C430] px-8 py-4 rounded-lg font-semibold hover:bg-[#F4C430] hover:text-[#3D2645] transition-colors inline-flex items-center justify-center shadow-lg cursor-pointer"
              >
                Send Email
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
