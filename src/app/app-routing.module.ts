import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ProfileComponent } from './profile/profile.component';
import { ArticleComponent } from './article/article.component';
import { ArticlesComponent } from './articles/articles.component';
import { EditComponent } from './edit/edit.component';
import { CreateComponent } from './create/create.component';
import { GuardGuard } from './guards/guard.guard';

const routes: Routes = [
  {path: '', component: ArticlesComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'login', component: LoginComponent},
  {path: 'article/:title', component: ArticleComponent},
  {path: 'profile/:email', component: ProfileComponent, canActivate: [GuardGuard]},
  {path: 'create/:email', component: CreateComponent, canActivate: [GuardGuard]},
  {path: 'edit/:email/:title', component: EditComponent, canActivate: [GuardGuard]},
  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
