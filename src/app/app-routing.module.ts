import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

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
  { path: 'error', component: PageNotFoundComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'error' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
