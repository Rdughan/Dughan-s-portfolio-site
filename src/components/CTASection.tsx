import { links } from "../data/content";

export default function CTASection() {
  return (
    <section className="final">
      <div className="wrap">
        <h2 className="final-title">
          Let's make
          <br />
          something better.
        </h2>
        <p className="final-sub">You bring the problem. I'll bring the thinking.</p>
        <div className="final-ctas">
          <a href={links.bookingWhatsApp} target="_blank" rel="noopener noreferrer" className="btn-primary">
            Book Richardson →
          </a>
          <a href={`mailto:${links.email}`} className="btn-secondary">
            Email instead
          </a>
        </div>
        <div className="final-channels">
          <a href={links.plainWhatsApp} target="_blank" rel="noopener noreferrer">WhatsApp</a>
          <a href={`mailto:${links.email}`}>Email</a>
          <a href={links.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href={links.youtube} target="_blank" rel="noopener noreferrer">YouTube</a>
          <a href={links.tiktok} target="_blank" rel="noopener noreferrer">TikTok</a>
          <a href={links.almanacChannel} target="_blank" rel="noopener noreferrer">The Almanac</a>
        </div>
      </div>
    </section>
  );
}
