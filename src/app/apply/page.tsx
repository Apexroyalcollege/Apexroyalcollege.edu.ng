import Link from "next/link";
import SiteShell from "@/components/SiteShell";

export default function Apply() {
 return <SiteShell>
  <section className="page-hero"><div className="container page-hero-inner"><span className="eyebrow">APPLICATION PORTAL</span><h1>Apply to ARC</h1><p>Select the appropriate application pathway. Availability, dates, fees and requirements are controlled by the current admission session.</p></div></section>
  <main className="container content-page"><div className="content-grid">
   <article className="info-card"><span className="card-number">01</span><h2>Day-Schooling Application</h2><p>Application pathway available across ARC&apos;s eligible academic divisions.</p><Link className="button blue" href="/apply/day-school">VIEW APPLICATION</Link></article>
   <article className="info-card"><span className="card-number">02</span><h2>Boarding-School Application</h2><p>Available only for Apex Royal Cadet and the Institute of Excellence.</p><Link className="button blue" href="/apply/boarding">VIEW APPLICATION</Link></article>
  </div></main>
 </SiteShell>
}
