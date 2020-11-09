import React from "react";
import { Redirect, Route } from "react-router-dom";

class Impressum extends React.Component {

  render() {
    return (
      <div>
        <div class="py-16 xl:py-36 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
          <div class="max-w-max-content lg:max-w-7xl mx-auto">
            <div class="relative z-10 mb-8 md:mb-2 md:px-6">
              <div class="text-base max-w-prose lg:max-w-none">
                <p class="leading-6 text-orange-500 font-semibold tracking-wide uppercase">Immoperium</p>
                <h1 class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">Impressum</h1>
              </div>
            </div>
            <div class="relative">
              <svg class="hidden md:block absolute top-0 right-0 -mt-20 -mr-20" width="404" height="384" fill="none" viewBox="0 0 404 384">
                <defs>
                  <pattern id="95e8f2de-6d30-4b7e-8159-f791729db21b" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                    <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
                  </pattern>
                </defs>
                <rect width="404" height="384" fill="url(#95e8f2de-6d30-4b7e-8159-f791729db21b)" />
              </svg>
              <svg class="hidden md:block absolute bottom-0 left-0 -mb-20 -ml-20" width="404" height="384" fill="none" viewBox="0 0 404 384">
                <defs>
                  <pattern id="7a00fe67-0343-4a3c-8e81-c145097a3ce0" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                    <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
                  </pattern>
                </defs>
                <rect width="404" height="384" fill="url(#7a00fe67-0343-4a3c-8e81-c145097a3ce0)" />
              </svg>
              <div class="relative md:bg-white md:p-6">
                <div class="lg:grid lg:grid-cols-2 lg:gap-6 mb-8">
                  <div class="prose prose-lg text-gray-500 mb-6 lg:max-w-none lg:mb-0">
                    <p>Diensteanbieter: Immoperium</p>
                    <br></br>
                    <p> Kontaktmöglichkeiten: {" "}
                    <a href="mailto:gregor.jaap@stud.leuphana.de">gregor.jaap@stud.leuphana.de
                    </a>
                    </p>
                    <br></br>
                    <p>Haftungs- und Urheberrechtshinweise: Die Inhalte dieses Onlineangebotes
                      wurden sorgfältig und nach unserem aktuellen Kenntnisstand erstellt, dienen
                      jedoch nur der Information und entfalten keine rechtlich bindende Wirkung,
                      sofern es sich nicht um gesetzlich verpflichtende Informationen (z.B. das
                      Impressum, die Datenschutzerklärung, AGB oder verpflichtende Belehrungen von
                      Verbrauchern) handelt. Wir behalten uns vor, die Inhalte vollständig oder
                      teilweise zu ändern oder zu löschen, soweit vertragliche Verpflichtungen
                      unberührt bleiben. Alle Angebote sind freibleibend und unverbindlich.{" "}
                    </p>
                    <br></br>
                    <p>
                      Links auf fremde Webseiten: Inhalte fremder Webseiten, auf
                      die wir direkt oder indirekt verweisen, liegen außerhalb unseres
                      Verantwortungsbereiches und machen wir uns nicht zu Eigen. Für alle Inhalte
                      und insbesondere für Schäden, die aus der Nutzung der in den verlinkten
                      Webseiten aufrufbaren Informationen entstehen, haftet allein der Anbieter
                      der verlinkten Webseiten.
                    </p>
                  </div>
                  <div class="prose prose-lg text-gray-500">
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <p>
                      Urheberrechte und Markenrechte: Alle auf dieser Website
                      dargestellten Inhalte, wie Texte, Fotografien, Grafiken, Marken und
                      Warenzeichen sind durch die jeweiligen Schutzrechte (Urheberrechte,
                      Markenrechte) geschützt. Die Verwendung, Vervielfältigung usw. unterliegen
                      unseren Rechten oder den Rechten der jeweiligen Urheber bzw.
                      Rechteverwalter.
                    </p>
                    <br></br>
                    <p>
                      Hinweise auf Rechtsverstöße: Sollten Sie innerhalb unseres
                      Internetauftritts Rechtsverstöße bemerken, bitten wir Sie uns auf diese
                      hinzuweisen. Wir werden rechtswidrige Inhalte und Links nach Kenntnisnahme
                      unverzüglich entfernen.
                    </p>
                    <br></br>
                    <p className="seal">
                      <a
                        href="https://datenschutz-generator.de/?l=de"
                        title="Rechtstext von Dr. Schwenke - für weitere Informationen bitte anklicken."
                        target="_blank"
                        rel="noopener noreferrer nofollow"
                      >
                        Erstellt mit kostenlosem Datenschutz-Generator.de von Dr. Thomas Schwenke
                      </a>
                    </p>
                  </div>
                </div>
                <div class="inline-flex rounded-md shadow">
                  <a href="mailto:gregor.jaap@stud.leuphana.de" class="flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-orange-500 hover:bg-orange-400 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo transition duration-150 ease-in-out">
                    Kontakt aufnehmen
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Impressum;