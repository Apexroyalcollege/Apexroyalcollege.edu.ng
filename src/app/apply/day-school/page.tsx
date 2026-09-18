import Link from "next/link";
export default function DaySchool() {
 return <div className="portal"><header className="portal-header"><div className="container portal-head"><Link className="brand" href="/portal"><span className="crest">AR</span><strong>APEX ROYAL COLLEGE</strong></Link><nav className="portal-nav"><Link href="/portal">Home</Link><Link href="/portal/enquiries">Enquiries</Link><Link href="/portal/transcript">Transcript</Link><Link href="/apply">Application</Link></nav><Link className="button blue" href="/portal/login">LOGIN</Link></div></header>
 <main className="portal-main"><div className="form-shell">
  <span className="eyebrow">2026/2027 ACADEMIC SESSION · TERM CONFIGURATION</span>
  <h2>Day-Schooling Application</h2>
  <p className="portal-intro">Instructions and application dates are configured by ARC for each admission cycle.</p>
  <div style={{background:"#eef1f5",padding:25,borderLeft:"3px solid #c8a45a",margin:"30px 0"}}><strong>INSTRUCTIONS</strong><p>All applications must be submitted within the official application window published for the applicable session and term. The ARC Apex Royal Entrance Test (ARET) admission screening exercise will be conducted on the dates communicated by ARC.</p></div>
  <ol style={{color:"#455266",lineHeight:2}}><li>Read the instructions carefully.</li><li>Enter your email address and create the required application credentials.</li><li>Use your application user ID and password to continue.</li></ol>
  <div style={{marginTop:40,display:"flex",justifyContent:"space-between",borderTop:"1px solid #dfe4eb",paddingTop:25}}><span><b style={{color:"green"}}>Opens:</b> Configured by ARC</span><span><b>Deadline:</b> Configured by ARC</span></div>
  <Link className="button blue" style={{marginTop:30,width:"100%"}} href="/apply/day-school/start">BEGIN APPLICATION PROCESS →</Link>
 </div></main></div>
}
