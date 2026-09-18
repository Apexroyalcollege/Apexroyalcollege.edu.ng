"use client";

import Link from "next/link";
import { useState } from "react";
import { mainNavigation, site } from "@/lib/site";
import Icon from "./Icon";

export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="topbar">
        <div className="container topbar-inner">
          <span>{site.location}</span>
          <div className="topbar-right">
            <a href={`mailto:${site.email}`}><Icon name="mail" size={15}/> {site.email}</a>
            <Link href="/search" className="search-link">
              <Icon name="search" size={15}/> Search by keyword
            </Link>
          </div>
        </div>
      </div>

      <header className="site-header">
        <div className="container header-inner">
          <Link href="/" className="brand" onClick={() => setOpen(false)}>
            <span className="crest">AR</span>
            <span>
              <strong>APEX ROYAL COLLEGE</strong>
              <small>BENIN CITY · EDO STATE · NIGERIA</small>
            </span>
          </Link>

          <button
            className="menu-button"
            aria-label="Open navigation"
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            <Icon name={open ? "close" : "menu"} size={27}/>
          </button>
        </div>

        {open && (
          <div className="menu-panel">
            <div className="container menu-grid">
              <div className="menu-intro">
                <span className="eyebrow">APEX ROYAL COLLEGE</span>
                <h2>Explore ARC.</h2>
                <p>
                  Discover an institution built around academic excellence,
                  technology, character, leadership and purposeful innovation.
                </p>
              </div>
              <nav className="menu-links">
                {mainNavigation.map(([label, href], i) => (
                  <Link key={href} href={href} onClick={() => setOpen(false)}>
                    <span>{String(i + 1).padStart(2, "0")}</span>
                    {label}
                    <Icon name="arrow" size={18}/>
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
