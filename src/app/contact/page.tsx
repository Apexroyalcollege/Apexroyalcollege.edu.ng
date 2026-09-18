import SiteShell from "@/components/SiteShell";
import PageHero from "@/components/PageHero";
import { site } from "@/lib/site";

export default function Page() {
  return <SiteShell><PageHero eyebrow="CONTACT" title="Get in touch" text="Connect with APEX ROYAL COLLEGE for admissions, academic, student, registry and general enquiries."/><main className="container content-page"><div className="content-grid">
    {[
      ["Address",site.location],
      ["General Enquiries",site.email],
      ["Admissions",site.admissionsEmail],
      ["Telephone",site.phone],
      ["Opening Hours","Monday – Friday · 8:00 AM – 4:00 PM"],
      ["Academic Affairs","For academic programmes, records and curriculum enquiries."],
    ].map(([a,b])=><article className="info-card" key={a}><span className="card-number">ARC</span><h2>{a}</h2><p>{b}</p></article>)}
  </div></main></SiteShell>;
}
