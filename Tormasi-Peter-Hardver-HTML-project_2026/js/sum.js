const table = document.getElementById("alkatresz-table");
const rows = document.getElementById("alkatresz-table-body").children;

var sum = 0;

for (let i = 0; i < rows.length - 1; i++) {
    const adatok = rows[i].children;
    sum += parseFloat(adatok[3].childNodes[0].data.replace(/\./g, "").replace(",", "."));
}

console.log(rows[rows.length-1])

rows[rows.length-1].children[0].childNodes[0].data = "Osszesen: "+sum.toLocaleString("de-DE")+"Ft"