import { Component, OnInit, ContentChildren, Input } from '@angular/core';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css']
})
export class TabComponent implements OnInit {
  @Input()isVisibale : boolean
  @Input("title") title :string
  constructor() { }

  ngOnInit() {
  }
  visiable(){
    this.isVisibale = !this.isVisibale
  }
}
