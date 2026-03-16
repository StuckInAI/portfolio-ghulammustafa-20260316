import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.bg}>
        <div className={styles.glow1} />
        <div className={styles.glow2} />
        <div className={styles.grid} />
      </div>
      <div className={styles.container}>
        <div className={styles.badge}>
          <span className={styles.badgeDot} />
          Now in public beta — try it free
        </div>
        <h1 className={styles.headline}>
          Build Faster.<br />
          <span className={styles.highlight}>Ship Smarter.</span>
        </h1>
        <p className={styles.subheadline}>
          Launchpad gives your team the tools, workflows, and infrastructure
          to go from idea to production in record time — without the headaches.
        </p>
        <div className={styles.actions}>
          <a href="#features" className={styles.primaryBtn}>
            Start for free
            <span className={styles.btnArrow}>→</span>
          </a>
          <a href="#testimonials" className={styles.secondaryBtn}>
            See how it works
          </a>
        </div>
        <div className={styles.stats}>
          <div className={styles.stat}>
            <span className={styles.statNum}>50K+</span>
            <span className={styles.statLabel}>Developers</span>
          </div>
          <div className={styles.statDivider} />
          <div className={styles.stat}>
            <span className={styles.statNum}>99.9%</span>
            <span className={styles.statLabel}>Uptime SLA</span>
          </div>
          <div className={styles.statDivider} />
          <div className={styles.stat}>
            <span className={styles.statNum}>2M+</span>
            <span className={styles.statLabel}>Deployments</span>
          </div>
        </div>
      </div>
    </section>
  );
}
