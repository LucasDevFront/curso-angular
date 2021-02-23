import { Component, OnInit, NgModule } from '@angular/core';


@Component({
  selector: 'app-data-binding',
  templateUrl:'./data-binding.component.html',
  styleUrls: ['./data-binding.component.css'],

})
export class DataBindingComponent implements OnInit {

  url='http://cursoslivres.com';
  cursoAngular: boolean = true;
  urlImagem = 'https://caianomundo-prod.imgix.net/2019/02/iStock-525508231.jpg?fm=pjpg&ixlib=php-1.2.1https://lorempixel.com/output/technics-q-c-640-480-2.jpghttps://caianomundo-prod.imgix.net/2019/02/iStock-525508231.jpg?fm=pjpg&ixlib=php-1.2.1';


  valorAtual: string='';
  valorSalvo: ''; 
 
  isMouseOver: boolean = false;

  nomeDoCurso: string = 'Angular';

  valorInicial = 15;

  nome: string = 'abc';
  pessoa: any = {
    nome: '' , 
    idade: '', 

  }
  

  getValor(){
    return 1

  }

  getCurtirCurso(){
    return true;
  }

  botaoClicado(){
    alert ('Botão clicado');
  }
  
  oneKeyUp(evento: KeyboardEvent){
  
   this.valorAtual = (<HTMLInputElement>evento.target).value;
   
  }

   salvarValor(valor){
   this.valorSalvo = valor;

 }
   onMouseOerOut() {
   this.isMouseOver = !this.isMouseOver;
 } 

 onMudouValor(evento){
  console.log(evento);
}

  constructor() { }

  ngOnInit(): void {
  }
 

}
