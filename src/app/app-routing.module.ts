import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CampaignComponent } from './campaign/campaign.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { TemplateComponent } from './template/template.component';

const routes: Routes = [
  { path: '', component: DashboardComponent},
  { path: 'campaign', component: CampaignComponent},
  { path: 'login', component: LoginComponent},
  { path: 'template', component: TemplateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
