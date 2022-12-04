
let joueurMaroc = [
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
      table.rows[i].cells[0].innerText = n1;
      table.rows[i].cells[1].innerText = n2;

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

function Boutton_ajout(v4, table) {
  var txt = document.createElement("input");
  txt.className = "t1";
  txt.type = "text";
  txt.placeholder = "entrer le joueur";
  var input = document.createElement("input");
  input.type = "button";
  input.value = "ajouter";
  input.className = "t2";

  v4.appendChild(txt);
  v4.appendChild(input);
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
      table.rows[i].cells[0].innerText = n1;
      table.rows[i].cells[1].innerText = n2;

    }
    cell4.append(btn4);

    btn4.onclick = function () {
      var i = row1.rowIndex;
      table.deleteRow(i);
    }
  });


}


//actualite

function page_a(num) {
  let a_p = [['La France est la première équipe à se qualifier pour les huitièmes de finale de la Coupe du monde de football au Qatar.', 'Les Bleus se sont imposés 2 buts à 1 face au Danemark ce samedi, grâce à un doublé de Kyllian Mbappé.', 'Dans l\'autre match du groupe D, l\'Australie l\'a emporté 1 à 0 contre la Tunisie. Le but de Mitchell Duke permet aux Socceroos de se relancer dans la course à la qualification, avant un dernier match décisif face aux Danois.', 'Dans le groupe C, l\'Argentine respire. Après une défaite surprise face à l\'Arabie saoudite, l\'Albiceleste a battu le Mexique 2 à 0 avec un but de Lionel Messi, son deuxième du tournoi.',
    'Les grands joueurs ont décidément été décisifs ce samedi. L\'attaquant polonais Robert Lewandowski a permis à son équipe de s\'imposer 2 à 0 contre l\'Arabie saoudite avec un but et une passe décisive, alors que les Saoudiens ont manqué un penalty.']
    , ["L'un a le vent en poupe et l'étiquette de favori, l'autre est sans employeur et a souffert pour emmener son pays au Qatar : le Mondial 2022 accueille ce jeudi les débuts de deux stars planétaires, le Brésilien Neymar et le Portugais Ronaldo.",
    "Après les rencontres du jour - Suisse-Cameroun (11h) et Brésil-Serbie (20h) dans le groupe G, Uruguay-Corée du Sud (14) et Portugal-Ghana (19h) dans le groupe H -, toutes les équipes auront disputé leur premier match.0"],
  ["Cette deuxième journée du mondial de football au Qatar marque l'entrée en scène de l'Angleterre, qui affronte ce lundi l'Iran dans le groupe B.",
    "La sélection anglaise devra faire sans son arrière latéral droit, Kyle Walker, blessé aux adducteurs. Le défenseur de Manchester City n'a pas joué depuis le 2 octobre. De son côté, l'Iran entre en compétition sans pression, mais avec un effectif amoindri à cause des blessures. "
    ,
    "Le milieu de terrain Omid Ebrahimi est forfait pour ce mondial, blessé à l'aine. L'attaquant du Bayer Leverkusen Sardar Azmoun fait quant à lui partie de l'effectif, malgré une déchirure au mollet le mois dernier. Bienvenue sur le site de cours et de didacticiels informatiques au format pdf à télécharger gratuitement. Tous les cours sont complets et destinés aux débutants . Vous n'avez donc pas besoin d'expérience pour commencer. Il suffit de cliquer sur un cours d'informatique qui vous intéresse et c'est parti! ."




  ]
,["PAYS-BAS QUALIFIÉS POUR LES QUARTS APRÈS LEUR SUCCÈS CONTRE LES ETATS-UNIS (3-1)","COUPE DU MONDE - Les Pays-Bas n'ont jamais vraiment tremblé. Grâce à des buts de Memphis Depay, Daley Blind et Denzel Dumfries, les hommes de Louis van Gaal ont décroché samedi après-midi le premier ticket pour les quarts de finale du Mondial qatari, en battant les Etats-Unis (3-1). La réduction du score de Haji Wright n'a pas suffi. Les Oranje affronteront l'Argentine ou l'Australie."],["COUPE DU MONDE - Depuis le retour de Karim Benzema, Didier Deschamps était en recherche d’un équilibre différent pour son équipe de France."," Le forfait du Madrilène n’y a rien changé : l’équipe de 2022 est plus attirée vers l’avant que sa devancière de 2018. Cela comporte des risques, évidents. Mais ils sont assumés. Et, jusqu’ici, ça fonctionne plutôt bien."]];
  let page_a = document.getElementById("v4");
  page_a.replaceChildren();
  page_a.className = "ronaldo";
  for (let i = 0, l = a_p[num].length; i < l; i++) {
    let br = document.createElement("br");
    let p = document.createElement("p");
    p.innerText = a_p[num][i];
    page_a.append(p);
    page_a.append(br);

  }



}


function fon_a(num) {
  var hrf = ['./images/a1.jpg', './images/a2.jpg', './images/a3.jpg',"./images/pays.jpg","./images/benzima.jpg"];

  let img=document.createElement("img");
  img.src=hrf[num];
  let v3= document.getElementById("v3");
  v3.replaceChildren();
  v3.append(img);

  page_a(num);

}

//MATCHS
let Match1F= [
  { Groupe_F: "MAROC" },
  { Groupe_F: "0 - 0", date: "23 NOVEMBRE | 11:00" },
  { Groupe_F: "CROTIA" }
];

let Match2F = [
  { Groupe_F: "BELGIUM" },
  { Groupe_F: "1 - 0", date: "23 NOVEMBRE | 14:00" },
  { Groupe_F: "CANADA" }

];

let Match3F = [
  { Groupe_F: "MAROC" },
  { Groupe_F: "2 - 0", date: "27 NOVEMBRE | 14:00" },
  { Groupe_F: "BELGIUM" }

];

let Match4F = [
  { Groupe_F: "CROTIA" },
  { Groupe_F: "3 - 1", date: "27 NOVEMBRE | 17:00" },
  { Groupe_F: "CANADA" }

];
let Match5F = [
  { Groupe_F: "MAROC" },
  { Groupe_F: "2 - 1", date: "01 DECEMBRE | 16:00" },
  { Groupe_F: "CANADA" }

];
let Match6F = [
  { Groupe_F: "CROTIA" },
  { Groupe_F: "0 - 0", date: "01 DECEMBRE | 16:00" },
  { Groupe_F: "BELGIUM" }

];

let Match1C = [
  { Groupe_C: "SAUDI ARABIA" },
  { Groupe_C: "2 - 1", date: "22 NOVELBRE | 16:00" },
  { Groupe_C: "ARGENTINE" }

];

let Match2C = [
  { Groupe_C: "MEXIQUE" },
  { Groupe_C: "0 - 0", date: "22 NOVELBRE | 16:00" },
  { Groupe_C: "POLOGNE" }

];

let Match3C = [
  { Groupe_C: "POLOGNE" },
  { Groupe_C: "2 - 0", date: "26 NOVELBRE | 16:00" },
  { Groupe_C: "SAUDI ARABIA" }

];

let Match4C = [
  { Groupe_C: "ARGENTINE" },
  { Groupe_C: "2 - 0", date: "26 NOVELBRE | 16:00" },
  { Groupe_C: "MEXIQUE" }

];

let Match5C = [
  { Groupe_C: "POLOGNE" },
  { Groupe_C: "0 - 2", date: "30 NOVELBRE | 16:00" },
  { Groupe_C: "ARGENTINE" }

];

let Match6C = [
  { Groupe_C: "MEXIQUE" },
  { Groupe_C: "2 - 1", date: "30 NOVELBRE | 16:00" },
  { Groupe_C: "SAUDI ARABIA" }

];
function generateMatchsHead(tableInitial, dataInitial) {
  let thead = tableInitial.createTHead();
  let row = thead.insertRow();
  for (let key of dataInitial) {
    let th = document.createElement("th");
    let text = document.createTextNode(key);
    th.appendChild(text);
    row.appendChild(th);

  }
}

function generateMatchs(tableInitial, dataInitial) {
  for (let element of dataInitial) {
    let row = tableInitial.insertRow();
    for (key in element) {
      let cell = row.insertCell();
      let text = document.createTextNode(element[key]);
      cell.appendChild(text);

    }
  }
}
function matchs(g) {
  let v2 = document.getElementById("v2");
  v2.replaceChildren();
  let matchs = [Match1F, Match2F, Match3F, Match4F, Match5F, Match6F,
    Match1C, Match2C, Match3C, Match4C, Match5C, Match6C];
  switch (g) {
    case 0:
      for (let i = 0; i < matchs.length / 2; i++) {
        var match = matchs[i];
        let tableInitial = document.createElement("table");
        let dataInitial = Object.keys(match[0]);
        generateMatchs(tableInitial, match);
        generateMatchsHead(tableInitial, dataInitial);
        v2.append(tableInitial);
      }
      break;
    case 1:
      for (let i = 6; i < matchs.length / 2 + 6; i++) {
        var match = matchs[i];
        let tableInitial = document.createElement("table");
        let dataInitial = Object.keys(match[0]);
        generateMatchs(tableInitial, match);
        generateMatchsHead(tableInitial, dataInitial);
        v2.append(tableInitial);
      }
      break;
    default:
      for (let i = 0; i < matchs.length; i++) {
        var match = matchs[i];
        let tableInitial = document.createElement("table");
        let dataInitial = Object.keys(match[0]);
        generateMatchs(tableInitial, match);
        generateMatchsHead(tableInitial, dataInitial);
        v2.append(tableInitial);
      }
      break;
  }

}


//Groupes
let GroupeF = [
  { Groupe_F: "MAROC", J: 1, G: 0, N: 1, P: 0, Dif: 0, Pts: 1 },
  { Groupe_F: "CROTIA", J: 1, G: 0, N: 1, P: 0, Dif: 0, Pts: 1 },
  { Groupe_F: "BELGIUM", J: 1, G: 0, N: 1, P: 0, Dif: 0, Pts: 1 },
  { Groupe_F: "CANADA", J: 1, G: 0, N: 1, P: 0, Dif: 0, Pts: 1 },
];

let GroupeC = [
  { Groupe_C: "SAUDI ARABIA", J: 1, G: 0, N: 1, P: 0, Dif: 0, Pts: 1 },
  { Groupe_C: "ARGENTINE", J: 1, G: 0, N: 1, P: 0, Dif: 0, Pts: 1 },
  { Groupe_C: "POLOGNE", J: 1, G: 0, N: 1, P: 0, Dif: 0, Pts: 1 },
  { Groupe_C: "MEXIQUE", J: 1, G: 0, N: 1, P: 0, Dif: 0, Pts: 1 },
];
function groupes(g) {
  let v2 = document.getElementById("v2");
  let v3 = document.getElementById("v3");
  v2.replaceChildren();
  let groupes = [GroupeF, GroupeC];
  var groupe = groupes[g];
  let tableInitial = document.createElement("table");
  let dataInitial = Object.keys(groupe[0]);
  generateMatchs(tableInitial, groupe);
  generateMatchsHead(tableInitial, dataInitial);
  v2.append(tableInitial);
  //
  tableInitial.rows[1].addEventListener("click", () => {
    v3.replaceChildren();
    map(v3);
    creeTable();

  });
}
function creeTable(joueur) {
  let v4 = document.getElementById("v4");
  let table = document.createElement("table");
  let data = Object.keys(joueurMaroc[0]);
    if(joueur==true){
      v4.replaceChildren(); /*
      let jou = joueurMaroc[joueur];
      generateTable(table, jou);
      generateTableHead(table, data);

      v4.append(table);
      Boutton_ajout(v4, table);*/
    }

    else{
      v4.replaceChildren();
      generateTable(table, joueurMaroc);
      generateTableHead(table, data);

      v4.append(table);
      Boutton_ajout(v4, table);
      }
  }
function map(v3) {
  let img=document.createElement("img");
  img.src="./images/maroc.jpg"; 
  img.usemap="#imaage-map";
v3.append(img);
  let map=document.createElement("map") ;
  map.name="imaage-map";
  let area=document.createElement("area");
      area.shape="rect" 
      area.coords="484,147,519,196"; 
      area.title="Yassine Bounou";
      area.href="#";
      area.onclick=function () {
        creeTable(0);
      }
      map.appendChild(area);
v3.append(map);
v3.append(area);
}
let Class1 = [
  { CT:"1", Equipes: "MAROC",  Pts:7 },
  { CT:"2", Equipes: "CROTIA",  Pts:5 },
  { CT:"3", Equipes: "BELGIUM",  Pts:4 },
  { CT:"4", Equipes: "CANADA",  Pts:0 },
];

let Class2 = [
  { CT:"1", Equipes: "ARGENTINE",  Pts:6 },
  { CT:"2", Equipes: "POLOGNE",  Pts:4 },
  { CT:"3", Equipes: "MEXIQUE",  Pts:4 },
  { CT:"4", Equipes: "SAUDI ARABIA",  Pts:3 },
];


function generateMatchsHead(tableInitial, dataInitial) {
  let thead = tableInitial.createTHead();
  let row = thead.insertRow();
  for (let key of dataInitial) {
    let th = document.createElement("th");
    let text = document.createTextNode(key);
    th.appendChild(text);
    row.appendChild(th);

  }
}
function generateMatchs(tableInitial, dataInitial) {
  for (let element of dataInitial) {
    let row = tableInitial.insertRow();
    for (key in element) {
      let cell = row.insertCell();
      let text = document.createTextNode(element[key]);
      cell.appendChild(text);

    }
  }
}
//classement
function Classe(g) {
  let v2 = document.getElementById("v2");
  v2.replaceChildren();
  let Classe = [Class1, Class2];
  switch (g) {
    case 0:
      for (let i = 0; i < Classe.length / 2; i++) {
        var Classement = Classe[i];
        let tableInitial = document.createElement("table");
        let dataInitial = Object.keys(Classement[0]);
        generateMatchs(tableInitial, Classement);
        generateMatchsHead(tableInitial, dataInitial);
        v2.append(tableInitial);
      }
      break;
    case 1:
      for (let i = 1; i < Classe.length / 2 + 1; i++) {
        var Classement = Classe[i];
        let tableInitial = document.createElement("table");
        let dataInitial = Object.keys(Classement[0]);
        generateMatchs(tableInitial, Classement);
        generateMatchsHead(tableInitial, dataInitial);
        v2.append(tableInitial);
      }
      break;
    default:
      for (let i = 0; i < Classe.length; i++) {
        var Classement = Classe[i];
        let tableInitial = document.createElement("table");
        let dataInitial = Object.keys(Classement[0]);
        generateMatchs(tableInitial, Classement);
        generateMatchsHead(tableInitial, dataInitial);
        v2.append(tableInitial);
      }
      break;
  }

}