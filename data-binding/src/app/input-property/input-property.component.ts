import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-curso',
  templateUrl: './input-property.component.html',
  styleUrls: ['./input-property.component.css']
  
})
export class InputPropertyComponent implements OnInit {


  @Input() 
  nomeCurso: string = ' Curso ';

  constructor() { }

  ngOnInit(): void {
  }

}
