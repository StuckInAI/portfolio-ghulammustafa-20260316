import styles from "./Testimonials.module.css";

const testimonials = [
  {
    quote:
      "Launchpad cut our deployment time by 80%. What used to take our team half a day now happens in minutes. It&apos;s genuinely changed how we build software.",
    name: "Sarah Chen",
    role: "VP of Engineering",
    company: "Streamline Inc.",
    avatar: "SC",
    avatarColor: "#6366f1",
    stars: 5,
  },
  {
    quote:
      "The real-time analytics alone were worth switching. We caught a critical performance regression before it hit users — that never would have happened with our old tools.",
    name: "Marcus Johnson",
    role: "Lead Developer",
    company: "NovaTech",
    avatar: "MJ",
    avatarColor: "#22c55e",
    stars: 5,
  },
  {
    quote:
      "Onboarding our 40-person eng team was seamless. The collaboration features are exactly what we needed, and the support team is phenomenal. Highly recommended.",
    name: "Priya Patel",
    role: "CTO",
    company: "Orbit Labs",
    avatar: "PP",
    avatarColor: "#ec4899",
    stars: 5,
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className={styles.stars}>
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} className={styles.star}>★</span>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonials" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.eyebrow}>Testimonials</span>
          <h2 className={styles.title}>Loved by engineering teams</h2>
          <p className={styles.subtitle}>
            Don&apos;t just take our word for it — here&apos;s what real teams are saying about Launchpad.
          </p>
        </div>

        <div className={styles.grid}>
          {testimonials.map((t) => (
            <div key={t.name} className={styles.card}>
              <Stars count={t.stars} />
              <p className={styles.quote}>&ldquo;{t.quote.replace(/&apos;/g, "'")} &rdquo;</p>
              <div className={styles.author}>
                <div
                  className={styles.avatar}
                  style={{ background: t.avatarColor + "33", color: t.avatarColor }}
                >
                  {t.avatar}
                </div>
                <div className={styles.authorInfo}>
                  <span className={styles.authorName}>{t.name}</span>
                  <span className={styles.authorMeta}>
                    {t.role} · {t.company}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
