import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InterfaceComponent } from './interface/interface.component';

const routes: Routes = [
  {path:'',component:InterfaceComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
