import { Component, OnInit, ViewChildren, QueryList, ElementRef } from '@angular/core';
import { ItemComponent } from '../item/item.component';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  tabList : Array<any> = []
  @ViewChildren('tab') tabs : QueryList<ElementRef>
  constructor() {
    this.tabList = [
      {title : 'first' , list : [1,2,3,4,5] , v : true},
      {title : 'second' , list : ['a','b','c','d','e'], v : true},
      {title : 'third' , list : ['omar','ahmed','fadi','saeid'], v : true}
    ]
   }

  ngOnInit() {
  }
  ngAfterViewInit() {
  this.tabs.forEach(e=>{
    e.nativeElement.hidden = true
  })
  this.tabs.first.nativeElement.hidden = false
  }

  changeCollapse(tab){
   this.tabs.forEach(e=>{
    if( e.nativeElement == tab){
      e.nativeElement.hidden = !e.nativeElement.hidden
    }else{
      e.nativeElement.hidden = true
    }
   })
  }

}
