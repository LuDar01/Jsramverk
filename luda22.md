
# Redovisning - Specification

### Vilka lärdomar gjorde du dig kring ditt sätt att ta dig an kod som du inte själv skrivit?
Det tog ett litet tag att bekanta sig med filstrukturen och hur Emil valt att separera logiken mellan `app.mjs` och `docs.mjs`. Men när jag väl förstod hur flödet mellan routern och databasmodulen fungerade var det faktiskt lättare än förväntat att bygga vidare på koden. Det är en bra påminnelse om att man inte behöver förstå precis varje rad direkt, utan att det räcker med att förstå "ingångarna" och "utgångarna" i koden för att kunna göra ändringar.

### Var det enkelt att ta till dig information om de olika frontend-ramverken? Vilken är din uppfattning om ramverkens dokumentation?
Ja, informationen i kursartiklarna var tydlig och gav en bra överblick över skillnaderna mellan ramverken. Eftersom både jag och min kollega har använt React tidigare kändes valet väldigt naturligt. Dokumentationen för de flesta moderna ramverk, speciellt React och Vue, är i min uppfattning väldigt bra och pedagogisk med tydliga exempel som gör det enkelt att komma igång.

### Vilka fördelar och nackdelar ser du med arbetssättet GitHub Flow?
Jag gillar GitHub Flow skarpt. Den största fördelen är att man minimerar risken för att "breaking changes" hamnar i huvudbranchen, eftersom allt granskas i en Pull Request först. Det ger en trygghet i utvecklingen. En nackdel kan vara att det blir lite extra administration med många små brancher om man jobbar ensam på ett litet projekt, men i ett team är det nästan ett måste för att hålla ordning.