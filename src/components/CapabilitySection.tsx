import { capabilities, links } from "../data/content";

export default function CapabilitySection() {
  return (
    <section id="capability">
      <div className="wrap">
        <div className="section-head">
          <div className="eyebrow section-eyebrow">How I create value</div>
          <h2 className="section-title">
            Three ways I create <em>value.</em>
          </h2>
        </div>
        <div className="cap-grid">
          {capabilities.map((c) => (
            <div className="cap-card" key={c.title}>
              <div className="cap-index">{c.index}</div>
              <h3 className="cap-title">{c.title}</h3>
              <p className="cap-text">{c.text}</p>
            </div>
          ))}
        </div>
        <p className="cap-thread">
          "The common thread is simple: make complicated things clearer, more useful, and easier to execute."
        </p>
        <div style={{ marginTop: 36 }}>
          <a href={links.bookingWhatsApp} target="_blank" rel="noopener noreferrer" className="btn-secondary">
            Have a problem? Book Richardson →
          </a>
        </div>
      </div>
    </section>
  );
}
