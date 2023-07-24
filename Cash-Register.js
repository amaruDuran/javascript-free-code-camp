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

function noPuedoDarCambio(cid, cambioADar, sistemaMonetario) {
	let cidRecargado = obtenerCidConSistemaMonetario(cid, sistemaMonetario);
	return true;
}

function checkCashRegister(price, cash, cid) {
	var sistemaMonedas = obtenerSistemaMonetario();
	let cambioADar = cash-price;
	var cajaRegistradora = {
		"status": "OPEN",
		"change": cid
	}

	if (noPuedoDarCambio(cid, cambioADar, sistemaMonedas)) {
		cajaRegistradora["status"] = "INSUFFICIENT_FUNDS"
		cajaRegistradora["change"] = []
		return cajaRegistradora;
	}

    return cajaRegistradora;
}
  
checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);