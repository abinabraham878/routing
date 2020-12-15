import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';
import { AdminComponent} from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ReactiveComponent } from './reactive/reactive.component';

const routes: Routes = [
  {
    path:'user',
    component:UserComponent
  },
  {
    path:'admin',
    component:AdminComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'register',
    component:RegisterComponent
  },
  {
    path:'reactive',
    component:ReactiveComponent
  },
  {
    path:'**',
    component:PagenotfoundComponent
  }
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
