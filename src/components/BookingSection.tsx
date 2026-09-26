import { bookingPaths, links } from "../data/content";

export default function BookingSection() {
  return (
    <section id="booking">
      <div className="wrap">
        <div className="section-head">
          <div className="eyebrow section-eyebrow">Work with me</div>
          <h2 className="section-title">
            What are you trying to <em>solve?</em>
          </h2>
        </div>
        <div className="book-grid">
          {bookingPaths.map((b) => (
            <div className="book-card" key={b.title}>
              <div className="book-eyebrow">{b.eyebrow}</div>
              <div className="book-title">{b.title}</div>
              <p className="book-desc">{b.desc}</p>
              <a className="book-link" href={b.href} target="_blank" rel="noopener noreferrer">
                {b.cta}
              </a>
            </div>
          ))}
        </div>

        <div className="wa-strip" id="contact">
          <div>
            <div className="wa-text">Book via WhatsApp — the fastest way to reach me.</div>
            <div className="wa-sub">+233 53 594 5001 · usually replies within a day</div>
          </div>
          <a className="btn-primary" href={links.bookingWhatsApp} target="_blank" rel="noopener noreferrer">
            Book via WhatsApp →
          </a>
        </div>
      </div>
    </section>
  );
}
