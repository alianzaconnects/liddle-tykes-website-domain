"use client"

import type React from "react"

import { useState } from "react"
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: "", email: "", message: "" })
    }, 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div>
      <section className="relative h-[400px] bg-gradient-to-br from-[#3D2645] via-[#5A3D6B] to-[#3D2645] overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-white">
            <h1 className="text-5xl sm:text-6xl font-bold mb-4">Contact Us</h1>
            <p className="text-xl sm:text-2xl">We invite you to come see us and learn more about our programs</p>
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-8">Get in Touch</h2>
              <p className="text-lg text-gray-700 mb-8">
                We'd love to hear from you! Whether you're interested in enrolling your child, scheduling a tour, or
                have questions about our programs, please don't hesitate to reach out.
              </p>

              <div className="space-y-6">
                <div className="bg-gradient-to-r from-[#3D2645] to-[#5A3D6B] rounded-xl p-6 text-white">
                  <h3 className="text-2xl font-bold mb-6">Liddle Tykes Child Development Center</h3>

                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <MapPin size={20} />
                      </div>
                      <div>
                        <p className="font-semibold mb-1">Address</p>
                        <p>59 Melrose Ln</p>
                        <p>Galax, VA 24333</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <Phone size={20} />
                      </div>
                      <div>
                        <p className="font-semibold mb-1">Phone</p>
                        <a href="tel:276-236-3421" className="hover:underline">
                          276-236-3421
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <Mail size={20} />
                      </div>
                      <div>
                        <p className="font-semibold mb-1">Email</p>
                        <a href="mailto:lddletykesdaycare@yahoo.com" className="hover:underline break-all">
                          lddletykesdaycare@yahoo.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <Clock size={20} />
                      </div>
                      <div>
                        <p className="font-semibold mb-1">Hours</p>
                        <p>Monday - Friday</p>
                        <p>6:00 AM - 6:00 PM</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-[#F4C430]/20 to-[#3D2645]/10 rounded-xl p-6 border-2 border-[#F4C430]">
                  <h4 className="text-xl font-bold text-gray-800 mb-4">Schedule a Visit</h4>
                  <p className="text-gray-700 mb-4">
                    The best way to experience what Liddle Tykes has to offer is to visit us in person. Call or email us
                    to schedule a tour of our facility.
                  </p>
                  <p className="text-gray-700 font-medium">We're looking forward to meeting you and your child!</p>
                </div>
              </div>
            </div>

            <div>
              <div className="bg-white rounded-2xl shadow-xl p-8 border-t-4 border-[#F4C430]">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Send Us a Message</h3>

                {submitted ? (
                  <div className="bg-green-50 border-2 border-green-500 rounded-xl p-8 text-center">
                    <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle size={32} className="text-white" />
                    </div>
                    <h4 className="text-2xl font-bold text-gray-800 mb-2">Thank You!</h4>
                    <p className="text-gray-700">
                      Your message has been received. We'll get back to you as soon as possible.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                        Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#3D2645] focus:outline-none transition-colors"
                        placeholder="Your full name"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#3D2645] focus:outline-none transition-colors"
                        placeholder="your.email@example.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#3D2645] focus:outline-none transition-colors resize-none"
                        placeholder="Tell us about your child, ask questions, or schedule a tour..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-[#3D2645] to-[#5A3D6B] text-white py-4 px-8 rounded-lg font-semibold hover:from-[#2A1A32] hover:to-[#4A2D5B] transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
                    >
                      <Send size={20} />
                      <span>Send Message</span>
                    </button>

                    <p className="text-sm text-gray-600 text-center">* Required fields</p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-[#F4C430]/10 to-[#3D2645]/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="aspect-video w-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3194.0!2d-80.9!3d36.6!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzbCsDM2JzAwLjAiTiA4MMKwNTQnMDAuMCJX!5e0!3m2!1sen!2sus!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Liddle Tykes Location Map"
              />
            </div>
            <div className="p-6 bg-gradient-to-r from-[#3D2645] to-[#5A3D6B] text-white">
              <p className="text-center text-lg font-medium">Visit us at 59 Melrose Ln, Galax, VA 24333</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-[#3D2645] to-[#5A3D6B] rounded-2xl shadow-xl p-8 sm:p-12 text-white text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Additional Contact Information</h2>
            <p className="text-xl mb-8">We have multiple team members available to assist you</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <h3 className="text-xl font-bold mb-2">Tammy Utt</h3>
                <p className="mb-2">Owner/Director</p>
                <a href="mailto:tammy@liddleytkes.com" className="hover:underline">
                  tammy@liddleytkes.com
                </a>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <h3 className="text-xl font-bold mb-2">Jessica Lineberry</h3>
                <p className="mb-2">Director</p>
                <a href="mailto:jessical@liddletykes.com" className="hover:underline">
                  jessical@liddletykes.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
