import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'character-collection',
    pathMatch: 'full'
  },
  {
    path: 'character-collection',
    loadChildren: () => import('./character-collection/character-collection.module').then( m => m.CharacterCollectionPageModule)
  },
  {
    path: 'character',
    loadChildren: () => import('./character/character.module').then( m => m.CharacterPageModule)
  },
  {
    path: 'episode',
    loadChildren: () => import('./episode/episode.module').then( m => m.EpisodePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
