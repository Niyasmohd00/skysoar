"use client";

import React from "react";

export default function Footer() {
  return (
    <footer className="footer">
      <div>© {new Date().getFullYear()} SkySoar. All rights reserved.</div>
      <div className="socials">
        <a href="https://instagram.com" target="_blank" rel="noreferrer" className="social-btn" aria-label="Instagram">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.5" />
            <path d="M12 8.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
          </svg>
        </a>
        <a href="https://wa.me/1234567890" target="_blank" rel="noreferrer" className="social-btn" aria-label="WhatsApp">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21 11.5a9.3 9.3 0 0 1-1.4 4.7l.1.9-2.6.7a8.9 8.9 0 1 1 3.9-11.8z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M17.5 15.5c-.5.8-1.2 1.4-2 1.6-.9.2-1.6.2-2.8-.3-1.2-.5-2.6-1.5-3.6-3.2-.9-1.5-.7-2.6-.2-3.1.3-.3.6-.7 1-.6.4.1.6.4 1 .8.2.2.4.6.7.9.3.4.6.5 1 .8.5.3.7.4 1.1.2.4-.2.9-.6 1.3-1 .3-.3.6-.4.9-.3.3.1.8.3 1.1.5.3.2.5.4.5.9 0 .5-.1 1-.6 1.8z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </div>
    </footer>
  );
}
