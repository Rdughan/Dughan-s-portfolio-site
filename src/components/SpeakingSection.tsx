import speaking1 from "../assets/images/speaking-1.jpg";
import speaking2 from "../assets/images/speaking-2.jpg";
import { speakingEngagements, links } from "../data/content";

export default function SpeakingSection() {
  return (
    <section id="speaking">
      <div className="wrap">
        <div className="section-head">
          <div className="eyebrow section-eyebrow">Speaking</div>
          <h2 className="section-title">
            Ideas are more useful when they <em>move people.</em>
          </h2>
        </div>
        <div className="speak-grid">
          <div className="speak-photos">
            <img src={speaking2} alt="Richardson Dughan speaking from a stage to a seated audience" />
            <img src={speaking1} alt="Richardson Dughan speaking at a lectern in a grey suit" />
          </div>
          <div className="speak-list">
            {speakingEngagements.map((e) => (
              <div className="speak-entry" key={e.title}>
                <div className="speak-entry-title">{e.title}</div>
                <div className="speak-entry-venue">{e.venue}</div>
              </div>
            ))}
            <div style={{ marginTop: 32 }}>
              <a href={links.bookingWhatsApp} target="_blank" rel="noopener noreferrer" className="btn-secondary">
                Invite Richardson to speak →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
