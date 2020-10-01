// diferencia en years
export function yearDiference(year) {
	return new Date().getFullYear() - year;
}

// segun la marca
export function marcaCalc(marca) {
	let increment;

	switch (marca) {
		case 'euro':
			increment = 1.30;
			break;
		case 'american':
			increment  = 1.15;
			break;
		case 'asian':
			increment = 1.05;
			break;
		default:
			break;
	}
	return increment;
}

// segun el plan
export function lookPlan (plan) {
	return (plan === 'basic') ? 1.20 : 1.50;
}

export function firstCap (text) {
	return text.charAt(0).toUpperCase() + text.slice(1);
}