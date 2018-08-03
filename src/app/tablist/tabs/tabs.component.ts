import { Component, OnInit, ContentChildren, QueryList, AfterContentInit } from '@angular/core';
import { TabComponent } from '../tab/tab.component';
import { isTemplateRef } from '../../../../node_modules/ng-zorro-antd/src/core/util/check';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit,AfterContentInit {
  @ContentChildren(TabComponent) tabs : QueryList<TabComponent>
  constructor() { }

  ngOnInit() {
    
  }
  ngAfterContentInit() {
  let isV = this.tabs.filter((item)=>{
    return !item.isVisibale
  })
  
  if(isV.length == 0){
    this.tabs.first.visiable()
  }
  }

  toggleV(tab:TabComponent){
    this.tabs.forEach(tab=>{
      if(!tab.isVisibale){
        tab.visiable()
      }
    })
    tab.visiable()
  }
}
