import { almanacCategories, links } from "../data/content";

export default function WritingSection() {
  return (
    <section>
      <div className="wrap">
        <div className="almanac-head">
          <div>
            <div className="eyebrow section-eyebrow">How I think</div>
            <h2 className="section-title">
              The Almanac of <em>Richardson Dughan.</em>
            </h2>
          </div>
          <div className="almanac-days">5,000 Days of Writing</div>
        </div>
        <div className="almanac-grid">
          {almanacCategories.map((c) => (
            <div className="almanac-cat" key={c.name}>
              <div className="almanac-cat-name">{c.name}</div>
              <div className="almanac-cat-desc">{c.desc}</div>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 40 }}>
          <a href={links.almanacChannel} target="_blank" rel="noopener noreferrer" className="btn-secondary">
            Read the Almanac →
          </a>
        </div>
      </div>
    </section>
  );
}
