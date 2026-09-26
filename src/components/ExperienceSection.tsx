import { experience } from "../data/content";

export default function ExperienceSection() {
  return (
    <section id="experience" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <div className="section-head">
          <div className="eyebrow section-eyebrow">Experience</div>
          <h2 className="section-title">
            Where I've put the thinking to <em>work.</em>
          </h2>
        </div>
        <div className="exp-list">
          {experience.map((e) => (
            <div className="exp-row" key={e.org}>
              <div>
                <div className="exp-org">{e.org}</div>
                <div className="exp-role">{e.role}</div>
              </div>
              <div>
                {e.rows.map((r) => (
                  <div className="exp-detail-row" key={r.label}>
                    <b>{r.label} —</b> {r.text}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
