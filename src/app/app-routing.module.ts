import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { FormsExampleComponent } from './forms-example/forms-example.component';

const routes: Routes = [{path:'product', component: ProductComponent },
  { path: '', redirectTo: 'form', pathMatch: 'full' },
  { path: 'form', component: FormsExampleComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
