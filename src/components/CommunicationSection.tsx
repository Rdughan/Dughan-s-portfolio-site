import { platforms, links } from "../data/content";

export default function CommunicationSection() {
  return (
    <section id="thinking" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <div className="section-head">
          <div className="eyebrow section-eyebrow">Communication</div>
          <h2 className="section-title">
            I build. Then I talk about <em>what I learn.</em>
          </h2>
          <p className="section-dek">
            Content isn't a marketing add-on here — it's the record of what actually got tried, what worked, and
            what didn't.
          </p>
        </div>
        <div className="content-grid">
          {platforms.map((p) => (
            <div className="platform-card" key={p.name}>
              <div>
                <div className="platform-name">{p.name}</div>
                <div className="platform-desc">{p.desc}</div>
              </div>
              <a className="platform-link" href={p.href} target="_blank" rel="noopener noreferrer">
                {p.cta}
              </a>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 44 }}>
          <a href={links.bookingWhatsApp} target="_blank" rel="noopener noreferrer" className="btn-secondary">
            Book me to speak →
          </a>
        </div>
      </div>
    </section>
  );
}
