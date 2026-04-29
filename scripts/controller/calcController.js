class CalcController {

    constructor(){

        this._operation = []; //ajuda a controlar o histórico
        this._locale = 'pt-BR';
        this._displayCalcEl = document.querySelector("#display");
        this._dateEl =document.querySelector("#data");
        this._timeEl = document.querySelector("#hora");
        this._currentDate;
        this.initialize();
        this.initButtonsEvents();

    }

    initialize() {

        this.setDisplayDateTime();

        setInterval(()=>{ //para controlar o tempo do relógio

            this.setDisplayDateTime();

        }, 1000);

    }
 
    addEventListenerAll(element, events, fn){ //tratar múltiplos eventos

        events.split(' ').forEach(event => {

            element.addEventListener(event, fn, false);

        });
    }

    clearAll() {

        this._operation = [];

    }
    clearEntry() {

        this._operation.pop();

    }

    getLastOperation() {

       return this._operation[this._operation.length-1];

    }

    setLastOperation(value) {

        this._operation[this._operation.length - 1] = value;

    }

    isOperator(value) {

       return (['+', '-', '*', '/'].indexOf(value) > -1);

    }

    addOperation(value) {

        if(isNaN(this.getLastOperation())) {

            if (this.isOperator(value)) {

                this._setLastOperation(value);

            } else if(isNaN(value)) {

                console.log(value);

            }  else {

                this._operation.push(value);
            }
        } else {

            let newValue = this.getLastOperation().toString() + value.toString();

            this.setLastOperation(parseInt(newValue));
        }

        console.log(this._operation);

    }

    setError(){

        this.displayCalc = "Error";
    }


    execBtn(value) {

        switch(value) {

                case 'ac':
                    this.clearAll();
                    break;
                case 'ce':
                    this.clearEntry();
                    break;
                case 'soma':
                    this.addOperation('+');
                    break;
                case 'subtracao':
                    this.addOperation('-');
                    break;
                case 'divisao':
                    this.addOperation('/');
                    break;
                case 'multiplicacao':
                    this.addOperation('*');
                    break;
                case 'porcento':
                    this.clearAll('%');
                    break;    
                case 'igual':
                    this.clearAll();
                    break;
                case 'ponto':
                    this.clearAll('.');
                    break;

                case '0':
                    this.addOperation(parseInt(value));
                    break;
                case '1':
                    this.addOperation(parseInt(value)); 
                    break;
                case '2':
                    this.addOperation(parseInt(value));
                    break;
                case '3':
                    this.addOperation(parseInt(value));
                    break;
                case '4':
                    this.addOperation(parseInt(value));
                    break;
                case '5':
                    this.addOperation(parseInt(value));
                    break;
                case '6':
                    this.addOperation(parseInt(value));
                    break;
                case '7':
                    this.addOperation(parseInt(value));
                    break;
                case '8':
                    this.addOperation(parseInt(value));
                    break;
                case '9':    
                    this.addOperation(parseInt(value));
                    break;

                default:
                    this.setError();
                    break;
        }

    }

    initButtonsEvents(){ //controla os botões

       let buttons = document.querySelectorAll("#buttons > g, #parts > g"); //para puxar as tags filhos

       buttons.forEach((btn, index)=>{

        this.addEventListenerAll(btn, "click drag", e=>{

            let textBtn = btn.className.baseVal.replace("btn-", "");
            this.execBtn(textBtn);

        });

            this.addEventListenerAll(btn, "mouseover mouseup mousedown", e=> {
                btn.style.cursor = "pointer";
            });
       });
    }

    setDisplayDateTime() {

        this.displayDate = this.currentDate.toLocaleDateString(this._locale,{
            day: "2-digit",
            month: "long",
            year: "numeric"
        });
        this.displayTime = this.currentDate.toLocaleTimeString(this._locale);
    }

    get displayTime() {
        return this._timeEl.innerHTML;
    }

    set displayTime(value) {
        return this._timeEl.innerHTML = value;
    }

    get displayDate() {
        return this._dateEl.innerHTML;
    }

    set displayDate(value) {
        return this._dateEl.innerHTML = value;
    }

    get displayCalc() {

        return this._displayCalcEl.innerHTML;

    }

    set displayCalc(value) {
        this._displayCalcEl.innerHTML = value; 
    }

    get currentDate() {

        return new Date();

    }

    set currentDate(value) {

        this._currentDate = value;

    }

}