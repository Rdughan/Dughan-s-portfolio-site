import { useEffect, useState } from "react";
import portrait from "../assets/images/portrait.jpg";
import { links } from "../data/content";

export default function Hero() {
  const [textIn, setTextIn] = useState(false);
  const [imgIn, setImgIn] = useState(false);

  useEffect(() => {
    const raf = requestAnimationFrame(() => {
      setTextIn(true);
      const t = setTimeout(() => setImgIn(true), 140);
      return () => clearTimeout(t);
    });
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <section className="hero" style={{ paddingTop: 64 }}>
      <div className="wrap hero-grid">
        <div className={`fade-in${textIn ? " in" : ""}`}>
          <h1 className="hero-headline">
            I turn problems
            <br />
            into <em>simple systems.</em>
          </h1>
          <p className="hero-sub">
            I build practical systems, products and strategies at the intersection of business, technology and
            communication — then I improve them in public.
          </p>
          <p className="hero-formula">Business × Technology × Communication</p>
          <div className="hero-ctas">
            <a href={links.bookingWhatsApp} target="_blank" rel="noopener noreferrer" className="btn-primary">
              Book Richardson →
            </a>
            <a href="#work" className="btn-secondary">
              See what I've built ↓
            </a>
          </div>
        </div>
        <div className={`hero-image-col fade-in${imgIn ? " in" : ""}`}>
          <img className="hero-image" src={portrait} alt="Richardson Dughan, portrait" />
          <div className="hero-image-cap">
            <span>Kumasi, Ghana</span>
            <span>Builder · Communicator · Entrepreneur</span>
          </div>
        </div>
      </div>
    </section>
  );
}
