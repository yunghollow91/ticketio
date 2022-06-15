# 1st Task Gedanken-Aufgabe

Problem:

Du hast vor dir 10 Maschinen die Münzen prägen. Die Münzen sehen alle gleich aus! Die Münzen wiegen 100 Gramm. 
Allerdings ist eine Maschine kaputt und die Münzen der Maschine wiegen 10 Gramm. Münzen stehen unendlich pro Maschine bereit und es gibt eine Digitalwaage mit der ich einmal wiegen darf, um heraus zu finden welche Maschine defekt ist. Welche Maschine ist defekt?

Lösung:

Sei X_i eine nummerierte Maschine wobei i Element von {1,...,10}

Sei f(X_i) = i * g_i eine Funktion die eine Anzahl von Münzen aus der Maschine i gibt mit dem dazugehörigen Gewicht der Münze.

=> Summe der f(X_i) von 1 bis n mit Gauss Formel und der Annahme dass alle Maschinen einwandfrei funktionieren ergibt 10(10+1) * 1/2 * 100g = 5500g

Sei X_y die defekte Maschine mit y Element von {1,...,10}

Dann gilt für y:

5500 - (100-10)*y = Summe aller gewogenen Münzen 

Nach dem wiegen nach y auflösen gibt die Zahl der defekten Maschine 


# 2nd Task

React Frontend with NestJS Backend as separate services.

React project created via create-react-app.
NestJS create via Nest CLI

NestJS runs locally on Port 3001
React runs locally on Port 3000

There are obviously lots of things that can be added or need to be refactored.
<li>
    Frontend is functional but doesn't look nice. Just used pre-existing Material-UI components to somehow display ist.
</li>
<li>
    Unit Tests for both Front and Backend
</li>
<li>
    Show events/tickets display more concisely
</li>
<li>
    Error handling for promise rejections
</li>
<li>
    Missing barcode type validation. regex needed :expressionless:	
</li>
