import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';


const materialComponents = [
  MatButtonModule,
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
  MatCardModule,
  MatInputModule,
  MatToolbarModule,
  MatIconModule,
  MatDialogModule,
  MatFormFieldModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatRadioModule,
  MatSelectModule
]



@NgModule({
  declarations: [],
  imports: [materialComponents],
  exports:[materialComponents]
})
export class MaterialModule { }
