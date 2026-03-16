import styles from "./Footer.module.css";

const socialLinks = [
  { label: "Twitter", href: "#", icon: "𝕏" },
  { label: "GitHub", href: "#", icon: "⌥" },
  { label: "LinkedIn", href: "#", icon: "in" },
  { label: "Discord", href: "#", icon: "◈" },
];

const footerLinks = [
  {
    heading: "Product",
    links: ["Features", "Pricing", "Changelog", "Roadmap"],
  },
  {
    heading: "Company",
    links: ["About", "Blog", "Careers", "Press"],
  },
  {
    heading: "Resources",
    links: ["Documentation", "API Reference", "Guides", "Community"],
  },
  {
    heading: "Legal",
    links: ["Privacy Policy", "Terms of Service", "Cookie Policy", "Security"],
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.topDivider} />
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <a href="#" className={styles.logo}>
              <span className={styles.logoIcon}>🚀</span>
              <span className={styles.logoText}>Launchpad</span>
            </a>
            <p className={styles.brandDesc}>
              The modern platform for teams who want to build, iterate, and
              ship products faster than ever before.
            </p>
            <div className={styles.socials}>
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className={styles.socialIcon}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          <div className={styles.linksGrid}>
            {footerLinks.map((col) => (
              <div key={col.heading} className={styles.linkCol}>
                <span className={styles.colHeading}>{col.heading}</span>
                <ul className={styles.linkList}>
                  {col.links.map((link) => (
                    <li key={link}>
                      <a href="#" className={styles.footerLink}>
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copyright}>
            &copy; {year} Launchpad, Inc. All rights reserved.
          </p>
          <p className={styles.tagline}>
            Made with ❤️ for developers everywhere.
          </p>
        </div>
      </div>
    </footer>
  );
}
