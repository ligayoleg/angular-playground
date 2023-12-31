import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParentComponent } from './sharing-data/components/parent/parent.component';
import { OfComponent } from './rxjs/components/of/of.component';
import { OperatorsComponent } from './rxjs/components/operators/operators.component';
import { HomeComponent } from './layout/home/components/home.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'parent', component: ParentComponent},
  {path: 'of', component: OfComponent},
  {path: 'operators', component: OperatorsComponent},
  {path: 'bestPractices', loadChildren: () => import('./best-practices/best-practices.module').then(m => m.BestPracticesModule)},
  {path: 'books', loadChildren: ()=> import('./books/books.module').then(m => m.BooksModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
