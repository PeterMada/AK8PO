# Datová mapa

## Predmet
- *Skratka* - string
- Názov - string
- Garant - string
- Počet týždňov - int
- Počet hodín prednášok - int
- Počet hodín seminárov - int
- Počet hodín cvičení - int
- Jazyk - enum
- Forma studia - enum
- Typ studia - enum
- Ročník - enum
- Semester - enum
- Spôsob zakončenia - enum
- Počet kreditov - int
- Veľkosť skupiny - int
- Ústav - enum


## Zamestnanec
- *Id* - int
- Meno - string
- Priezvisko - string
- Telefón pracovný - string
- Telefón súkromný - string
- Email pracovný - string
- Email súkromný - string
- Doktorand - bool 
- Percento úväzku - double
- Pracovné body CZ - int
- Pracovné body AJ – int
- Zoznam štítkov - List<Pracovný štítok>


## Študijná skupina
- *Skratka* - string
- Názov- string
- Forma studia - enum
- Typ studia - enum
- Jazyk - enum
- Ročník - enum
- Semester - enum
- Počet študentov v skupine - int


## Pracovný štítok
- *ID* - int
- Názov - string
- Zamestnanec - <Zamestnanec>
- Predmet - <Predmet>
- Typ - enum
- Počet študentov - int
- Počet hodín - int
- Počet týždňov - int
- Jazyk - enum
- Počet bodov za štítok - int
