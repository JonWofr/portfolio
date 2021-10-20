import { ProjectType } from '../enums/project-type.enum';
import { Project } from '../models/project.model';

export const projects: Project[] = [
  {
    id: 'yumto',
    title: 'Yumto',
    type: ProjectType.MOBILE,
    thumbnailImageUrl: '/assets/images/projects/yumto/yumto-thumbnail.png',
    teaser:
      'Irure mollit sit pariatur ad duis adipisicing non consequat irure.',
    shortDescription:
      'Non occaecat est aliquip adipisicing dolor enim amet occaecat minim duis id. Labore ut ullamco ipsum esse. Pariatur dolor eiusmod ipsum laborum voluptate sint veniam qui nulla eiusmod fugiat labore.',
    problem:
      'Lange Wartezeiten bis die Bedienung kommt und die Bestellung aufnimmt oder die Rechnung bringt sind nichts Ungewöhnliches.',
    solution:
      'Yumto schafft Abhilfe, indem es die Bestellung und die Bezahlung digitalisiert. Dabei werden jedoch nicht nur die auf der Karte stehenden Gerichte digital in der App angezeigt, sondern es wird abhängig von Präferenzen, Allergien, Diäten und Empfehlungen eine personalisierte Auswahl zusammengestellt, wodurch sich zusätzlich nervige Rückfragen und längere Zeiten vermeiden lassen.',
    slideshowImagesUrls: [
      '/assets/images/projects/yumto/yumto-1.png',
      '/assets/images/projects/yumto/yumto-2.png',
      '/assets/images/projects/yumto/yumto-3.png',
      '/assets/images/projects/yumto/yumto-3.png',
      '/assets/images/projects/yumto/yumto-3.png',
    ],
    technologyNames: ['HTML', 'CSS', 'JavaScript', 'Sass', 'Angular'],
    execution:
      'Während meines Praktikums bei der adrodev GmbH fing Andreas, ein angehender Masterand, bei dem Unternehmen an, welcher plante seine Masterarbeit in diesem Gebiet zu schreiben. Er fing an Marktanalysen zu machen und sich ein Konzept zu überlegen. Ich kam nach ein paar Monaten dazu, als er mich und einen weiteren Kollegen, Jamshed, fragte, ob wir mit ihm an einem Hackathon teilnehmen wollten, auf dem sich alles um die Gastronomie und digitale Lösungen hierfür drehte. Wir sagten zu und fuhren für ein Wochenende nach Salzburg. Auf dem Hackathon gab es mehrere Themengebiete, zu denen innerhalb von 24h digitale Lösungen entwickelt werden sollten. Unter diesen war auch das Thema wie man den Restaurantbesuch aus Sicht des Kunden digitalisieren könnte. Wir entschieden uns für das Thema und einigten uns darauf Andreas Idee weiter zu evaluieren und auszuarbeiten. Wir sprachen mit Experten aus der Branche und konnten immer mehr deren Probleme nachvollziehen. Bis zu diesem Zeitpunkt sind uns bereits die Ideen gekommen, dass der Gast über ein NFC Terminal am Tisch Informationen bzgl. der Tischnummer und des Restaurantnamens bekommen könnte und sich mit entsprechender App so die Karte herunterladen könnte, dass mit dieser digitalen App das Essen und Trinken bestellt werden könnte und dass über diese App ebenso bezahlt werden könnte. Nun betrachteten wir die Idee aus Sicht des Gastronomen und versuchten Vorteile für diesen herauszufinden. Wir dachten uns, dass die Nutzerdaten für den Gastronom auch sehr relevant sein können. Der Gast könnte ein Profil haben, welches Daten über das Essverhalten speichern könnte. So könnte der Gastronom feststellen, was seine Gäste auch in anderen Restaurants am liebsten essen und könnte durch entsprechende Gerichte profitieren. Ein weiterer interessanter Punkt, der uns einfiel, war die Personalisierung. Jeder von uns kannte die Situation, dass durch Allergien und Unverträglichkeiten, Diäten etc. manches von der Karte eins Restaurants nicht gegessen oder getrunken werden konnte. Durch eine App, die die Karte entsprechend dieser Präferenzen filtern würde und die Empfehlung auf Basis von gesammelten Nutzerdaten aussprechen würde, würden die Nutzer stark profitieren.\n\nNachdem wir unsere Idee nun ausreichend ausgearbeitet haben, fingen wir an mit der Erstellung von Prototypen. Über die App Marvel scannte ich gezeichnete Screens eines Paper-Prototyp. In der App liesen sich dann Bereiche definieren, die als Link fungierten und dann zu anderen Screens führten. Ich testete den Prototyp und nahm hier und da Verbesserungen bzgl. der Navigation vor.\n\nIm weiteren Schritt erstellten Jamshed und ich den high-fidelity Prototyp mit Hilfe von Adobe Xd. Bis spät in die Nacht erstellten wir Screens. Währenddessen bereitete sich Andy auf den Pitch der Idee vor. Am nächsten Morgen vollendeten wir den Prototyp und zeichneten einen Durchlauf durch die App als Video auf. Andy stellte seinen Pitch fertig und wir finalisierten bis zum Schluss unsere Ergebnisse.\n\nWir standen zusammen auf der Bühne vor der Jury, bestehend aus Prominenten und erfolgreichen Personen aus der Gastronomie-Branche. Andreas übernahm die Präsentation, Jamshed und ich waren Schauspieler, die Gäste eines Restaurants darstellten, die unentschlossen in die Karte starrten. Yumto hätte hierbei mit seinen nutzerbasierten Empfehlungen Abhilfe schaffen können, worauf Andy in seinem Pitch unter anderem einging. Leider reichte es zum Schluss nicht für einen der ersten drei Plätze, jedoch hat jeder von uns viel dazu gelernt und neue Erfahrungen und Kontakte geknüpft, die sich vor allem für Andy in den folgenden Monaten noch als wichtig erwiesen haben.',
  },
  {
    id: 'clubber',
    title: 'Clubber',
    type: ProjectType.RESPONSIVE,
    thumbnailImageUrl: '/assets/images/projects/clubber/clubber-thumbnail.png',
    teaser:
      'Irure exercitation qui ipsum nisi voluptate minim magna voluptate et et.',
    shortDescription:
      'Adipisicing pariatur aute voluptate sunt do dolor magna occaecat. Laboris id consectetur dolore cillum sint elit mollit elit ea labore. Irure non reprehenderit et culpa incididunt fugiat culpa irure ex adipisicing Lorem duis.',
    problem:
      'Ewigkeiten durch Facebook-Veranstaltungen und Websites lokaler Veranstalter zu klicken kennt Jeder.',
    solution:
      'Clubber macht es möglich schnell die für einen passende Party rauszusuchen und schafft so unvergessliche Nächte.',
    slideshowImagesUrls: [
      '/assets/images/projects/clubber/clubber-1.png',
      '/assets/images/projects/clubber/clubber-2.png',
      '/assets/images/projects/clubber/clubber-3.png',
    ],
    technologyNames: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
    execution:
      'Alles fing an mit der Entwicklung einer Clubber Web-App. Innerhalb der Semesterferien nach dem zweiten Semester fingen Nico und ich mit der Entwicklung an. Über Wochen hinweg bauten wir eine statische Web-Applikation auf. Dabei kümmerte ich mich um die Umsetzung der Veranstaltungs-Seite und er um die Startseite, sowie die Seite mit der Übersicht der Clubs. Wir hatten zu diesem Zeitpunkt erst ein fundiertes Grundwissen bzgl. der Web-Entwicklung, weswegen wir die Standard-Technologien HTML, CSS und JS benutzten, um die Seite zu erstellen und eine SQL Datenbank einbanden für das Datenmanagement. Zuerst war mir nicht ganz klar, wie nun die Veranstaltung-Seite dynamisch den Inhalt aufbauen könnte, jedoch konnte mir dahingehend durch Tipps von Bekannten weitergeholfen werden. Mir wurde nahegelegt mich mal mit PHP auseinanderzusetzten, weswegen ich dies dann auch tat. Über PHP war es möglich Code auf Serverseite auszuführen. Damit war es möglich die Datenbankabfragen beim Aufrufen der Seite zu tätigen und eine dynamische HTML-Seite zurückzuschicken. Nachdem dies soweit funktionierte, implementierte ich noch für die Übersichtlichkeit Filtermöglichkeiten. Weitere Standard-Seiten, wie Impressum, Datenschutz-Aufklärung und Kontaktformular entstanden und wir veröffentlichten die Seite. Im Anschluss waren vor allem noch zwei wichtige Punkte offen. Wie kann die Seite monetarisiert werden und wie kann die Seite Reichweite bekommen? Bei der Monetarisierung entschieden wir uns für Google-Ads und banden Werbebanner ein. Bei der Vermarktung entschieden wir uns für Facebook-Werbung und starteten einen ersten Versuch mit einem Halloween-Banner auf unsere Seite aufmerksam zu machen. In den darauffolgenden Monaten machten wir noch Anpassungen und Optimierungen, wechselten von Google Ads zu Amazon Affiliate und starteten eine zweite Kampagne mit einem eigens dafür entwickelten Werbe-Video. Aus der Analyse der Ergebnisse des Werbe-Videos schlossen wir, dass fast alle Interessenten auf ihrem Smartphone die Seite besuchten.\n\nIm Rahmen unseres Studiums sollten wir dann im vierten Semester eine Applikation für iOS und Android entwickeln. Wir entschieden uns dafür Clubber nativ auf iOS und Android verfügbar zu machen und holten uns Magali ins Boot.\n\nDie Android App sollte jedoch einiges besser machen, als die native Website. Wir entschieden uns dazu mit dem Server über JSON zu kommunizieren und die Inhalte Client-seitig dynamisch zu rendern, anstatt die Inhalte Server-seitig dynamisch zusammenzustellen und in Form einer HTML-Seite zurückzugeben. Dafür bauten wir auf der Serverseite eine API, die JSON zurückgibt. Damit die App auch funktionieren kann, wenn temporär keine Internetverbindung hergestellt werden kann, entschieden wir uns dafür die Inhalte, die vom Server abgefragt werden in einer SQLite Datenbank zu speichern. Jedes Mal, wenn die App gestartet wird, oder der User nach unten swipet, werden die Daten der Datenbank des Servers mit denen der Datenbank des Clients abgeglichen. Zusätzlich änderten wir die Logik hinter der Clubübersicht. Diese war zuvor statisch. Nun sollte diese ebenso statisch sein. Das Erstellen von Prototypen sowie die Umsetzung in Form von xml übernahm Magali. Nico und ich kümmerten uns überwiegend um die Bussinesslogik.\n\nDie iOS App wurde gleich aufgebaut, wie die Android App, jedoch mit den technischen Pendants. So wurde CoreData anstelle von SQLite verwendet und DispatchQueue anstatt IntentService etc.',
  },
  {
    id: 'agile-toolbox',
    title: 'Agile Toolbox',
    type: ProjectType.DESKTOP,
    thumbnailImageUrl:
      '/assets/images/projects/agile-toolbox/agile-toolbox-thumbnail.png',
    teaser: 'Exercitation aliqua tempor voluptate occaecat.',
    shortDescription:
      'Esse enim eu veniam adipisicing non do. Mollit ex veniam duis ea nulla. Cillum et non do qui veniam aute laborum ipsum nulla deserunt dolor enim veniam.',
    problem:
      'Agile Produktentwicklung ist in jedermanns Munde, aber was genau ist das und wie lässt sich so etwas umsetzen? Diese oder ähnliche Fragen haben auch Sie sich bestimmt schon einmal gestellt?',
    solution:
      'Durch Agile Toolbox werden diese Fragen geklärt. Durch eine klare Beschreibung und Aufteilung der einzelnen Methoden ist zu jedem Zeitpunkt klar was nun für Methoden durchgeführt werden können und wie diese durchgeführt werden.',
    slideshowImagesUrls: [
      '/assets/images/projects/agile-toolbox/agile-toolbox-1.png',
      '/assets/images/projects/agile-toolbox/agile-toolbox-2.png',
      '/assets/images/projects/agile-toolbox/agile-toolbox-3.png',
    ],
    technologyNames: ['HTML', 'CSS', 'JavaScript', 'Sass', 'React'],
    execution:
      'Agile Toolbox war ein Kundenprojekt, welches ich im Rahmen meines Praktikums während des fünften Semesters umgesetzt habe. In enger Zusammenarbeit mit dem Kunden wurde über Wochen hinweg von einem ehemaligen Mitarbeiter des Unternehmens ein high-fidelity Prototyp erstellt, mithilfe dessen die Entwicklung starten sollte. Der Inhalt wurde vom Kunden selbst zusammengestellt und bereitgestellt. Hierbei benutzte dieser eine Airtable. Airtable ist eine Website ähnlich wie Google Table, auf der sich Daten in Form einer Tabelle festhalten lassen. Der Vorteil an Airtable jedoch ist, dass diese Daten über eine einfache Schnittstelle direkt angefragt werden können uns somit eine Backend redundant war. Die Umsetzung des high-fidelity Prototyp erfolgte dann mit der Library React und Scss als Precompiler.\n\nZuerst widmete ich mich der Startseite, auf der die einzelnen Methoden übersichtlich in tabellarischer Form dargestellt werden sollten. Von hier aus sollte es möglich sein einzelne Methoden anzuklicken, wodurch sich ein Modal mit einer entsprechenden Beschreibung, sowie zugeordneten Tags öffnen sollte. Innerhalb des Modals sollte man dann die ausgewählte Methode zur eigenen Toolbox hinzufügen können. Die eigene Toolbox stellt hierbei die zentrale Sammlung der für den eigenen Zweck relevanten Methoden dar. Aufgrund der Tatsache, dass die Daten von einer externen API kamen, kamen diese in einem sehr flachen DTO, wodurch viele Parsing-Funktionen von Nöten waren, um die Daten in geeignete Form zu bringen. Nachdem ich alle nötigen Komponenten für die tabellarische Darstellung gebaut und gestylt habe, widmete ich mich der persönlichen Toolbox.\n\nAuf dieser Seite konnte ich vieles übernehmen, musste jedoch darüber nachdenken, wie ich die Auswahl des Nutzers speichern wollen würde. Da zu diesem Zeitpunkt noch keine Rede von Usermanagement und einem Login-System war, speicherte ich die Daten einfach lokal im Broser des Nutzers. Zuletzt sollten noch Such- und Filterfunktionen implementiert werden, durch die sich Methoden gezielt finden lassen sollten. Hierfür musste ich wiederum viele Parsing-Funktionen im Frontend ausführen, die eigentlich eher zum Backend gehören würden. Die Seite war zum Zeitpunkt, als die erste programmierte Version dem Kunden zugeschickt wurde und ich das Projekt verlassen habe, da sich mein Praktikum dem Ende zuneigte, noch größtenteils nicht mobile tauglich. Die Seite sollte aber auf jeden Fall noch responsive gemacht werden.',
  },
];
