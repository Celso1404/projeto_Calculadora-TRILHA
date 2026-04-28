class CalcController {

    constructor(){

        this._displayCalc = "0"; //display da calculadora
        this._currentDate;
        this.initialize();

    }

    initialize() {

        let displayCalcEl = document.querySelector("#display");
        let dateEl =document.querySelector("#data");
        let timeEl = document.querySelector("#hora");

        displayCalcEl.innerHTML = "4587"
        dateEl.innerHTML = "28/04/2026"  
        timeEl.innerHTML = "00:17"  
    }
 
    get displayCalc() {

        return this._displayCalc;

    }

    set displayCalc(valor) {
        this._displayCalc = valor; 
    }

    get currentDate() {

        return this._currentDate;

    }

    set currentDate(valor) {

        this._currentDate = valor;

    }

}