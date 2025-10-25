"use client";
import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary text-[#222] py-12">
      <div className="max-w-6xl mx-auto px-6">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Column 1 */}
          <div>
            <h3 className="text-xl font-bold mb-4">All Aesthetics</h3>
            <p className="text-[#444]/80 leading-relaxed">
              Professional nurse-led aesthetic treatments in Sheffield.
              Enhancing your natural beauty with safe, effective procedures.
            </p>
          </div>

          {/* Column 2 */}
          <div>
            <h4 className="font-semibold mb-4 uppercase tracking-wide">
              Services
            </h4>
            <ul className="space-y-2 text-[#444]/80">
              {[
                "The LP Tummy Tuck",
                "The Pyramid Facelift",
               
              ].map((service, i) => (
                <li key={i}>
                  <a
                    href="#services"
                    className="hover:text-[#000] transition-colors cursor-pointer"
                    onClick={(e) => {
                      e.preventDefault();
                      const section = document.querySelector("#services");
                      section?.scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h4 className="font-semibold mb-4 uppercase tracking-wide">
              Contact
            </h4>
            <div className="space-y-3 text-[#444]/80">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-[#222]" />
                <span>+44 7702 650511</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-[#222]" />
                <span>facecardaesthetics@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-[#222]" />
                <span>53 Loyd Rd, Northampton NN1 5JE, United Kingdom</span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[#222]/10 my-6"></div>

        {/* Bottom Copyright */}
        <p className="text-center text-[#444]/80">
          © 2024 All Aesthetics. All rights reserved. 
        </p>
      </div>
    </footer>
  );
}
