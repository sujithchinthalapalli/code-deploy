import { NgModule } from '@angular/core';

import { SideRoutingModule } from './side-routing.module';
import { SideComponent } from '../sidenav/side.component';

@NgModule({
  imports: [
    SideRoutingModule,
  
  ],
  declarations: [
    SideComponent,
 

  ]
})

export class SideModule {}
