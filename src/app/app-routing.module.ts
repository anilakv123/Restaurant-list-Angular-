import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddRestuarantComponent } from './add-restuarant/add-restuarant.component';
import { DeleteRestuarantComponent } from './delete-restuarant/delete-restuarant.component';
import { RestuarantlistComponent } from './restuarantlist/restuarantlist.component';
import { UpdateRestuarantComponent } from './update-restuarant/update-restuarant.component';
import { ViewRestuarantComponent } from './view-restuarant/view-restuarant.component';

const routes: Routes = [
  //path for RestuarantlistComponent 
  {
    path:'',component:RestuarantlistComponent 
  },
  //path for ViewRestuarantComponent 
  {
    path:'view-restuarant/:id',component:ViewRestuarantComponent 
  },
  // path for AddRestuarantComponent
  {
    path:'Add-Restuarant',component:AddRestuarantComponent
  },
  {
  path:'Update-restuarant/:id',component:UpdateRestuarantComponent
  },
  //path for DeleteRestuarantComponent
  {
    path:'delete-restuarant/:id',component:DeleteRestuarantComponent

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
