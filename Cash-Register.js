function obtenerSistemaMonetario() {
    return {
      "PENNY": 0.01,
      "NICKEL": 0.05,
      "DIME": 0.1,
      "QUARTER": 0.25,
      "ONE": 1,
      "FIVE": 5,
      "TEN": 10,
      "TWENTY": 20,
      "ONE HUNDRED": 100
    }
}

function obtenerCidConSistemaMonetario(cid, sistemaMonetario) {
	return cid.map(function ([nombreMoneda, dineroDisponible]) {
		return [nombreMoneda, dineroDisponible, sistemaMonetario[nombreMoneda]];
	});
}

function suma(cid) {
	return cid.reduce((acc, [_nombreMoneda, totalMoneda]) => acc + totalMoneda, 0);
}

function actualizarCambioEnCaja(cid, sistemaMonedas, mayorCambioCompatible) {
	let cidActualizado = 
		cid.map((nombreMoneda, totalMoneda) => {
			if (sistemaMonedas[nombreMoneda] == mayorCambioCompatible) {
				[nombreMoneda, totalMoneda - mayorCambioCompatible]
			}
		});
	return cidActualizado;
}

function obtenerMayorCambioCompatible(cid, sistemaMonedas, cambioADar) {
	let nuevoCid = obtenerCidConSistemaMonetario(cid, sistemaMonedas);
	let cidDescendente = nuevoCid.sort(([_nombreA, _totalMonedaA, valorUnitarioA], [_nombreB, _totalMonedaB, valorUnitarioB]) => valorUnitarioB - valorUnitarioA);

	for (let [nombreMoneda, _, valorUnitario] of cidDescendente.entries()) {
		if (valorUnitario <= cambioADar) {
			return [nombreMoneda, valorUnitario];
		}
	}

	return Number.NaN
}

function checkCashRegister(price, cash, cid) {
	var sistemaMonedas = obtenerSistemaMonetario();
	var cambioADar = cash-price;
	var cid = cid;
	var cajaRegistradora = {
		"status": "OPEN",
		"change": []
	}

	if (suma(cid) == cambioADar) {
		cajaRegistradora["status"] = "CLOSED";
		cajaRegistradora["change"] = cid;
		return cajaRegistradora
	}
	console.log("llegue acá");

	while (cambioADar > 0) {
		let mayorCambioCompatible = obtenerMayorCambioCompatible(cid, sistemaMonedas, cambioADar);
		console.log(mayorCambioCompatible);
		if (Number.isNaN(mayorCambioCompatible)) {
			cajaRegistradora["status"] = "INSUFFICIENT_FUNDS";
			cajaRegistradora["change"] = [];
			return cajaRegistradora;
		}

		cambioADar -= mayorCambioCompatible;
		cid = actualizarCambioEnCaja(cid, sistemaMonedas, mayorCambioCompatible);
		// cajaRegistradora["change"] = actualizarCambioAEntregar(cajaRegistradora["change"], mayorCambioCompatible);
	}

    return cajaRegistradora;
}
  
console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));