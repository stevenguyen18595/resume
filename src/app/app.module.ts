import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { SidePannelComponent } from './side-pannel/side-pannel.component';
import { MainPannelComponent } from './main-pannel/main-pannel.component';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatChipsModule} from '@angular/material/chips';
import { HttpClientModule } from "@angular/common/http";
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    SidePannelComponent,
    MainPannelComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    MatListModule,
    MatChipsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private matIconRegistry:MatIconRegistry, private domSanitizer : DomSanitizer){
    this.matIconRegistry.addSvgIcon(
      'leet-code',
      this.domSanitizer.bypassSecurityTrustResourceUrl("../../assets/img/leetcode-white.svg")
    );

  }
 }
