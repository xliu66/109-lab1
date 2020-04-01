import { ShareService } from './../services/share.service';
import { DataService } from './../services/data.service';
import { Component } from '@angular/core';
import {Message} from '../models/message';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  allMessages : Message[] = [];
  constructor(private data : DataService, private shared: ShareService) {
    // get data
    data.getAllMessages().subscribe(list =>{
      console.log("messages",list);
      this.allMessages = list.filter(m => m.to == "Everyone" || m.to == shared.userName || m.from == shared.userName);
    });
  }

}


