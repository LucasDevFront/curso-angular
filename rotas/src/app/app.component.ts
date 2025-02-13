import { Component } from '@angular/core';
import { AuthService } from './login/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  [x: string]: any;
  title = 'rotas';

  mostrarMenu: boolean = false;
  

  constructor(private authService: AuthService) {

  }

  ngOnInit(){
    
    this.authService.mostrarMenuEmitter.subscribe(
      (     mostrar: boolean) => {
        
        this.mostrarMenu = mostrar}

    );


  }
}
