import { RouterModule, Routes } from '@angular/router';

import { MainLayoutComponent } from './layout.component';
import { MainDashboardComponent } from '../dashboard-Copy/dashboard.component';


import { PreviewComponent } from '../preview/preview.component';


const routes: Routes = [
  {
    path: 'Mainapp',
    component: MainLayoutComponent,
    children: [
        { path: 'preview',  data: {
          title: 'Preview'
        } ,children: [
          {
            path: ':id',
            component: PreviewComponent,
            data: {
              title: 'Preview'
            }
          },
        ]},
      { path: '', redirectTo: '/Mainapp/maindashboard', pathMatch: 'full' },
      { path: 'maindashboard', component: MainDashboardComponent },
      // { path: 'chart', loadChildren: '../charts/charts.module#ChartsModule' },
      // { path: 'ecommerce', loadChildren: '../ecommerce/ecommerce.module#ECommerceModule' },
      // { path: 'form', loadChildren: '../forms/forms.module#MyFormsModule' },
      // { path: 'page', loadChildren: '../pages/pages.module#PagesModule' },
      // { path: 'pglayout', loadChildren: '../page-layouts/page-layouts.module#PageLayoutsModule' },
      // { path: 'table', loadChildren: '../tables/tables.module#MyTablesModule' },
      // { path: 'ui', loadChildren: '../ui/ui.module#UIModule' },
    ]
  }
];

export const LayoutRoutingModule = RouterModule.forChild(routes);
