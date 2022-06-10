import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationComponent } from './components/authentication/authentication.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { RacetrackDetailComponent } from './components/racetracks/racetrack-detail/racetrack-detail.component';
import { GuardGuard } from './guards/guard.guard';


const routes: Routes = [

  { path: 'auth', component: AuthenticationComponent},
  { path: 'home', component: HomeComponent,  canActivate: [GuardGuard]},
  { path: 'contact', component: ContactComponent,  canActivate: [GuardGuard]},

  {path: 'racetrack/:id', component: RacetrackDetailComponent, canActivate: [GuardGuard]},

  { path: '', pathMatch: 'full', redirectTo: '/auth' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
