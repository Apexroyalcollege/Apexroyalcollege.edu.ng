import Link from "next/link";
import { footerGroups, site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-main">
        <div className="footer-brand">
          <span className="crest large">AR</span>
          <h3>APEX ROYAL COLLEGE</h3>
          <p>
            Building exceptional minds through academic excellence,
            technology, character and purposeful innovation.
          </p>
          <small>{site.location}</small>
        </div>

        <div className="footer-links">
          {footerGroups.map(group => (
            <div key={group.title}>
              <h4>{group.title}</h4>
              {group.links.map(([label, href]) => (
                <Link href={href} key={href}>{label}</Link>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="container footer-bottom">
        <span>© {site.year} APEX ROYAL COLLEGE. All rights reserved.</span>
        <span>Academic excellence · Technology · Character · Leadership</span>
      </div>
    </footer>
  );
}
