import { Component } from '@angular/core';

@Component({
  selector: 'hello-component',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent {
  disciplina : string ="POO";
  soma : number = 0;
  nome : string = "";
  anoNascimento : number = 0;

  constructor(){
    this.disciplina = "DDM";
    this.soma = this.calcular(5,5);
  }

  calcular(num1 : number, num2 : number) : number {
  	let total = 0;
  	total = num1 + num2;
  	return total;
  }

  subtrair() : void{

  }

  hello() : void{
    let anoAtual = new Date().getFullyear();
    let idade = anoAtual - this.anoNascimento;
    alert("Hello World "+this.nome+""+idade);
    alert()

  }
}
