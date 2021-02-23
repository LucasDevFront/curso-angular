import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-ajuda',
  templateUrl: './ajuda.component.html',
  styleUrls: ['./ajuda.component.css']
})
export class AjudaComponent implements OnInit {

  pagina:number;
  inscricao: Subscription;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.inscricao = this.route.queryParams.subscribe(
      (queryParams:any)=> {
        this.pagina = queryParams['pagina'];
      }
    )
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }

  proximaPagina() {
    this.router.navigate(['/ajuda'],
    {queryParams:{'pagina':++this.pagina}});
  }

}
