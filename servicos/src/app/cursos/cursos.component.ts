import { Component, OnInit } from '@angular/core';


import { CursosService } from '../cursos.service';


@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  curso: string[] = [];
  cursosService: any;
  // cursosService: CursosService;

  constructor(cursosService: CursosService) { 
    // this.cursosService = new CursosService
    // this.cursosService = cursosService; 
  }

  ngOnInit(): void {
    this.curso = this.cursosService.getCursos();

   
    

    
  }

}
