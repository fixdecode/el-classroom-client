
import { ScrollToDirective } from '../helpers/scrollTo.directives';
import { WINDOW_PROVIDERS } from '../helpers/window.helpers';
import { NgModule } from '@angular/core';
// import { NgForm } from "@angular/forms";
import { CommonModule } from '@angular/common';
import { NguCarouselModule } from "@ngu/carousel";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home.component';
import { Intro1Component } from './components/intro1/intro1.component';;
import { WorksheetSectionComponent } from './components/workshts/worksheet-section.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { FooterComponent } from '../../../shared/footer/footer.component';
import { PptComponent } from './components/ppt/ppt.component';
import { FormsModule } from '@angular/forms';
import {WorksheetModule} from '../resource/worksheets/worksheet.module';
import {RouterModule} from '@angular/router';
import {PowerPointsModule} from '../resource/powerpoints/power-points.module';
import {HomeHeaderComponent} from '../../../shared/home-header/home-header.component';




@NgModule({
  imports: [
    CommonModule,
    NguCarouselModule,
    NgbModule,
    FormsModule,
    WorksheetModule,
    PowerPointsModule,
    RouterModule
  ],
  declarations: [
    HomeComponent,
    Intro1Component,
    WorksheetSectionComponent,
    ContactFormComponent,
    FooterComponent,
    PptComponent,
    ScrollToDirective,
    HomeHeaderComponent,
  ],
  exports: [
    FooterComponent,
    HomeHeaderComponent,
  ],
  providers: [WINDOW_PROVIDERS]
})
export class HomeModule {}
