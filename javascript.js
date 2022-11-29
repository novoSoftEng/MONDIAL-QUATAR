
let mountains = [
  { joueur: "Achraf Hakimi", description: "né le 4 novembre 1998 à Madrid, est un footballeur international marocain évoluant au poste d'arrière droit au Paris Saint-Germain." },
  { joueur: "Soufian Boufal", description: " né le 17 septembre 1993 à Paris, est un footballeur international marocain qui évolue au poste d'ailier gauche ou de milieu offensif au sein du club de l'Angers SCO." },
  { joueur: "Hakim Zyach", description: "né le 19 mars 1993 à Dronten, est un footballeur international marocain évoluant au poste d'ailier droit ou de milieu offensif à Chelsea." },
  { joueur: "yassin bounou", description: "né le 5 avril 1991 à Montréal (Canada), est un footballeur international marocain évoluant au poste de gardien de but au Séville FC en Liga." },
  { joueur: "Azdin Ounahi", description: " né le 19 avril 2000 à Casablanca au Maroc, est un footballeur international marocain qui évolue au poste de milieu central au Angers SCO." }
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
  let th1 = document.createElement("th");

  let text = document.createTextNode("modifier");
  let text1 = document.createTextNode("suprimer");
  th1.appendChild(text1);
  row.appendChild(th1);

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
    btn1.type = "button";
    btn1.value = "modifier";
    btn1.className = "bt1";
    let cell = row.insertCell();
    cell.append(btn1);
    btn1.onclick = function () {
      var i = row.rowIndex;
      let n1 = String(prompt("entrer le nom"));
       let n2 = String(prompt("entrer la description"));
       table.rows[i].cells[0].innerText=n1;
       table.rows[i].cells[1].innerText=n2;
      
    }
    var btn2 = document.createElement("input");
    btn2.type = "button";
    btn2.value = "suprimer";
    btn2.className = "bt1";

    let cell1 = row.insertCell();
    cell1.append(btn2);
    btn2.onclick = function () {
      var i = row.rowIndex;
      table.deleteRow(i);
    }
  }
}

function fc1() {
  var txt = document.createElement("input");
  txt.className = "t1";
  txt.type = "text";
  txt.placeholder = "entrer le joueur";
  var input = document.createElement("input");
  input.type = "button";
  input.value = "ajouter";
  input.className = "t2";

  document.getElementById("d1").appendChild(txt);
  document.getElementById("d1").appendChild(input);
  input.addEventListener("click", (event) => {
    let row1 = table.insertRow();
    let cell1 = row1.insertCell();
    let cell2 = row1.insertCell();
    let cell3 = row1.insertCell();
    let cell4 = row1.insertCell();
    let contenu = document.createTextNode(txt.value);
    cell1.appendChild(contenu);
    let n2 = String(prompt("entrer la description"));
    let contenu2 = document.createTextNode(n2);
    cell2.appendChild(contenu2);
    var btn3 = document.createElement("input");
    btn3.type = "button";
    btn3.value = "modifier";
    btn3.className = "bt1";



    var btn4 = document.createElement("input");
    btn4.type = "button";
    btn4.value = "suprimer";
    btn4.className = "bt1";

    cell3.append(btn3);
    btn3.onclick = function () {
      var i = row1.rowIndex;
      let n1 = String(prompt("entrer le nom"));
       let n2 = String(prompt("entrer la description"));
       table.rows[i].cells[0].innerText=n1;
       table.rows[i].cells[1].innerText=n2;
      
    }
    cell4.append(btn4);

    btn4.onclick = function () {
      var i = row1.rowIndex;
      table.deleteRow(i);
    }
  });


}

let table = document.querySelector("table");
let data = Object.keys(mountains[0]);
generateTable(table, mountains);
generateTableHead(table, data);
//actualite

function page_a(num) {
  let a_p = [['La France est la première équipe à se qualifier pour les huitièmes de finale de la Coupe du monde de football au Qatar.', 'Les Bleus se sont imposés 2 buts à 1 face au Danemark ce samedi, grâce à un doublé de Kyllian Mbappé.', 'Dans l\'autre match du groupe D, l\'Australie l\'a emporté 1 à 0 contre la Tunisie. Le but de Mitchell Duke permet aux Socceroos de se relancer dans la course à la qualification, avant un dernier match décisif face aux Danois.', 'Dans le groupe C, l\'Argentine respire. Après une défaite surprise face à l\'Arabie saoudite, l\'Albiceleste a battu le Mexique 2 à 0 avec un but de Lionel Messi, son deuxième du tournoi.',
    'Les grands joueurs ont décidément été décisifs ce samedi. L\'attaquant polonais Robert Lewandowski a permis à son équipe de s\'imposer 2 à 0 contre l\'Arabie saoudite avec un but et une passe décisive, alors que les Saoudiens ont manqué un penalty.']
    , ["L'un a le vent en poupe et l'étiquette de favori, l'autre est sans employeur et a souffert pour emmener son pays au Qatar : le Mondial 2022 accueille ce jeudi les débuts de deux stars planétaires, le Brésilien Neymar et le Portugais Ronaldo.",
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
  var hrf = ['./images/a1.jpg', './images/a2.jpg', './images/a3.jpg'];
  document.querySelector('iframe[name="v3"]').src = hrf[num];
  page_a(num);
}

//MATCHS
let Match1F = [
  { Groupe_F: "MAROC" },
  { Groupe_F: "0 - 0"  , date:"23 NOVEMBRE | 11:00"},
  { Groupe_F: "CROTIA" },

];

let Match2F = [
  { Groupe_F: "BELGIUM" },
  { Groupe_F: "1 - 0"  , date:"23 NOVEMBRE | 14:00"},
  { Groupe_F: "CANADA" },

];

let Match3F = [
  { Groupe_F: "MAROC" },
  { Groupe_F: "2 - 0"  , date:"27 NOVEMBRE | 14:00"},
  { Groupe_F: "BELGIUM" },

];

let Match4F = [
  { Groupe_F: "CROTIA" },
  { Groupe_F: "0 - 0"  , date:"27 NOVEMBRE | 17:00"},
  { Groupe_F: "CANADA" },

];
let Match5F = [
  { Groupe_F: "MAROC" },
  { Groupe_F: "0 - 0"  , date:"01 DECEMBRE | 16:00"},
  { Groupe_F: "CANADA" },

];
let Match6F = [
  { Groupe_F: "CROTIA" },
  { Groupe_F: "0 - 0"  , date:"01 DECEMBRE | 16:00"},
  { Groupe_F: "BELGIUM" },

];

let Match1C = [
  { Groupe_C: "SAUDI ARABIA" },
  { Groupe_C: "2 - 1"  , date:"22 NOVELBRE | 16:00"},
  { Groupe_C: "ARGENTINE" },

];

let Match2C = [
  { Groupe_C: "MEXIQUE" },
  { Groupe_C: "0 - 0"  , date:"22 NOVELBRE | 16:00"},
  { Groupe_C: "POLOGNE" },

];

let Match3C = [
  { Groupe_C: "POLOHNE" },
  { Groupe_C: "2 - 0"  , date:"26 NOVELBRE | 16:00"},
  { Groupe_C: "SAUDI ARABIA" },

];

let Match4C = [
  { Groupe_C: "ARGENTINE" },
  { Groupe_C: "2 - 0"  , date:"26 NOVELBRE | 16:00"},
  { Groupe_C: "MEXIQUE" },

];

let Match5C = [
  { Groupe_C: "POLOGNE" },
  { Groupe_C: "0 - 0"  , date:"30 NOVELBRE | 16:00"},
  { Groupe_C: "ARGENTINE" },

];

let Match6C = [
  { Groupe_C: "MEXIQUE" },
  { Groupe_C: "0 - 0"  , date:"30 NOVELBRE | 16:00"},
  { Groupe_C: "SAUDI ARABIA" },

];


function hTableMatchs(tableM, dataM) {
  let thead = tableM.createTHead();
  let row = thead.insertRow();
  for (let key of data) {
    let th = document.createElement("th");
    let text = document.createTextNode(key);
    th.appendChild(text);
    row.appendChild(th);
  }
}

function TableMatchs(tableM, dataM) {
  for (let element of data) {
    let row = tableM.insertRow();
    for (key in element) {
      let cell = row.insertCell();
      let text = document.createTextNode(element[key]);
      cell.appendChild(text);
    }
  }
}

let tableM = document.getElementById("tableM");
let dataM = Object.keys(Match1F[0]);
TableMatchs(tableM, Matchs);
hTableMatchs(tableM, dataM);

