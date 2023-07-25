function obtenerSistemaMonetario() {
    return {
      "PENNY": 0.01,
      "NICKEL": 005,
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

// function suma(cid) {
// }

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

	while (cambioADar <= 0) {
		let mayorCambioCompatible = mayorCambioCompatible(cajaRegistradora, cambioADar);

		if (Number.isNan(mayorCambioCompatible)) {
			cajaRegistradora["status"] = "INSUFFICIENT_FUNDS";
			cajaRegistradora["change"] = [];
			return cajaRegistradora;
		}

		cambioADar -= mayorCambioCompatible;
		cajaRegistradora["change"] = actualizarCambioEnCaja(cajaRegistradora["change"], mayorCambioCompatible);
	}

    return cajaRegistradora;
}
  
checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);