import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CriarAnuncioPage } from './criar-anuncio.page';

const routes: Routes = [
  {
    path: '',
    component: CriarAnuncioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CriarAnuncioPageRoutingModule {}
