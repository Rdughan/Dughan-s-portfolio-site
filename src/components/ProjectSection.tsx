import { projects, links } from "../data/content";

export default function ProjectSection() {
  return (
    <section id="work" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <div className="section-head">
          <div className="eyebrow section-eyebrow">Selected work</div>
          <h2 className="section-title">
            What I've <em>built.</em>
          </h2>
          <p className="section-dek">
            Three systems, three problems, three different rooms of the same discipline: notice what's broken,
            build the smallest thing that fixes it, watch what happens.
          </p>
        </div>

        {projects.map((p, i) => (
          <div className={`work-item${i % 2 === 1 ? " rev" : ""}`} key={p.name}>
            <div className="work-media">
              <span className="mono-mark">{p.mark}</span>
            </div>
            <div>
              <div className="work-tag">{p.tag}</div>
              <h3 className="work-name">{p.name}</h3>
              <p className="work-desc">{p.desc}</p>
              <div className="work-facts">
                {p.facts.map((f) => (
                  <div className="work-fact" key={f.label}>
                    <b>{f.label} —</b> {f.text}
                  </div>
                ))}
              </div>
              {p.ctaExternal ? (
                <a href={p.ctaHref} target="_blank" rel="noopener noreferrer" className="work-cta">
                  {p.ctaText}
                </a>
              ) : (
                <a href={p.ctaHref} className="work-cta">
                  {p.ctaText}
                </a>
              )}
            </div>
          </div>
        ))}

        <div className="work-foot">
          <a href={links.bookingWhatsApp} target="_blank" rel="noopener noreferrer" className="btn-primary">
            Want something like this? Book Richardson →
          </a>
        </div>
      </div>
    </section>
  );
}
