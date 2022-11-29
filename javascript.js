
let mountains = [
  { name: "Monte Falco", height: 1658 },
  { name: "Monte Falterona", height: 1654 },
  { name: "Poggio Scali", height: 1520 },
  { name: "Pratomagno", height: 1592 },
  { name: "Monte Amiata", height: 1738 }
];
function generateTableHead(table, data) {
  let thead = table.createTHead();
  let row = thead.insertRow();
  for (let key of data) {
    let th = document.createElement("th");
    let text = document.createTextNode(key);
    th.appendChild(text);
    row.appendChild(th);
  }
  let th = document.createElement("th");
  let text = document.createTextNode("modifier");
  th.appendChild(text);
  row.appendChild(th);
}

function generateTable(table, data) {
  for (let element of data) {
    let row = table.insertRow();
    for (key in element) {
      let cell = row.insertCell();
      let text = document.createTextNode(element[key]);
      cell.appendChild(text);
    }
    var btn1 = document.createElement("input");
    btn1.value = "modifier";
    let cell = row.insertCell();
    cell.append(btn1);
  }
}


let table = document.querySelector("table");
let data = Object.keys(mountains[0]);
generateTable(table, mountains);
generateTableHead(table, data);
//actualite

function page_a(num) {  
let a_p=[['La France est la première équipe à se qualifier pour les huitièmes de finale de la Coupe du monde de football au Qatar.', 'Les Bleus se sont imposés 2 buts à 1 face au Danemark ce samedi, grâce à un doublé de Kyllian Mbappé.', 'Dans l\'autre match du groupe D, l\'Australie l\'a emporté 1 à 0 contre la Tunisie. Le but de Mitchell Duke permet aux Socceroos de se relancer dans la course à la qualification, avant un dernier match décisif face aux Danois.', 'Dans le groupe C, l\'Argentine respire. Après une défaite surprise face à l\'Arabie saoudite, l\'Albiceleste a battu le Mexique 2 à 0 avec un but de Lionel Messi, son deuxième du tournoi.',
 'Les grands joueurs ont décidément été décisifs ce samedi. L\'attaquant polonais Robert Lewandowski a permis à son équipe de s\'imposer 2 à 0 contre l\'Arabie saoudite avec un but et une passe décisive, alors que les Saoudiens ont manqué un penalty.']
  ,["L'un a le vent en poupe et l'étiquette de favori, l'autre est sans employeur et a souffert pour emmener son pays au Qatar : le Mondial 2022 accueille ce jeudi les débuts de deux stars planétaires, le Brésilien Neymar et le Portugais Ronaldo.",
  "Après les rencontres du jour - Suisse-Cameroun (11h) et Brésil-Serbie (20h) dans le groupe G, Uruguay-Corée du Sud (14) et Portugal-Ghana (19h) dans le groupe H -, toutes les équipes auront disputé leur premier match.0"],
  ["Cette deuxième journée du mondial de football au Qatar marque l'entrée en scène de l'Angleterre, qui affronte ce lundi l'Iran dans le groupe B.",
"La sélection anglaise devra faire sans son arrière latéral droit, Kyle Walker, blessé aux adducteurs. Le défenseur de Manchester City n'a pas joué depuis le 2 octobre. De son côté, l'Iran entre en compétition sans pression, mais avec un effectif amoindri à cause des blessures. "
,
"Le milieu de terrain Omid Ebrahimi est forfait pour ce mondial, blessé à l'aine. L'attaquant du Bayer Leverkusen Sardar Azmoun fait quant à lui partie de l'effectif, malgré une déchirure au mollet le mois dernier."]];
    let page_a = document.getElementById("page_a");
     page_a.replaceChildren();
for (let i = 0, l = a_p[num].length; i < l; i++) {
    let br = document.createElement("br");
    let p = document.createElement("p");
    p.innerText = a_p[num][i];
    page_a.append(p);
    page_a.append(br);

  }
}
function fon_a(num) {
  var hrf = ['./images/a1.jpg','./images/a2.jpg','./images/a3.jpg'];
  document.querySelector('iframe[name="v3"]').src = hrf[num];
  alert(document.querySelector('iframe[name="v3"]').src);
  page_a(num);
}


