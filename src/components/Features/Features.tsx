import styles from "./Features.module.css";

const features = [
  {
    icon: "⚡",
    title: "Blazing Fast Deployments",
    description:
      "Deploy your app in seconds with our optimized CI/CD pipeline. Zero-downtime deployments with instant rollbacks keep your users happy.",
    color: "#f59e0b",
    gradient: "rgba(245,158,11,0.12)",
  },
  {
    icon: "🔒",
    title: "Enterprise-Grade Security",
    description:
      "End-to-end encryption, SOC 2 compliance, and automated vulnerability scanning keep your code and data safe at every step.",
    color: "#22c55e",
    gradient: "rgba(34,197,94,0.12)",
  },
  {
    icon: "📊",
    title: "Real-Time Analytics",
    description:
      "Deep insights into performance, errors, and user behavior — all in one unified dashboard. Make data-driven decisions with confidence.",
    color: "#6366f1",
    gradient: "rgba(99,102,241,0.12)",
  },
  {
    icon: "🤝",
    title: "Seamless Collaboration",
    description:
      "Built for teams. Branching environments, review apps, and role-based access control make working together effortless and transparent.",
    color: "#ec4899",
    gradient: "rgba(236,72,153,0.12)",
  },
];

export default function Features() {
  return (
    <section id="features" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.eyebrow}>Why Launchpad</span>
          <h2 className={styles.title}>
            Everything your team needs
          </h2>
          <p className={styles.subtitle}>
            From code to production, we&apos;ve got every step covered so you can
            focus on what matters most — building great products.
          </p>
        </div>

        <div className={styles.grid}>
          {features.map((feature) => (
            <div key={feature.title} className={styles.card}>
              <div
                className={styles.iconWrap}
                style={{ background: feature.gradient }}
              >
                <span className={styles.icon}>{feature.icon}</span>
              </div>
              <h3 className={styles.cardTitle}>{feature.title}</h3>
              <p className={styles.cardDesc}>{feature.description}</p>
              <a href="#" className={styles.cardLink} style={{ color: feature.color }}>
                Learn more →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
