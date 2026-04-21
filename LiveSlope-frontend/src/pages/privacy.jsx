import React from 'react';
import '../styles/headerAndFooter.css';
import '../styles/privacy.css';

export default function Privacy() {
    return (
        <>
            <div className='header'>
                <h2>Datenschutzerklärung</h2>
            </div>
            <div className="privacy-page">
                <img className="privacy-background" src="/background.jpg" alt="" aria-hidden="true" />
                <main className="privacy-shell">
                    <article className="privacy-document">
                        <p className="privacy-meta">Stand: 21. April 2026</p>
                        <h1>Datenschutzerklärung</h1>

                        <p>
                            Mit dieser Datenschutzerklärung informieren wir Sie darüber, welche personenbezogenen
                            Daten bei der Nutzung von LiveSlope verarbeitet werden. Die Anwendung ist als Projekt
                            aufgebaut und verarbeitet nur die Daten, die für Anmeldung, Kontofunktionen, Favoriten
                            und die Kartenanzeige erforderlich sind.
                        </p>

                        <section>
                            <h2>1. Verantwortlicher</h2>
                            <p>
                                Verantwortlicher für die Datenverarbeitung ist LiveSlope (Hobbyprojekt). <br />
                                Kontakt: liveslope@atomicmail.io
                            </p>
                        </section>

                        <section>
                            <h2>2. Welche Daten wir verarbeiten</h2>
                            <p>
                                Bei der Registrierung und Anmeldung verarbeiten wir den Benutzernamen und das Passwort.
                                Das Passwort wird nicht im Klartext gespeichert, sondern serverseitig gehasht. Darüber
                                hinaus verarbeiten wir technische Sitzungsdaten, damit Sie nach dem Login eingeloggt
                                bleiben und geschützte Funktionen nutzen können.
                            </p>
                            <p>
                                Wenn Sie Favoriten speichern, werden diese Informationen zusammen mit Ihrem Benutzerkonto
                                in der Datenbank abgelegt. Außerdem verarbeitet das Backend die Skigebietsdaten, die auf
                                der Karte und in den Favoriten angezeigt werden.
                            </p>
                        </section>

                        <section>
                            <h2>3. Zwecke der Verarbeitung</h2>
                            <p>
                                Die Verarbeitung erfolgt, um Ihnen die Funktionen von LiveSlope bereitzustellen. Dazu
                                gehören die Registrierung und Anmeldung, die Verwaltung Ihres Kontos, das Speichern und
                                Abrufen von Favoriten sowie die Darstellung von Skigebieten auf der Karte.
                            </p>
                        </section>

                        <section>
                            <h2>4. Backend und Datenbank</h2>
                            <p>
                                LiveSlope verwendet ein FastAPI-Backend mit einer PostgreSQL-Datenbank. In der Tabelle
                                <strong> user</strong> werden Benutzername und Passwort-Hash gespeichert. In der Tabelle
                                <strong> slope</strong> werden die Skigebiete mit Name, OSM-ID, Schwierigkeit und
                                Koordinaten gespeichert. In der Tabelle <strong>favorite</strong> wird die Zuordnung
                                zwischen Nutzer und favorisiertem Skigebiet gespeichert.
                            </p>
                            <p>
                                Das Backend stellt Endpunkte für Registrierung, Login, Logout, Passwortänderung,
                                Account-Löschung, Favoritenverwaltung und Skigebietsabfragen bereit. Nach einer
                                erfolgreichen Anmeldung wird eine Session angelegt. Diese Session wird für den Zugriff
                                auf geschützte Funktionen verwendet und hat eine Laufzeit von einem Tag.
                            </p>
                        </section>

                        <section>
                            <h2>5. Cookies und Sessions</h2>
                            <p>
                                Die Anwendung verwendet eine serverseitige Session. Dafür wird ein Session-Cookie im
                                Browser gesetzt. Das Cookie ist technisch erforderlich, damit der Login-Status erhalten
                                bleibt. Die Session wird beim Logout oder bei der Löschung des Kontos gelöscht.
                            </p>
                        </section>

                        <section>
                            <h2>6. Kartenanzeige und Standortdaten</h2>
                            <p>
                                Die Karte lädt Kacheln von OpenStreetMap. Dabei kann Ihre IP-Adresse an den Kartendienst
                                übertragen werden, weil die Karteninhalte von dort geladen werden. Wenn Sie in Ihrem
                                Browser die Standortfreigabe erlauben, kann die Karte Ihren Standort verwenden, um die
                                Ansicht zu zentrieren. Eine dauerhafte Speicherung des Standorts ist nicht vorgesehen.
                            </p>
                        </section>

                        <section>
                            <h2>7. Weitergabe von Daten</h2>
                            <p>
                                Eine Weitergabe personenbezogener Daten an Dritte findet grundsätzlich nur statt, soweit
                                dies zur Bereitstellung der Anwendung erforderlich ist, etwa beim Einsatz von OpenStreetMap
                                für die Kartenanzeige oder wenn technische Dienstleister die Infrastruktur bereitstellen.
                            </p>
                        </section>

                        <section>
                            <h2>8. Speicherdauer</h2>
                            <p>
                                Session-Daten werden nach spätestens einem Tag ungültig. Benutzerkonten und Favoriten
                                bleiben gespeichert, bis Sie Ihr Konto löschen oder die Daten im Rahmen eines späteren
                                Betriebsprozesses entfernt werden. Beim Löschen des Kontos werden die zugehörigen Daten
                                im Backend entfernt und die Session beendet.
                            </p>
                        </section>

                        <section>
                            <h2>9. Ihre Rechte</h2>
                            <p>
                                Sie haben im Rahmen der anwendbaren Datenschutzgesetze insbesondere das Recht auf
                                Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung und Widerspruch. Wenn Sie
                                ein Konto anlegen, können Sie Ihr Passwort ändern oder Ihr Konto über die Anwendung löschen.
                            </p>
                        </section>

                        <section>
                            <h2>10. Hinweis zum Projektstatus</h2>
                            <p>
                                LiveSlope befindet sich in einem Projektkontext. Diese Datenschutzerklärung beschreibt den
                                aktuellen technischen Stand. Für einen produktiven Einsatz sollten die Angaben zu
                                Verantwortlichem, Kontakt, Rechtsgrundlagen und gegebenenfalls Auftragsverarbeitung noch
                                vollständig ergänzt und juristisch geprüft werden.
                            </p>
                        </section>
                    </article>
                </main>
            </div>
        </>
    );
}