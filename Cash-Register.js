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

function actualizarCambioEnCaja(cajaRegistradora, sistemaMonedas, mayorCambioCompatible) {
	cajaRegistradora["change"] = 
		cajaRegistradora["change"].map((nombreMoneda, totalMoneda) => {
			if (sistemaMonedas[nombreMoneda] == mayorCambioCompatible) {
				[nombreMoneda, totalMoneda - mayorCambioCompatible]
			}
		});
}

function obtenerMayorCambioCompatible(cajaRegistradora, sistemaMonedas, cambioADar) {
	let cid = obtenerCidConSistemaMonetario(cajaRegistradora["change"], sistemaMonedas);
	let cidDescendente = cid.sort(([_nombreA, _totalMonedaA, valorUnitarioA], [_nombreB, _totalMonedaB, valorUnitarioB]) => valorUnitarioB - valorUnitarioA);

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
	var cajaRegistradora = {
		"status": "OPEN",
		"change": cid
	}

	if (suma(cid) == cambioADar) {
		cajaRegistradora["status"] = "CLOSED"
		return cajaRegistradora
	}

	while (cambioADar > 0) {
		let mayorCambioCompatible = obtenerMayorCambioCompatible(cajaRegistradora, sistemaMonedas, cambioADar);

		if (Number.isNaN(mayorCambioCompatible)) {
			cajaRegistradora["status"] = "INSUFFICIENT_FUNDS";
			cajaRegistradora["change"] = [];
			return cajaRegistradora;
		}

		cambioADar -= mayorCambioCompatible;
		cajaRegistradora["change"] = actualizarCambioEnCaja(cajaRegistradora, sistemaMonedas, mayorCambioCompatible);
	}

    return cajaRegistradora;
}
  
checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);