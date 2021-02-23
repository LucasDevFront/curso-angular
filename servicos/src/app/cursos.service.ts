import { Injectable } from '@angular/core';

import {LogService} from '../app/log.service'


@Injectable({
  providedIn: 'root'
})
export class CursosService { 
  

  private cursos: string[] = ['Angular java Python'];

  getCursos(){
    this.LogService.consoleLog('Obtendo lista de cursos');
    return this.cursos;
  }

  constructor(private LogService: LogService) {
    console.log('CursosService');
   }

  addCurso(curso:string){
    this.LogService.consoleLog('Criando um novo curso'+ curso);
    this.cursos.push(curso);
  }
}
