import { links } from "../data/content";

const steps = ["Build", "Measure", "Learn", "Improve", "Repeat"];

export default function KaizenSection() {
  return (
    <section className="kaizen">
      <div className="wrap">
        <div className="eyebrow">Operating philosophy</div>
        <h2 className="kaizen-title" style={{ marginTop: 16 }}>
          I don't believe in perfect.
          <span className="thin">I believe in better.</span>
        </h2>
        <p className="section-dek" style={{ marginTop: 22 }}>
          Build something useful. Observe what happens. Learn from reality. Improve the system. Repeat. That loop
          runs underneath everything on this page — including this page.
        </p>
        <div className="kaizen-flow">
          {steps.map((s, i) => (
            <span key={s} style={{ display: "contents" }}>
              <span className="kaizen-step">{s}</span>
              {i < steps.length - 1 && <span className="kaizen-arrow">→</span>}
            </span>
          ))}
        </div>
        <div className="kaizen-cta">
          <a href={links.bookingWhatsApp} target="_blank" rel="noopener noreferrer" className="btn-primary">
            Have something that needs improving? Book Richardson →
          </a>
        </div>
      </div>
    </section>
  );
}
