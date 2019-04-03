import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FootsoldiersComponent } from './footsoldiers/footsoldiers.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { SoldierDetailComponent }  from './soldier-detail/soldier-detail.component';


const routes: Routes = [
  { path: 'footsoldiers', component: FootsoldiersComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: SoldierDetailComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
];

@NgModule({
  
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]

})

export class AppRoutingModule { }
