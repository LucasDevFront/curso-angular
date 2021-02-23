import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-campo-control',
  templateUrl: './campo-control.component.html',
  styleUrls: ['./campo-control.component.css']
})
export class CampoControlComponent implements OnInit {

  @Input() mostrarErro: boolean | undefined;
  @Input() msgErro: string | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
