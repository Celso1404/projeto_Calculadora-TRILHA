class CalcController {

    constructor(){

        this._displayCalc = "0"; //display da calculadora
        this._dataAtual;

    }
 
    get displayCalc() {

        return this._displayCalc;

    }

    set displayCalc(valor) {
        this._displayCalc = valor; 
    }

    get dataAtual() {

        return this._dataAtual;

    }

    set dataAtual(valor) {

        this._dataAtual = valor;

    }

}