import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovielistComponent } from './movielist/movielist.component';

const routes: Routes = [
  {path:'', redirectTo:'/movies',pathMatch:'full'},
  {path: 'movies', component: MovielistComponent},
  {path: 'movie/:movieid', component: MovielistComponent},





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
