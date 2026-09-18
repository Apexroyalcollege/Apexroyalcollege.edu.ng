"use client";
import { useState } from "react";
import Link from "next/link";

export default function Start() {
 const [email, setEmail] = useState("");
 const [password, setPassword] = useState("");
 return <div className="portal"><header className="portal-header"><div className="container portal-head"><Link className="brand" href="/portal"><span className="crest">AR</span><strong>APEX ROYAL COLLEGE</strong></Link><Link href="/apply/day-school">← Back to instructions</Link></div></header>
 <main className="portal-main"><div className="form-shell"><span className="eyebrow">STEP 01 · APPLICATION ACCOUNT</span><h2>Create application access</h2><p className="portal-intro">Enter your email address and set a password to begin the application process.</p>
 <div className="form-group"><label>EMAIL ADDRESS</label><input value={email} onChange={e => setEmail(e.target.value)} type="email" placeholder="you@example.com"/></div>
 <div className="form-group"><label>PASSWORD</label><input value={password} onChange={e => setPassword(e.target.value)} type="password" placeholder="Create a secure password"/></div>
 <button className="button blue" style={{ width: "100%" }} onClick={() => alert("Application account integration will be connected to the ARC Supabase application service.")}>CONTINUE →</button>
 </div></main></div>;
}
