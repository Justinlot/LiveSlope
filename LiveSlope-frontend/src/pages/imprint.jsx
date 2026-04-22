import React from 'react';
import '../styles/headerAndFooter.css';
import '../styles/privacy.css';

export default function Imprint() {
    return (
        <>
            <div className='header'>
                <h2>Impressum</h2>
            </div>
            <div className="privacy-page">
                <img className="privacy-background" src="/background.jpg" alt="" aria-hidden="true" />
                <main className="privacy-shell">
                    <article className="privacy-document">
                        <p className="privacy-meta">Stand: 21. April 2026</p>
                        <h1>Impressum</h1>

                        <section>
                            <h2>Angaben gemäß Paragraf 5 TMG</h2>
                            <p>
                                LiveSlope (Hobbyprojekt)
                                <br />
                                Kontakt: <a href="mailto:liveslope@atomicmail.io">liveslope@atomicmail.io</a>
                            </p>
                        </section>

                        <section>
                            <h2>Verantwortlich für den Inhalt</h2>
                            <p>
                                LiveSlope (Hobbyprojekt)
                                <br />
                                E-Mail: <a href="mailto:liveslope@atomicmail.io">liveslope@atomicmail.io</a>
                            </p>
                        </section>

                        <section>
                            <h2>Haftung für Inhalte</h2>
                            <p>
                                Die Inhalte dieser Website wurden mit größter Sorgfalt erstellt. Für die Richtigkeit,
                                Vollständigkeit und Aktualität der Inhalte wird jedoch keine Gewähr übernommen.
                            </p>
                        </section>

                        <section>
                            <h2>Haftung für Links</h2>
                            <p>
                                Diese Website enthält Links zu externen Websites Dritter. Auf deren Inhalte besteht
                                kein Einfluss. Deshalb kann für diese fremden Inhalte keine Gewähr übernommen werden.
                                Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber
                                der Seiten verantwortlich.
                            </p>
                        </section>

                        <section>
                            <h2>Urheberrecht</h2>
                            <p>
                                Die auf dieser Website erstellten Inhalte und Werke unterliegen dem Urheberrecht.
                                Inhalte Dritter werden als solche gekennzeichnet. Die Vervielfältigung, Bearbeitung,
                                Verbreitung und jede Art der Verwertung ausserhalb der Grenzen des Urheberrechts
                                bedürfen der schriftlichen Zustimmung des jeweiligen Autors oder Erstellers.
                            </p>
                        </section>

                        <section>
                            <h2>Hinweis zum Projektstatus</h2>
                            <p>
                                LiveSlope ist ein öffentlich erreichbares Hobbyprojekt. Die Angaben in diesem
                                Impressum entsprechen dem aktuellen Projektstand und werden bei Aenderungen angepasst.
                            </p>
                        </section>
                    </article>
                </main>
            </div>
        </>
    );
}