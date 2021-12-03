import { LightningElement } from 'lwc';
 
export default class BasicCalculator extends LightningElement {
    firstInput;
    secondInput;
    totalValue; 
    firstInputChange(event){
        this.firstInput =  event.target.value;   
    } 
    secondInputChange(event){
        this.secondInput = event.target.value;
    }  
    add(event){
        this.totalValue = Number(this.firstInput) + Number(this.secondInput); 
    }
    subtract(event){
        this.totalValue = Number(this.firstInput) - Number(this.secondInput); 
    }
    multipication(event){
        this.totalValue = Number(this.firstInput) * Number(this.secondInput); 
    }
    div(event){
        this.totalValue = Number(this.firstInput) / Number(this.secondInput); 
    }
}