import { Component, OnInit } from '@angular/core';
import { APPCONFIG } from '../../config';

@Component({
  selector: 'my-mainapp-header',
  styles: [],
  templateUrl: './header.component.html'
})

export class MainAppHeaderComponent implements OnInit {
  public AppConfig: any;

  ngOnInit() {
    this.AppConfig = APPCONFIG;
  }
}
