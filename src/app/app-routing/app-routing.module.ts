import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SheetComponent } from '../sheet/sheet.component';
import { FormComponent } from '../form/form.component';

const routes: Routes = [
  { path: 'sheet/:id', component: SheetComponent},
  { path: 'form', component: FormComponent}
]
@NgModule({
  declarations: [],
  imports: [CommonModule,RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
