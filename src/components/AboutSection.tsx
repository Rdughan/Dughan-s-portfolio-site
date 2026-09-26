export default function AboutSection() {
  return (
    <section id="about">
      <div className="wrap about-grid">
        <div>
          <div className="eyebrow section-eyebrow">About</div>
          <h2 className="section-title">
            I'm interested in the space between <em>ideas and execution.</em>
          </h2>
        </div>
        <div className="about-copy">
          <p>
            I studied Computer Science at KNUST, but most of what I actually use came from running things — a
            lending book, a booking platform, a stage.
          </p>
          <p>
            I don't think of myself as a developer, or a speaker, or a founder on their own. Those are just the
            forms the same habit takes depending on the problem in front of me: notice what's broken, build the
            smallest thing that fixes it, and pay close attention to what happens next.
          </p>
          <p>
            Brisk Capital taught me how risk actually behaves when it's your own money. Dug's Cut and The State
            Engine taught me that a good system has to survive contact with real, impatient users. Speaking taught
            me that none of it matters if you can't explain it clearly to someone who wasn't there for the
            building.
          </p>
          <p>
            That's the thread — business, technology and communication, worked as one discipline instead of three
            separate careers.
          </p>
          <div className="about-tags">
            <span className="about-tag">Computer Science — KNUST</span>
            <span className="about-tag">AIESEC in KNUST</span>
            <span className="about-tag">LifeLink Tertiary MUN — Logistics &amp; Operations</span>
            <span className="about-tag">Kumasi, Ghana</span>
          </div>
          <div style={{ marginTop: 32 }}>
            <a href="#work" className="btn-secondary">
              Get to know the work →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
