# Projektstruktur

## Services

## Komponenten und Routing

### Rezeptübersicht

`/recipes`

"Karten"-Liste mit ausgewählten Details verschiedener Rezepte. Der Vorschautext ist hierbei die Beschreibung, die nach 80 Zeichen abgeschnitten wird, am Ende wird "..." hinzugefügt.

Die Rezept-Details können durch Drücken auf das Bild oder den Titel geöffnet werden. Buttons bieten ebenfalls die Möglichkeit, die einzelnen Rezepte zu bearbeiten oder zu löschen.

### Rezept-Details

`/recipes/<recipe-id>`

Zeigt Details eines Rezepts, wie beispielsweise ein Foto, die Zubereitungs-Beschreibung und die zu verwendenden Zutaten.

Ein Klick auf den Button "Add all ingredients to shopping list" bewirkt, dass die in diesem Rezept verwendeten Zutaten der Einkaufsliste hinzugefügt werden. Dabei werden, sofern schon Mengen dieser Zutaten auf der Einkaufsliste vorhanden sind, die Mengen kumuliert.

### Neues Rezept erstellen oder existierendes bearbeiten

`/recipes/edit/<recipe-id>` oder `/recipes/edit/new`

### Zutatenliste

`/shopping/items`

Auflistung aller angelegter Zutaten. Zum Anpassen der Standard-Menge. EIn Button oberhalb der Tabelle ermöglicht das Anlegen neuer Zutaten.

Die verwendete Tabelle ist eine mehrfach benutzte Komponente, die durch Variablen-Injektion angepasst wird. So wird sie beispielsweise ebenfalls bei der Einkaufsliste und zur Auflistung der Zutaten eines Rezepts verwendet.

#### Zutat erstellen

Dialog, der sich mittels Drücken eines Buttons auf der Zutatenliste oder beim Hinzufügen einer Zutat zu einem Rezept öffnen lässt.

### Einkaufsliste

`/shopping/list`

Die Einkaufsliste wird ebenfalls durch die mehrfach verwendete Tabelle, wie bereits im Abschnitt "Zutat erstellen" beschrieben, dargestellt.
