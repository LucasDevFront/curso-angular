import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateChild, RouterStateSnapshot } from '@angular/router';


@Injectable()
export class AlunosGuard implements CanActivateChild {

    canActivateChild(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
      ) : boolean  {

        if (state.url.includes('editar')){
        //     alert('Usuário não autorizado.');
        //     return false;
        }
          return true;
      }

}