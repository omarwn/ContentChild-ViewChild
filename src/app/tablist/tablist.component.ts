import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tablist',
  templateUrl: './tablist.component.html',
  styleUrls: ['./tablist.component.css']
})
export class TablistComponent implements OnInit {
  tabList : Array<any> = []
  constructor() {
    this.tabList = [
      {title : 'first' , list : [1,2,3,4,5] , v : true},
      {title : 'second' , list : ['a','b','c','d','e'], v : true},
      {title : 'third' , list : ['omar','ahmed','fadi','saeid'], v : true}
    ]
   }

  ngOnInit() {
  }

}
