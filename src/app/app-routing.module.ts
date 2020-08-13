import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomesComponent } from './homes/homes.component';


const routes: Routes = [
   {path:'',redirectTo:'homes',pathMatch:'full'},
   {path:'homes',component:HomesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
