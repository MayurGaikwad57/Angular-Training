import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { ContactComponent } from "./contact/contact.component";
import { ErrorComponent } from "./error/error.component";
import { UserModule } from "./user/user.module";

const appRoute: Routes = [
    // { path: '', redirectTo: 'Home', pathMatch: 'full' },
    // {path:' ',component:HomeComponent}
    { path: 'Home', component: HomeComponent },
    { path: 'About', component: AboutComponent },
    { path: 'Contact', component: ContactComponent },
    // User Module is lazy loaded
    {path:'user', loadChildren: () => import('./user/user.module').then(m => m.UserModule)},
    { path: '**', component: ErrorComponent }
]

@NgModule({
    imports: [RouterModule.forRoot(appRoute)],
    exports: [RouterModule]
})
export class AppRoutingModule {}