import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exemplo-pipes',
  templateUrl: './exemplo-pipes.component.html',
  styleUrls: ['./exemplo-pipes.component.css']
})
export class ExemploPipesComponent implements OnInit {

  livro: any = {
   titulo: 'Bio Led Zeppelin',
   rating: 4.896,
   numeroPaginas: 800,
   preco: 44.99,
   dataLancamento: new Date(2016,5,17)
};

  constructor() { }

  ngOnInit(): void {
  }

}
