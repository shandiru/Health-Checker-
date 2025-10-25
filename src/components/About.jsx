"use client";
import React from "react";
import {
  CheckCircle2,
  Shield,
  Award,
  Calendar,
  Heart,
  Users,
  CircleCheckBig,
  Star,
} from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-[#F8F7F6]">
      <div className="max-w-6xl mx-auto px-4">
        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Column - Text Content */}
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-[#222]">
              Meet   Facecard  


              <span className="block text-primary">    Aesthetics
</span>
            </h2>
<p className="text-[#555] mb-6 leading-relaxed">
  Welcome to <strong>Facecard Aesthetics</strong> — where science meets glow-up magic ✨  
  We’re all about helping you look refreshed, radiant, and confident — without the “overdone” look. Think natural, but make it flawless 😉
</p>

<p className="text-[#666] mb-8 leading-relaxed">
  From subtle tweaks to full-on glow transformations, every treatment is tailored just for you.  
  Expect expert care, a relaxed vibe, and results that make you double-tap your own selfies. 💁‍♀️💉
</p>







            {/* Feature List */}
            <div className="space-y-3 mb-6">
              {[
                "Registered Nurse",
                "Aesthetic Medicine Certified",
                "5+ Years Experience",
                "Continuous Professional Development",
              ].map((item, i) => (
                <div key={i} className="flex items-center space-x-3">
                  <CircleCheckBig className="h-5 w-5 text-primary" />
                  <span className="text-[#333]">{item}</span>
                </div>
              ))}
            </div>

            {/* Badges */}
            <div className="flex flex-wrap gap-2">
              <Badge icon={<Shield />} text="NMC Registered" />
              <Badge icon={<Award />} text="Aesthetic Certified" />
              <Badge icon={<Calendar />} text="Est. 2019" />
            </div>
          </div>

          {/* Right Column - Image & Cards */}
          <div className="space-y-6">
            {/* Profile Card */}
           <div className="rounded-xl border border-[#EAEAEA] shadow-sm overflow-hidden">
  <div className="relative">
    <img
      src="/hero.jpeg"
      alt="Omobthe Hair Stylist"
      className="object-contain w-135 h-auto"
    />
  </div>
</div>


            {/* Info Cards */}
            <div className="grid grid-cols-2 gap-4">
              <InfoCard
                icon={<Award className="h-8 w-8 text-primary" />}
                title="Qualified Professional"
                text="Registered nurse with specialized training"
              />
              <InfoCard
                icon={<Heart className="h-8 w-8 text-primary" />}
                title="Personalized Care"
                text="Tailored treatments for individual needs"
              />
              <InfoCard
                icon={<Users className="h-8 w-8 text-primary" />}
                title="500+ Clients"
                text="Trusted by hundreds of satisfied clients"
              />
              <InfoCard
                icon={<CheckCircle2 className="h-8 w-8 text-primary" />}
                title="Natural Results"
                text="Subtle enhancements that look beautiful"
              />
            </div>
          </div>
        </div>

        {/* Testimonials Header */}
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold mb-2 text-[#222]">
            What Our Clients Say
          </h3>
          <p className="text-[#777]">Real reviews from real clients</p>
        </div>
{/* Testimonials */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
  {[
    {
      name: "Tina Morris",
      service: "Platelet Rich Plasma (PRP) Facial",
      review:
        "I’ve had a number of treatments over the years — brows, lips, and fillers — but this was my first PRP session, and wow! My skin looked instantly fresher without looking ‘done’. Amy listened carefully, the treatment was painless, and I left with only a tiny bruise. Perfect for a natural, refreshed look!",
      stylist: "Facecard Aesthetics",
    },
    {
      name: "Lisa Read",
      service: "Facial & Aesthetic Treatments",
      review:
        "I’ve been going for years and wouldn’t trust anyone else with my face! The attention to detail is amazing — true perfectionism with care and honesty. I always leave feeling confident and completely looked after. 100% recommend — a true artist!",
      stylist: "Facecard Aesthetics",
    },
    {
      name: "Jade Stapleton",
      service: "Lip Augmentation",
      review:
        "I’ve had my lips done a few times here and I honestly wouldn’t go anywhere else. The results are perfect every time — exactly the shape I ask for, with minimal bruising. The professionalism, precision, and care are unmatched. Couldn’t be happier!",
      stylist: "Facecard Aesthetics",
    },
  ].map((item, i) => (
    <TestimonialCard key={i} {...item} />
  ))}
</div>



      </div>
    </section>
  );
}

/* Reusable Badge */
function Badge({ icon, text }) {
  return (
    <span className="inline-flex items-center gap-1 rounded-md bg-primary text-white text-xs px-2 py-1">
      {icon}
      {text}
    </span>
  );
}

/* Reusable Info Card */
function InfoCard({ icon, title, text }) {
  return (
    <div className="text-center p-4 rounded-xl border border-[#EAEAEA] shadow-sm bg-white">
      <div className="mb-2 flex justify-center">{icon}</div>
      <h3 className="font-semibold text-sm mb-1 text-[#333]">{title}</h3>
      <p className="text-xs text-[#777]">{text}</p>
    </div>
  );
}

/* Reusable Testimonial Card */
function TestimonialCard({ name, service, review }) {
  return (
    <div className="rounded-xl border border-[#E5E2E1] shadow-sm bg-white/70 backdrop-blur-sm p-6 flex flex-col justify-between">
      {/* Star Rating */}
      <div className="flex mb-3 text-[#C5A67B]">
        {[...Array(5)].map((_, i) => (
          <Star key={i} size={16} fill="#C5A67B" stroke="#C5A67B" />
        ))}
      </div>

      {/* Review Text */}
      <p className="text-sm text-[#555] italic mb-4">“{review}”</p>

      {/* Footer */}
      <div className="flex items-center justify-between">
        <div>
          <p className="font-semibold text-sm text-[#333]">{name}</p>
          <p className="text-xs text-[#777]">{service}</p>
        </div>
        <span className="text-xs text-[#555] border px-2 py-0.5 rounded-md">
          Verified Client
        </span>
      </div>
    </div>
  );
}
