import Link from "next/link";

export default function Login() {
 return <div className="portal"><header className="portal-header"><div className="container portal-head"><Link className="brand" href="/portal"><span className="crest">AR</span><strong>APEX ROYAL COLLEGE</strong></Link><Link className="portal-menu" href="/portal">☰</Link></div></header>
 <main className="portal-main"><div className="form-shell">
  <span className="eyebrow">SECURE ACCESS</span><h2>Sign in to continue</h2>
  <div className="form-group"><label>USERNAME / ID</label><input placeholder="Enter your username or ID"/></div>
  <div className="form-group"><label>PASSWORD</label><input type="password" placeholder="Enter your password"/></div>
  <label style={{fontSize:13,display:"flex",gap:8,alignItems:"center"}}><input type="checkbox"/> Keep me signed in</label>
  <div className="form-actions"><button className="button blue">SIGN IN</button><Link href="/portal/login" className="arrow-link">Forgotten password?</Link></div>
  <p style={{marginTop:35,color:"#687384",fontSize:13}}>Don&apos;t have an account? Account creation is controlled by the applicable ARC admission or institutional process.</p>
 </div></main></div>
}
