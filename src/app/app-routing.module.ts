import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoviedetailsComponent } from './moviedetails/moviedetails.component';
import { MovielistComponent } from './movielist/movielist.component';

const routes: Routes = [
  {path:'', redirectTo:'/movies',pathMatch:'full'},
  {path: 'movies', component: MovielistComponent},
  {path: 'movie/:movieid', component: MoviedetailsComponent},





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
