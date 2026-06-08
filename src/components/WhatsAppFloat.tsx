"use client";

import React from "react";

export default function WhatsAppFloat() {
  return (
    <div className="fixed bottom-7 right-2 sm:right-4 z-9999 group flex items-center gap-3">
            <span
              className="
                opacity-0
                translate-x-4
                group-hover:opacity-100
                group-hover:translate-x-0
                transition-all
                duration-300
                bg-white
                text-black
                text-sm
                px-4
                py-2
                rounded-full
                shadow-md
                whitespace-nowrap
              "
            >
              Need help planning?
            </span>
            <a
              href="https://wa.me/8139053236?text=Hi%2C%20I%20would%20like%20to%20book%20a%20trip.%0Aa)%20Number%20of%20days%3A%0Ab)%20Cities%3A"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex transition-transform duration-300 hover:scale-90"
            >
              <svg
                viewBox="0 0 32 32"
                className="w-8 h-8"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="#25D366"
                  d="M16.01 2.002c-7.73 0-14.01 6.28-14.01 14.01 0 2.47.65 4.88 1.89 7.02L2 30l7.16-1.87a13.95 13.95 0 006.85 1.77h.01c7.73 0 14.01-6.28 14.01-14.01S23.74 2.002 16.01 2.002z"
                />

                <path
                  fill="#FFFFFF"
                  d="M23.54 19.52c-.36-.18-2.12-1.05-2.45-1.17-.33-.12-.57-.18-.81.18-.24.36-.93 1.17-1.14 1.41-.21.24-.42.27-.78.09-.36-.18-1.53-.56-2.91-1.78-1.07-.96-1.79-2.15-2-2.51-.21-.36-.02-.55.16-.73.16-.16.36-.42.54-.63.18-.21.24-.36.36-.6.12-.24.06-.45-.03-.63-.09-.18-.81-1.95-1.11-2.67-.29-.7-.59-.6-.81-.61l-.69-.01c-.24 0-.63.09-.96.45-.33.36-1.26 1.23-1.26 3 0 1.77 1.29 3.48 1.47 3.72.18.24 2.53 3.86 6.13 5.41.86.37 1.53.59 2.05.75.86.27 1.65.23 2.27.14.69-.1 2.12-.87 2.42-1.71.3-.84.3-1.56.21-1.71-.09-.15-.33-.24-.69-.42z"
                />
              </svg>
            </a>
          </div>
  );
}
