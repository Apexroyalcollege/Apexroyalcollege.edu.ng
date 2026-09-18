import SiteShell from "./SiteShell";
import PageHero, { ArrowLink } from "./PageHero";

type Item = { title: string; text: string; href?: string };

export default function ContentPage({
  eyebrow = "APEX ROYAL COLLEGE",
  title,
  intro,
  items,
}: {
  eyebrow?: string;
  title: string;
  intro: string;
  items: Item[];
}) {
  return (
    <SiteShell>
      <PageHero eyebrow={eyebrow} title={title} text={intro}/>
      <main className="container content-page">
        <div className="content-grid">
          {items.map((item, i) => (
            <article className="info-card" key={item.title}>
              <span className="card-number">{String(i + 1).padStart(2, "0")}</span>
              <h2>{item.title}</h2>
              <p>{item.text}</p>
              {item.href && <ArrowLink href={item.href}>Explore</ArrowLink>}
            </article>
          ))}
        </div>
      </main>
    </SiteShell>
  );
}
