import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgZorroAntdModule, NZ_I18N, en_US } from 'ng-zorro-antd';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { TablistComponent } from './tablist/tablist.component';
import { TabComponent } from './tablist/tab/tab.component';
import { TabsComponent } from './tablist/tabs/tabs.component';
import { CollapseComponent } from './collapse/collapse.component';
import { ItemComponent } from './collapse/item/item.component';
import { ItemsComponent } from './collapse/items/items.component';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    TablistComponent,
    TabComponent,
    TabsComponent,
    CollapseComponent,
    ItemComponent,
    ItemsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    NgZorroAntdModule
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }
