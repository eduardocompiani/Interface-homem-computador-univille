import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './views/login/login.component';
import { MainComponent } from './views/main/main.component';
import { RegisterComponent } from './views/register/register.component';
import { HomeComponent } from './views/home/home.component';
import { ProjectsToSponsorComponent } from './views/projects-to-sponsor/projects-to-sponsor.component';
import { DetailOfProjectToSponsorComponent } from './views/detail-of-project-to-sponsor/detail-of-project-to-sponsor.component';
import { CreateProjectComponent } from './views/create-project/create-project.component';
import { MyProjectsComponent } from './views/my-projects/my-projects.component';
import { DetailOfProjectComponent } from './views/detail-of-project/detail-of-project.component';
import { SponsorsComponent } from './views/sponsors/sponsors.component';
import { FilesComponent } from './views/files/files.component';


const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'home', component: HomeComponent},
  {path: 'projects-to-sponsor', component: ProjectsToSponsorComponent},
  {path: 'detail-of-project-to-sponsor/:id', component: DetailOfProjectToSponsorComponent},
  {path: 'detail-of-project/:id', component: DetailOfProjectComponent},
  {path: 'create-project', component: CreateProjectComponent},
  {path: 'my-projects', component: MyProjectsComponent},
  {path: 'my-sponsors', component: SponsorsComponent},
  {path: 'validated', component: FilesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
