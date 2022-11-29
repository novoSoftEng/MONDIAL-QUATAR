
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

    var btn2 = document.createElement("input");
    btn2.type = "button";
    btn2.value = "suprimer";
    btn2.className = "bt1";

    let cell1 = row.insertCell();
    cell1.append(btn2);
    btn2.onclick=function(){
      var i=row.rowIndex;
      table.deleteRow(i);
    }
  }
}

let table = document.querySelector("table");
let data = Object.keys(mountains[0]);
generateTable(table, mountains);
generateTableHead(table, data);
function fc1(){
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
  cell4.append(btn4);

  btn4.onclick=function(){
    var i=row1.rowIndex;
    table.deleteRow(i);
  }
});
  

}




