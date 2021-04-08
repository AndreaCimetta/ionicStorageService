import { Component } from '@angular/core';
import {Platform} from '@ionic/angular';
import {StorageService} from './storage-service.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private platform: Platform, private storageService: StorageService) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.storageService.init();
    });
  }
}
