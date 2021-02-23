import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

  pagina: number;
  inscricao: Subscription;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.inscricao = this.route.queryParams.subscribe(
      (queryParams: any) => {
           this.pagina = queryParams['pagina'];
      }
    )
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }

  proximaPagina() {
    // this.pagina++;

    this.router.navigate(['/produtos'],
    {queryParams: {'pagina': ++this.pagina}});
  }
}
