"use client";
import React, { useState } from "react";
import { Menu, X, Phone, Mail } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-[#FFFFFF] border-b border-[#E5E2E1] fixed w-full z-50">
      <div className="max-w-[1300px] mx-auto px-6 py-3 flex items-center justify-between">
        {/* newlogos */}
        <div className="flex items-center">
          <img
            src="/logo.png"
            alt="All Aesthetics newlogos"
            className="h-15 w-20  p-2"
          />
        </div>

        {/* Desktop Navigation (Hidden on tablet & below) */}
        <nav className="hidden lg:flex items-center space-x-10">
          {["Home", "About", "Services", "Gallery", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-[#4A4A4A] text-[15px] font-normal text-primary-hover transition-colors"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Right Section (Hidden on tablet & below) */}
        <div className="hidden xl:flex items-center space-x-6 text-sm text-[#6C6C6C]">
          <div className="flex items-center space-x-1">
            <Phone className="h-4 w-4 text-[#6C6C6C]" />
            <span>+44 7702 650511</span>
          </div>
          <div className="flex items-center space-x-1">
            <Mail className="h-4 w-4 text-[#6C6C6C]" />
            <span>facecardaesthetics@gmail.com</span>
          </div>

          <button className="bg-primary text-white rounded-md px-5 py-2 text-sm font-medium shadow-[0_2px_4px_rgba(0,0,0,0.05)] border border-[#E8E2DD] bg-secondary-hover transition-all duration-200">
            Book Consultation
          </button>
        </div>

        {/* Hamburger Menu (visible on mobile + tablet) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-[#4A4A4A] text-primary-hover"
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile/Tablet Dropdown Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-[#E5E2E1] px-6 py-4 space-y-4 text-[#4A4A4A]">
          {["Home", "About", "Services", "Gallery", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setIsOpen(false)}
              className="block text-primary-hover transition-colors"
            >
              {item}
            </a>
          ))}

          <div className="pt-3 border-t border-[#E5E2E1] space-y-3">
            <div className="flex items-center space-x-2 text-sm text-[#6C6C6C]">
              <Phone className="h-4 w-4" />
              <span>07805 369743</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-[#6C6C6C]">
              <Mail className="h-4 w-4" />
              <span>allaesthetics1@outlook.com</span>
            </div>
            <button className="w-full mt-3 bg-primary  text-white rounded-md px-4 py-2 text-sm font-medium border border-[#E8E2DD] hover:bg-[#A9988C] transition-all">
              Book Consultation
            </button>
          </div>
        </div>
      )}
    </header>
  );
}