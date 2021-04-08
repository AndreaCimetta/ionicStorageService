import {Component, OnInit} from '@angular/core';
import {StorageService} from '../storage-service.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit  {

  constructor(private storageService: StorageService) {

  }

  ngOnInit(){
    this.storageService.set('test1', 'test1');
    this.storageService.get('test').then((data) => {
      console.log(data);
    });
  }

}
