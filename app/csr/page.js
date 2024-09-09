"use client";

import React, { useState } from "react";
import Link from "next/link";

const imgsData = [
  {
    id: 1,
    src: "https://i.postimg.cc/7PSSMXjS/FCL-Brochure-2.jpg",
    alt: "img 1",
  },
  { id: 2, src: "https://i.postimg.cc/httxnnv0/2.jpg", alt: "img 2" },
  {
    id: 6,
    src: "https://i.postimg.cc/7PSSMXjS/FCL-Brochure-2.jpg",
    alt: "img 6",
  },
  {
    id: 7,
    src: "https://i.postimg.cc/7PSSMXjS/FCL-Brochure-2.jpg",
    alt: "img 7",
  },
  {
    id: 8,
    src: "https://i.postimg.cc/7PSSMXjS/FCL-Brochure-2.jpg",
    alt: "img 8",
  },
  {
    id: 9,
    src: "https://i.postimg.cc/7PSSMXjS/FCL-Brochure-2.jpg",
    alt: "img 9",
  },
  {
    id: 10,
    src: "https://i.postimg.cc/7PSSMXjS/FCL-Brochure-2.jpg",
    alt: "img 10",
  },
  // Add more imgs if needed
];

const CSR = () => {
  const [visibleImages, setVisibleImages] = useState(4); // Start by showing 4 images

  const showMoreImages = () => {
    setVisibleImages((prev) => prev + 4); // Load 4 more images when clicked
  };

  const currentimgs = imgsData.slice(0, visibleImages);

  return (
    <div>
      <section className="relative bg-gray-800 text-white">
        <div className="relative">
          <img
            src="https://png.pngtree.com/thumb_back/fh260/background/20230515/pngtree-construction-site-with-cranes-in-the-field-img_2541656.jpg"
            alt="Banner"
            className="object-cover w-full h-64 bg-black opacity-5"
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center">
            <h1 className="text-white text-4xl font-extrabold">CSR</h1>
            <div className="text-sm text-white breadcrumbs">
              <ul>
                <li>
                  <Link href="/">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      className="w-4 h-4 mr-2 stroke-current"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                      ></path>
                    </svg>
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      className="w-4 h-4 mr-2 stroke-current"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                      ></path>
                    </svg>
                    CSR
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-6">
        <div className="lg:container grid grid-cols-2 gap-4 p-4 lg:mx-auto lg:max-w-[1300px] md:grid-cols-4">
          {currentimgs.map((img) => (
            <img
              key={img.id}
              src={img.src}
              alt={img.alt}
              className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
            />
          ))}
        </div>
        {visibleImages < imgsData.length && (
          <div className="flex justify-center mt-6">
            <button
              className="px-4 py-2 text-white bg-green-700 rounded hover:bg-green-700"
              onClick={showMoreImages}
            >
              Show More
            </button>
          </div>
        )}
      </section>
    </div>
  );
};

export default CSR;
