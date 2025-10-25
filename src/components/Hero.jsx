"use client";
import React from "react";
import { Star } from "lucide-react";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative overflow-hidden py-20 lg:py-32"
    >
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ScreenRecording_06-26-2025%2015-24-12_1-IdiAPoQM49HvC7MD2MuQDXltlko74S.mp4"
          type="video/mp4"
        />
      </video>

      {/* Overlay Blur */}
      <div className="absolute inset-0 bg-white/50 backdrop-blur-[2px]" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-4xl mt-15 mx-auto text-center">
          {/* Rating Stars */}
          <div className="flex justify-center mb-6">
            <div className="flex items-center space-x-1 bg-white/90 px-4 py-2 rounded-full">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="h-5 w-5 text-primary fill-primary"
                />
              ))}
            </div>
          </div>

          {/* Hero Text Box */}
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 mb-8">
            <h1 className="text-4xl lg:text-6xl font-bold text-balance mb-6 text-[#222222]">
            Facecard 

              <span className="block text-primary">
                 Aesthetics Clinic

              </span>
            </h1>

            <p className="text-lg md:text-xl text-[#555555] mb-8 max-w-2xl mx-auto leading-relaxed">
              Professional aesthetic treatments by Facecard Aesthetics Clinic , your trusted nurse
              practitioner. Specializing in anti-wrinkle treatments and dermal
              fillers with natural-looking results.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center justify-center rounded-md text-sm font-medium bg-primary text-white bg-secondary-hover transition-all h-10 px-6 shadow-[0_2px_6px_rgba(0,0,0,0.1)]">
                Book Your Consultation
              </button>
              <button className="inline-flex items-center justify-center rounded-md text-sm font-medium border border-[#D8D8D8] bg-white text-[#555555] bg-secondary-hover transition-all h-10 px-6">
                View Our Gallery
              </button>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 text-center">
            {[
              { number: "500+", label: "Happy Clients" },
              { number: "5+", label: "Years Experience" },
              { number: "100%", label: "Natural Results" },
            ].map((stat, i) => (
              <div
                key={i}
                className="bg-white/90 backdrop-blur-sm rounded-xl p-6"
              >
                <div className="text-3xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-[#555555]">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}