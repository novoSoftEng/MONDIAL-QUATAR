
/*let mountains = [
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
generateTableHead(table, data);*/
//actualite
var hrf = ['./images/a1.jpg','./images/a2.jpg','./images/a3.jpg'];
function page_a() {
let a_p1 = ['La France est la première équipe à se qualifier pour les huitièmes de finale de la Coupe du monde de football au Qatar.', 'Les Bleus se sont imposés 2 buts à 1 face au Danemark ce samedi, grâce à un doublé de Kyllian Mbappé.', 'Dans l\'autre match du groupe D, l\'Australie l\'a emporté 1 à 0 contre la Tunisie. Le but de Mitchell Duke permet aux Socceroos de se relancer dans la course à la qualification, avant un dernier match décisif face aux Danois.', 'Dans le groupe C, l\'Argentine respire. Après une défaite surprise face à l\'Arabie saoudite, l\'Albiceleste a battu le Mexique 2 à 0 avec un but de Lionel Messi, son deuxième du tournoi.', 'Les grands joueurs ont décidément été décisifs ce samedi. L\'attaquant polonais Robert Lewandowski a permis à son équipe de s\'imposer 2 à 0 contre l\'Arabie saoudite avec un but et une passe décisive, alors que les Saoudiens ont manqué un penalty.'];
  
  for (let i = 0, l = a_p1.length; i < l; i++) {
    let page_a = document.getElementById("page_a");
    let br = document.createElement("br");
    let p = document.createElement("p");
    p.innerText = a_p1[i];
    page_a.append(p);
    page_a.append(br);

  }
}
function fon_a(num) {
  document.querySelector('iframe[name="v3"]').src = hrf[num];
  page_a();
}


