import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  // { path: 'feature', loadChildren: () => import('./feature/feature.module').then(m => m.FeatureModule) },
  {path:'',redirectTo:'Home',pathMatch:'full'},
  {path:'Home',component:HomeComponent},
  {path:'About',component:AboutComponent},
  {path:'About/:id/:name',component:AboutComponent},
  // {path:'About', children:[
  //   {path:'About/:id',component:AboutComponent},
  //   {path:'About/:name', component:AboutComponent},
  // ]},
  {path:'Contact',component:ContactComponent},
  {path:'user',loadChildren:()=> import('./user/user.module').then(m=>m.UserModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
