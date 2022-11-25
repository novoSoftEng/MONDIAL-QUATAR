
let mountains = [
  { name: "Monte Falco", height: 1658},
  { name: "Monte Falterona", height: 1654 },
  { name: "Poggio Scali", height: 1520},
  { name: "Pratomagno", height: 1592},
  { name: "Monte Amiata", height: 1738}
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
