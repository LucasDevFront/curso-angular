import { Component, OnInit } from '@angular/core';
import { EmailValidator } from '@angular/forms';

import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-formum',
  templateUrl: './formum.component.html',
  styleUrls: ['./formum.component.css']
})
export class FormumComponent implements OnInit {

  usuario: any = {
    nome: null,
    email: null,
  };

  onSubmit(form: any) {
  console.log(form.form);

  console.log(this.usuario);
  }

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

 verificaValidTouched(campo: { valid: any; touched: any; }){
   return !campo.valid && campo.touched;
 }

 aplicaCssErro(campo: { valid: any; touched: any; }) {
    return {
        'has-error':this.verificaValidTouched(campo),
        'has-feedback': this.verificaValidTouched(campo)
  }
 }

 consultaCEP(cep: any){
      //Nova variável "cep" somente com dígitos.
    cep = cep.replace(/\D/g, '');
    //Verifica se campo cep possui valor informado.
    if (cep != "") {
      //Expressão regular para validar o CEP.
      var validacep = /^[0-9]{8}$/;
        //Valida o formato do CEP.
      if(validacep.test(cep)) {

        this.http.get(`https://viacep.com.br/ws/${cep}/json`).subscribe(dados => console.log(dados));
    }
  } 
 }
}