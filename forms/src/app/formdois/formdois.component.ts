import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Estado } from '../shared/modules/estado.br';
import { ConsultaCepService } from '../shared/services/consulta-cep.service';
import { DropdownService } from '../shared/services/dropdown.service';

@Component({
  selector: 'app-formdois',
  templateUrl: './formdois.component.html',
  styleUrls: ['./formdois.component.css']
})
export class FormdoisComponent implements OnInit {

  formulario!: FormGroup;
  estados!: Estado[];
  


  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private dropdownService: DropdownService,
    private cepService: ConsultaCepService,

  
    
    ) { }

    ngOnInit(): void {
      this.estados=[];
      this.dropdownService.getEstadoBr().subscribe((res: Estado)=>{     
      this.estados.push(res)   
      console.log(this.estados)
    });
      
    // this.formulario = new FormGroup({
    //    nome: new FormControl(null),
    //    email: new FormControl(null)
    // });

    this.formulario = this.formBuilder.group({
      nome:[null, Validators.required],
      email:[null, [Validators.required, Validators.email]],

      endereco: this.formBuilder.group({
        cep:[null, Validators.required],
        rua:[null, Validators.required],
        bairro:[null, Validators.required],
        estado:[null, Validators.required],
      })
     
    });
  }
  
onSubmit() {
    console.log(this.formulario);

    if (this.formulario.valid){
      this.http.post('https://httpbin.org/post', JSON.stringify({}))
      .subscribe(
        dados => {
          console.log(dados);
        },
        (error: any) => alert('erro')
      );
    } else {
      console.log('formulario invalido');
       this.verificaValidacoesForm(this.formulario);
    }

   
  }

  verificaValidacoesForm(FormGroup: FormGroup){
    Object.keys(FormGroup.controls).forEach(campo => {
      console.log(campo);  
      const controle = FormGroup.get(campo);
      controle?.markAllAsTouched();
      
      });
  }

resetar() {
  this.formulario.reset();
  }


consultaCEP(){
  let cep = this.formulario?.get("endereco")?.value.cep;
  console.log(cep);
      
    if (cep ! = null && cep !== ''){
     this.cepService.consultaCEP(cep)
     .subscribe(dados => this.populaDadosForm(dados, Object));
  }
 
  }
  populaDadosForm(dados: Object, Object: ObjectConstructor): void {
   this.formulario.patchValue({
      endereco: {
        rua: dados.logradouro,
        // cep: dados.cep,
        bairro: dados.bairro,
        estado: dados.uf
      }
    });
  }

  resetaDadosForm() {
    this.formulario.patchValue({
      endereco: {
        rua: null,
        complemento: null,
        bairro: null,
        estado: null
      }
    });
  }
  // populaDadosForm(form: Object, dados: Object) {
  //   // this.formulario.setValue({});

  //   this.formulario.patchValue({
  //     endereco: {
  //       rua: dados.logradouro,
  //       // cep: dados.cep,
  //       bairro: dados.bairro,
  //       estado: dados.uf
  //     }
  //   });
  // }


  }




