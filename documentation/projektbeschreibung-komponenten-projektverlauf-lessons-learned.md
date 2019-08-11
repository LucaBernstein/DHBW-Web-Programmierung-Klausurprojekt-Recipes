# Matrikelnummer

6815678

# Projektstruktur

* Rezeptübersicht

  * Rezept-Titel
  * Rezept-Autor mit Bild
  * Rezept-Bild
  * Rezept-Kurzbeschreibung
  * Editieren-Button
  * Löschen-Button
  * Rezept erstellen-Button

* Rezept-Detailansicht

  * Titel, Autor-Informationen
  * Zutatenliste
  * Bild
  * Zubereitungs-Schritte
  * Button zum Hinzufügen der Zutaten zur Einkaufsliste
  * Button zum Bearbeiten

* Rezept bearbeiten

  * Titel
  * Bild-URL
  * Zutatenliste
  * Button zum Hinzufügen von Zutaten zur Liste
  * Rezept-Zubereitungsschritte

* Einkaufsliste

  * Name
  * Menge
  * Einheit
  * Bearbeiten-Button
  * Entfernen-Button
  * Artikel hinzufügen-Button

* Zutaten-Liste

  * Name
  * Standard-Menge
  * Einheit
  * Bearbeiten-Button
  * Entfernen-Button
  * Zutat hinzufügen-Button

## Services

Die Daten für die App werden lokal in einer Datenbank im Browser gehalten. Die dafür verwendeten Services zur Verwaltung sind:

* Recipe-Service
* Shopping-Items-Service
* Shopping-List-Service

## Routing

* `/recipes` - Übersicht über alle Rezepte. Die Rezept-Details können durch Drücken auf das Bild oder den Titel geöffnet werden. Buttons bieten ebenfalls die Möglichkeit, die einzelnen Rezepte zu bearbeiten oder zu löschen.
* `/recipes/<recipe-id>` - Detailansicht eines Rezepts
* `/recipes/edit/new` - Neues Rezept erstellen
* `/recipes/edit/<recipe-id>` - Existierendes Rezept bearbeiten
* `/shopping/items` - Zutatenliste. Auflistung aller angelegter Zutaten. Zum Anpassen der Standard-Menge. EIn Button oberhalb der Tabelle ermöglicht das Anlegen neuer Zutaten. Die verwendete Tabelle ist eine mehrfach benutzte Komponente, die durch Variablen-Injektion angepasst wird. So wird sie beispielsweise ebenfalls bei der Einkaufsliste und zur Auflistung der Zutaten eines Rezepts verwendet.
* `/shopping/list` - Einkaufsliste
* `**` - 404 NOT FOUND Seite

### Zusätzliche Komponenten

* Zutat erstellen/bearbeiten-Dialog
* Navbar
* Grouped-Table: Eine Tabelle, die mit Gruppierungselementen angereichert wird und wiederverwendbar ist.

## Umsetzung, Ablauf, Tools, Lessons Learned

Zur Organisation des Projektes wurde zunächst ein Trello-Kanban-Board erstellt. In dieses wurden die zu erledigenden Aufgaben erstellt und eingeteilt. Neu auftretende Probleme und Features wurden zunächst ins Backlog sortiert und sofern es passte in den Entwicklungszyklus mit aufgenommen oder wieder verworfen.

Git wurde als Versionskontrolle eingesetzt, um den Fortschritt nachvollziehen und bei Bedarf zu älteren Speicherständen zurückkehren zu können.

Es wurde schon früh darauf geachtet funktionierende Komponenten zu erstellen. Erst mit der Zeit wurde das Design entsprechend angepasst. Gleichzeitig wurden neue Komponenten erst eingeführt, wenn die bestehenden einen guten EIndruck machten.

Besonders beim Designen der Komponenten, insbesondere mit Blick auf ein einigermaßen "responsive" Layout kamen immer wieder Probleme auf, dass Grids nicht richtig dargestellt wurden. Durch ein wenig Recherche und CSS-Tweaking ließ sich aber auch das im Laufe des Projekts in den Griff bekommen.

Der angefertigte Papierprototyp war hilfreich, einen groben Überblick darüber zu behalten, was schon gemacht war und was noch gemacht werden musste. Aufgrund des sich entwickelnden Projektes habe ich die erste Version des Papierprototypen überarbeitet, damit er mir noch nützlich war und nicht vollkommen von der entstehenden App abwich.

Was sich in diesem Projekt als richtig und wichtig erwiesen hat, war früh und oft zu committen. Dadurch wurde mittels der angefertigten Commits eine schöne und übersichtliche Änderungshistorie angefertigt, die es im späteren Verlauf einfach machte, anhand der Commit-Messages nachzuvollziehen, was geändert worden war. Dadurch entfiel auch die Notwendigkeit von zu viel auskommentiertem Code, da das Git-Repository als Dokumentation diente.
