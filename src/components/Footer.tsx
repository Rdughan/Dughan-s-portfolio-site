import { links } from "../data/content";

export default function Footer() {
  return (
    <footer>
      <div className="wrap foot-grid">
        <div>
          <div className="foot-name">Richardson Dughan</div>
          <div className="foot-copy">Builder. Communicator. Entrepreneur. Based in Kumasi, Ghana.</div>
        </div>
        <div className="foot-links">
          <a href="#work">Work</a>
          <a href="#thinking">Thinking</a>
          <a href="#about">About</a>
          <a href={links.almanacChannel} target="_blank" rel="noopener noreferrer">The Almanac</a>
          <a href="#booking">Booking</a>
          <a href={`mailto:${links.email}`}>{links.email}</a>
        </div>
      </div>
    </footer>
  );
}
