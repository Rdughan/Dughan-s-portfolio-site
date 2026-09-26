import { useEffect, useState } from "react";
import { links } from "../data/content";

export default function Nav() {
  const [shrink, setShrink] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setShrink(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItems = (
    <>
      <a href="#work" onClick={() => setOpen(false)}>Work</a>
      <a href="#thinking" onClick={() => setOpen(false)}>Thinking</a>
      <a href="#about" onClick={() => setOpen(false)}>About</a>
      <a href={links.opportunityWhatsApp} target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)}>
        Share an Opportunity
      </a>
      <a href="#contact" onClick={() => setOpen(false)}>Contact</a>
    </>
  );

  return (
    <header className={`site-nav${shrink ? " shrink" : ""}`} id="siteNav">
      <div className="wrap nav-inner">
        <a href="#top" className="nav-name">Richardson Dughan</a>
        <nav className="nav-links">
          {navItems}
          <a href={links.bookingWhatsApp} target="_blank" rel="noopener noreferrer" className="nav-cta">
            Book Richardson →
          </a>
        </nav>
        <button
          className="nav-menu-btn"
          aria-label="Open menu"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>
      <div className={`wrap mobile-panel${open ? " open" : ""}`}>
        {navItems}
        <a href={links.bookingWhatsApp} target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)}>
          Book Richardson
        </a>
      </div>
    </header>
  );
}
