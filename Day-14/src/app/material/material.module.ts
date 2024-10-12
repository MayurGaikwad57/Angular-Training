import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';

const materialsComponents = [
  MatButtonModule,
  MatToolbarModule
]


@NgModule({
 imports: [materialsComponents],
 exports: [materialsComponents]
})
export class MaterialModule { }
