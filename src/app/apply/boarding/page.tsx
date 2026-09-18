import Link from "next/link";
export default function Boarding() {
 return <div className="portal"><header className="portal-header"><div className="container portal-head"><Link className="brand" href="/portal"><span className="crest">AR</span><strong>APEX ROYAL COLLEGE</strong></Link><nav className="portal-nav"><Link href="/portal">Home</Link><Link href="/portal/enquiries">Enquiries</Link><Link href="/portal/transcript">Transcript</Link><Link href="/apply">Application</Link></nav><Link className="button blue" href="/portal/login">LOGIN</Link></div></header>
 <main className="portal-main"><div className="form-shell">
  <span className="eyebrow">2026/2027 ACADEMIC SESSION · TERM CONFIGURATION</span>
  <h2>Boarding-School Application</h2>
  <p className="portal-intro">Boarding applications are available for eligible ARC divisions only.</p>
  <div style={{background:"#eef1f5",padding:25,borderLeft:"3px solid #c8a45a",margin:"30px 0"}}><strong>BOARDING ELIGIBILITY</strong><p>Apex Royal Cadet and Institute of Excellence support Day + Boarding. Royal Newbies and Apex Royal Trailblazer are Day only.</p></div>
  <p>Read all application instructions, eligibility requirements and current admission dates before continuing.</p>
  <Link className="button blue" style={{marginTop:30,width:"100%"}} href="/apply/boarding/start">BEGIN APPLICATION PROCESS →</Link>
 </div></main></div>
}
