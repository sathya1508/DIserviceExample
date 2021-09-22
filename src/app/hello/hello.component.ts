import { Component, OnInit } from '@angular/core';

import { DataService } from '../data.service'

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css'],
  providers:[DataService]
})
export class HelloComponent implements OnInit {

  constructor(private data:DataService) { }

  ngOnInit() {
  }

  IncreaseCount():void
  {
    this.data.count++;
    
  }

}
