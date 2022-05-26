import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorMaintenanceComponent } from './error-pages/error-maintenance/error-maintenance.component';
import { Error404Component } from './error-pages/error404/error404.component';
import { Error500Component } from './error-pages/error500/error500.component';

const routes: Routes = [
  //Route Path For The Default Page:
  { path: '', pathMatch: 'full', redirectTo: '' },
  
  //Route Path For The Public Module:
  {
    path: '', 
    loadChildren: () => import('./public/public.module').then(m => m.PublicModule)
  },

  //Route Path For The Secure Module:
  {
    path: 'dashboard', 
    loadChildren: () => import('./secure/secure.module').then(m => m.SecureModule)
  },

  //Route Path For The Error Page:
  { path: 'error-404', component: Error404Component },
  { path: 'error-500', component: Error500Component },
  { path: 'maintenance', component: ErrorMaintenanceComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'error-404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
