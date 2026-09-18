import Link from "next/link";

export default function Portal() {
 return <div className="portal">
  <header className="portal-header"><div className="container portal-head">
   <Link className="brand" href="/portal"><span className="crest">AR</span><strong>APEX ROYAL COLLEGE</strong></Link>
   <nav className="portal-nav"><Link href="/portal">Home</Link><Link href="/portal/enquiries">Enquiries</Link><Link href="/portal/transcript">Transcript</Link><Link href="/portal/application">Application</Link></nav>
   <Link className="button blue" href="/portal/login">LOGIN</Link>
  </div></header>
  <main className="portal-main">
   <span className="eyebrow">ARC DIGITAL SERVICES</span>
   <h1>Welcome to ARC<br/>Student Information Systems</h1>
   <p className="portal-intro">Your central hub for managing academic information with ease and security.</p>
   <p className="portal-intro">This portal provides a secure and user-friendly platform for prospective and current students to manage academic applications, view records, make enquiries and access important academic information. Our goal is to streamline academic processes and provide you with the information you need, right at your fingertips.</p>
   <div className="portal-cards">
    <div className="portal-card"><span className="eyebrow">01</span><h2>Online Application</h2><p>Easily browse and apply for available academic programmes online. Our simplified application process guides you every step of the way.</p><Link className="arrow-link" href="/apply">Begin →</Link></div>
    <div className="portal-card"><span className="eyebrow">02</span><h2>Record Management</h2><p>Registered students can securely access permitted academic records, track progress and access important documents.</p><Link className="arrow-link" href="/portal/login">Continue →</Link></div>
    <div className="portal-card"><span className="eyebrow">03</span><h2>24/7 Support</h2><p>Have a question? Visit our enquiries area for information and support.</p><Link className="arrow-link" href="/portal/enquiries">Enquiries →</Link></div>
   </div>
  </main>
  <footer className="portal-footer"><div className="container">Academic Record Management · © 2026 ARC. All rights reserved.</div></footer>
 </div>
}
