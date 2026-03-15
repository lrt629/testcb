let currentMap = null;
let loading = false;
let exitr = null;
let savedOverlaps = null;
let link = null;

let mapWrapper = document.getElementById("map-table");
for (let i = 0; i <= 18; i++) {
	let tr = document.createElement("tr");
	for (let j = 0; j <= 18; j++) {
		let td = document.createElement("td");
		td.setAttribute("id", "c" + (18 - j) + "-" + i);
		td.setAttribute("onmouseover", "getRoomInfo(" + (18 - j) + "," + i + ")");
		tr.appendChild(td);
	}
	tr.style.background = getLineBackground(i);
	mapWrapper.appendChild(tr);
}
