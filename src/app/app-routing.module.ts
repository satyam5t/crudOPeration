import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeleteComponent } from './Form/delete/delete.component';
import { EditComponent } from './Form/edit/edit.component';
import { FormComponent } from './form/form.component';
import { SaveComponent } from './Form/save/save.component';

const routes: Routes = [
  {path:"form",component:FormComponent},
  {path:"save",component:SaveComponent},
  {path:"delete",component:DeleteComponent},
  {path:"edit/:id",component:EditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
