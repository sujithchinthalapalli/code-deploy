import { RouterModule, Routes } from '@angular/router';
import { billingComponent } from '../billing/billing.component';
import { LayoutComponent } from './layout.component';
import { DashboardComponent } from '../dashboard/dashboard.component';



const routes: Routes = [
  {
    path: 'app',
    component: LayoutComponent,
    children: [
 
      { path: '', redirectTo: '/app/dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent },
       { path: 'billing', component: billingComponent },
      { path: 'chart', loadChildren: '../charts/charts.module#ChartsModule' },
      { path: 'ecommerce', loadChildren: '../ecommerce/ecommerce.module#ECommerceModule' },
      { path: 'form', loadChildren: '../forms/forms.module#MyFormsModule' },
      { path: 'page', loadChildren: '../pages/pages.module#PagesModule' },

      { path: 'pglayout', loadChildren: '../page-layouts/page-layouts.module#PageLayoutsModule' },
      { path: 'table', loadChildren: '../tables/tables.module#MyTablesModule' },
      { path: 'ui', loadChildren: '../ui/ui.module#UIModule' },
    // { path: 'sidenv', loadChildren: '../sidenav/side.module#SideModule' },


    ]
  }
];

export const LayoutRoutingModule = RouterModule.forChild(routes);
