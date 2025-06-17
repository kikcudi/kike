"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"

const testimonials = [
  {
    text: "Working with Sarah is a pleasure! She doesn't just take beautiful pictures, but really understands how to convey the atmosphere of the brand. Our promotional photos attracted many more clients than we expected!",
    author: "— Max, the company's marketer",
  },
  {
    text: "Sarah is a true professional! Her attention to detail and ability to work with light made our catalog stylish and sellable. Now all the photos look exactly how we wanted them to!",
    author: "— Mary, owner of an online store",
  },
  {
    text: "I've never felt comfortable in front of the camera, but Sarah was able to create such a relaxed atmosphere that the result exceeded all expectations! The photos turned out lively, sincere and very stylish.",
    author: "— Anna, personal brand",
  },
  {
    text: "If you want photos that aren't just pretty, but really work for your business - feel free to contact Sarah! It was the best experience working with a photographer.",
    author: "— Mike, the coffee shop owner",
  },
]

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Marquee Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="overflow-hidden">
            <motion.h2
              className="text-4xl md:text-6xl font-bold text-gray-900 whitespace-nowrap"
              animate={{ x: [0, -100, 0] }}
              transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            >
              What my clients say about me / What my clients say about me / What my clients say about me /
            </motion.h2>
          </div>
          <p className="text-sm text-[#DF532F] mt-4">pull left to see more</p>
        </motion.div>

        {/* Testimonials Slider */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="bg-white p-8 md:p-12 rounded-lg shadow-lg"
              >
                <h3 className="text-xl md:text-2xl font-medium text-gray-900 mb-6 leading-relaxed">
                  {testimonials[currentIndex].text}
                </h3>
                <p className="text-gray-600 text-sm">{testimonials[currentIndex].author}</p>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows */}
            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50 transition-colors"
            >
              <ChevronLeft size={24} className="text-[#DF532F]" />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50 transition-colors"
            >
              <ChevronRight size={24} className="text-[#DF532F]" />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? "bg-[#DF532F]" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
