import { Recipe } from "../models/Recipe";
import bolognese from "../assets/bolognese.jpg";
import carbonara from "../assets/carbonara.jpg";
import norma from "../assets/AllaNorma.jpg";
import pesto from "../assets/AlPesto.jpeg";
import vongole from "../assets/AlleVongole.jpg";
import alfredo from "../assets/Alfredo.jpg";
import tryffel from "../assets/TrufflePasta.jpg";
import homemade from "../assets/HemgjordPasta.jpg";

export const recipes: Recipe[] = [
  new Recipe(
    1,
    bolognese,
    "Spaghetti Bolognese",
    "Spaghetti med köttfärsås på det italienska viset. Koka länge för mycket smak, förbered gärna dagen innan.",
    `1/2 frp Spaghetti
400 g nötfärs
4 msk Extra jungfruolivolja Classico
1 gul lök finhackad
2 vitlöksklyftor finhackade
1 liten morot
1 liten bit rotselleri finhackad
2 msk Tomatpuré
1 dl Matlagningsvin Vitt
2 dl vatten
1 frp konserverad körsbärstomater
1 köttbuljongtärning
2 lagerblad
1 tsk torkad timjan
1 tsk torkad oregano
salt
svartpeppar
strösocker`,
    `Stek nötfärs på hög värme i olivolja i en gryta tills färsen är genomstekt.
Tillsätt lök, vitlök, morot och selleri.
Stek ytterligare 1 minut.
Lägg i tomatpuré, vitt vin och tomater.
Låt koka upp och lägg i buljongtärning, vatten och örter och låt puttra minst 45 minuter–1 timme under lock.
Rör regelbundet och späd eventuellt med lite vatten.
Smaka av med salt, strösocker och svartpeppar.
Koka pastan enligt anvisning på paketet.
Blanda såsen med den nykokta pastan.
Strö över rikligt med parmesanost.`
  ),
  new Recipe(
    2,
    carbonara,
    "Spaghetti Carbonara",
    "Carbonara är en klassisk och älskad italiensk pastarätt! Härligt krämig spaghetti som serveras med knaperstekt guanciale och rikligt med pecorino.",
    `1 frp Guanciale tärnad
2 vitlöksklyftor finhackade
1/2 frp Spaghetti
4 äggulor
85 g Pecorino Romano grovriven
Extra jungfruolivolja Classico
salt
nymalen svartpeppar`,
    `Knaperstek guanciale i en stekpanna. Tillsätt vitlök mot slutet (kan hoppas över för traditionell variant).
Koka pastan enligt instruktion på paketet, ta undan 1 1/2 dl kokvatten efter halva koktiden.
Vispa ihop äggulor och ost i en skål, blanda med 2–3 msk avsvalnat pastavatten.
Sänk till mycket svag värme på plattan, vänd ner pastan i stekpannan och rör ner ägg- och ostblandningen.
Späd med pastavatten för krämig konsistens.
Smaka av med salt och svartpeppar.`
  ),
  new Recipe(
    3,
    norma,
    "Pasta alla Norma",
    "Ta smaken av Sicilien hem till köket med Pasta alla Norma – härlig kombination av tomater, aubergine och ricotta. Ett klassiskt italiensk recept som är enkelt, men smakfullt och passar perfekt till middag",
    `1 frp Strozzapreti pasta
1 aubergine, tärnad
1 tsk salt
2 vitlöksklyftor, hackade
1 gul lök, hackad
1/2 dl Extra jungfruolivolja Classico, till stekning
1 frp krossade tomater
1 dl vatten
salt
nymalen svartpeppar Topping
1 frp Ricotta
1 frp Parmigiano Reggiano 14 mån`,
    `Tärna auberginen och lägg i bunke. Strö över saltet och låt dra i 20 minuter. Koka pastan enligt anvisningarna på förpackningen. Hacka lök och vitlök.Fräs vitlök och lök försiktigt i olivolja, tillsätt tomater och vatten och låt sjuda under lock i 10–15 minuter.Pressa ur resterande vätska ur auberginen och stek i  egen panna med olivolja tills de får fin färg. Stek auberginetärningarna i en egen panna med olivolja tills de får fin färg. Blanda ner dem i tomatsåsen och smaka av ! Krydda med svartpeppar och salt. Tänk på att auberginen är saltad, så var noga med att smaka av innan du saltar. Blanda pastan med såsen.Rör om ricottan med en gaffel i förpackningen så att den blir lite fluffig. Ställ åt sidan. Lägg upp pastarätten på ett serveringsfat och riv parmesan över den samt klicka ut ricotta över rätten strax innan servering (eller blanda ner den i pastan) Servera!`
  ),
  new Recipe(
    4,
    pesto,
    "Pasta al Pesto",
    "Pasta med pesto är en klassisk italiensk pastarätt som är enkel och snabb att tillaga. Pesto ger fräsch smak av färska örter. Vardagspasta som passar hela familjen, låt barnen välja sin favoritpesto att blanda med nykokt pasta.",
    `1 frp Tortiglioni
    1/2 burk Pesto alla Genovese
2 msk pinjenötter
1 kruka färsk basilika plockade blad
2 msk Grana Padano 16 mån riven
2 msk Extra jungfruolivolja Fruttato Medio
salt
nymalen svartpeppar`,
    `Koka pastan enligt förpackningens instruktioner. Rosta pinjenötterna i en torr het stekpanna. Vänd ner samtliga ingredienser i den nykokta pastan. Smaksätt med salt och peppar.Ringla över lite olivolja.`
  ),
  new Recipe(
    5,
    vongole,
    "Spaghetti alle Vongole",
    "Spaghetti alle vongole, spaghetti med musslor, vitlök och chili. Pasta Vongole är en skaldjurspasta från det klassiska italienska köket.",
    ` 2 l kallt vatten
    2 dl salt
1 kg hjärtmusslor eller 1kg blåmusslor
400 g Zeta Casa Di Luca Spaghetti
2 msk Grana Padano 16 mån riven
 4-5 msk Extra jungfruolivolja Classico
 1/2 röd chili hackad
 4 vitlöksklyftor hackade
 1 knippe bladpersilja hackad
 250 g körsbärstomater delade
 1 1/2 dl Matlagningsvin Vitt
 1/2 citron skal
salt
 peppar
`,
    `Blanda 2 l kallt vatten med 1 dl salt. Täck musslorna med vattnet. Rör om då och då. Låt stå minst en timme. Saltvattnet gör att musslorna spottar ut eventuell sand. Häll av saltvattnet och spola musslorna under kallt vatten. Upprepa saltvattenproceduren en gång till. Låt stå en timme. Häll av saltvattnet och spola än en gång musslorna under kallt vatten och kasta bort alla musslor som är öppna eller trasiga.Koka pastan 1 min kortare än anvisningen på paketet. Hetta upp olivolja i en stor kastrull och fräs chili, vitlök och hälften av persiljan. Lägg i tomaterna och fräs ytterligare 4-5 min. Lägg i musslorna och rör om.Slå på vin och lägg på locket och låt koka i ca 2 min, eller tills alla musslorna öppnat sig.Vänd ner nykokt pasta i musselkastrullen och låt dra i minst 2 min på svag värme under omrörning.Riv över citron, smaka av med salt och peppar.Strö över resten av persiljan. Servera i varma djupa tallrikar.`
  ),
  new Recipe(
    6,
    alfredo,
    "Alfredo",
    "Pasta Alfredo med fettucini och parmesanost är en klassisk italiensk pastarätt som är både god och enkel att laga! Snåla inte på parmesanosten, det är den som tillsammans med en skätt av pastavattnet som ger den lilla extra krämigheten i såsen",
    ` 250g Fettuccine
 80g smör
2 msk olivolja
 160g parmesanost, lagrad i 24 månader, riven
`,
    `Koka pasta enligt instruktionen på förpackningen i en stor kastrull med lättsaltat vatten. När den kokat till al dente så sätt 2,5 dl pastavatten åt sidan innan du häller av pastan.Under tiden: i en stor stekpanna smält smör över medelvärme och tillsätt pastavattnet. Häll sedan i och rör ut parmesanost, smaka av med salt och peppar.Vänd i pastan i stekpannan med såsen och både rör och kasta runt pastan i såsen tills dess att den är helt täckt av sås. Servera direkt.   Smaklig måltid! Det här receptet går även att kombinera med andra pastaformer, såsom spaghetti pasta och tagliatelle pasta.   Upptäck gärna fler av Barillas goda pasta recept, som exempelvis vår samling av vegetariska pastarätter.`
  ),
  new Recipe(
    7,
    tryffel,
    "Tryffle pasta",
    "En gudomligt god och lättlagad pasta med tryffel som du lagar på bara fyra ingredienser.",
    `4 port linguine
100 g smör 
1 msk tryffelsmör
 vitt 150 g parmesanost
  finriven 
  Färsk tryffel 
  salt 
  svartpeppar
  nymalen`,
    `Koka pastan ca 4 minuter kortare än vad som står på förpackningen. Häll av och spara lite av pastavattnet. Smält smöret i en stekpanna tillsammans med lite av pastavattnet på svag värme. Tillsätt pastan och tryffelsmöret, vänd runt under några minuter. Mal över svartpeppar. Tillsätt parmesanen och blanda väl. Späd med pastavattnet till en bra konsistens, den får inte bli för stabbig. Smaka av med salt och peppar. Lägg upp och riv gärna över färsk tryffel vid servering.En gudomligt god och lättlagad pasta med tryffel som du lagar på bara fyra ingredienser.`
  ),
  new Recipe(
    8,
    homemade,
    "Hemgjord pasta",
    "Hemgjord pasta med ägg, durumvetemjöl och olivolja. Kan formas till spaghetti, tagliatelle eller pappardelle",
    `5 dl durumvete
 4 ekologiska ägg
 1 msk Extra jungfruolivolja Classico`,
    `Mät upp mjölet på ett bakbord. Gör en stor grop i mitten. Knäck äggen i gropen, tillsätt olivolja och vispa upp äggen med en gaffel. Vispa in mjölet i äggen med hjälp av en gaffel, lite mjöl i taget. Mjöla händerna när degen börjar gå ihop och knåda den slät, len och elastisk i cirka 10 minuter. Dela degen i 2 bitar och täck dem med plastfolie. Låt vila minst 30 min i kylen. Ta ut en deghalva i taget. Platta ut pastadegen med fingrarna och kör den genom pastamaskinens tjockaste nivå, medan du vevar. (Det går också att kavla degen för hand med en kavel) Kavla degen genom maskinens alla nivåer fram till önskad tjocklek. Halvera pastaarket om det blir för långt. Forma till valfri pasta – spaghetti, tagliatelle eller en bredare pappardelle.Koka pastan i rikligt med saltat vatten. Koktiden beror på hur tunt kavlad pastan är och om du låtit torka den något, men ca 1-2 minuter är ett bra riktmärke. Smaka av! Njut av din egen hemgjorda pasta med stolthet. Vi tycker att pastan smakar bäst samma dag som den tillverkats, men ibland går det inte och då kan den förvaras väl övertäckt i kyl (ett par dagar) eller för längre förvaring, infryst. Men tänk på att mjöla in den ordentligt och att låta den torka ett par timmar innan.`
  ),
];
