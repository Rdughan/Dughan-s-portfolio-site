import { links } from "../data/content";

export default function MobileBookBar() {
  return (
    <a className="mobile-book" href={links.bookingWhatsApp} target="_blank" rel="noopener noreferrer">
      Book
    </a>
  );
}
