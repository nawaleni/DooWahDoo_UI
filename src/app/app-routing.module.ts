import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'landing', loadChildren: './pages/landing/landing.module#LandingPageModule' },
  { path: 'login', loadChildren: './pages/auth/login/login.module#LoginPageModule' },
  { path: 'register', loadChildren: './pages/auth/register/register.module#RegisterPageModule' },
  { path: 'dashboard', loadChildren: './pages/dashboard/dashboard.module#DashboardPageModule' },
  { path: 'search', loadChildren: './pages/search/search.module#SearchPageModule' },
  { path: 'queue', loadChildren: './pages/queue/queue.module#QueuePageModule' },
  { path: 'user-profile', loadChildren: './pages/user-profile/user-profile.module#UserProfilePageModule' },
  { path: 'search-artist', loadChildren: './pages/search-artist/search-artist.module#SearchArtistPageModule' },
  { path: 'search-title', loadChildren: './pages/search-title/search-title.module#SearchTitlePageModule' },
  { path: 'search-result', loadChildren: './pages/search-result/search-result.module#SearchResultPageModule' },
  { path: 'search-genre', loadChildren: './pages/search-genre/search-genre.module#SearchGenrePageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
