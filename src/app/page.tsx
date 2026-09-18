import Link from "next/link";
import SiteShell from "@/components/SiteShell";
import Icon from "@/components/Icon";
import { divisions, instituteSegments } from "@/lib/site";

export default function Home() {
  return (
    <SiteShell>
      <main>
        <section className="hero">
          <div className="hero-image" aria-hidden="true">
            <div className="hero-architecture">
              <span>ARC</span>
            </div>
          </div>
          <div className="container hero-content">
            <span className="eyebrow light">WELCOME TO</span>
            <h1>APEX<br/><em>ROYAL COLLEGE</em></h1>
            <p>
              Building exceptional minds through academic excellence,
              technology, character and purposeful innovation.
            </p>
            <div className="hero-actions">
              <Link className="button gold" href="/about">READ OUR STORY <Icon name="arrow" size={18}/></Link>
              <Link className="button outline-light" href="/academics">EXPLORE ARC</Link>
            </div>
          </div>
        </section>

        <section className="statement-section">
          <div className="container two-column">
            <div>
              <span className="eyebrow">THE ARC DIFFERENCE</span>
              <h2>Education designed for the world ahead.</h2>
            </div>
            <p className="large-copy">
              ARC brings rigorous academics together with technology,
              leadership, creativity and character. Our purpose is not simply
              to prepare students for examinations, but to prepare them to
              think, create, lead and contribute.
            </p>
          </div>

          <div className="container difference-grid">
            {[
              ["01","Academic Excellence","A rigorous learning culture built around deep understanding, disciplined inquiry and high standards."],
              ["02","Technology & Innovation","Digital learning, intelligent infrastructure and technology-enabled education integrated into the learning experience."],
              ["03","Character & Leadership","Purposeful development of integrity, responsibility, confidence, service and leadership."],
              ["04","Future Readiness","Preparing learners for higher education, entrepreneurship, professional life and a rapidly changing world."],
            ].map(([n,t,d]) => (
              <article className="difference" key={n}>
                <span>{n}</span><h3>{t}</h3><p>{d}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="dark-section">
          <div className="container section-heading">
            <span className="eyebrow light">DISCOVER ARC</span>
            <h2>A complete educational journey.</h2>
            <p>
              From foundational learning to advanced senior secondary
              education, every stage is designed as part of one coherent
              academic ecosystem.
            </p>
          </div>

          <div className="container division-grid">
            {divisions.map((d, i) => (
              <Link href={d.href} className="division-card" key={d.title}>
                <span>0{i + 1}</span>
                <small>{d.subtitle}</small>
                <h3>{d.title}</h3>
                <p>{d.description}</p>
                <b>{d.boarding}</b>
                <Icon name="arrow" size={20}/>
              </Link>
            ))}
          </div>
        </section>

        <section className="institute">
          <div className="container two-column">
            <div>
              <span className="eyebrow">INSTITUTE OF EXCELLENCE</span>
              <h2>Three pathways.<br/>One standard of excellence.</h2>
            </div>
            <p className="large-copy">
              Senior secondary education at ARC is organized around three
              academic segments, allowing students to develop depth while
              maintaining a broad foundation for university and professional
              progression.
            </p>
          </div>
          <div className="container segment-grid">
            {instituteSegments.map(([title, text]) => (
              <div className="segment" key={title}>
                <h3>{title}</h3><p>{text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="digital-section">
          <div className="container digital-inner">
            <div>
              <span className="eyebrow light">THE DIGITAL CAMPUS</span>
              <h2>One institution.<br/><em>Connected intelligently.</em></h2>
              <p>
                ARC is designed around a digital ecosystem connecting
                admissions, learning, records, examinations, communication and
                institutional services.
              </p>
            </div>
            <div className="service-list">
              {["Online Admissions","Student Information System","Digital Academic Records","Online Learning","Digital Examination","AREC","Parent Services","Teacher Services","Digital Library","Academic Resources"].map((x,i) =>
                <div key={x}><span>{String(i+1).padStart(2,"0")}</span>{x}</div>
              )}
            </div>
          </div>
        </section>

        <section className="cta-section">
          <div className="container">
            <span className="eyebrow">ADMISSIONS</span>
            <h2>Your journey to ARC starts here.</h2>
            <p>Explore admission information and begin an application when applications are open.</p>
            <Link className="button blue" href="/admissions">EXPLORE ADMISSIONS <Icon name="arrow" size={18}/></Link>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
