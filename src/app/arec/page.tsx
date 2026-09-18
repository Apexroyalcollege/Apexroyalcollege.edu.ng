import Link from "next/link";
import SiteShell from "@/components/SiteShell";

export default function Arec() {
 return <SiteShell>
   <section className="page-hero">
    <div className="container page-hero-inner">
      <span className="arec-mark">APEX ROYAL EXAMINATION COUNCIL</span>
      <h1>Examinations.<br/>Records. Standards.</h1>
      <p>AREC provides examination, assessment and academic-record functions within the Apex Royal educational ecosystem.</p>
    </div>
   </section>
   <main className="container content-page">
    <div className="content-grid">
      {[
        ["About AREC","Learn about the Council and its role within the ARC educational ecosystem.","/arec/about"],
        ["Mandate","The examination, assessment and records responsibilities of AREC.","/arec/mandate"],
        ["Vision & Mission","The standards and direction guiding the Council.","/arec/vision"],
        ["Digital Transformation","A technology-driven approach to assessment and examination administration.","/arec/transformation"],
        ["Leadership","Governance and leadership information.","/arec/leadership"],
        ["Commitment","Commitment to integrity, fairness, security and examination standards.","/arec/commitment"],
        ["Examinations","Public information concerning AREC examination services.","/arec/examinations"],
        ["Results & Verification","Public-facing information about authorized result and verification services.","/arec/verification"],
      ].map(([title,text,href],i)=><article className="info-card" key={title}><span className="card-number">0{i+1}</span><h2>{title}</h2><p>{text}</p><Link className="arrow-link" href={href}>Explore →</Link></article>)}
    </div>
   </main>
 </SiteShell>
}
