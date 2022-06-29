import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ChartsComponent } from './components/charts/charts.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { SettingsComponent } from './components/settings/settings.component';
import { WrapperComponent } from './components/wrapper/wrapper.component';

const routes: Routes = [
    {
        path: '',
        component: WrapperComponent,
        children: [
            {
                path: 'dashboard', // localhost:4200/dashboard
                component: DashboardComponent,
            },
            {
                path: 'login', 
                component: LoginComponent,
            },
            {
                path: 'about',
                component: AboutComponent,
            },
            {
                path: 'settings',
                component: SettingsComponent,
            },
            {
                path: 'charts',
                component: ChartsComponent,
            },
            {
                path: 'portfolio',
                component: PortfolioComponent,
            }
        ]
    },
    {
        path: '**',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
