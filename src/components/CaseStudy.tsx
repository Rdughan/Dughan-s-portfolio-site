import { briskSteps, briskMetrics, links } from "../data/content";

export default function CaseStudy() {
  return (
    <section id="brisk">
      <div className="wrap">
        <div className="section-head">
          <div className="eyebrow section-eyebrow">Case study — Brisk Capital</div>
          <h2 className="section-title">
            I learned about credit risk by <em>lending real money.</em>
          </h2>
          <p className="section-dek">
            Not a simulation. Actual capital, actual students, actual repayment behaviour — the kind of business
            thinking that doesn't show up in a case-study competition.
          </p>
        </div>
        <div className="case">
          <div className="case-steps">
            {briskSteps.map((s) => (
              <div className="case-step" key={s.num}>
                <div className="case-step-head">
                  <span className="case-step-num">{s.num}</span>
                  <span className="case-step-title">{s.title}</span>
                </div>
                <p className="case-step-body">{s.body}</p>
              </div>
            ))}
          </div>
          <div className="case-side">
            <div className="case-metric-box">
              {briskMetrics.map((m) => (
                <div className="case-metric-row" key={m.label}>
                  <span className="case-metric-num">{m.num}</span>
                  <span className="case-metric-label">{m.label}</span>
                </div>
              ))}
            </div>
            <div style={{ marginTop: 28 }}>
              <a href={links.bookingWhatsApp} target="_blank" rel="noopener noreferrer" className="btn-secondary">
                Talk business with Richardson →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
