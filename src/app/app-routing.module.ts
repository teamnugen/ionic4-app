import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', loadChildren: './pages/home/home.module#HomePageModule' },
    { path: 'ionic-selectable', loadChildren: './pages/ionic-selectable/ionic-selectable.module#IonicSelectablePageModule' },
    { path: 'radio', loadChildren: './pages/radio/radio.module#RadioPageModule' },
    { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },
    { path: 'admin-dashboard', canActivate: [AuthGuard], loadChildren: './pages/admin-dashboard/admin-dashboard.module#AdminDashboardPageModule', data: {role: "ADMIN"}},
    { path: 'user-dashboard', canActivate: [AuthGuard], loadChildren: './pages/user-dashboard/user-dashboard.module#UserDashboardPageModule' },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }


/**
 * TIPS:
 * 1. Compare pre-loading strategies: PreloadAllModules vs. NoPreloading
 */
