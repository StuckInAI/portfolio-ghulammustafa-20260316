"use client";

import { useState, useEffect } from "react";
import styles from "./Navbar.module.css";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Pricing", href: "#pricing" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.inner}>
        <a href="#" className={styles.logo}>
          <span className={styles.logoIcon}>🚀</span>
          <span className={styles.logoText}>Launchpad</span>
        </a>

        <nav className={`${styles.nav} ${menuOpen ? styles.navOpen : ""}`}>
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={styles.navLink}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a href="#hero" className={styles.ctaBtn} onClick={() => setMenuOpen(false)}>
            Get Started
          </a>
        </nav>

        <button
          className={styles.hamburger}
          aria-label="Toggle menu"
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span className={`${styles.bar} ${menuOpen ? styles.barTop : ""}`} />
          <span className={`${styles.bar} ${menuOpen ? styles.barMid : ""}`} />
          <span className={`${styles.bar} ${menuOpen ? styles.barBot : ""}`} />
        </button>
      </div>
    </header>
  );
}
