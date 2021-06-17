import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
    
      {
        
        path: 'meus-anuncios',
        children:[{
          path:'',
        loadChildren: () => import('../meus-anuncios/meus-anuncios.module').then(m => m.MeusAnunciosPageModule)
        }]
      },
      {
        path: 'anuncios',
        children:[{
          path:'',
          loadChildren: () => import('../anuncios/anuncios.module').then(m => m.AnunciosPageModule)
        }]
      },
      {
        
        path: 'criar-anuncio',
        children:[{
          path:'',
          loadChildren: () => import('../criar-anuncio/criar-anuncio.module').then(m => m.CriarAnuncioPageModule)
        }]
      }
    ]
  },
  {
    path:'',
    redirectTo:'/tabs/meus-anuncios',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
