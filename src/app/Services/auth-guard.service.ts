import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import { map } from 'rxjs/operators';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuardService implements CanActivate{

  constructor(private auth:AuthService, private router:Router) { }

  //canActiveate takes route and sate as param 
  canActivate(route: ActivatedRouteSnapshot, state:RouterStateSnapshot) {
    
    return  this.auth.user$.pipe(map(user=>{
       if(user) return true;
       this.router.navigate(['/login'],{queryParams:{returnUrl:state.url}});
       return false;
     }))
  
  }
}
