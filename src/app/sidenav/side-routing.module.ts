import { RouterModule, Routes } from '@angular/router';

import { SideComponent } from '../sidenav/side.component';

const Sideroutes: Routes = [
    // {
    //     path: '',
       
    //     data: {
          
    //       title: 'side'
    //     },
    //     children: [
    //         { path: '', component:SideComponent },
           
    //     ]
    //   },
            { path: 'side', component: SideComponent },

 
];

export const SideRoutingModule = RouterModule.forChild(Sideroutes);






