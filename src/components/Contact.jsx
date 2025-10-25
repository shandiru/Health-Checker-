"use client";
import React from "react";
import {
  Shield,
  Award,
  MessageCircle,
  Calendar,
  Phone,
  Mail,
  MapPin,
  Clock,
} from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-[#F8F7F6]">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#222] mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-[#666] max-w-2xl mx-auto leading-relaxed">
            Ready to start your aesthetic journey? Contact us today to book your
            consultation
          </p>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {[
            {
              icon: <Shield className="h-6 w-6 text-primary" />,
              title: "Medical Grade",
              desc: "Clinical environment with highest safety standards",
            },
            {
              icon: <Award className="h-6 w-6 text-primary" />,
              title: "Qualified Nurse",
              desc: "All treatments by registered nurse practitioner",
            },
            {
              icon: <MessageCircle className="h-6 w-6 text-primary" />,
              title: "Free Consultation",
              desc: "Complimentary assessment and treatment planning",
            },
            {
              icon: <Calendar className="h-6 w-6 text-primary" />,
              title: "Flexible Booking",
              desc: "Evening and weekend appointments available",
            },
          ].map((f, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center text-center p-6 rounded-xl border border-[#EAEAEA] bg-white/60 backdrop-blur-sm shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="mb-3">{f.icon}</div>
              <h3 className="font-semibold text-[#333] mb-1 text-sm">
                {f.title}
              </h3>
              <p className="text-xs text-[#666]">{f.desc}</p>
            </div>
          ))}
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Left Column */}
          <div className="space-y-6">
            {/* Contact Information */}
            <div className="rounded-xl border border-[#EAEAEA] bg-white p-6 shadow-sm">
              <div className="flex items-center gap-2 mb-4">
                <Phone className="w-5 h-5 text-primary" />
                <h3 className="font-semibold text-[#333]">Contact Information</h3>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3 p-3 rounded-lg bg-[#F3F1EF]">
                  <Phone className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-medium text-[#222]">Phone</p>
                    <p className="text-[#666]">+44 7702 650511</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-lg bg-[#F3F1EF]">
                  <Mail className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-medium text-[#222]">Email</p>
                    <p className="text-[#666]">facecardaesthetics@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-lg bg-[#F3F1EF]">
                  <MapPin className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-medium text-[#222]">Location</p>
                    <p className="text-[#666]">53 Loyd Rd, Northampton NN1 5JE, United Kingdom</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-lg bg-[#F3F1EF]">
                  <Clock className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-medium text-[#222]">Hours</p>
                    <p className="text-[#666]">By Appointment Only</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Why Choose */}
            <div className="rounded-xl border border-[#EAEAEA] bg-white p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <div className="h-10 w-10 rounded-full bg-secondary flex items-center justify-center">
                  <Award className="w-5 h-5 text-primary]" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#333]">
                    Why Choose us?
                  </h3>
                  <span className="inline-block text-xs bg-primary text-white rounded-md px-2 py-0.5 mt-1">
                     Trusted Clinic
                  </span>
                </div>
              </div>

              <ul className="space-y-3 text-sm text-[#555]">
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 bg-primary rounded-full"></div>
                  Nurse-led medical clinic
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 bg-primary rounded-full"></div>
                  Personalized treatment plans
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 bg-primary rounded-full"></div>
                  Natural-looking results
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 bg-primary rounded-full"></div>
                  Safe, clinical environment
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 bg-primary rounded-full"></div>
                  Comprehensive aftercare
                </li>
              </ul>
            </div>

            {/* Clinic Image */}
            <div className="rounded-xl border border-[#EAEAEA] overflow-hidden shadow-sm">
              <div className="relative h-52">
                <img
                  src="/modern-medical-clinic-interior-aesthetic-treatment.jpg"
                  alt="All Aesthetics Clinic Interior"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="rounded-xl border border-[#EAEAEA] bg-white p-8 shadow-sm">
            <div className="flex items-center gap-2 mb-6">
              <Calendar className="w-5 h-5  text-primary" />
              <h3 className="font-semibold text-[#333]">Book Your Consultation</h3>
            </div>

            <form className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-[#444] mb-1 block">
                    First Name
                  </label>
                  <input
                    className="w-full border border-[#EAEAEA] rounded-md px-3 py-2 text-sm focus:ring-1 focus-ring outline-none"
                    placeholder="Your first name"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-[#444] mb-1 block">
                    Last Name
                  </label>
                  <input
                    className="w-full border border-[#EAEAEA] rounded-md px-3 py-2 text-sm focus:ring-2 focus-ring outline-none"
                    placeholder="Your last name"
                  />
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-[#444] mb-1 block">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full border border-[#EAEAEA] rounded-md px-3 py-2 text-sm focus:ring-2 focus-ring outline-none"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-[#444] mb-1 block">
                  Phone
                </label>
                <input
                  type="tel"
                  className="w-full border border-[#EAEAEA] rounded-md px-3 py-2 text-sm focus:ring-2 focus-ring outline-none"
                  placeholder="Your phone number"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-[#444] mb-1 block">
                  Treatment Interest
                </label>
                <input
                  className="w-full border border-[#EAEAEA] rounded-md px-3 py-2 text-sm focus:ring-2 focus-ring outline-none"
                  placeholder="e.g., Anti-wrinkle, Dermal fillers"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-[#444] mb-1 block">
                  Message
                </label>
                <textarea
                  rows="4"
                  className="w-full border border-[#EAEAEA] rounded-md px-3 py-2 text-sm focus:ring-2 focus-ring outline-none resize-none"
                  placeholder="Tell us about your aesthetic goals and any questions you have..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-primary bg-secondary-hover text-white rounded-md py-2.5 text-sm font-medium flex items-center justify-center gap-2 transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}