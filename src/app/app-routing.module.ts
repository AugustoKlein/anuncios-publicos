import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: 'tabs',
  //   pathMatch: 'full'
  // },
  {
    path: '',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
 
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then( m => m.TabsPageModule)
  },
  
  // {
  //   path: 'anuncios',
  //   loadChildren: () => import('./anuncios/anuncios.module').then( m => m.AnunciosPageModule)
  // },
  // {
  //   path: 'meus-anuncios',
  //   loadChildren: () => import('./meus-anuncios/meus-anuncios.module').then( m => m.MeusAnunciosPageModule)
  // },
  // {
  //   path: 'criar-anuncio',
  //   loadChildren: () => import('./criar-anuncio/criar-anuncio.module').then( m => m.CriarAnuncioPageModule)
  // },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
