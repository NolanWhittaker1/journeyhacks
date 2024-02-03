import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { SettingsComponent } from './settings/settings.component';

const routes: Routes = [
  {path: 'main', component: MainComponent},
  {path: 'settings', component: SettingsComponent},
  {path: '', redirectTo:'/main', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

