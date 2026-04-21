import React from 'react';
import githubIcon from '../img/github.svg';
import '../styles/headerAndFooter.css';
import '../styles/about.css';

export default function About() {
    return (
        <>
            <div className='header'>
                <h2>Über die Seite</h2>
            </div>
            <div className="about-page">
                <img className="about-background" src="background.jpg" alt="" aria-hidden="true" />
                <main className="about-shell">
                    <section className="about-hero">
                        <div className="about-hero-copy">
                            <p className="about-kicker">Über LiveSlope</p>
                            <h1>Skigebiete entdecken, vergleichen und direkt im Blick behalten.</h1>
                            <p className="about-intro">
                                LiveSlope verbindet eine interaktive Karte mit einer schlanken, schnellen Oberfläche.
                                So findest du passende Skigebiete, speicherst Favoriten und behältst deine nächste Tour
                                ohne Umwege im Blick.
                            </p>
                            <div className="about-actions">
                                <a href="/">Zur Karte</a>
                                <a href="/register">Account anlegen</a>
                            </div>
                        </div>

                        <aside className="about-highlight-card">
                            <p className="about-highlight-label">Kurz zusammengefasst</p>
                            <ul>
                                <li>Interaktive Karte mit Skigebieten und sichtbaren Bounds</li>
                                <li>Favoriten, Profilfunktionen und Login-Flows</li>
                                <li>React, Vite, Leaflet, React Hook Form, FastAPI und PostgreSQL</li>
                            </ul>
                        </aside>
                    </section>

                    <section className="about-grid" aria-label="Projektvorteile">
                        <article className="about-card">
                            <span className="about-card-index">01</span>
                            <h2>Orientierung auf einen Blick</h2>
                            <p>
                                Die Startseite setzt auf eine Karte als Zentrum der Nutzerführung. Skigebiete werden
                                dynamisch im sichtbaren Bereich angezeigt, damit du sofort relevante Treffer siehst.
                            </p>
                        </article>

                        <article className="about-card">
                            <span className="about-card-index">02</span>
                            <h2>Favoriten statt Suche von vorn</h2>
                            <p>
                                Du kannst interessante Gebiete sammeln und später direkt wieder aufrufen. Das spart Zeit
                                und macht LiveSlope nützlich für wiederkehrende Tourenplanung.
                            </p>
                        </article>

                        <article className="about-card">
                            <span className="about-card-index">03</span>
                            <h2>Klarer technischer Aufbau</h2>
                            <p>
                                Das Frontend ist modular aufgebaut und trennt Seiten, Komponenten, Styles und Validierung.
                                Dadurch bleibt die App erweiterbar, auch wenn später weitere Funktionalitäten dazukommen.
                            </p>
                        </article>
                    </section>

                    <section className="about-story">
                        <div>
                            <p className="about-section-label">Warum dieses Projekt existiert</p>
                            <h2>LiveSlope ist als kompakte Planungsoberfläche für Wintersport gedacht.</h2>
                        </div>
                        <p>
                            Statt viele einzelne Quellen zu öffnen, bündelt LiveSlope die wichtigsten Informationen in
                            einer App: Karte, Favoriten, Kontoverwaltung und ein ruhiges UI. Der aktuelle Stand nutzt
                            Daten von <a href="https://www.openstreetmap.org/">OpenStreetMap</a>.
                        </p>
                    </section>

                    <section className="about-tech" aria-label="Technologien">
                        <div>
                            <p className="about-section-label">Stack</p>
                            <h2>Für eine moderne, leicht wartbare Umsetzung.</h2>
                        </div>
                        <div className="about-tech-list">
                            <span>React 19</span>
                            <span>Vite</span>
                            <span>React Router</span>
                            <span>Leaflet</span>
                            <span>React Hook Form</span>
                            <span>Zod</span>
                            <span>FastAPI</span>
                            <span>PostgreSQL</span>
                        </div>
                    </section>

                    <section className="about-tech" aria-label="Technologien">
                        <div>
                            <p className="about-section-label">Links</p>
                            <h2>Für mehr Informationen</h2>
                        </div>
                        <a href='https://github.com/Justinlot/LiveSlope' className='about-link' target="_blank" rel="noopener noreferrer">
                            <img src={githubIcon} alt="GitHub" />
                        </a>
                    </section>
                </main>
            </div>
        </>
    );
}