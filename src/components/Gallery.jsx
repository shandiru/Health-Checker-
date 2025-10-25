"use client";
import React, { useState } from "react";
import { Eye, X } from "lucide-react";

export default function GallerySection() {
  const [activeFilter, setActiveFilter] = useState("All Results");
  const [selectedItem, setSelectedItem] = useState(null);

  const filters = [
    "All Results",
   
  ];
const galleryItems = [
  {
    id: 1,
    category: "Lip Enhancement",
    title: "Lip Enhancement",
    desc: "Natural lip filler results",
    image: "/n1.jpeg",
  },
  {
    id: 2,
    category: "Anti-Wrinkle",
    title: "Anti-Wrinkle Treatment",
    desc: "Forehead line reduction",
    image: "/n2.jpeg",
  },
  {
    id: 3,
    category: "Facial Treatments",
    title: "Facial Rejuvenation",
    desc: "Complete facial treatment",
    image: "/n3.jpeg",
  },
  // {
  //   id: 4,
  //   category: "Treatment Session",
  //   title: "Treatment Session",
  //   desc: "Professional care in action",
  //   image: "/a4.jpeg",
  // },
  // {
  //   id: 5,
  //   category: "Dermal Fillers",
  //   title: "Dermal Fillers",
  //   desc: "Cheek enhancement results",
  //   image: "/a5.jpeg",
  // },
  //  {
  //   id: 6,
  //   category: "Dermal Fillers",
  //   title: "Dermal Fillers",
  //   desc: "Cheek enhancement results",
  //   image: "/a6.jpeg",
  // },
 
];

  const filtered =
    activeFilter === "All Results"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeFilter);

  return (
    <section id="gallery" className="py-20 bg-[#F8F7F6]">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#222] mb-4">
            Before & After Gallery
          </h2>
          <p className="text-lg text-[#666] max-w-2xl mx-auto leading-relaxed">
            See the natural, beautiful results our clients achieve with our
            expert treatments
          </p>
        </div>

        {/* Filter Buttons */}
        

        {/* Gallery Grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-12">
            {filtered.map((item) => (
              <div
                key={item.id}
                className="rounded-xl border border-[#EAEAEA] bg-white shadow-sm overflow-hidden hover:shadow-lg transition-all duration-300 group cursor-pointer"
                onClick={() => setSelectedItem(item)}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-white/90 backdrop-blur-sm rounded-full p-3">
                        <Eye className="w-6 h-6 text-primary" />
                      </div>
                    </div>
                  </div>
                  <span className="absolute top-3 left-3 bg-primary text-white text-xs font-medium rounded-md px-2 py-0.5">
                    Before & After
                  </span>
                </div>

                
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center text-[#777] mb-12">
            No results available for this category.
          </div>
        )}

        {/* CTA Button */}
        <div className="text-center">
          <button className="px-6 py-3 rounded-md bg-primary text-white font-medium text-sm shadow bg-secondary-hover transition-all">
            Book Your Consultation
          </button>
        </div>
      </div>

      {/* Popup Modal */}
      {selectedItem && (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black/50 z-40"
            onClick={() => setSelectedItem(null)}
          ></div>

          {/* Dialog Box */}
          <div
            role="dialog"
            aria-modal="true"
            className="fixed top-1/2 left-1/2 z-50 w-full max-w-4xl sm:max-w-lg transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow-lg border border-[#EAEAEA] overflow-hidden animate-in fade-in-0 zoom-in-95"
          >
            <div className="relative">
              <img
                src={selectedItem.image}
                alt={selectedItem.title}
                className="w-full h-auto rounded-t-lg"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-[#222]">
                  {selectedItem.title}
                </h3>
                <p className="text-[#666]">{selectedItem.desc}</p>
              </div>

              {/* Close Button */}
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 text-[#555] opacity-70 hover:opacity-100 transition-opacity"
              >
                <X className="w-5 h-5" />
                <span className="sr-only">Close</span>
              </button>
            </div>
          </div>
        </>
      )}
    </section>
  );
}