import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MovieHomeComponent } from './movie-home/movie-home.component';
import { MovieReviewComponent } from './movie-review/movie-review.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [
  {path:'',redirectTo:'signup',pathMatch:'full'},

  {path:'signup',component:SignUpComponent},
  {path:'login',component:LoginComponent},
  // {path:'login/:obj1',component:LoginComponent},
  {path:'Home/:profile',component:MovieHomeComponent},
  // {path:'Home/:obj1',component:MovieHomeComponent},
  {path:'Review',component:MovieReviewComponent},
  
  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
