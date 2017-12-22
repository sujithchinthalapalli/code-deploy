import { RouterModule, Routes } from '@angular/router';

import { PreviewComponent } from '../preview/preview.component';

const Previewroutes: Routes = [
    {
        path: '',
       
        data: {
          
          title: 'preview'
        },
        children: [
            { path: '', component:PreviewComponent },
           
        ]
      }

 
];

export const PreviewRoutingModule = RouterModule.forChild(Previewroutes);






