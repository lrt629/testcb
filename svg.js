function svgCreate(roomtype, rotation, doorleft, doorbottom) {
	return svgWrap(
		svgWrapRoom(svgCreateRoom(roomtype), rotation) +
		svgDoorLeft(doorleft) +
		svgDoorBottom(doorbottom)
	);
}

function svgWrap(svg) {
	return "<svg width='34' height='34'>" + svg + "</svg>";
}

function svgWrapRoom(svg, rotation) {
	return "<g transform='rotate(" + rotation + " 18 16) translate(2,0)'>" + svg + "</g>";
}

function svgDoorLeft(state) {
	switch(state) {
		case 0: return "<rect width='2' height='16' x='0' y='8' fill='#dadada' />"
		case 1: return "<rect width='2' height='10' x='0' y='0' fill='#888888' /><rect width='2' height='10' x='0' y='22' fill='#888888' />"
		case 2: return "<rect width='2' height='10' x='0' y='0' fill='#ff4444' /><rect width='2' height='10' x='0' y='22' fill='#ff4444' />"
		default: return "";
	}
}

function svgDoorBottom(state) {
	switch(state) {
		case 0: return "<rect width='16' height='2' x='10' y='32' fill='#dadada' />"
		case 1: return "<rect width='10' height='2' x='2' y='32' fill='#888888' /><rect width='10' height='2' x='24' y='32' fill='#888888' />"
		case 2: return "<rect width='10' height='2' x='2' y='32' fill='#ff4444' /><rect width='10' height='2' x='24' y='32' fill='#ff4444' />"
		default: return "";
	}
}
