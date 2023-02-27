import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPostFormComponent } from './components/add-post-form/add-post-form.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'add-post', component: AddPostFormComponent},
  {path: '**', redirectTo: '/'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
